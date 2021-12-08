import { useEffect } from "react";
import { Card, Button, Stack } from "react-bootstrap";
import "./style.scss";
import { useDispatch, useSelector } from "react-redux";
import { DishAct } from "../../../../stores/actions/dishAct";
import { Section } from "../../../common/Section";

export const Dish = () => {
  const { Img, Body, Title } = Card,
    dispatch = useDispatch(),
    dishList = useSelector(({ DishReducer }) => DishReducer.dish.recipes);
  console.log("ini dish list", dishList);

  useEffect(() => {
    dispatch(DishAct());
  }, [dispatch]);

  return (
    <Section
      title="DISHES"
      shortDesc="A better way to deal with hunger"
      longDesc="Overcome hunger by eating delicious food"
    >
      <Stack direction="horizontal" gap={3} className="w-100 mb-5">
        {dishList &&
          dishList?.map(({ image, title, extendedIngredients }, id) => {
            return (
              <Card key={id} className="h-100 w-25 border-0 bg-white">
                {image ? (
                  <Img variant="top" src={image} />
                ) : (
                  <div
                    className="d-flex justify-content-center align-items-center"
                    style={{ height: "11rem" }}
                  >
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/4689/4689733.png"
                      alt=""
                      width="100rem"
                    />
                  </div>
                )}

                <Body className="px-0">
                  <Title>{title}</Title>
                </Body>
              </Card>
            );
          })}
      </Stack>

      <Button size="lg" className="shadow-lg col-2 fs-6 p-2 border-0">
        More Dish
      </Button>
    </Section>
  );
};
