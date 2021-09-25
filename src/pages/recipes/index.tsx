import { useState } from "react";
import { Wrapper } from "../../common/Container";
import { Menu } from "../../components/navbar";
import styles from "./recipes.module.scss";
import { Flex, Stack, Box, Image, Text, Divider } from "@chakra-ui/react";
import Head from "next/head";
import { GetStaticProps } from "next";
import { RichText } from "prismic-dom";
import Prismic from "@prismicio/client";
import { getPrismicClient } from "../../services/prismic";

interface Recipe {
  slug: string;
  release_date: string;
  title: string;
  excerpt: string;
  author: string;
  image: {
    url: string;
    alt: string;
  };
  serving_size: string;
  cooking_instructions: string;
  ingredients: string;
}

interface HomeProps {
  recipes: Recipe[];
  next_page: string;
}

export default function Recipes({ recipes, next_page }: HomeProps) {
  const [nextPage, setNextPage] = useState<string>(next_page);
  const [featuredRecipes, setRecipes] = useState<Recipe[]>(recipes);

  const loadMore = async () => {
    const response = await fetch(nextPage);
    const data = await response.json();
    const recipes = data.results.map((result: any) => ({
      slug: result.uid,
      release_date: new Date(result.data.release_date).toLocaleDateString(
        "en-US",
        {
          day: "2-digit",
          month: "long",
          year: "numeric",
        }
      ),
      title: RichText.asText(result.data.recipe_title),
      excerpt: result.data.catch_phrase,
      author: result.data.author,
      image: {
        url: result.data.recipe_banner.url,
        alt: result.data.recipe_banner.alt,
      },
      serving_size: RichText.asHtml(result.data.serving_size),
      cooking_instructions: RichText.asHtml(result.data.cooking_instructions),
      ingredients: RichText.asHtml(result.data.ingredients),
    }));
    setRecipes([...featuredRecipes, ...recipes]);
    setNextPage(data.next_page);
  };
  return (
    <>
      <Head>Vegbook | Home</Head>
      <Wrapper>
        <Menu />
        <Divider orientation="horizontal" />
        <Flex flexDir="column" alignItems="center" margin="2rem 0">
          <Stack>
            {featuredRecipes.map((recipe) => (
              <Box d="flex" boxShadow="md" width="3xl" maxW="1200px">
                <Box>
                  <Image
                    src={recipe.image.url}
                    alt={recipe.image.alt}
                    maxW="360px"
                  />
                </Box>
                <Box d="flex" flexDir="column" ml={10}>
                  <Box d="flex" flexDir="column" maxW="250px">
                    <strong className={styles.heading}>{recipe.title}</strong>
                    <span className={styles.time}>14 minutes easy</span>
                  </Box>
                </Box>
              </Box>
            ))}
          </Stack>
          {nextPage && (
            <Box as="div" my={8}>
              <Text color="pink.400" as="button" onClick={loadMore}>
                load more
              </Text>
            </Box>
          )}
        </Flex>
      </Wrapper>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();
  const response = await prismic.query(
    [Prismic.predicates.at("document.type", "recipe")],
    {
      pageSize: 3,
      orderings: "[document.first_publication_date, desc]",
    }
  );
  const recipes = response.results.map((result) => ({
    slug: result.uid,
    release_date: new Date(result.data.release_date).toLocaleDateString(
      "en-US",
      {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }
    ),
    title: RichText.asText(result.data.recipe_title),
    excerpt: result.data.catch_phrase,
    author: result.data.author,
    image: {
      url: result.data.recipe_banner.url,
      alt: result.data.recipe_banner.alt,
    },
    serving_size: RichText.asHtml(result.data.serving_size),
    cooking_instructions: RichText.asHtml(result.data.cooking_instructions),
    ingredients: RichText.asHtml(result.data.ingredients),
  }));
  console.log(response.next_page);
  return {
    props: {
      recipes,
      next_page: response.next_page,
    },
    revalidate: 60 * 60 * 30,
  };
};
