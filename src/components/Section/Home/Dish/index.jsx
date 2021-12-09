import { useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import "./style.scss";
import { useDispatch, useSelector } from "react-redux";
import { DishSummaryAct } from "../../../../stores/actions/dishAct";
import { Section } from "../../../common/Section";

export const Dish = () => {
  const { Img, Body, Title } = Card,
    dispatch = useDispatch(),
    dishList = useSelector(
      ({ DishReducer }) => DishReducer.dishSummary.recipes
    );

  useEffect(() => {
    dispatch(DishSummaryAct());
  }, [dispatch]);

  return (
    <Section
      title="DISHES"
      shortDesc="A better way to deal with hunger"
      longDesc="Overcome hunger by eating delicious food"
    >
      <div className="mb-5 row row-cols-2 row-cols-lg-4 w-100">
        {dishList &&
          dishList?.map(({ image, title, extendedIngredients }, id) => {
            return (
              <div key={id} className="card col border-0 bg-white">
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
              </div>
            );
          })}
      </div>

      <Button
        size="lg"
        className="isCTA shadow-lg col-8 col-lg-2 fs-6 py-3 border-0"
      >
        More Dish
      </Button>
    </Section>
  );
};
