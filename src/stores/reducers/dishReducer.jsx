import { DishActType } from "../actionType";

const initState = {
  dish: [],
  dishSummary: [],
  dishDetail: [],
  addDishFav: [],
  removeDishFav: [],
};

export const DishReducer = (state = initState, action) => {
  switch (action.type) {
    case DishActType.getDish:
      return {
        ...state,
        dish: action.payload,
      };
    case DishActType.getDishSummary:
      return {
        ...state,
        dishSummary: action.payload,
      };
    case DishActType.getDishDetail:
      return {
        ...state,
        dishDetail: action.payload,
      };
    case DishActType.addDishFav:
      return {
        ...state,
        addDishFav: [...state.addDishFav, action.payload],
      };
    case DishActType.removeDishFav:
      return {
        ...state,
        removeDishFav: action.payload,
      };
    default:
      return state;
  }
};
