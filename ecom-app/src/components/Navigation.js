import React from 'react';
import { IoIosSearch } from "react-icons/io";
import { IoBagOutline } from "react-icons/io5";
import { RiAppleFill } from "react-icons/ri";


function Naviagation() {
  return (
   
    <div className='navigation'>
      <ul className="horizontal-list">
        <li><RiAppleFill /></li>
        <li>Store</li>
        <li>Mac</li>
        <li>iPad</li>
        <li>iPhone</li>
        <li>Watch</li>
        <li>Vision</li>
        <li>AirPods</li>
        <li>TV & Home</li>
        <li>Entertainment</li>
        <li>Accessories</li>
        <li>Support</li>
        <li><IoIosSearch /></li>
        <li><IoBagOutline /></li>

      </ul>
    </div>
  );
}

export default Naviagation;
