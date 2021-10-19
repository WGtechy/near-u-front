import initState from "../../state";
import { canvas } from "../../constants";

const displayAvailableSellersReducer = (
  state = initState.availableSellers,
  action
) => {
  switch (action.type) {
    case canvas.SELLERS_CANVAS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case canvas.SELLERS_CANVAS_SWITCH: //Here the action is directly in this document, not in an action file like most documents
      return {
        ...state,
        data: action.payload.data,
        display: action.payload.display,
        loading: false,
      };
    default:
      return state;
  }
};

const selectedGlobalStoreItemReducer =( state = initState.selectedGlobalStoreItem, action) => {
  switch(action.type){
    case canvas.GLOBAL_PRODUCT_CANVAS_REQUEST :
      return {
        ...state,
        loading: true,
        error: null,
      }
      payload: {productInfo: product, availableSellers: response.data.products }

    
    case canvas.GLOBAL_PRODUCT_CANVAS_SUCCESS : 
    return {
      ...state,
      loading: false,
      product: action.payload.product,
      clickedSeller: action.payload.clickedSeller,
      display: action.payload.display
    }

    default: return state;
  }
}

const sidebarReducer = (state = initState.sidebar, action) => {
  switch (action.type) {
    case canvas.SIDEBAR_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case canvas.SIDEBAR_SWITCH: //Here the action is directly in this document, not in an action file like most documents
      return {
        ...state,
        display: action.payload.display,
        loaded: true,
      };
    default:
      return state;
  }
};

const sideMenuContentReducer = (state = initState.sideMenuContent, action) => {
  switch (action.type) {
    case canvas.SIDEMENU_CONTENT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case canvas.SIDEMENU_CONTENT_SWITCH: //Here the action is directly in this document, not in an action file like most documents
      return {
        ...state,
        display: action.payload.display,
        loaded: true,
      };
    default:
      return state;
  }
};

const topMenuDataReducer = (state = initState.topMenuData, action) => {
  switch (action.type) {
    case canvas.MENUDATA_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case canvas.MENUDATA_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };

    default:
      return state;
  }
};

export {
  displayAvailableSellersReducer,
  sidebarReducer,
  sideMenuContentReducer,
  topMenuDataReducer,
  displayGlobalProductInfoReducer,
};
