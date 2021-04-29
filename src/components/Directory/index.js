import React from "react";
import ShopMen from "../../assets/shopMens.jpg";
import ShopWomen from "../../assets/shopWomens.jpg";
import './style.scss'

const Directory = () => {
  return (
    <div className='Directory'>
     <div className="wrap">
     <div className='item' style={{ backgroundImage:`url(${ShopMen})`}}>
         <a href="#">Shop Mens</a>
     </div>
      <div className='item' style={{ backgroundImage:`url(${ShopWomen})` }}>
          <a href="#">
              Shop Womens
          </a>
      </div>
     </div>
    </div>
  );
};

export default Directory;
