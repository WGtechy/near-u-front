import Axios from "../../../utilities-config/axios";
import { canvas } from "../../constants";

const displayAvailableSellers = (data, display) =>  (dispatchAction) => { // get from backend
  const info = {data, display}
  window.localStorage.setItem("displayAvailableSellers", JSON.stringify(info));
  dispatchAction({
    type: canvas.SELLERS_CANVAS_SWITCH,
    payload: { data, display },
  });
};

const selectedGlobalStoreItem = product => async dispatchAction =>{
  
  dispatchAction({type: canvas.GLOBAL_PRODUCT_CANVAS_REQUEST})
  const response = await Axios.post("/global-products/selected", product._id);
  console.log({productInfo: product, response})
  try{
    if(response.status === 200) {
      window.localStorage.setItem("selectedGlobalStoreItem", JSON.stringify(response.data));
      dispatchAction({
        type: canvas.GLOBAL_PRODUCT_CANVAS_SUCCESS,
        payload: {productInfo: product, availableSellers: response.data.products }
      })
    } else {
      dispatchAction({
        type: canvas.GLOBAL_PRODUCT_CANVAS_FAIL,
        payload: {error: response.data.error}
      })
    }

  }catch(error){
    console.log(error)
  }
 
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

export { displayAvailableSellers, sidebarAction, sideMenuContentAction, topMenuData, selectedGlobalStoreItem };
