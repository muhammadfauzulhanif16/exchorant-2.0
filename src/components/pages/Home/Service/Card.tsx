import {
  Box,
  Image,
  Stack,
  Text,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import * as React from "react";

interface FeatureProps {
  title: string;
  children: React.ReactNode;
  icon: string;
}

export const Card = (props: FeatureProps) => {
  const { title, children, icon } = props;
  return (
    <Stack
      spacing={{ base: "3", md: "6" }}
      direction={{ base: "row", sm: "column", md: "column", lg: "row" }}
    >
      <Image boxSize={10} src={icon} />
      <Stack spacing="1">
        <Text fontWeight="extrabold" fontSize="lg">
          {title}
        </Text>
        <Box color={mode("gray.600", "gray.400")}>{children}</Box>
      </Stack>
    </Stack>
  );
};
