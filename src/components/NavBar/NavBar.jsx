
import './NavBar.css'
import logo from '../../media/logo.png'
import { NavLink } from 'react-router-dom'
import CartWidget from './CartWidget'

const NavBar = () => {

    return (
        <header>
            <div className="title">
                <img src={logo} alt="logo branding" />
                <h1>Un lugar de pelicula</h1>
            </div>
            <nav className="navBar">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/peliculas">Peliculas</NavLink>
                <NavLink to="/locaciones">Locaciones</NavLink>
                <NavLink to="/tours">Tours</NavLink>
                <NavLink to="/contact">Contacto</NavLink>
                <NavLink to="/cart">{<CartWidget />}</NavLink>
            </nav>
        </header>

    )
}

export default NavBar
