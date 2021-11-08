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
                        <a href=".">Europa</a>
                    </li>
                    <li>
                        <a href=".">Estados Unidos</a>
                    </li>
                    <li>
                        <a href=".">Nueva Zelanda</a>
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
