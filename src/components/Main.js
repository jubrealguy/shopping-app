import chairs from "../data/data"
import add_cart from "../img/add_cart.png"

const Main = () => {
    return (
        <div>
            <h3 className="header__text">Welcome to our furniture collection, where style meets comfort and quality</h3>
            <section className="section">
                <div className="section__nav">
                    <ul className="section__nav--list">
                        <li className="section__nav--list-first">Chairs</li>
                        <li>Bed</li>
                        <li>Dining set</li>
                        <li>TV console</li>
                    </ul>
                    <div>
                        <a href="##" className="section__link">Filter</a>
                    </div>
                </div>
                <div className="section__chairs">
                    {chairs.map((chair, index) => {
                        return (
                            <div key={index} className="card">
                                <img src={chair.img} alt="" className="card-img" />
                                <p className="card-title">{chair.title}</p>
                                <div className="card-price">
                                    <p>
                                        <span className="card-price-1">${chair.price1}</span>
                                        <span className="card-price-2">${chair.price2}</span>
                                    </p>
                                    <img src={add_cart} alt="" className="card-cartimg"/>
                                </div>
                            </div>
                        )
                    })}
                </div>
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

export default Main