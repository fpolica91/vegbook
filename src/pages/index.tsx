import Head from "next/head";
import { Menu } from "../components/navbar";
import { Flex, Stack, Divider, Heading, Box } from "@chakra-ui/react";
import { Preview } from "../components/Preview";
import { Hero } from "../components/Hero";

export default function Home() {
  return (
    <>
      <Head>
        <title>VegBook | Home</title>
      </Head>
      <Menu />
      <Hero />
      <Divider orientation="horizontal" />

      <Flex as="article" justifyContent="center" flexDir="column" mt={12}>
        <Box display="flex" mb={8} mt={10} justifyContent="center">
          <Heading fontWeight="normal">Latest</Heading>
        </Box>
        <Stack
          direction={["column", "row"]}
          spacing={8}
          justifyContent="center"
        >
          <Preview
            title="fruit"
            description="Simple Juice Recipes to boost your immune system"
            imageUrl="/oranje_thee.jpg"
            readTime="5 mins read"
          />

          <Preview
            title="fruit"
            description="Simple Juice Recipes to boost your immune system"
            imageUrl="/papaja.jpg"
            readTime="5 mins read"
          />
          <Preview
            title="fruit"
            description="Simple Juice Recipes to boost your immune system"
            imageUrl="/wortels.jpg"
            readTime="5 mins read"
          />
        </Stack>
      </Flex>
    </>
  );
}
