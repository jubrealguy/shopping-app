import chair8 from "../img/chair8.png"
import star from "../img/star.png"
import { useState, useContext } from "react"
import add_cart from "../img/add_cart.png";
import NumContext from './NumContext';

const Product = () => {
    const [digit, setDigit] = useState(1)
    const { num, setNum } = useContext(NumContext);

    const addCart = (e) => {
        e.stopPropagation();
        setNum(num + 1);
    };
    

    return (
        <div className="product-box">
            <div className="product">
                <div className="product_img-box">
                    <img src={chair8} alt="" className="product_img" />
                </div>
                <div>
                    <h2 className="product_title">Dutch gold lounge</h2>
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
                    <p className="product_price">$481</p>
                    <p className="product_story">Your new favorite piece to curl up with a book or watch a TV, perfect for reading, napping or simply longin around</p>
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

export default Product