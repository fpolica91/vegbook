import { GetServerSideProps } from "next";
import Head from "next/head";
import { RichText } from "prismic-dom";
import { useState } from "react";
import {
  Flex,
  Heading,
  Box,
  Image,
  Text,
  Container,
  Divider,
} from "@chakra-ui/react";

import { BellIcon } from "@chakra-ui/icons";
import { getPrismicClient } from "../../services/prismic";
import styles from "./recipes.module.scss";
import { Menu } from "../../components/navbar";

interface Recipe {
  slug: string;
  title: string;
  excerpt: string;
  ingredients: string;
  serving_size: string;
  cooking_instructions: string;
  image: {
    url: string;
    alt: string;
  };
}

interface RecipeProps {
  recipe: Recipe;
}

export default function Recipe({ recipe }: RecipeProps) {
  const [singleRecipe, setRecipe] = useState<Recipe>(recipe);
  console.log(singleRecipe);
  return (
    <>
      <Head>Vegbook | {singleRecipe.title}</Head>
      <Menu />
      <Divider orientation="horizontal" />
      <Flex
        justifyContent="center"
        flexDir="column"
        alignItems="center"
        m="0 auto"
        maxW="1500px"
      >
        <Heading textTransform="capitalize" fontSize="5xl" pt={5}>
          {singleRecipe.title}
        </Heading>
        <Box mt={20}>
          <Image src={singleRecipe.image?.url} borderRadius="12px" />
        </Box>
        <Container
          centerContent
          maxW="container.lg"
          d="flex"
          flexDir="row"
          justifyContent="flex-start"
        >
          <Box padding={4} lineHeight="1.8" textAlign="left" maxW="4xl">
            <Text>{singleRecipe.excerpt}</Text>
          </Box>
        </Container>
        <Divider orientation="horizontal" mt={2} />
        <Container maxW="container.lg" d="flex" justifyContent="center">
          <Heading fontSize="md">
            <BellIcon w={6} h={6} mr={4} verticalAlign="bottom" />
            12 People Are Cooking This
          </Heading>
        </Container>
        <Divider orientation="horizontal" mb={8} />
        <Flex as="main" direction={["column", "row"]}>
          <Container
            justifyContent="flex-start"
            className={styles.ingredients}
            dangerouslySetInnerHTML={{ __html: singleRecipe.ingredients }}
          />

          <Container
            className={styles.cookingDirections}
            dangerouslySetInnerHTML={{
              __html: singleRecipe.cooking_instructions,
            }}
          />
        </Flex>
      </Flex>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { slug } = params as any;
  const prismic = getPrismicClient();
  const response = await prismic.getByUID("recipe", String(slug), {});
  const recipe = {
    slug: response.uid,
    title: RichText.asText(response.data.recipe_title),
    excerpt: response.data.catch_phrase,
    image: {
      url: response.data.recipe_banner.url,
      alt: response.data.recipe_banner.alt,
    },
    serving_size: RichText.asHtml(response.data.serving_size),
    cooking_instructions: RichText.asHtml(response.data.cooking_instructions),
    ingredients: RichText.asHtml(response.data.ingredients),
  };
  console.log(recipe, "the response");
  return {
    props: {
      recipe,
    },
  };
};
