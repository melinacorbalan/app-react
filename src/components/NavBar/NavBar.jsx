import CartWidget from './CartWidget'
import './NavBar.css'
import logo from '../../media/logo.png'

const NavBar = () => {

    return (
        <header>
            <div className="title">
                <img src={logo} alt="logo branding" />
                <h1>Un lugar de pelicula</h1>
            </div>
            <nav className="navBar">
                <ul>
                    <li>
                        <a href=".">Home</a>
                    </li>
                    <li>
                        <a href=".">Peliculas</a>
                    </li>
                    <li>
                        <a href=".">Locaciones</a>
                    </li>
                    <li>
                        <a href=".">Tours</a>
                    </li>
                    <li>
                        <a href=".">Contacto</a>
                    </li>
                    <a href=".">
                        <CartWidget />
                    </a>
                </ul>
            </nav>
        </header>

    )
}

export default NavBar
