import cart from "../img/cart.png"
import { Link } from "react-router-dom";
import ham from "../img/menu.png"
import { useState, useContext } from "react";
import x from "../img/x.png"
import NumContext from './NumContext';

const Header = () => {
    const { num } = useContext(NumContext);
    const [clickedNav, setclickedNav] = useState(false);
    const [imageSrc, setImageSrc] = useState(ham);
    const [activeIndex, setActiveIndex] = useState(0);
    

    const clickHam = (e) => {
        e.preventDefault();
        setclickedNav(!clickedNav);
        setImageSrc(clickedNav ? ham : x);
    }

    const handleIndexClick = (index) => {
        setActiveIndex(index);
    };

    const nav = (
        <ul className="header__list-mobile">
            <li className="header__list--item-mobile" onClick={clickHam}><Link to="/" className="header__list--link-mobile">Home</Link></li>
            <li className="header__list--item-mobile" onClick={clickHam}><Link to="/" className="header__list--link-mobile">Shop All</Link></li>
            <li className="header__list--item-mobile" onClick={clickHam}><Link to="/" className="header__list--link-mobile">Contact us</Link></li>
        </ul>
    )
       
    return (
        <>
            <header className="header">
                <h1 className="header__primary"><Link to='/'>Rome<span>kan</span></Link></h1>
                <nav className="header__nav">
                    <ul className="header__list">
                        <li className='header__list--item'><Link to="/" className={activeIndex === 0 ? 'header__list--link active' : 'header__list--link'} onClick={() => handleIndexClick(0)}>Home</Link></li>
                        <li className='header__list--item'><Link to="/" className={activeIndex === 1 ? 'header__list--link active' : 'header__list--link'} onClick={() => handleIndexClick(1)}>Shop off</Link></li>
                        <li className='header__list--item'><Link to="/" className={activeIndex === 2 ? 'header__list--link active' : 'header__list--link'} onClick={() => handleIndexClick(2)}>Contact us</Link></li>
                    </ul>
                </nav>
                <div className="header__icons">
                    <Link to="/cart" className="header__icons--cart">
                        <img src={cart} alt="" />
                        <span>{num}</span>
                    </Link>
                    <Link to="/"><img src={imageSrc} alt="" className="header__icons--hamburger" onClick={clickHam} /></Link>
                </div>
                {clickedNav && nav}
            </header>
        </>
    )
}

export default Header