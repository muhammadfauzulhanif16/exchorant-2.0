import { useEffect } from "react";

import { ProductGrid } from "../Home/Dish/ProductGrid";
// import { products } from "../../MockAPI/_data";
import { ProductCard } from "../Home/Dish/ProductCard";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { DishAct } from "../../../stores/actions";
import { Section } from "../../common/Section";

export const Dish = () => {
  const dispatch = useDispatch(),
    dishList = useSelector((state: RootStateOrAny) => state.DishReducer.dish);
  console.log("dishList", dishList);

  useEffect(() => {
    dispatch(DishAct());
  }, [dispatch]);

  return (
    <Section
      container
      header
      title="DISH"
      description="A better way to deal with hunger"
      rootProps={{ flexDirection: "column", justifyContent: "center", py: 16 }}
    >
      <ProductGrid>
        {dishList.map((product: any) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ProductGrid>
    </Section>
  );
};
