import chairs from "../data/data"
import add_cart from "../img/add_cart.png"
import { useState } from "react";
import down from "../img/chevron-down.png"

const Main = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeItem, setActiveItem] = useState('Chairs');

        const toggleDropdown = () => {
            setIsOpen(!isOpen);
        }

        const handleItemClick = (item) => {
            setActiveItem(item);
            setIsOpen(false);
          };

    return (
        <div>
            <h3 className="header__text">Welcome to our furniture collection, where style meets comfort and quality</h3>
            <section className="section">
                <div className="section__nav">
                    <ul className="section__nav--list">
                        <li className="section__nav--list-first">Chairs</li>
                        <li>Bed</li>
                        <li>Dining set</li>
                        <li>TV console</li>
                    </ul>

                    <ul className="section__nav--list-mobile">
                        <li className="section__nav--list-first" onClick={toggleDropdown}>
                        <span>{activeItem}</span><img src={down} alt="" />
                        </li>
                        {isOpen && (
                        <>
                            <li onClick={() => handleItemClick('Bed')}>Chairs</li>
                            <li onClick={() => handleItemClick('Bed')}>Bed</li>
                            <li onClick={() => handleItemClick('Dining set')}>Dining set</li>
                            <li onClick={() => handleItemClick('TV console')}>TV console</li>
                        </>
                        )}
                    </ul>
                    <div>
                        <a href="##" className="section__link">Sort by</a>
                    </div>
                </div>
                <div className="section__chairs">
                    {chairs.map((chair, index) => {
                        return (
                            <div key={index} className="card">
                                <img src={chair.img} alt="" className="card-img" />
                                <p className="card-title">{chair.title}</p>
                                <div className="card-price">
                                    <p>
                                        <span className="card-price-1">${chair.price1}</span>
                                        <span className="card-price-2">${chair.price2}</span>
                                    </p>
                                    <img src={add_cart} alt="" className="card-carting"/>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <ul className="section__pages">
                    <li className="section__pages-1">1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                </ul>
            </section>
        </div>
    )
}

export default Main