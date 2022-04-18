import React from "react";
import { Link as ChakraLink } from "@chakra-ui/react";
import Link from "next/link";
import { useAuth } from "../../hooks/auth";
import { ActiveLink } from "../ActiveLink";
import styles from "./navbar.module.scss";
import {
  Box,
  Stack,
  Flex,
  Text,
  Button,
  Image,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon, SearchIcon } from "@chakra-ui/icons";

export function Menu() {
  const { user } = useAuth();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleToggle = () => (isOpen ? onClose() : onOpen());

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding={6}
    >
      <Flex>
        <Image src="/Logo.svg" />
      </Flex>
      <Box onClick={handleToggle} display={{ base: "block", md: "none" }}>
        <HamburgerIcon />
      </Box>
      <Stack
        spacing={4}
        direction={{ base: "column", md: "row" }}
        display={{ base: isOpen ? "block" : "none", md: "flex" }}
        width={{ base: "full", md: "auto" }}
        alignItems="center"
        mt={{ base: 4, md: 0 }}
        mr="auto"
        ml="auto"
        className={styles.navbarComponent}
      >
        <Text>
          <Link href="/recipes/">
            <ChakraLink href="/recipes/">Browse</ChakraLink>
          </Link>
        </Text>
        {user && (
          <Text>
            <Link href="/profile/">
              <ChakraLink href="/profile/">Profile</ChakraLink>
            </Link>
          </Text>
        )}
        {!user && (
          <Text>
            <Link href="/register/">
              <ChakraLink href="/register/">Register </ChakraLink>
            </Link>
          </Text>
        )}

        <Text>
          <Link href="/contribute/">
            <ChakraLink href="/contribute/">Contribute </ChakraLink>
          </Link>
        </Text>
        {!user && (
          <Text>
            <Link href="/login/">
              <ChakraLink href="/login/">Login </ChakraLink>
            </Link>
          </Text>
        )}
      </Stack>

      <Box
        display={{ base: isOpen ? "block" : "none", md: "block" }}
        mt={{ base: 4, md: 0 }}
      >
        <Button variant="outline">
          <span>Search</span>
          <SearchIcon ml={3} />
        </Button>
      </Box>
    </Flex>
  );
}
