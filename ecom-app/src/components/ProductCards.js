import { useState, useEffect } from 'react';
import React from 'react'
import axios from 'axios'


export default function ProductCards() {
    const [products, setProducts] = useState([]);
    const [visibleProducts, setVisibleProducts] = useState(4);

    useEffect(() => {
       
           
                // const response = await fetch('http://api.fakeshop-api.com/products/getAllProducts');
                // const data = await response.json();
                // console.log("data!!!",data)

                // setProducts(data);
                axios({
                    method: 'GET',
                    baseURL: 'http://api.fakeshop-api.com',
                    url: '/products/getAllProducts',
                  })
                    .then(({ data }) => {
                        setProducts(data.products)
                    })
                    .catch(err => console.dir(err))       
    }, []);

    const showProducts = () => {
        setVisibleProducts((prevVisibleProducts) => 
            Math.min(prevVisibleProducts + 4, products.length)
        );
    };

  return (
    <div>
         {/* <div className="card-container">
            {products.slice(0, visibleProducts).map((product) => {
                <div key={product.id} className="card">
                    <img src={product.image} alt={product.name} />
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                </div>
            })}
         </div>
            {visibleProducts < products.length && (
                <button onClick={showProducts}> Show More </button>
            )} */}
             <section>
                <h1>Fake Shop API response:</h1>
                
                {!!products && products.length > 0 ? products.map((product) => {
                    return(
                      <article key={product.id}>
                        <h2>name: {product.name}</h2>
                        <p>id: {product.id}</p>
                        <p>description: {product.description}</p>
                        <p>brand: {product.brand}</p>
                        <p>price: {product.price}</p>
                        <p>category: {product.category}</p>
                      </article>
                    )   
                  }):(<p>API did not provided any product, try again.</p>)
                }
              </section>
    </div>
  )
}

