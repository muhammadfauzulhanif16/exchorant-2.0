import { useEffect } from "react";
import { Carousel as Slide } from "react-bootstrap";
import "./style.scss";
import { useSelector, useDispatch } from "react-redux";
import { DishAct } from "../../stores/actions/dishAct";

export const Carousel = () => {
  const { Item } = Slide,
    dispatch = useDispatch(),
    imageList = useSelector(({ DishReducer }) => DishReducer.dish.recipes);

  useEffect(() => {
    dispatch(DishAct());
  }, [dispatch]);

  return (
    <Slide>
      {imageList &&
        imageList?.map(
          (
            {
              image = "https://cdn-icons-png.flaticon.com/512/4689/4689733.png",
            },
            id
          ) => {
            return (
              <Item key={id}>
                <img className="d-block w-100" src={image} alt="First slide" />
              </Item>
            );
          }
        )}
    </Slide>
  );
};
