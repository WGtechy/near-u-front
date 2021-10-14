import initState from "../../state";
import {globalProductConstant} from "../../constants";

export const globalProductReducer = (state = initState.globalProduct, action) => {
    switch(action.type){
        case globalProductConstant.GET_GLOBALPRODUCT_BY_SLUG_REQUEST: 
        return {
            ...state,
            message: action.payload.message
        }

        case globalProductConstant.GET_GLOBALPRODUCT_BY_SLUG_SUCCESS:
            return {
                ...state,
                globalProducts: action.payload.globalProducts,
                loading: false,
                message: action.payload.message
            }

        case globalProductConstant.GET_GLOBALPRODUCT_BY_SLUG_FAIL:
            return {
                ...state,
                error: action.payload.error,
                message: action.payload.message
            }

        default: return state;
    }
};