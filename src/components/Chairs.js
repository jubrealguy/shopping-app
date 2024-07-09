import chairs from "../data/data"
import add_cart from "../img/add_cart.png"

const Chairs = () => {
    return (
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
                            <img src={add_cart} alt="" className="card-carting"/>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Chairs