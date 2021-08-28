import { Flex, Box, Heading } from "@chakra-ui/react";
export function Hero() {
  return (
    <Flex
      as="main"
      backgroundImage="url('/hero.jpg')"
      bgRepeat="no-repeat"
      backgroundSize="cover"
      bgPosition="center"
      alignItems="center"
      height="500px"
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
  );
}
