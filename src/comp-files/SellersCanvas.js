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
import { useDispatch, useSelector } from "react-redux";
import "../comp-files/app-style/_sellersCanvas.scss";
import {
  displayAvailableSellers,
  globalProductStoreInfo,
} from "../redux/actions";
import { generatePublicUrl } from "../utilities-config/urlConfig";
import { ContentLoading, DataLoading } from "./hoc/Loading";

const SellersCanvas = ({ show, hide }) => {
  const dispatch = useDispatch();
  const sellers = useSelector((state) => state.selectedGlobalItem);

  const close = () => {
    hide(false);
  };

  const icons = [
    {
      name: "Basket",
      icon: IoIosBasket,
      size: 40
    },
    {
      name: "Quick pay",
      icon: IoIosFlame,
      size: 25
    },
    
    {
      name: "Save",
      icon: IoIosBookmark,
      size: 25
    },
    
    {
      name: "Share",
      icon: IoIosShareAlt,
      size: 25
    }
  ];

  const sellerInfoDisplay = (clickedSeller) => {};
  return (
    <div
      className={show ? "sellers__canvas open" : "sellers__canvas"}
    >
      <div className="contain">
        <div className="contain__heading">
          <div className="heading__bar">
            <IoIosClose
              className="icons icons__cancel"
              onClick={close}
              size={40}
            />
          </div>
          <div className="contain__heading__location">
            <input type="search" defaultValue="Ikeja" />
          </div>
          <h4>
            <span>10 </span>Sellers in your location
          </h4>
        </div>
        
          {sellers.loading
            ? DataLoading("sellers")
            : sellers.data.map((item, index) => (
              <div className="contain__content" key={index}>
                  <div className="contain__content__profile">
                    <img  src={
                  item.sellerId.image.length > 0
                    ? generatePublicUrl( item.sellerId.image[0].img)
                    : "/logo.png"
                } alt={item.sellerId.username} />
                    <span>{item.sellerId.username}</span>
                    <span className="contain__content__profile__information">
                      <IoIosInformationCircleOutline
                        className="icons icons__information"
                        size={20}
                      />
                    </span>
                  </div>
                  <div className="contain__content__product">
                    <div className="image__contain">
                      <img src={
                  item.sellerId.image.length > 0
                    ? generatePublicUrl( item.sellerId.image[0].img)
                    : "/logo.png"
                } alt="" />
                
                    </div>
                    <span>{item.productName}</span>
                    <div className="product__price">
                      <div>
                        <span className="currency">$</span>
                        <span className="figure">200</span>
                      </div>
                    </div>
                    <div className="contain__content__product__icons">
                    {icons.map((item, index) =>
                      <div key={index} className="icons" size={item.size}>
                      <item.icon />
                        <span>{item.name}</span> 
                      </div>
                    )}
                    </div>
                  </div>
                  </div>
              ))}
      </div>
    </div>
  );
};

export default SellersCanvas;
