import chair3 from "../img/chair3.png"
import chair8 from "../img/chair8.png"
import cancel from "../img/cancel.png"
import { Link } from "react-router-dom";

const Cart = () => {

    const cartMobile = (
        <div className="cart__table-mobile">
            <ul className="cart__product">
                <li><h3>Product</h3></li>
                <li className="cart__body-product"><img src={chair3} alt="" /><span>Red Chair</span></li>
            </ul>
            <ul className="cart__product">
                <li><h3>Quantity</h3></li>
                <li><table><tr><td>-</td><td>2</td><td>+</td></tr></table></li>
            </ul>
            <ul className="cart__product">
                <li><h3>Price</h3></li>
                <li>$50</li>
            </ul>
            <ul className="cart__product">
                <li><h3>Subtotal</h3></li>
                <li>$50</li>
            </ul>
        </div>
    )

    return (
        <div className="section__cart">
            <h3 className="cart__heading"><span className="cart__heading-span">Home / </span>Cart</h3>
            <div className="cart__table">
                <ul className="cart__head">
                    <li>Product</li>
                    <li>Quantity</li>
                    <li>Price</li>
                    <li>Subtotal</li>
                </ul>
                <ul className="cart__body">
                    <li className="cart__body-product"><img src={chair3} alt="" /><span>Red Chair</span></li>
                    <li>$50</li>
                    <li><table><tr><td>-</td><td>1</td><td>+</td></tr></table></li>
                    <li><span>$50</span><img src={cancel} alt="" /></li>
                </ul>
                <ul className="cart__body">
                    <li className="cart__body-product"><img src={chair8} alt="" /><span>Kinsgold Chair</span></li>
                    <li>$40</li>
                    <li><table><tr><td>-</td><td>2</td><td>+</td></tr></table></li>
                    <li><span>$40</span><img src={cancel} alt="" /></li>
                </ul>
            </div>
            {cartMobile}
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
                            <span >$950</span>
                        </div>
                        <div className="summary__table-middle">
                            <span>Shipping:</span>
                            <span>Free</span>
                        </div>
                        <div className="summary__table-bottom">
                            <span>Total:</span>
                            <span>$950</span>
                        </div>
                    </div>
                    <Link to="/cart/checkout">Proceed to checkout</Link>
                </div>
            </div>
        </div>
    )
}

export default Cart