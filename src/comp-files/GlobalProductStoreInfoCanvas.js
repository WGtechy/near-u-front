import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./app-style/_productInfoCanvas.scss";

import {
  displayAvailableSellers,
  globalProductStoreInfo,
} from "../redux/actions";
import { IoIosClose } from "react-icons/io";
import { sellers } from "../demoApi";
import { generatePublicUrl } from "../utilities-config/urlConfig";

const GlobalProductStoreInfoCanvas = ({
  show,
  hide,
  productInfo,
  setProductInfo,
}) => {
  const dispatch = useDispatch();

  const close = () => {
    hide(false);
  };

  return (
    <div
      className={show ? "product__info__canvas open" : "product__info__canvas"}
    >
      <div className="heading">
        <IoIosClose
          className="seller__body__heading__icons__cancel"
          onClick={close}
          size={40}
        />
      </div>
      <div className="body">
        {/* globalImage  */}
        <div className="swiper-container">
          <div className="swiper-wrapper">
            <div className="swiper-slider">
              {productInfo.globalProductImage &&
                productInfo.globalProductImage.length > 0 &&
                productInfo.globalProductImage.map((item, index) => (
                  <img src={ generatePublicUrl(item.img) } key={index} alt={productInfo.productName}/>
                ))}
            </div>
          </div>
        </div>

        {/* Here is the global product information */}
        {productInfo && (
          <div className="product__info">
            <div></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GlobalProductStoreInfoCanvas;
