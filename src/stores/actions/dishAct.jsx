import { API } from "../API";
import { DishActType } from "../actionType";
import { APIKey } from "../API";

export const DishAct = () => async (dispatch) => {
  try {
    const response = await API({
      method: "get",
      url: `/recipes/random?number=100&apiKey=${APIKey}`,
    });

    dispatch({
      type: DishActType.getDish,
      payload: response.data.recipes,
    });
  } catch (e) {
    console.log(e);
  }
};

export const DishSummaryAct = () => async (dispatch) => {
  try {
    const response = await API({
      method: "get",
      url: `/recipes/random?number=8&apiKey=${APIKey}`,
    });

    dispatch({
      type: DishActType.getDishSummary,
      payload: response.data.recipes,
    });
  } catch (e) {
    console.log(e);
  }
};

export const DishDetailAct = (id) => async (dispatch) => {
  try {
    const response = await API({
      method: "get",
      url: `/recipes/${id}/information?apiKey=${APIKey}`,
    });

    dispatch({
      type: DishActType.getDishDetail,
      payload: response.data,
    });
  } catch (e) {
    console.log(e);
  }
};

export const AddDishFavAct = (dishObj) => (dispatch) => {
  try {
    dispatch({
      type: DishActType.addDishFav,
      payload: dishObj,
    });
  } catch (e) {
    console.log(e);
  }
};

export const RemoveDishFavAct = (id) => (dispatch) => {
  dispatch({
    type: DishActType.getDish,
    id,
  });
};
