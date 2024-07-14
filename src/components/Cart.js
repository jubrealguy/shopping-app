import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import cancel from "../img/cancel.png";
import check_cancel from "../img/check_cancel.png";
import check_confirm from "../img/check_confirm.png";
import NumContext from './NumContext';

const Cart = () => {
    const { cartItems, setCartItems, setNum } = useContext(NumContext);
    const [proceed, setProceed] = useState(false);
    let price;

    const handleRemoveItem = (id) => {
        const updatedItems = cartItems.filter(item => item.id !== id);
        setCartItems(updatedItems);
        const newTotalItems = updatedItems.reduce((total, item) => total + item.quantity, 0);
        setNum(newTotalItems);
    };

    const handleQuantityChange = (id, change) => {
        setCartItems((prevItems) => {
            const updatedItems = prevItems.map(item => 
                item.id === id ? { ...item, quantity: Math.max(1, item.quantity + change) } : item
            );
            const newTotalItems = updatedItems.reduce((total, item) => total + item.quantity, 0);
            setNum(newTotalItems);
            return updatedItems;
        });
    };

    const clickConfirm = (e) => {
        e.preventDefault();
        setProceed(true);
    }

    const clickCancel = (e) => {
        e.preventDefault();
        setProceed(false);
    }

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + (item.current_price[0].USD[0] * item.quantity), 0);
    };


    return (
        <div className="section__cart">
            <h3 className="cart__heading"><span className="cart__heading-span">Home / </span>Cart</h3>
            <div className="cart__table">
                <ul className="cart__head">
                    <li>Product</li>
                    <li>Price</li>
                    <li>Quantity</li>
                    <li>Subtotal</li>
                </ul>
                {cartItems.map(item => (
                    <ul key={item.id} className="cart__body">
                        <li className="cart__body-product"><img src={`https://api.timbu.cloud/images/${item.photos[0].url}`} alt="" /><span>{item.name}</span></li>
                        <li>{`$${price = item.current_price[0].USD[0]}`}</li>
                        <li>
                            <table>
                                <tbody>
                                    <tr>
                                        <td className="table-data" onClick={() => handleQuantityChange(item.id, -1)}>-</td>
                                        <td>{item.quantity}</td>
                                        <td className="table-data" onClick={() => handleQuantityChange(item.id, 1)}>+</td>
                                    </tr>
                                </tbody>
                            </table>
                        </li>
                        <li>
                            <span>${price * item.quantity}</span>
                            <img src={cancel} alt="" onClick={() => handleRemoveItem(item.id)} />
                        </li>
                    </ul>
                ))}
            </div>

            <div className="cart__link-mobile">
                <Link to="/" href="##" className="cart__link">Return to store</Link>
            </div>
            <div className="cart__checkout">
                <form className="cart__form">
                    <input type="text" placeholder="Coupon code" />
                    <button>Apply coupon</button>
                </form>
                <div className="cart__summary">
                    <h2>Cart Total</h2>
                    <div className="summary__table">
                        <div className="summary__table-top">
                            <span>Subtotal:</span>
                            <span>${calculateTotal()}</span>
                        </div>
                        <div className="summary__table-middle">
                            <span>Shipping:</span>
                            <span>Free</span>
                        </div>
                        <div className="summary__table-bottom">
                            <span>Total:</span>
                            <span>${calculateTotal()}</span>
                        </div>
                    </div>
                    <Link onClick={clickConfirm}>Proceed to checkout</Link>
                </div>
            </div>

            {proceed && 
            <div className="cartConfirmation-box">
                <div className="cartConfirmation">
                    <p>Are you sure you want to complete the order</p>
                    <div className="link-div">
                        <Link to="/cart/checkout" state={{cartItems: cartItems}}><img src={check_confirm} alt="" /></Link>
                        <Link onClick={clickCancel}><img src={check_cancel} alt="" /></Link>
                    </div>
                </div>
            </div>}
        </div>
    )
}

export default Cart;



// const cartMobile = (
//     <div className="cart__table-mobile">
//         <ul className="cart__product">
//             <li><h3>Product</h3></li>
//             <li className="cart__body-product"><img src={chair3} alt="" /><span>Red Chair</span></li>
//         </ul>
//         <ul className="cart__product">
//             <li><h3>Quantity</h3></li>
//             <li>
//                 <table>
//                     <tbody>
//                         <tr>
//                             <td onClick={() => setDigit3(digit3 - 1)}>-</td>
//                             <td>{digit3}</td>
//                             <td onClick={() => setDigit3(digit3 + 1)}>+</td>
//                         </tr>
//                     </tbody>
//                 </table>
//             </li>
//         </ul>
//         <ul className="cart__product">
//             <li><h3>Price</h3></li>
//             <li>{`$${price = 50}`}</li>
//         </ul>
//         <ul className="cart__product">
//             <li><h3>Subtotal</h3></li>
//             <li>${price * digit3}</li>
//         </ul>
//     </div>
// )