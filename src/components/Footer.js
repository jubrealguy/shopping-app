import instagram from "../img/instagram.png"
import twitter from "../img/twitter.png"
import tiktok from "../img/tiktok.png"

const Footer = () => {
    return (
        <div className="footing">
            <h2 className="footer__heading">Romekan</h2>
            <footer className="footer">
                <div className="footer__box1">
                    <p className="footer__text">2024 Romekan Furnitures . All Rights Reserved</p>
                    <div className="footer__socials">
                        <img src={tiktok} alt="" />
                        <img src={instagram} alt="" />
                        <img src={twitter} alt="" />
                    </div>
                </div>
                <ul className="footer__list">
                    <li>Home</li>
                    <li>Collections</li>
                    <li>Brand</li>
                    <li>About us</li>
                </ul>
                <ul className="footer__list">
                    <li>Contact us</li>
                    <li>525-252-4244</li>
                    <li>sehlvet@gmail.com</li>
                    <li>www.selvet.com</li>
                </ul>
            </footer>
        </div>
    )
}

export default Footer