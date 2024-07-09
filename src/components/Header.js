import bookmark from "../img/bookmark.png"
import cart from "../img/cart.png"
import { Link } from "react-router-dom";
import ham from "../img/menu.png"
import { useState } from "react";

const Header = () => {
    const [clickedNav, setclickedNav] = useState(false);
    
    const clickHam = (e) => {
        e.preventDefault();
        setclickedNav(!clickedNav);
    }

    const nav = (
        <ul className="header__list-mobile" onClick={clickHam}>
                <li className="header__list--item-mobile"><a className="header__list--link-mobile" href="##">Home</a></li>
                <li className="header__list--item-mobile"><a className="header__list--link-mobile" href="##">Shop off</a></li>
            <li className="header__list--item-mobile"><a className="header__list--link-mobile" href="##">Contact us</a></li>
        </ul>
    )
       
    return (
        <>
            <header className="header">
                <h1 className="header__primary"><Link to='/'>Rome<span>kan</span></Link></h1>
                <nav className="header__nav">
                    <ul className="header__list">
                        <li className="header__list--item"><a className="header__list--link" href="##">Home</a></li>
                        <li className="header__list--item"><a className="header__list--link" href="##">Shop off</a></li>
                        <li className="header__list--item"><a className="header__list--link" href="##">Contact us</a></li>
                    </ul>
                </nav>
                <div className="header__icons">
                    <Link to="/"><img src={bookmark} alt="" className="header__icons--bookmark" /></Link>
                    <Link to="/cart"><img src={cart} alt="" className="header__icons--cart" /></Link>
                    <Link to="/"><img src={ham} alt="" className="header__icons--hamburger" onClick={clickHam} /></Link>
                </div>
                {clickedNav && nav}
            </header>
        </>
    )
}

export default Header