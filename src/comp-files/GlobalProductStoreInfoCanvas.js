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
import { ContentLoading, DataLoading } from "./hoc/Loading";

const GlobalProductStoreInfoCanvas = ({
  show,
  hide,
  productInfo,
  setProductInfo,
}) => {
  const dispatch = useDispatch();
  const salesData = useSelector((state) => state.selectedSeller);

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
                  <img
                    src={generatePublicUrl(item.img)}
                    key={index}
                    alt={productInfo.productName}
                  />
                ))}
            </div>
          </div>
        </div>

        <div className="product__details__layout">
          {/* Here is the global product information */}
          {productInfo && (
            <div className="product__info">
              <h2 className="product__name">{productInfo.productName}</h2>
              <div className="product__rating">
                <span className="global">Global:</span>
                <span className="global__number">4.7*</span>
                <span className="global__likes">700 likes</span>
                <span className="global__reviews">300 comments</span>
              </div>
              <div className="global__offer">
                <h4>Available offers</h4>
                <span>
                  {productInfo.globalOffer &&
                  productInfo.globalOffer.length > 0 ? (
                    productInfo.globalOffer.map((item, index) => (
                      <div className="global__offer__items" key={index}>
                        {item.offer} {item.terms}
                      </div>
                    ))
                  ) : (
                    <div className="global__offer__items"> No items yet </div>
                  )}
                </span>
              </div>
            </div>
          )}
          {salesData && <>{salesData.loading ? DataLoading() : <div> Get items </div>}</>}
        </div>
      </div>
    </div>
  );
};

export default GlobalProductStoreInfoCanvas;
