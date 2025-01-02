import { Link, useLocation } from 'react-router'
import styles from './MenuLink.module.css'


export default function MenuLink({ children, to }) {
    const localizacao = useLocation().pathname;

    return (
        <Link className={`
            ${styles.link} 
            ${localizacao === to ? styles.linkDestacado : ''}`} to={to}>
            {children}
        </Link>
    )
// trocar o Link para o NavLink
//https://cursos.alura.com.br/course/React-desenvolvendo-react-router-javaScript/task/112284
}