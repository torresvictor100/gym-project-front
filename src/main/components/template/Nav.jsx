import './Nav.css'
import { Link } from 'react-router-dom'

export default props =>


    <aside className='menu-area'>
        <nav className='menu'>
            <Link to="/">
                <i className="fa fa-home">Início</i>
            </Link>
            <Link to="/login">
                <i class="fa fa-money-bill-1">Login</i>
            </Link>
            <Link to="/query">
                <i class="fa fa-money-bill-1">Consulta Aluno</i>
            </Link>
            <Link to="/register">
                <i class="fa fa-money-bill-1">Cadastra Aluno</i>
            </Link>
            <Link to="/allregister">
                <i class="fa fa-money-bill-1">Consulta Todos os Aluno</i>
            </Link>
        </nav>
    </aside>