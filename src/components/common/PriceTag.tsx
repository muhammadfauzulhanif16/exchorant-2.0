import { Text, TextProps, useColorModeValue as mode } from "@chakra-ui/react";
import * as React from "react";

interface PriceTagProps {
  currency: string;
  price: number;
  salePrice?: number;
  priceProps?: TextProps;
  salePriceProps?: TextProps;
}

export type FormatPriceOptions = { locale?: string; currency?: string };

export function formatPrice(
  value: number,
  opts: { locale?: string; currency?: string } = {}
) {
  const { locale = "en-US", currency = "USD" } = opts;
  const formatter = new Intl.NumberFormat(locale, {
    currency,
    style: "currency",
    maximumFractionDigits: 2,
  });
  return formatter.format(value);
}

export const PriceTag = (props: PriceTagProps) => {
  const { price, currency, salePrice, priceProps } = props;
  return (
    <Price isOnSale={!!salePrice} textProps={priceProps}>
      {formatPrice(price, { currency })}
    </Price>
  );
};

interface PriceProps {
  children?: React.ReactNode;
  isOnSale?: boolean;
  textProps?: TextProps;
}

const Price = (props: PriceProps) => {
  const { isOnSale, children, textProps } = props;
  const defaultColor = mode("gray.700", "gray.400");
  const onSaleColor = mode("gray.400", "gray.700");
  const color = isOnSale ? onSaleColor : defaultColor;
  return (
    <Text
      as="span"
      fontWeight="medium"
      color={color}
      textDecoration={isOnSale ? "line-through" : "none"}
      {...textProps}
    >
      {children}
    </Text>
  );
};
