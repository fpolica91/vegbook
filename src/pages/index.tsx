import Head from "next/head";
import { GetStaticProps } from "next";
import Prismic from "@prismicio/client";
import { RichText } from "prismic-dom";
import { Menu } from "../components/navbar";
import { Flex, Stack, Divider, Heading, Box } from "@chakra-ui/react";
import { Preview } from "../components/Preview";
import { Hero } from "../components/Hero";
import { getPrismicClient } from "../services/prismic";

interface PreviewProps {
  slug: string;
  release_date: string;
  title: string;
  author: string;
  excerpt: string;
  image: {
    url: string;
    alt: string;
  };
}

interface HomeProps {
  previews: PreviewProps[];
}

export default function Home({ previews }: HomeProps) {
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
          {previews &&
            previews.map((preview) => (
              <Preview
                title={preview.title}
                description={preview.excerpt}
                imageUrl={preview.image?.url}
                readTime="5 mins read"
                alt={preview.image.alt || "alt is missing"}
              />
            ))}
        </Stack>
      </Flex>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();
  const response = await prismic.query(
    [Prismic.Predicates.at("document.type", "recipe")],
    {
      pageSize: 3,
    }
  );

  const previews = response.results.map((result) => ({
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
    excerpt: result.data.catch_phrase.split(" ").slice(0, 20).join(" "),
    author: result.data.author,
    image: {
      url: result.data.recipe_banner.url,
      alt: result.data.recipe_banner.alt,
    },
    // image: RichText.asText(result.data.recipe_banner),
  }));

  return {
    props: {
      previews,
    },
    revalidate: 60 * 60 * 60,
  };
};
