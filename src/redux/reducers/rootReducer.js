import { combineReducers } from "redux";
import {
  displayAvailableSellersReducer,
  displayGlobalProductInfoReducer,
  sidebarReducer,
  sideMenuContentReducer,
  topMenuDataReducer,
} from "./canvas";

import {
  videoReducer,
  categoryReducer,
  globalProductReducer,
} from "../reducers";

const rootReducer = combineReducers({
  globalProductStoreInfo: displayGlobalProductInfoReducer,
  category: categoryReducer,
  video: videoReducer,
  globalProduct: globalProductReducer,
  availableSellers: displayAvailableSellersReducer,
  sidebar: sidebarReducer,
  sideMenuContent: sideMenuContentReducer,
  topMenuData: topMenuDataReducer,
});

export default rootReducer;
