// import React from 'react'
// import { ApolloClient, ApolloLink, InMemoryCache } from "@apollo/client";




// export default function ProductCards() {
//     const httpLink = new httpLink({
//         uri: "https://48p1r2roz4.sse.codesandbox.io",
//       });
      
//   return (
//     <div>ProductCards</div>
//   )
// }

import React, { useState } from 'react';
import './Carousel.css'; // Create a CSS file for styling

const products = [
  {
    id: 1,
    name: 'iPhone 13',
    description: 'The latest iPhone with amazing features.',
    image: 'iphone13.jpg',
  },
  {
    id: 2,
    name: 'MacBook Pro',
    description: 'Powerful laptop for professionals.',
    image: 'macbookpro.jpg',
  },
  // Add more Apple products as needed
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? products.length - 1 : prevIndex - 1
    );
  };

  return (
    <div id="carousel-container">
      <div id="carousel" style={{ transform: `translateX(-${currentIndex * 320}px)` }}>
        {products.map((product) => (
          <div key={product.id} className="card">
            <img src={product.image} alt={product.name} />
            <div className="card-info">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="arrow left" onClick={prevSlide}>&#8249;</button>
      <button className="arrow right" onClick={nextSlide}>&#8250;</button>
    </div>
  );
};

export default Carousel;
