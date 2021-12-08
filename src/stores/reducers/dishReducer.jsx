import { DishActType } from "../actionType";

const initState = {
  dish: [],
};

export const DishReducer = (state = initState, action) => {
  switch (action.type) {
    case DishActType.getDish:
      return {
        ...state,
        dish: action.payload,
      };
    default:
      return state;
  }
};
