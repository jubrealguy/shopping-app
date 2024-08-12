// https://e-furniture-7e2p.onrender.com
// https://e-furniture-7e2p.onrender.com/api/beds

import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import add_cart from "../img/add_cart.png";
import NumContext from './NumContext';

const Chairs = () => {
    const { num, setNum, addItemToCart } = useContext(NumContext);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const url = `https://e-furniture-7e2p.onrender.com/api/beds`;
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const result = await response.json();
                console.log(result.posts)
                setData(result.posts);
                setLoading(false);
                console.log(result.items)
            } 
            
            catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const addCart = (e, chair) => {
        e.stopPropagation();
        setNum(num + 1);
        addItemToCart(chair);
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <React.Fragment>
            <div className="section__chairs">
                {data.map((chair) => {
                    return (
                        <div key={chair._id} className="card">
                            <Link 
                                to="/product"
                                state={{ chair }} 
                                className="card-link"
                            >
                                {chair && chair.photo ? (
                                    <img src={chair.photo} alt="" className="card-img" />
                                ) : (
                                    <img src="https://ik.imagekit.io/2xkwa8s1i/img/npl_modified_images/darcy/sofa_WLCHRDRCFVBL/sofa_WLCHRDRCFVBL_1.jpg" alt="Default" className="card-img" />
                                )}
                                <p className="card-title">{chair.name}</p>
                                <p>{chair.description}</p>
                                <div className="card-price">
                                    <p>
                                        <span className="card-price-1">${chair.price}</span>
                                        <span className="card-price-2">${100}</span>
                                    </p>
                                </div>
                            </Link>
                            <img 
                                src={add_cart} 
                                alt="" 
                                className="card-carting" 
                                onClick={(e) => addCart(e, chair)} 
                            />
                        </div>
                    );
                })}
            </div>
        </React.Fragment>
    );
}

export default Chairs;
