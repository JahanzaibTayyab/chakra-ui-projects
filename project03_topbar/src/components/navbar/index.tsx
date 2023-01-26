"use client";

import React from "react";
import { Box, Container, Text, Flex, Icon, Link } from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";
import {
  MdLocationPin,
  MdLocalGroceryStore,
  MdContactMail,
} from "react-icons/md";
const NavBar = () => (
  <Box as="nav" bg="#571F9C" width="full" minH={50}>
    <Container px={50} maxWidth="container.lg" color={"white"}>
      <Flex
        justify={"space-between"}
        alignItems={"center"}
        minH={50}
        direction={{ base: "column", sm: "row" }}
      >
        <Box>
          <Text fontSize={"sm"}>
            <EmailIcon mr={4} />
            info@example.com
          </Text>
        </Box>
        <Flex gap={4}>
          <Flex alignItems={"center"} borderRightWidth={1}>
            <Icon as={MdLocationPin} mr={1} />
            <Link fontSize="small" mr={2}>
              {" "}
              Branches
            </Link>
          </Flex>
          <Flex alignItems={"center"} borderRightWidth={1}>
            <Icon as={MdLocalGroceryStore} mr={1} />
            <Link fontSize="small" mr={2}>
              Stores
            </Link>
          </Flex>
          <Flex alignItems={"center"}>
            <Icon as={MdContactMail} mr={1} />
            <Link fontSize="small">Contact us</Link>
          </Flex>
        </Flex>
      </Flex>
    </Container>
  </Box>
);
export default NavBar;
