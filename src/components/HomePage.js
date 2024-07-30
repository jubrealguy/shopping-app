import React, { useState } from "react";
import Chairs from "./Chairs";
import SubNavigation from "./SubNavigation";
import { Route, Routes } from 'react-router-dom';
import Bed from "./Bed";
import { Link } from "react-router-dom";

const HomePage = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleIndexClick = (index) => {
        setActiveIndex(index);
    };

    const paginationItems = <ul className="section__pages">
                                <li key={1} className={ activeIndex === 0 ?`active`: ''} onClick={() => handleIndexClick(0)}><Link to={`/?page=1`}>1</Link></li>
                                <li key={2} className={ activeIndex === 1 ?`active`: ''} onClick={() => handleIndexClick(1)}><Link to={`/?page=2`}>2</Link></li>
                                <li key={3} className={ activeIndex === 2 ?`active`: ''} onClick={() => handleIndexClick(2)}><Link to={`/?page=3`}>3</Link></li>
                            </ul>

    return (
        <div>
            <h3 className="header__text">Welcome to our furniture collection, where style meets comfort and quality</h3>
            <section className="section">
                <SubNavigation />
                <Routes>
                    <Route path="/" element={<Chairs page={1} />} />
                    <Route path="/bed" element={<Bed />} />
                </Routes>
                {paginationItems}
            </section>
        </div>
    );
}

export default HomePage;
