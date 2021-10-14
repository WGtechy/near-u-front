import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./app-style/_productInfoCanvas.scss";

import {
  displayAvailableSellers,
  globalProductStoreInfo,
} from "../redux/actions";
import { IoIosClose } from "react-icons/io";
import { sellers } from "../demoApi";

const GlobalProductStoreInfoCanvas = ({
  productInfo: { display, product, seller, loading, error },
}) => {
  const dispatch = useDispatch();

  const close = () => {
    dispatch(displayAvailableSellers([], false));
    dispatch(globalProductStoreInfo({}, {}, false));
    window.localStorage.clear("globalProductInfo");
  };

  return (
    <div
      className={
        display ? "product__info__canvas open" : "product__info__canvas"
      }
    >
      <div className="heading"></div>
      <div className="body">
        <div className= "swiper-container">
          <div className="swiper-wrapper">
            <div className="swiper-slider" >
              <div className="number"> 01</div>
            </div>
          </div>
        </div>
        {/* {
            product && <div className="product__info">
            
        </div>
        } */}
      </div>
    </div>
  );
};

export default GlobalProductStoreInfoCanvas;
