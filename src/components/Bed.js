import React from 'react';
import { beds } from '../data/data';
import add_cart from "../img/add_cart.png"

const bed = () => {
    return (
    <React.Fragment>
        <div className="section__chairs">
            {beds.map((bed, index) => {
                return (
                    <div key={index} className="card">
                        <img src={bed.img} alt="" className="card-img" />
                        <p className="card-title">{bed.title}</p>
                        <div className="card-price">
                            <p>
                                <span className="card-price-1">${bed.price1}</span>
                                <span className="card-price-2">${bed.price2}</span>
                            </p>
                            <img src={add_cart} alt="" className="card-carting"/>
                        </div>
                    </div>
                )
            })}
        </div>
    </React.Fragment>
    )
}

export default bed