import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getProductsBySlug,
  displayAvailableSellers,
  globalProductStoreInfo,
} from "../../../redux/actions";
import { GlobalProductStoreInfoCanvas } from "../../../comp-files";
import { sellers as sellersFromDemoApi } from "../../../demoApi";
import "../../../comp-files/app-style/_productListPage.scss";

import { generatePublicUrl } from "../../../utilities-config/urlConfig";
import SellersCanvas from "../../../comp-files/SellersCanvas";
import MainLayout from "../MainLayout";

const ProductListPage = (props) => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => {
    return {
      product: state.globalProduct.globalProducts,
      productInfo: state.globalProductStoreInfo,
      availableSellers: state.availableSellers,
    };
  });

  const data = window.localStorage.getItem("globalProductStoreInfo");
  useEffect(() => {
    const { slug } = props.match.params;
    dispatch(getProductsBySlug(slug));
    // if(selector.productInfo.display) return dispatch(globalProductStoreInfo(data));
  }, [dispatch, props ]);

  const open = (product, display) => {
    // dispatch(displayAvailableSellers(sellers, true)); // This is a demoApi
    console.log(data)
    dispatch(globalProductStoreInfo(product));
  };

  return (
    <MainLayout>
      <GlobalProductStoreInfoCanvas productInfo={selector.productInfo} />
      <SellersCanvas availableSellers={selector.availableSellers} />
      <div className="product__display">
        {selector.product.map((product, i) => (
          <div
            className="product__display__container"
            key={i}
            onClick={() => open(product, true)}
          >
            <div className="product__display__container__image">
              <img
                src={
                  product.globalProductImage.length > 0
                    ? generatePublicUrl(product.globalProductImage[0].img)
                    : "/logo.png"
                }
                alt=""
              />
            </div>
            <div className="product__display__container__info">
              <div className="title">{product.productName}</div>
              <div>
                <span>4.5***</span>&nbsp;
                <span>(2000)***</span>
              </div>
              <div>More Info</div>
            </div>
          </div>
        ))}
      </div>
    </MainLayout>
  );
};

export default ProductListPage;
