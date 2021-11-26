import './Footer.css'
import logo_facebook from '../../assets/facebook-icon.png'
import logo_instagram from '../../assets/instagram-icon.png'
import logo_twitter from '../../assets/twitter-icon.png'

const Footer = () => {

    return (
        <>
        <footer className="footer">
            <div className="soMeIcons">
                <a href="https://www.facebook.com">
                    <img src={logo_facebook} alt="logo facebook" />
                </a>
                <a href="https://www.instagram.com">
                    <img src={logo_instagram} alt="logo instagram" />
                </a>
                <a href="https://www.twitter.com">
                    <img src={logo_twitter} alt="logo twitter" />
                </a>
            </div>
            <p>© 2021 Un lugar de pelicula, todos los derechos reservados.</p>
            <p>Realizado por <a href="https://melinacorbalan.github.io/my-portfolio/" style={{ color: 'white' }} target="_blank" rel="noopener noreferrer">Melina Corbalán</a>
            </p>
        </footer>
        </>
    )
}

export default Footer
