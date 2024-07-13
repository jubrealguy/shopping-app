import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import add_cart from "../img/add_cart.png"
import NumContext from './NumContext';


const Chairs = () => {
  const { num, setNum } = useContext(NumContext);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = 'https://timbu-get-all-products.reavdev.workers.dev/?organization_id=9dc83d54958d4e28a313c2bd154b1379&reverse_sort=false&page=1&size=10&Appid=UBB2UMUP2FSHXH1&Apikey=0a067da6325d42b996d4c5be95eb034a20240713164907481886'
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result.items);
        console.log(result.items)
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  
    return (
    <React.Fragment>
        <div className="section__chairs">
            {data.map((chair) => {
                const imageUrl = chair.photos && chair.photos.length > 0 ? `https://api.timbu.cloud/images/${chair.photos[0].url}` : null;
                return (
                    <Link to="/product" key={chair.unique_id} className="card">
                        <img src={imageUrl} alt="" className="card-img" />
                        <p className="card-title">{chair.name}</p>
                        <div className="card-price">
                            <p>
                                <span className="card-price-1">${chair.current_price[0].USD[1]}</span>
                                <span className="card-price-2">${chair.current_price[0].USD[0]}</span>
                            </p>
                            <img src={add_cart} alt="" className="card-carting" onClick={() => setNum(num + 1)} />
                        </div>
                    </Link>
                )
            })}
        </div>
    </React.Fragment>
    )
}

export default Chairs