"use client";
import Image from "next/image";
import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Flex,
  HStack,
  IconButton,
  useBreakpointValue,
  useColorModeValue,
  Collapse,
  useDisclosure,
  Stack,
  Link,
  Text,
} from "@chakra-ui/react";
import * as React from "react";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import Logo from "public/logo.png";

export default function Home() {
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Box as="section" pb={{ base: "12", md: "24" }}>
      <Box as="nav">
        <Container py={{ base: "4", lg: "5" }} maxW="container.lg">
          <HStack spacing="10" justify="space-between">
            <Image src={Logo} alt="logo" height={64} />
            {isDesktop ? (
              <Flex justify="end" flex="1">
                <ButtonGroup variant="link" spacing="8" ml={20}>
                  {["How it Works", "Crypto", "Marketplace", "Sign in"].map(
                    (item) => (
                      <Button
                        key={item}
                        _hover={{
                          outline: "none",
                          transform: "translateY(-2px)",
                        }}
                        color="black"
                      >
                        {item}
                      </Button>
                    )
                  )}
                </ButtonGroup>
                <HStack spacing="3">
                  <Button
                    bg={"black"}
                    color="white"
                    borderRadius={"10px"}
                    padding={"0px 40px"}
                    minWidth={10}
                    borderWidth={2}
                    borderColor="black"
                    marginLeft={24}
                    h={"40px"}
                    variant="outline"
                    _hover={{
                      color: "black",
                      bg: "white",
                    }}
                  >
                    Get Started
                  </Button>
                </HStack>
              </Flex>
            ) : (
              <IconButton
                onClick={onToggle}
                variant="ghost"
                icon={
                  isOpen ? (
                    <AiOutlineClose fontSize="1.25rem" />
                  ) : (
                    <FiMenu fontSize="1.25rem" />
                  )
                }
                aria-label="Open Menu"
              />
            )}
          </HStack>
        </Container>
      </Box>
      {isOpen && <MobileNav />}
    </Box>
  );
}

const MobileNav = () => {
  return (
    <Stack p={4} display={{ lg: "none" }} boxShadow="dark-lg" pt={4}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
      <Flex flex={1} justifyContent="space-between" gap={2}>
        <Button
          w="full"
          color="black"
          colorScheme={"white"}
          _hover={{
            color: "black",
            bg: "gray.50",
          }}
        >
          Sign In
        </Button>
        <Button
          w="full"
          bg={"black"}
          color="white"
          borderRadius={"10px"}
          padding={"0px 40px"}
          minWidth={10}
          borderWidth={2}
          borderColor="black"
          h={"40px"}
          variant="outline"
          _hover={{
            color: "black",
            bg: "white",
          }}
        >
          Get Started
        </Button>
      </Flex>
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Stack onClick={children && onToggle} padding={4}>
      <Text fontWeight={"normal"} color={"gray.600"}>
        {label}
      </Text>
      <Stack mt={0} pl={4}>
        {children &&
          children.map((child) => (
            <Link
              key={child.label}
              py={2}
              href={child.href}
              fontWeight="bold"
              _hover={{
                outline: "none",
                transform: "translateY(-2px)",
              }}
              color="black"
            >
              {child.label}
            </Link>
          ))}
      </Stack>
    </Stack>
  );
};

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "About",
    children: [
      {
        label: "How it Works",
        href: "#",
      },
      {
        label: "Crypto",
        href: "#",
      },
    ],
  },
  {
    label: "Explore Marketplace",
    children: [
      {
        label: "Marketplace",
        href: "#",
      },
    ],
  },
];
