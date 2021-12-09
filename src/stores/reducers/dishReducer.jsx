import { DishActType } from "../actionType";

const initState = {
  dishCarousel: [],
  dishSummary: [],
};

export const DishReducer = (state = initState, action) => {
  switch (action.type) {
    case DishActType.getDishCarousel:
      return {
        ...state,
        dishCarousel: action.payload,
      };
    case DishActType.getDishSummary:
      return {
        ...state,
        dishSummary: action.payload,
      };
    default:
      return state;
  }
};
