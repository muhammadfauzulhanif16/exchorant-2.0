import {
  VisuallyHidden,
  Image,
  Heading,
  HStack,
  Button,
  Box,
  VStack,
  useDisclosure,
  Tabs,
  TabList,
  Tab,
  Icon,
  Collapse,
} from "@chakra-ui/react";
import Exchorant from "../../../assets/icons/ios/29.png";
import { Link } from "react-router-dom";
import { NavList } from "./NavList";
import { HiMenu } from "react-icons/hi";
// import { ColorModeSwitcher } from "../../../ColorModeSwitcher";
import { Section } from "../Section";

export const Header = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Section
      container
      rootProps={{
        as: "header",
        py: 4,
        pos: "sticky",
        top: 0,
        bgColor: "gray.50",
        zIndex: 1,
      }}
    >
      <HStack justify="space-between">
        <Link to="">
          <HStack>
            <Image src={Exchorant} alt="Exchorant" />
            <VisuallyHidden>Exchorant</VisuallyHidden>

            <Heading size="md">Exchorant</Heading>
          </HStack>
        </Link>

        <HStack d={{ base: "none", md: "inline-flex" }}>
          <Tabs variant="unstyled">
            <TabList>
              {NavList.map(({ title, to }, id) => {
                return (
                  <Link to={to} key={id}>
                    <Tab
                      p={0}
                      _focus={{ boxShadow: "none" }}
                      _selected={{ color: "green.500" }}
                    >
                      <Button variant="ghost" _focus={{ boxShadow: "none" }}>
                        {title}
                      </Button>
                    </Tab>
                  </Link>
                );
              })}
            </TabList>
          </Tabs>

          {/*<ColorModeSwitcher />*/}
        </HStack>

        {/*<HStack d={{ base: "none", md: "inline-flex" }}>*/}
        {/*  <Link to="sign-in">*/}
        {/*    <Button colorScheme="green" _focus={{ boxShadow: "none" }}>*/}
        {/*      Sign In*/}
        {/*    </Button>*/}
        {/*  </Link>*/}
        {/*  <Link to="sign-up">*/}
        {/*    <Button variant="ghost" _focus={{ boxShadow: "none" }}>*/}
        {/*      Sign Up*/}
        {/*    </Button>*/}
        {/*  </Link>*/}
        {/*</HStack>*/}

        <Box display={{ base: "inline-flex", md: "none" }}>
          <Button
            onClick={onToggle}
            variant="ghost"
            // my={2}
            _focus={{ boxShadow: "none" }}
          >
            <Icon as={HiMenu} />
          </Button>
        </Box>
      </HStack>

      <Collapse in={isOpen}>
        <VStack
          pos="relative"
          top={0}
          flexDirection="column"
          rounded="sm"
          shadow="sm"
        >
          {NavList.map(({ title, to }, id) => {
            return (
              <Link to={to} key={id}>
                <Button variant="ghost" _focus={{ boxShadow: "none" }}>
                  {title}
                </Button>
              </Link>
            );
          })}
        </VStack>
      </Collapse>
    </Section>
  );
};
