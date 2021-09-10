import { Flex, Divider, Box, Heading, Input } from "@chakra-ui/react";
import Head from "next/head";
import { Menu } from "../../components/navbar";

export default function Contribute() {
  return (
    <>
      <Head>Vegbook | Contrinute</Head>
      <Menu />
      <Divider orientation="horizontal" />
      <Flex justifyContent="center" alignItems="center" flexDirection="column">
        <Box my={8} py={2}>
          <Heading as="h1" size="xl">
            Contribute
          </Heading>
        </Box>
        <Flex as="form" maxW="600px" w="100%">
          <Input />
        </Flex>
      </Flex>
    </>
  );
}
