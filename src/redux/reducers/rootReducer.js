import { combineReducers } from "redux";
import {
  selectedGlobalStoreSellerReducer,
  selectedGlobalStoreItemReducer,
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
  selectedGlobalItem: selectedGlobalStoreItemReducer,
  selectedSeller: selectedGlobalStoreSellerReducer,
  category: categoryReducer,
  video: videoReducer,
  globalProduct: globalProductReducer,
  sidebar: sidebarReducer,
  sideMenuContent: sideMenuContentReducer,
  topMenuData: topMenuDataReducer,
});

export default rootReducer;
