import { API } from "../API";
import { DishActType } from "../actionType";
import { APIKey } from "../API";

export const DishCarouselAct = () => async (dispatch) => {
  try {
    const response = await API({
      method: "get",
      url: `/recipes/random?number=100&apiKey=${APIKey}`,
    });

    dispatch({
      type: DishActType.getDishCarousel,
      payload: response.data,
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
      payload: response.data,
    });
  } catch (e) {
    console.log(e);
  }
};
