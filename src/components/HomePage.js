import React, { useState } from "react";
import Chairs from "./Chairs";
import SectionNav from "./SectionNav";
import { Route, Routes } from 'react-router-dom';
import Bed from "./Bed";
import { Link } from "react-router-dom";

const HomePage = () => {
    // const totalPages = Math.ceil(30 / 10);
    const [activeIndex, setActiveIndex] = useState(0);

    const handleIndexClick = (index) => {
        setActiveIndex(index);
    };

    // const paginationItems_ = [];
    // for (let i = 1; i <= totalPages; i++) {
    //     paginationItems.push(<li key={i} onClick={() => setClas(i)} className={`section__pages-${clas}`}><Link to={`/?page=${i}`}>{i}</Link></li>);
    // }

    const paginationItems = <ul className="section__pages">
                                <li key={1} className={ activeIndex === 0 ?`section__pages-1`: ''} onClick={() => handleIndexClick(0)}><Link to={`/?page=1`}>1</Link></li>
                                <li key={2} className={ activeIndex === 1 ?`section__pages-1`: ''} onClick={() => handleIndexClick(1)}><Link to={`/?page=2`}>2</Link></li>
                                <li key={3} className={ activeIndex === 2 ?`section__pages-1`: ''} onClick={() => handleIndexClick(2)}><Link to={`/?page=3`}>3</Link></li>
                            </ul>

    return (
        <div>
            <h3 className="header__text">Welcome to our furniture collection, where style meets comfort and quality</h3>
            <section className="section">
                <SectionNav />
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
