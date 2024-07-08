import bookmark from "../img/bookmark.png"
import cart from "../img/cart.png"

const Header = () => {
    return (
        <>
            <header className="header">
                <h1 className="header__primary">Romekan</h1>
                `<nav className="header__nav">
                    <ul className="header__list">
                        <li className="header__list--item"><a className="header__list--link" href="##">Home</a></li>
                        <li className="header__list--item"><a className="header__list--link" href="##">Shop off</a></li>
                        <li className="header__list--item"><a className="header__list--link" href="##">Contact us</a></li>
                    </ul>
                </nav>
                <div className="header__icons">
                    <a href="##"><img src={bookmark} alt="" className="header__icons-bookmark" /></a>
                    <a href="##"><img src={cart} alt="" className="header__icons--cart" /></a>
                </div>`
            </header>
            <h3 className="header__text">Welcome to our furniture collection, where style meets comfort and quality</h3>
        </>
    )
}

export default Header