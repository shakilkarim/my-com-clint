import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Jumboton from '../components/cards/Jumboton';
import ProductCard from '../components/cards/ProductCard';

const Home = () => {
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        loadProducts();
      }, []);
    
    const loadProducts = async () => {
        try {
          const { data } = await axios.get("/products");
          setProducts(data);
        } catch (err) {
          console.log(err);
        }
      };

      const arr = [...products];
      const sortedBySold = arr?.sort((a, b) => (a.sold < b.sold ? 1 : -1));
    return (
        <div>
            <Jumboton title="Hello World" sutTitle="Welcome to React E-commerce"></Jumboton>
            
            <div className="row">
                <div className="col-md-6">
                <h2 className="p-3 mt-2 mb-2 h4 bg-light text-center">
                    New Arrivals
                </h2>
                <div className="row">
                    {products?.map((p) => (
                    <div className="col-md-6" key={p._id}>
                        <ProductCard p={p} />
                    </div>
                    ))}
                </div>
                </div>

            <div className="col-md-6">
            <h2 className="p-3 mt-2 mb-2 h4 bg-light text-center">
                Best Sellers
            </h2>
            <div className="row">
                {sortedBySold?.map((product) => (
                <div className="col-md-6" key={product._id}>
                    <ProductCard p={product} />
                </div>
                ))}
            </div>
            </div>
            </div>
        </div>
    );
};

export default Home;