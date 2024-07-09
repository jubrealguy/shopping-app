import { useState } from "react";
import down from "../img/chevron-down.png"
import Chairs from "./Chairs";

const Main = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeItem, setActiveItem] = useState('Chairs');
    const [activeIndex, setActiveIndex] = useState(0);

  const handleIndexClick = (index) => {
    setActiveIndex(index);
  };

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
                        <li className={activeIndex === 0 ? 'section__nav--list-first active' : 'section__nav--list-first'} onClick={() => handleIndexClick(0)} >
                            Chairs
                        </li>
                        <li className={activeIndex === 1 ? 'active' : ''} onClick={() => handleIndexClick(1)} >
                            Bed
                        </li>
                        <li className={activeIndex === 2 ? 'active' : ''} onClick={() => handleIndexClick(2)} >
                            Dining set
                        </li>
                        <li className={activeIndex === 3 ? 'active' : ''} onClick={() => handleIndexClick(3)} >
                            TV console
                        </li>
                    </ul>

                    <ul className="section__nav--list-mobile">
                        <li className="section__nav--list-first" onClick={toggleDropdown}>
                        <span>{activeItem}</span><img src={down} alt="" />
                        </li>
                        {isOpen && (
                        <>
                            <li onClick={() => handleItemClick('Chairs')}>Chairs</li>
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
                <Chairs />
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