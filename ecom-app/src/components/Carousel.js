// components/Header.js
import React, { useState } from 'react';
import './Carousel.css';


const texts = [`Get your holiday gifts on time.${`<a href='https://www.apple.com/shop/gifts/holiday-shipping'> See when to order </a>`}`,
 'Pay monthly at 0% APR when you choose to check out with Apple Card Monthly Installments.',
  'Use Apple Pay when you make any purchase and Apple will make a donation of $1 to the Global Fund’s fight against AIDS.'];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextText = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
  };
  const prevText = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1) % texts.length);
  };

  return (
    <div style={{display: 'flex', justifyContent: 'space-around'}}>
      <button onClick={nextText}>{'<'}</button>
      <h2>{texts[currentIndex]}</h2>
      <button onClick={nextText}>{'>'}</button>
    </div>
  );
};

export default Carousel;
