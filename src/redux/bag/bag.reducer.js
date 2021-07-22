import BagActionTypes from "./bag.types";
import { addItemToBag } from "./bag.utils";

const INITIAL_STATE = {
  hidden: true,
  bagItems: [],
};

const bagReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BagActionTypes.TOGGLE_BAG_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case BagActionTypes.ADD_ITEM:
      return {
        ...state,
        bagItems: addItemToBag(state.bagItems, action.payload),
      };
    default:
      return state;
  }
};
export default bagReducer;
