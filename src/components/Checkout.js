import check_confirm from "../img/check_confirm.png"
import { useState } from "react"
import { Link, useLocation } from "react-router-dom"

const Checkout = () => {
    const [congratmsg, setCongratmsg] = useState(false)
    const location = useLocation();
    const cartItems = location.state.cartItems;

    const clickConfirm =(e) => {
        e.preventDefault()
        setCongratmsg(true)
    }

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    };

    const total = calculateTotal();


    return (
        <div className="checkout">
            <form className="checkout__form">
                <h3 className="checkout__heading"><span className="checkout__heading-span">Home / Cart </span>Checkout</h3>
                <div className="form__customer">
                    <label className="form__label"><span>Customer Information</span><span>edit</span></label>
                    <input className="form__input" type="text" placeholder="email for order confirmation"/>
                </div>
                <div className="form__delivery">
                    <p className="form__delivery-home">
                        <span>Home delivery</span>
                        <span>Takes 3-5 business days</span>
                    </p>
                    <p className="form__delivery-store">
                        <span>In-store pickup</span>
                        <span>pick from store location</span>
                    </p>
                </div>
                <div className="form__billing">
                    <label className="form__label"><span>Billing address</span><span>edit</span></label>
                    <div className="form__input-name">
                        <input type="text" className="form__input" placeholder="firstname" />
                        <input type="text" className="form__input" placeholder="lastname"/>
                    </div>
                    <input type="text" className="form__input" placeholder="address line-1"/>
                    <input type="text" className="form__input" placeholder="address line-2"/>
                    <input type="text" className="form__input" placeholder="city"/>
                    <input type="text" className="form__input" placeholder="state"/>
                    <input type="number" className="form__input" placeholder="phone"/>
                </div>
            </form>
            <div className="checkout__summary">
                <h2>Order Summary</h2>
                <div className="summary__items">
                    {cartItems.map(item => (
                        <ul key={item.id} className="summary__body">
                            <li className="summary__body-product">
                                <img src={item.photo} alt={item.name} />
                                <p><span>{item.name}</span><span>Qty: {item.quantity}</span></p>
                            </li>
                            <li>${item.price * item.quantity}</li>
                        </ul>
                    ))}
                </div>
                <div className="summary__details">
                    <h2>Cart Total</h2>
                    <div className="summary__table">
                        <div className="summary__table-top">
                            <span>Subtotal:</span>
                            <span>${total}</span>
                        </div>
                        <div className="summary__table-middle">
                            <span>Shipping:</span>
                            <span>Free</span>
                        </div>
                        <div className="summary__table-bottom">
                            <span>Total:</span>
                            <span>${total}</span>
                        </div>
                    </div>
                </div>
                <div className="summary__payment">
                    <h3>Payment options</h3>
                    <div className="summary__form">
                        <input type="radio" id="cashOnDelivery" name="paymentMethod" value="cash" />
                        <label htmlFor="cashOnDelivery">
                            <span>Cash on delivery</span>
                            <span>payment with cash upon delivery</span>
                        </label>
                    </div>
                    <div className="summary__review">
                        <p>Review and place order</p>
                        <p>Please review the order details and payment details before congratmsging to confirm your order </p>
                    </div>
                    <div className="summary__form">
                        <input type="checkbox" />
                        <label>I agree to the <a href="##">Terms & conditions, Privacy policy & Return policy</a></label>
                    </div>
                </div>
                <button onClick={clickConfirm}>Complete order</button>
            </div>
            {
                congratmsg && <div className="checkoutConfirmation-box">
                <div className="checkoutConfirmation">
                    <p className="checkoutConfirmation__title">Congratulations on your order</p>
                    <p className="checkoutConfirmation__body">The product you ordered will be delivered in your address within 5days</p>
                    <div className="checkoutConfirmation__img-box">
                        <img className="checkoutConfirmation__img" src={check_confirm} alt="" />
                    </div>
                    <Link to="/">Return to store</Link>
                </div>
            </div>
            }
        </div>
    )
}

export default Checkout