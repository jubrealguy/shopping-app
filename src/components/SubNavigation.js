import { useState, React } from "react";
import down from "../img/chevron-down.png"
import { Link } from "react-router-dom";

const SubNavigation = () => {

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
        <div className="section__nav">
            <ul className="section__nav--list">
                <li className={activeIndex === 0 ? 'active' : ''} onClick={() => handleIndexClick(0)} >
                    <Link to="">Chairs</Link>
                </li>
                <li className={activeIndex === 1 ? 'active' : ''} onClick={() => handleIndexClick(1)} >
                    <Link to="bed">Bed</Link>
                </li>
                <li className={activeIndex === 2 ? 'active' : ''} onClick={() => handleIndexClick(2)} >
                    <Link>Dining set</Link>
                </li>
                <li className={activeIndex === 3 ? 'active' : ''} onClick={() => handleIndexClick(3)} >
                    <Link>TV console</Link>
                </li>
            </ul>

            <ul className="section__nav--list-mobile">
                <li className="section__nav--list-first" onClick={toggleDropdown}>
                <span>{activeItem}</span><img src={down} alt="" />
                </li>
                {isOpen && (
                <>
                    <li onClick={() => handleItemClick('Chairs')}><Link to="">Chairs</Link></li>
                    <li onClick={() => handleItemClick('Bed')}><Link to="bed">Bed</Link></li>
                    <li onClick={() => handleItemClick('Dining set')}><Link>Dining set</Link></li>
                    <li onClick={() => handleItemClick('TV console')}><Link>TV console</Link></li>
                </>
                )}
            </ul>
            <div>
                <a href="##" className="section__link">Sort by</a>
            </div>
        </div>
    )
}

export default SubNavigation