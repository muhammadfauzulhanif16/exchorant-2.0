import {
  AspectRatio,
  Box,
  HStack,
  Image,
  Skeleton,
  Stack,
  StackProps,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import * as React from "react";
// import { FavouriteButton } from "../../../common/FavouriteButton";
import { PriceTag } from "../../../common/PriceTag";
import { Product } from "../../../MockAPI/_data";
import { useNavigate } from "react-router-dom";
import { Rating } from "../../../common/Rating";

interface Props {
  product: Product;
  rootProps?: StackProps;
}

export const ProductCard = (props: Props) => {
  const { product, rootProps } = props;
  const {
    title,
    image,
    pricePerServing,
    id,
    spoonacularScore,
    aggregateLikes,
  } = product;
  const navigate = useNavigate();

  const handleClick = (id: number) => {
    navigate(`/dish/${id}`);
  };

  return (
    <Stack
      onClick={() => handleClick(id)}
      key={id}
      spacing={useBreakpointValue({ base: "4", md: "5" })}
      {...rootProps}
      cursor="pointer"
    >
      <Box position="relative">
        <AspectRatio ratio={4 / 3}>
          <Image
            src={image}
            alt={title}
            draggable="false"
            fallback={<Skeleton />}
            borderRadius={useBreakpointValue({ base: "md", md: "xl" })}
          />
        </AspectRatio>

        {/*<FavouriteButton*/}
        {/*  position="absolute"*/}
        {/*  top="4"*/}
        {/*  right="4"*/}
        {/*  aria-label={`Add ${title} to your favourites`}*/}
        {/*/>*/}
      </Box>

      <Stack>
        <Stack spacing="1">
          <Text
            fontWeight="medium"
            color={useColorModeValue("gray.700", "gray.400")}
          >
            {title}
          </Text>

          <HStack>
            <Rating defaultValue={spoonacularScore} size="sm" />
            <Text>({aggregateLikes})</Text>
          </HStack>

          <PriceTag price={pricePerServing} currency="USD" />
        </Stack>
      </Stack>
    </Stack>
  );
};
