import { Outlet } from "react-router";
import Banner from "../Banner";

export default function PaginaPadrão(){
    return(
        <main>
            <Banner/>
            {/* Renderizar conteudo da rota aqui... */}

            <Outlet/>
            
        </main>
    )
}