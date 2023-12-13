

import React, { useState } from 'react';
import './Carousel.css'; // Create a CSS file for styling

const products = [
  {
    id: 1,
    name: 'iPhone 13',
    description: 'The latest iPhone with amazing features.',
    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-holiday-iphone-15-pro-202311?wid=480&hei=500&fmt=p-jpg&qlt=95&.v=1696863030449',
  },
  {
    id: 2,
    name: 'Apple Watch Series 9',
    description: 'Powerful smart watch for professionals.',
    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-holiday-watch-s9-202311?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1696865069259',
  },
  {
    id: 3,
    name: 'MacBook Pro',
    description: 'Powerful laptop for professionals.',
    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-holiday-macbook-pro-202311?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1696872235281',
  },
  {
    id: 4,
    name: 'Iphone 15',
    description: 'Powerful laptop for professionals.',
    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-holiday-iphone-15-202311?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1698188084112',
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
       <div className="arrow-container">
        <button className="arrow left" onClick={prevSlide}>&#8249;</button>
      </div>
      <div id="carousel" style={{ transform: `translateX(-${currentIndex * 320}px)` }}>
        {products.map((product) => (
          <div key={product.id} className="card">
            <img style={{ width: '500px', height: '500px'}} src={product.image} alt={product.name} />
            <div className="card-info">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="arrow-container">
        <button className="arrow right" onClick={nextSlide}>&#8250;</button>
      </div>
      </div>
  );
};

export default Carousel;
