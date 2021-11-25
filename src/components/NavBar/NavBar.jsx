
import logo from '../../media/logo.png'
import { Link, NavLink } from 'react-router-dom'
import CartWidget from './CartWidget'

const NavBar = () => {

    return (
        <header>
            <div className="title">
            <Link to="/">
            <img src={logo} alt="logo branding" />
            </Link>
            <h1>Un lugar de pelicula</h1>
            </div>
            <nav className="navBar">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/tours">Tours</NavLink>
                <NavLink to="/categorias/peliculas">Peliculas</NavLink>
                <NavLink to="/categorias/series">Series</NavLink>
                <NavLink to="/contact">Contacto</NavLink>
                <NavLink to="/cart">{<CartWidget />}</NavLink>
            </nav>
        </header>

    )
}

export default NavBar
