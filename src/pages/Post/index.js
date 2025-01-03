import { Route, Routes, useParams } from "react-router";
import posts from '../../json/posts.json';
import PostModelo from "../../Componentes/PostModelo";
import Markdown from "react-markdown";
import NaoEncontrada from "../NaoEncontrada";
import './Post.css';
import PaginaPadrão from "../../Componentes/PaginaPadrao";
import PostCard from '../../Componentes/PostCard'


export default function Post() {
    const parametros = useParams();

    const post = posts.find((post) => {
        return post.id === Number(parametros.id)
    })

    if (!post) {
        return <NaoEncontrada />
    }

    const postsRecomendados = posts
        .filter((post) => post.id !== Number(parametros.id))
        .sort((a, b) => b.id - a.id)
        .slice(0, 4)

    return (
        <Routes>
            <Route path="*" element={<PaginaPadrão />}>
                <Route index element={
                    <PostModelo
                        fotoCapa={`/assets/posts/${post.id}/capa.png`}
                        titulo={post.titulo}
                    >
                        <div className="post-markdown-container">
                            <Markdown>
                                {post.texto}
                            </Markdown>
                        </div>

                        <h2 className='tituloOutrosPosts'>
                            Outros posts que voce pode gostar
                        </h2>

                        <ul className="postsRecomendados">
                            {postsRecomendados.map(post => 
                            <li key={post.id}>
                                <PostCard post={post}/>
                            </li>)}
                        </ul>

                    </PostModelo>
                } />
            </Route>
        </Routes>

    )
}