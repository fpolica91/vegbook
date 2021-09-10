import { Flex, Box, Heading, Divider } from "@chakra-ui/react";
import Head from "next/head";
import { Menu } from "../../components/navbar";

export default function Trending() {
  return (
    <>
      <Head>
        <title>VegBook | Home</title>
      </Head>
      <Menu />
      <Divider orientation="horizontal" />
      <Flex as="main" justify="center" align="center">
        <Box my={8} py={2}>
          <Heading> Trending Page Coming Soon...</Heading>
        </Box>
      </Flex>
    </>
  );
}
