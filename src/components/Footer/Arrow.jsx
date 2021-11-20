// import { useEffect, useState } from 'react';
import arrowImg from '../../media/up-arrow-icon.png'

const Arrow = () => {

    // const [visible, setVisible] = useState (false);

    // const visibility = () => {
    //     if (document.documentElement.scrollTop > 5) {
    //         setVisible(true);
    //     } else {
    //         setVisible(false);
    //     }
    // }

    // useEffect (() => {
    //     window.addEventListener("scroll", visibility)
    // }, []);


    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        })
    };



    return (
        <img className="arrow-up" src={arrowImg} alt="arrow up" onClick={scrollUp}/>

        /* <div>
        {visible && (<img className="arrow-up" src={arrowImg} alt="arrow up" onClick={scrollUp}/>)}
        </div> */
    );

}

export default Arrow
