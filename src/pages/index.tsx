import Head from "next/head";
import { Menu } from "../components/navbar";
import { Container, Flex, Box, Heading } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Head>
        <title>VegBook | Home</title>
      </Head>

      <Menu />
      <Flex
        as="main"
        backgroundImage="url('/hero.jpg')"
        bgRepeat="no-repeat"
        backgroundSize="cover"
        bgPosition="center"
        alignItems="center"
        height="100vh"
        justifyContent="center"
      >
        <Flex
          direction="column"
          alignItems="center"
          justifyContent="center"
          ml="auto"
          pr={{ lg: "2rem", sm: "0" }}
        >
          <Box maxWidth="400">
            <Heading
              color="#000000"
              fontSize={{ base: "75px", md: "65px", sm: "55", lg: "75px" }}
            >
              Simple and Tasty Recipes
            </Heading>
          </Box>
        </Flex>
      </Flex>
    </>
  );
}
