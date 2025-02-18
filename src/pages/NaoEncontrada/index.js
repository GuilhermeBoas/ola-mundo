import styles from './NaoEncontrada.module.css'
import erro404 from '../../assets/erro_404.png'
import BotaoPrincipal from '../../Componentes/BotaoPrincipal'
import { useNavigate } from 'react-router'

export default function NaoEncontrada() {
    const navegar = useNavigate();    
    return (
        <>
            <div className={styles.conteudoContainer}>
                <span className={styles.texto404}>404</span>

                <h1 className={styles.titulo}>
                    Ops! Pagina não encontrada.
                </h1>

                <p className={styles.paragrado}>
                    Tem certeza de que era isso que você estava procurando?
                </p>
                <p className={styles.paragrado}>
                    Aguarde uns instantes e recarregue a página, ou volte para a página inicial.
                </p>

                <div className={styles.botaoContainer} onClick={()=>navegar(-1)}>
                    <BotaoPrincipal tamanho='lg'>
                        Voltar
                    </BotaoPrincipal>
                </div>

                <img className={styles.imagemCachorro} src={erro404} alt='Carchorro de óculos' />
            </div>

            <div className={styles.espacoEmBranco} />

        </>

    )
}