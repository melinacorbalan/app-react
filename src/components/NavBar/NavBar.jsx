
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import CartWidget from '../helpers/CartWidget'
import { useCartContext } from '../../context/cartContext'
import { Badge, Container, Nav, Navbar } from 'react-bootstrap'

const NavBar = () => {

    const { cartList } = useCartContext()

    return (
        <header>
            <div className="title">
                <Link to="/unlugardepelicula">
                    <img src={logo} alt="logo branding" />
                </Link>
                <h1>Un lugar de pelicula</h1>
            </div>

            <Navbar collapseOnSelect sticky="top" expand='md'>
                <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                <Navbar.Collapse id='responsive-navbar-nav'>
                <Container>
                    <Nav id="navBar">
                        <Nav.Link as={Link} to="/unlugardepelicula" eventKey="home" >Home</Nav.Link>
                        <Nav.Link as={Link} to="/tours" eventKey="tours">Tours</Nav.Link>
                        <Nav.Link as={Link} to="/categorias/peliculas" eventKey="peliculas">Peliculas</Nav.Link>
                        <Nav.Link as={Link} to="/categorias/series" eventKey="series">Series</Nav.Link>
                        <Nav.Link as={Link} to="/contact" eventKey="contacto">Contacto</Nav.Link>
                        <Nav.Link as={Link} to="/cart" eventKey="cart">{<CartWidget />}</Nav.Link>
                        {cartList.length > 0 && <Badge bg="warning">{cartList.length}</Badge>}
                    </Nav>
                    </Container>
                </Navbar.Collapse>
            </Navbar>
        </header>

    )
}

export default NavBar
