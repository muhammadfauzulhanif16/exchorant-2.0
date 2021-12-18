import React, { useEffect } from "react";
import { ProductCard } from "./ProductCard";
import { ProductGrid } from "./ProductGrid";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { DishSummaryAct } from "../../../../stores/actions";
import { Section } from "../../../common/Section";

export const Dish = () => {
  const dispatch = useDispatch(),
    dishList = useSelector(
      (state: RootStateOrAny) => state.DishReducer.dishSummary
    );

  useEffect(() => {
    dispatch(DishSummaryAct());
  }, [dispatch]);

  return (
    <Section
      container
      header
      title="DISHES"
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
