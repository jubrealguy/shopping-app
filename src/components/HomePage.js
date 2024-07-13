import { React } from "react";
import Chairs from "./Chairs";
import SectionNav from "./SectionNav"
import { Route, Routes } from 'react-router-dom';
import Bed from "./Bed"

const HomePage = () => {
    return (
        <div>
            <h3 className="header__text">Welcome to our furniture collection, where style meets comfort and quality</h3>
            <section className="section">
                <SectionNav />
                <Routes>
                    <Route path="" element={<Chairs />} />
                    <Route path="bed" element={<Bed />} />
                </Routes>
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

export default HomePage