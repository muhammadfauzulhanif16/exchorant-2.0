import { ReactNode } from "react";
import { Box, BoxProps, Heading } from "@chakra-ui/react";

interface Props {
  container?: boolean;
  header?: boolean;
  title?: String;
  description?: String;
  rootProps?: BoxProps;
  children?: ReactNode;
}

export const Section = (props: Props) => {
  const { container, header, title, description, children, rootProps } = props,
    content = [
      { word: title, size: "sm", pb: 2 },
      { word: description, size: "xl", pb: 16 },
    ];

  return (
    <Box px={container ? [4, 8, 16] : ""} {...rootProps}>
      {header
        ? content.map(({ word, size, pb }, id) => {
            return (
              <Heading key={id} size={size} textAlign="center" pb={pb}>
                {word}
              </Heading>
            );
          })
        : ""}

      {children}
    </Box>
  );
};
