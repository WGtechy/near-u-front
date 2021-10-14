import { canvas } from "../../constants";

const displayAvailableSellers = (data, display) =>  (dispatchAction) => { // get from backend
  const info = {data, display}
  window.localStorage.setItem("displayAvailableSellers", JSON.stringify(info));
  dispatchAction({
    type: canvas.SELLERS_CANVAS_SWITCH,
    payload: { data, display },
  });
};

const globalProductStoreInfo = (data) => dispatchAction =>{
  // Post request
  const {product, clickedSeller, sellers, display} = data ;
  window.localStorage.setItem("globalProductStoreInfo", JSON.stringify(data));
  dispatchAction({
    type: canvas.GLOBAL_PRODUCT_CANVAS_SUCCESS,
    payload: { product, display, clickedSeller}
  })
};



const sidebarAction = (display) => (dispatchAction) => {
  dispatchAction({
    type: canvas.SIDEBAR_SWITCH,
    payload: { display: display },
  });
};

const sideMenuContentAction = (display) => (dispatchAction) => {
  dispatchAction({
    type: canvas.SIDEMENU_CONTENT_SWITCH,
    payload: { display: display },
  });
};

const topMenuData = (data) => (dispatchAction) => {
  dispatchAction({
    type: canvas.MENUDATA_SUCCESS,
    payload: data,
  });
};

export { displayAvailableSellers, sidebarAction, sideMenuContentAction, topMenuData, globalProductStoreInfo };
