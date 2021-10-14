import Axios from "../../../utilities-config/axios";
import { globalProductConstant } from "../../constants";

export const getProductsBySlug = (slug) => async (dispatch) => {
  const response = await Axios.get(`/global-products/${slug}`);
  console.log(response);

  dispatch({
    type: globalProductConstant.GET_GLOBALPRODUCT_BY_SLUG_REQUEST,
    payload: { message: "Fetching data" },
  });

  try {
    dispatch({
      type: globalProductConstant.GET_GLOBALPRODUCT_BY_SLUG_SUCCESS,
      payload: {
        globalProducts: response.data.globalProducts,
        message: "Data fetched successfully",
      },
    });
  } catch (error) {
    dispatch({
      type: globalProductConstant.GET_GLOBALPRODUCT_BY_SLUG_FAIL,
      payload: { error: error, message: "Failed to fetch data" },
    });
  }
};
