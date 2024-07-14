import React from "react";
import Chairs from "./Chairs";
import SectionNav from "./SectionNav";
import { Route, Routes } from 'react-router-dom';
import Bed from "./Bed";
import { Link } from "react-router-dom";

const HomePage = () => {
    // Assuming 30 products and 10 products per page
    const totalPages = Math.ceil(30 / 10); // Calculate total pages

    // Generate pagination items
    const paginationItems = [];
    for (let i = 1; i <= totalPages; i++) {
        paginationItems.push(<li key={i} className={`section__pages-${i}`}><Link to={`/?page=${i}`}>{i}</Link></li>);
    }

    return (
        <div>
            <h3 className="header__text">Welcome to our furniture collection, where style meets comfort and quality</h3>
            <section className="section">
                <SectionNav />
                <Routes>
                    <Route path="/" element={<Chairs page={1} />} />
                    <Route path="/bed" element={<Bed />} />
                </Routes>
                {/* Pagination */}
                <ul className="section__pages">
                    {paginationItems}
                </ul>
            </section>
        </div>
    );
}

export default HomePage;
