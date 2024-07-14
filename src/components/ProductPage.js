import React, { useState, useContext } from "react";
import { useLocation } from "react-router-dom";
import add_cart from "../img/add_cart.png";
import star from "../img/star.png";
import NumContext from './NumContext';

const Product = () => {
    const location = useLocation();
    const { state } = location;
    const chair = state?.chair;
    const [digit, setDigit] = useState(1);
    const { num, setNum, addItemToCart } = useContext(NumContext);

    const addCart = (e) => {
        e.stopPropagation();
        setNum(num + 1);
        addItemToCart(chair);
        console.log(chair)
    };

    if (!chair) {
        return <p>No product data available</p>;
    }

    const imageUrl = chair.photos && chair.photos.length > 0 ? `https://api.timbu.cloud/images/${chair.photos[0].url}` : "";

    return (
        <div className="product-box">
            <div className="product">
                <div className="product_img-box">
                    <img src={imageUrl} alt="" className="product_img" />
                </div>
                <div>
                    <h2 className="product_title">{chair.name}</h2>
                    <div className="product_reviews">
                        <div>
                            <img src={star} alt="" className="product_star" />
                            <img src={star} alt="" className="product_star" />
                            <img src={star} alt="" className="product_star" />
                            <img src={star} alt="" className="product_star" />
                            <img src={star} alt="" className="product_star" />
                        </div>
                        <span>(25 reviews)</span>
                        <span>|</span>
                        <span>In stock</span>
                    </div>
                    <p className="product_price">${chair.current_price[0].USD[0]}</p>
                    <p className="product_story">Your new favorite piece to curl up with a book or watch a TV, perfect for reading, napping or simply lounging around</p>
                    <span></span>
                    <div className="product_purchase">
                        <table className="product_quantity">
                            <tbody>
                                <tr>
                                    <td className="table-data" onClick={() => setDigit(digit - 1)}>-</td>
                                    <td>{digit}</td>
                                    <td className="table-data" onClick={() => setDigit(digit + 1)}>+</td>
                                </tr>
                            </tbody>
                        </table>
                        <img 
                            src={add_cart} 
                            alt="" 
                            className="product_addcart" 
                            onClick={addCart} 
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product;
