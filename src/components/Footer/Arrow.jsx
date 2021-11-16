import arrow from '../../media/up-arrow-icon.png'


const Arrow = () => {

    const ScrollUp = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        })
    };

    // ESTO LO TENÍA EN JS, ALGUNA IDEA COMO HACERLO CON RCT?


    // const show_arrow = () => {
    //     if (document.documentElement.scrollTop > 30) {
    //         display block
    //     } else {
    //         display none
    //     }
    // }

    // window.onscroll = function () {show_arrow()}



    return (

        <img className="arrow-up" src={arrow} alt="arrow up" onClick={ScrollUp} />
    )

}

export default Arrow
