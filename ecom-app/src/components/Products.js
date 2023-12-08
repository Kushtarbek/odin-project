// Products.js
import React, { useState } from 'react';
import './Products.css'; // Import the CSS file

const Products = () => {
  const [products, setProducts] = useState([
    // ... (your product data)
    { id: 1, name: 'iPhone 13', image: 'https://res.cloudinary.com/spectrumobile/image/upload/e_trim/w_575,c_limit,f_auto,q_auto,fl_lossy/Specturm%20Mobile%20Buy%20Flow/Apple/Apple%2015%20Pro%20Max/iPhone-15-Pro-Max-Blue-Titanium-Hero.png' },
    { id: 2, name: 'MacBook Pro', image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSktT5sA4yNiFbxvGB7lJFCM2Vt6CHp2G3GMpKfIh4EqD3vV0O-jGhEhDJSxsXS74y9F-8YO4AoBzUGnRQ4f7uDhCNRK2fDXU888vEZ2TdhHZ_bW_hFWYYd3o4mDjT4f6E3KpoHyO1JoWQ&usqp=CAc' },
    { id: 3, name: 'iPad Air', image: 'https://www.att.com/scmsassets/global/devices/tablets/apple/apple-ipad-air-5th-gen-_2022_/defaultimage/Purple-hero-zoom.png' },
    { id: 4, name: 'Apple Watch Series 7', image: 'https://i5.walmartimages.com/seo/Restored-Apple-Watch-Series-7-GPS-45mm-Green-Case-with-Clover-Sport-Band-Refurbished_8d1b0b66-6d96-44b6-a853-3ea8783186cd.b3770cd442d2f995b969cdecd7a7211d.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF' },
    { id: 5, name: 'iPhone 13', image: 'https://res.cloudinary.com/spectrumobile/image/upload/e_trim/w_575,c_limit,f_auto,q_auto,fl_lossy/Specturm%20Mobile%20Buy%20Flow/Apple/Apple%2015%20Pro%20Max/iPhone-15-Pro-Max-Blue-Titanium-Hero.png' },
    { id: 6, name: 'MacBook Pro', image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSktT5sA4yNiFbxvGB7lJFCM2Vt6CHp2G3GMpKfIh4EqD3vV0O-jGhEhDJSxsXS74y9F-8YO4AoBzUGnRQ4f7uDhCNRK2fDXU888vEZ2TdhHZ_bW_hFWYYd3o4mDjT4f6E3KpoHyO1JoWQ&usqp=CAc' },
    { id: 7, name: 'iPad Air', image: 'https://www.att.com/scmsassets/global/devices/tablets/apple/apple-ipad-air-5th-gen-_2022_/defaultimage/Purple-hero-zoom.png' },
    { id: 8, name: 'Apple Watch Series 7', image: 'https://i5.walmartimages.com/seo/Restored-Apple-Watch-Series-7-GPS-45mm-Green-Case-with-Clover-Sport-Band-Refurbished_8d1b0b66-6d96-44b6-a853-3ea8783186cd.b3770cd442d2f995b969cdecd7a7211d.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF' },
    { id: 9, name: 'iPhone 13', image: 'https://res.cloudinary.com/spectrumobile/image/upload/e_trim/w_575,c_limit,f_auto,q_auto,fl_lossy/Specturm%20Mobile%20Buy%20Flow/Apple/Apple%2015%20Pro%20Max/iPhone-15-Pro-Max-Blue-Titanium-Hero.png' },
    { id: 10, name: 'MacBook Pro', image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSktT5sA4yNiFbxvGB7lJFCM2Vt6CHp2G3GMpKfIh4EqD3vV0O-jGhEhDJSxsXS74y9F-8YO4AoBzUGnRQ4f7uDhCNRK2fDXU888vEZ2TdhHZ_bW_hFWYYd3o4mDjT4f6E3KpoHyO1JoWQ&usqp=CAc' },
    { id: 11, name: 'iPad Air', image: 'https://www.att.com/scmsassets/global/devices/tablets/apple/apple-ipad-air-5th-gen-_2022_/defaultimage/Purple-hero-zoom.png' },
    { id: 12, name: 'Apple Watch Series 7', image: 'https://i5.walmartimages.com/seo/Restored-Apple-Watch-Series-7-GPS-45mm-Green-Case-with-Clover-Sport-Band-Refurbished_8d1b0b66-6d96-44b6-a853-3ea8783186cd.b3770cd442d2f995b969cdecd7a7211d.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF' },
    { id: 13, name: 'iPhone 13', image: 'https://res.cloudinary.com/spectrumobile/image/upload/e_trim/w_575,c_limit,f_auto,q_auto,fl_lossy/Specturm%20Mobile%20Buy%20Flow/Apple/Apple%2015%20Pro%20Max/iPhone-15-Pro-Max-Blue-Titanium-Hero.png' },
    { id: 14, name: 'MacBook Pro', image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSktT5sA4yNiFbxvGB7lJFCM2Vt6CHp2G3GMpKfIh4EqD3vV0O-jGhEhDJSxsXS74y9F-8YO4AoBzUGnRQ4f7uDhCNRK2fDXU888vEZ2TdhHZ_bW_hFWYYd3o4mDjT4f6E3KpoHyO1JoWQ&usqp=CAc' },
    { id: 15, name: 'iPad Air', image: 'https://www.att.com/scmsassets/global/devices/tablets/apple/apple-ipad-air-5th-gen-_2022_/defaultimage/Purple-hero-zoom.png' },
    { id: 16, name: 'Apple Watch Series 7', image: 'https://i5.walmartimages.com/seo/Restored-Apple-Watch-Series-7-GPS-45mm-Green-Case-with-Clover-Sport-Band-Refurbished_8d1b0b66-6d96-44b6-a853-3ea8783186cd.b3770cd442d2f995b969cdecd7a7211d.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF' },
    // Add more products as needed
  
  ]);

  const [visibleProducts, setVisibleProducts] = useState(4);
  const totalProducts = products.length;

  const showNextItems = () => {
    setVisibleProducts((prevVisibleProducts) =>
      Math.min(prevVisibleProducts + 4, totalProducts)
    );
  };

  const showPrevItems = () => {
    setVisibleProducts((prevVisibleProducts) =>
      Math.max(prevVisibleProducts - 4, 4)
    );
  };

  return (
    <div>
      <h2>Apple Products</h2>
      <div className="product-container">
        {products.map((product, index) => (
          <div key={product.id} className="product">
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
            <p>{product.name}</p>
          </div>
        ))}
      </div>
      <button onClick={showPrevItems}>&lt;</button>
      <button onClick={showNextItems}>&gt;</button>
    </div>
  );
};

export default Products;
