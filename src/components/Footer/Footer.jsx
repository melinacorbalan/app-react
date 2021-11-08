
const Footer = () => {

    let style = {
        backgroundColor: 'black',
        textAlign: 'center',
        color: 'white',
        height: '100%',
    };

    return (
        <footer className="footer" style={style}>
            <p>© 2021 Un lugar de pelicula, todos los derechos reservados.</p>
            <p>Realizado por <a href="https://melinacorbalan.github.io/my-portfolio/" style={{ color: 'white' }} target="_blank" rel="noopener noreferrer">Melina Corbalán</a>
            </p>
        </footer>
    )
}

export default Footer
