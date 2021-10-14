import React from "react";
import {
  IoIosArrowDropdown,
  IoIosBasket,
  IoIosBookmark,
  IoIosClose,
  IoIosFlame,
  IoIosInformationCircleOutline,
  IoIosShareAlt,
} from "react-icons/io";
import { useDispatch } from "react-redux";
import "../comp-files/app-style/_sellersCanvas.scss";
import { displayAvailableSellers, globalProductStoreInfo } from "../redux/actions";

const SellersCanvas = ({availableSellers: {data, display}}) => {
  // const {info, display} = window.localStorage.getItem("displayAllAvailabeSellers")
  const dispatch = useDispatch();
  const close = () => {
    // dispatch(displayAvailableSellers([], false));
    // dispatch(globalProductStoreInfo({}, {}, false));
    window.localStorage.clear("globalProductInfo");
    window.localStorage.clear("displayAvailableSellers");
  };
  const sellerInfoDisplay =(clickedSeller) => {
    const {product} = window.localStorage.getItem("globalProductStoreInfo")
    let data = {product, clickedSeller, display: true};
    dispatch(globalProductStoreInfo(data));
  }
  return (
    <div
      className={
        display ? "sellers__canvas open" : "sellers__canvas"
      }
    >
      <div className="sellers__body">
        <div className="sellers__body__heading">
          <div className="heading__bar">
            <IoIosClose
              className="seller__body__heading__icons__cancel"
              onClick={close}
              size={40}
            />
          </div>
          <div className="sellers__body__heading__location">
            <input type="search" defaultValue="Ikeja" />
          </div>
          <h3>
            <span>10 </span>Sellers in your location
          </h3>
        </div>

        {data.map((item, i) => (
          <div 
          className="sellers__body__content" 
          key={i}
          onClick={()=> sellerInfoDisplay(item)}
          >
            <div className="sellers__body__content__profile">
              <img
                src={item.image}
                className="seller__detail__image"
                alt={item.username}
              />
              <span>{item.username}</span>
              {/* information that comes with buying the product */}
              <IoIosInformationCircleOutline
                className="sellers__body__content__profile__information cursor"
                size={20}
              />
            </div>
            <div className="sellers__body__content__product">
              <div className="image__container">
                {item.productImage.length > 0
                  ? item.productImage.map((imgItem, i) => (
                      <img src={imgItem} alt="product images" key={i} />
                    ))
                  : item.globalProductImage.map((parentImage, i) => (
                      <img src={parentImage} alt="pic" key={i} />
                    ))}
              </div>
              <span>{item.productInstruction}</span>
              <div className="product__price">
                <div>
                  <span className="currency"> {item.price[0].currency} </span>
                  <span className="figure">{item.price[0].figure}</span>
                  <small className="decima">.00</small>
                  <IoIosArrowDropdown
                    className="sellers__product__price__currency"
                    size={20}
                  />
                </div>
                <div>{item.productCount} </div>
              </div>

              {/* Fairly used or new. This will be available for electronics products */}
              <div className="sellers__body__content__product__icons">
                <div>
                  <IoIosBasket className="cursor" size={25} />
                  <span>Basket</span>
                </div>
                <div>
                  <IoIosShareAlt className="cursor" size={25} />
                  <span>Share</span>
                </div>
                <div>
                  <IoIosFlame
                    className="cursor"
                    style={{ color: "#b50303" }}
                    size={25}
                  />
                  <span>Quick pay</span>
                </div>
                <div>
                  <IoIosBookmark className="cursor" size={25} />
                  <span>Save</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SellersCanvas;
