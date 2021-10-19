import initState from "../../state";
import { canvas } from "../../constants";

const selectedGlobalStoreSellerReducer = (
  state = initState.selectedSellerInfo,
  action
) => {
  switch (action.type) {
   

    case canvas.SELECTED_SELLER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case canvas.SELECTED_SELLER_SUCCESS: //Here the action is directly in this document, not in an action file like most documents
      return {
        ...state,
        info: action.payload.data,
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
    
    case canvas.GLOBAL_PRODUCT_CANVAS_SUCCESS : 
    return {
      ...state,
      loading: false,
      data: action.payload.data,
    }

    case canvas.GLOBAL_PRODUCT_CANVAS_FAIL :
      return {
        ...state,
        loading: false,
        error: action.payload.error
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
  selectedGlobalStoreSellerReducer,
  selectedGlobalStoreItemReducer,
  sidebarReducer,
  sideMenuContentReducer,
  topMenuDataReducer,
};
