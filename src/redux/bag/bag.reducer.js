import BagActionTypes from "./bag.types";

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
        bagItems: [...state.bagItems, action.payload],
      };
    default:
      return state;
  }
};
export default bagReducer;
