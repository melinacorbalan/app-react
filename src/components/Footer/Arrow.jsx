import arrowImg from '../../media/up-arrow-icon.png'

const Arrow = () => {


    const show_arrow = () => {
        if (document.documentElement.scrollTop > 30) {
            console.log("HOLA");
        } else {
            console.log("CHAU");
        }
    }

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        })
    };


    window.onscroll = function () { show_arrow() }


    return (
        <img className="arrow-up" src={arrowImg} alt="arrow up" onClick={scrollUp} />
    )

}

export default Arrow

