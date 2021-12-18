import React, { useEffect } from "react";
import { Flex, Heading, Text, Button, Center } from "@chakra-ui/react";
import { Carousel } from "../../common/Carousel";
import { useSelector, useDispatch, RootStateOrAny } from "react-redux";
import { DishAct } from "../../../stores/actions";
import { Section } from "../../common/Section";

export const Hero = () => {
  const dispatch = useDispatch(),
    dishImageList = useSelector(
      (state: RootStateOrAny) => state.DishReducer.dish
    );
  console.log(dishImageList);

  useEffect(() => {
    dispatch(DishAct());
  }, [dispatch]);

  return (
    <Section container>
      <Flex direction={["column", "column", "column", "row-reverse"]}>
        <Center w={["100%", "100%", "100%", "50%"]}>
          <Carousel data={dishImageList} />
        </Center>

        <Flex
          pr={[0, 0, 0, 16]}
          py={[4, 8, 16]}
          w={["full", "full", "full", "50%"]}
          direction="column"
          justify="space-between"
        >
          <Heading size="3xl">Delicious dishes from all over the world</Heading>

          <Text fontSize="xl" my={4}>
            A variety of upscale food & drinks with selected 5-star quality
            ingredients from various corners of the country that you will not be
            able to find anywhere.
          </Text>

          <Button
            size="lg"
            colorScheme="green"
            py={7}
            w={["100%", "75%", "50%"]}
            fontSize="md"
            _focus={{ boxShadow: "none" }}
          >
            Looking for a Dish
          </Button>
        </Flex>
      </Flex>
    </Section>
  );
};
