import React from "react";
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
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleToggle = () => (isOpen ? onClose() : onOpen());

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      color="white"
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
      >
        <Text>Browse</Text>
        <Text>Trending</Text>
        <Text>Contribute</Text>
        <Text>Community</Text>
      </Stack>

      <Box
        display={{ base: isOpen ? "block" : "none", md: "block" }}
        mt={{ base: 4, md: 0 }}
      >
        <Button
          display="flex"
          justifyContent="center"
          alignItems="center"
          outline="none"
          variant="ghost"
        >
          <span>Search</span>
          <SearchIcon ml={3} />
        </Button>
      </Box>
    </Flex>
  );
}
