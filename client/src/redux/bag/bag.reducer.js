import BagItem from "../../components/bag-components/bag-item/bag-item.component";
import BagActionTypes from "./bag.types";
import { addItemToBag, removeItem } from "./bag.utils";

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
    case BagActionTypes.CLEAR_ITEM_FROM_BAG:
      return {
        ...state,
        bagItems: state.bagItems.filter(
          (bagItem) => bagItem.id !== action.payload.id
        ),
      };
    case BagActionTypes.REMOVE_ITEM:
      return {
        ...state,
        bagItems: removeItem(state.bagItems, action.payload),
      };
    case BagActionTypes.CLEAR_BAG:
      return {
        ...state,
        bagItems: [],
      };
    default:
      return state;
  }
};
export default bagReducer;
