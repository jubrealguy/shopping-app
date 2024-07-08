import bookmark from "../img/bookmark.png"
import cart from "../img/cart.png"
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>
            <header className="header">
                <h1 className="header__primary"><Link to='/'>Rome<span>kan</span></Link></h1>
                `<nav className="header__nav">
                    <ul className="header__list">
                        <li className="header__list--item"><a className="header__list--link" href="##">Home</a></li>
                        <li className="header__list--item"><a className="header__list--link" href="##">Shop off</a></li>
                        <li className="header__list--item"><a className="header__list--link" href="##">Contact us</a></li>
                    </ul>
                </nav>
                <div className="header__icons">
                    <Link to="/"><img src={bookmark} alt="" className="header__icons-bookmark" /></Link>
                    <Link to="/cart"><img src={cart} alt="" className="header__icons--cart" /></Link>
                </div>
            </header>
            <h3 className="header__text">Welcome to our furniture collection, where style meets comfort and quality</h3>
        </>
    )
}

export default Header