import bookmark from "../img/bookmark.png"
import cart from "../img/cart.png"
import { Link } from "react-router-dom";
import ham from "../img/menu.png"
import { useState } from "react";
import x from "../img/x.png"

const Header = () => {
    const [clickedNav, setclickedNav] = useState(false);

    const clickHam = (e) => {
        e.preventDefault();
        setclickedNav(!clickedNav);
    }

    const nav = (
        <ul className="header__list-mobile">
            <img src={x} alt="" onClick={clickHam} />
            <li className="header__list--item-mobile" onClick={clickHam}><Link to="/" className="header__list--link-mobile">Home</Link></li>
            <li className="header__list--item-mobile" onClick={clickHam}><Link className="header__list--link-mobile">Shop All</Link></li>
            <li className="header__list--item-mobile" onClick={clickHam}><Link to="/cart" className="header__list--link-mobile">My Order</Link></li>
        </ul>
    )
       
    return (
        <>
            <header className="header">
                <h1 className="header__primary"><Link to='/'>Rome<span>kan</span></Link></h1>
                <nav className="header__nav">
                    <ul className="header__list">
                        <li className="header__list--item"><Link to="/" className="header__list--link">Home</Link></li>
                        <li className="header__list--item"><Link className="header__list--link">Shop off</Link></li>
                        <li className="header__list--item"><Link to="/cart" className="header__list--link">My Order</Link></li>
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