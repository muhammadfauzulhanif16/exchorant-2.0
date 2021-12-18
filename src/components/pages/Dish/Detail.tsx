import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { DishDetailAct } from "../../../stores/actions";
// import { products } from "../../MockAPI/_data";
import {
  Image,
  Breadcrumb,
  BreadcrumbItem,
  Heading,
  Flex,
  Text,
  HStack,
  Box,
  Button,
} from "@chakra-ui/react";
import React from "react";
import { HiChevronRight } from "react-icons/hi";
import { BiDish, BiFlag, BiMoney } from "react-icons/bi";
import { Link } from "react-router-dom";
import { PriceTag } from "../../common/PriceTag";
import { Rating } from "../../common/Rating";

export const Detail = () => {
  const dispatch = useDispatch();
  const dishDetail = useSelector(
    (state: RootStateOrAny) => state.DishReducer.dishDetail
  );
  const {
    title,
    image,
    pricePerServing,
    readyInMinutes,
    spoonacularScore,
    aggregateLikes,
    cuisines,
    dishTypes,
    cheap,
    dairyFree,
    glutenFree,
    lowFodmap,
    sustainable,
    vegan,
    vegetarian,
    veryHealthy,
    veryPopular,
    diets,
  } = dishDetail;
  const detail = [
    { title: "Dish Types", icon: <BiDish />, info: dishTypes },
    { title: "Cuisines", icon: <BiFlag />, info: cuisines },
    { title: "Cheap", icon: <BiMoney />, info: cheap },
  ];

  const { id } = useParams();

  console.log("dishDetail", dishDetail);

  useEffect(() => {
    dispatch(DishDetailAct(id));
  }, [dispatch, id]);

  return (
    <Flex px={[4, 8, 16]} direction="column" justify="center" py={8}>
      <Breadcrumb
        spacing={2}
        pb={8}
        separator={<HiChevronRight color="gray.500" />}
        fontWeight="bold"
      >
        <BreadcrumbItem>
          <Link to="/">
            <Button _focus={{ boxShadow: "none" }} size="sm" variant="ghost">
              Home
            </Button>
          </Link>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <Link to="/dish">
            <Button _focus={{ boxShadow: "none" }} size="sm" variant="ghost">
              Dish
            </Button>
          </Link>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <Button _focus={{ boxShadow: "none" }} size="sm" variant="ghost">
            {title}
          </Button>
        </BreadcrumbItem>
      </Breadcrumb>

      <Flex>
        <Flex pr={16} w="40%" direction="column" justify="space-between">
          <Flex direction="column">
            <Heading size="lg" mb={4}>
              {title}
            </Heading>

            <PriceTag
              currency="USD"
              price={pricePerServing}
              priceProps={{ fontSize: "xl", fontWeight: "bold", mb: ".25rem" }}
            />

            <HStack>
              <Rating defaultValue={spoonacularScore} size="sm" />
              <Text>{aggregateLikes} reviews</Text>
            </HStack>

            <Box bg="gray.100" p={4} borderRadius={16}>
              {detail.map(({ title, icon, info }) => {
                return (
                  <HStack bg="green.100">
                    {icon}

                    <Flex align="center" bg="red.100">
                      {info === true ? (
                        <Button size="sm" colorScheme="blue">
                          {title}
                        </Button>
                      ) : (
                        info &&
                        info?.map((item: any) => {
                          return (
                            <Button size="sm" colorScheme="blue">
                              {item}
                            </Button>
                          );
                        })
                      )}
                    </Flex>
                  </HStack>
                );
              })}

              <Text>dairyFree: {dairyFree ? "Y" : "N"}</Text>
              <Text>glutenFree: {glutenFree ? "Y" : "N"}</Text>
              <Text>lowFodmap: {lowFodmap ? "Y" : "N"}</Text>
              <Text>sustainable: {sustainable ? "Y" : "N"}</Text>
              <Text>vegan: {vegan ? "Y" : "N"}</Text>
              <Text>vegetarian: {vegetarian ? "Y" : "N"}</Text>
              <Text>veryHealthy: {veryHealthy ? "Y" : "N"}</Text>
              <Text>veryPopular: {veryPopular ? "Y" : "N"}</Text>
              <Text>
                diets:
                {diets &&
                  diets?.map((item: any) => {
                    return <Button>{item}</Button>;
                  })}
              </Text>
              <Text>Ready to serve in : {readyInMinutes} minutes</Text>
            </Box>
          </Flex>
        </Flex>

        <Image src={image} alt={title} w="60%" borderRadius={16} />
      </Flex>
    </Flex>
  );
};
