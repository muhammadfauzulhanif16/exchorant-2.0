import { API } from "../API";
import { DishActType } from "../actionType";

export const DishAct = () => async (dispatch) => {
  try {
    const response = await API({
      method: "get",
    });

    dispatch({
      type: DishActType.getDish,
      payload: response.data,
    });
  } catch (e) {
    console.log(e);
  }
};
