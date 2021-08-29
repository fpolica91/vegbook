import { Box, Image, Badge, Text } from "@chakra-ui/react";
import Link from "next/link";

interface PreviewProps {
  title: string;
  slug: string;
  readTime: string;
  imageUrl: string;
  description: string;
  alt: string;
}

export function Preview({
  title,
  readTime,
  imageUrl,
  description,
  slug,
  alt,
  ...rest
}: PreviewProps) {
  return (
    <Box maxW="xlg" borderWidth="1px" overflow="hidden">
      <Image src={imageUrl} w={["100vw", 360, 360]} alt={alt} />
      <Box d="flex" alignItems="baseline" mt={4}>
        <Badge px="2" variant="ghost" color="#F5556E">
          {title}
        </Badge>
        <Box
          color="gray.500"
          fontWeight="normal"
          letterSpacing="tight"
          fontSize="xs"
          ml="0"
        >
          -{readTime}
        </Box>
      </Box>
      <Box
        width="320px"
        fontSize="20px"
        fontWeight="normal"
        lineHeight="30px"
        textAlign="left"
        margin="0.5rem 0"
        background="linear-gradient(#FFFFFF, transparent)"
        backgroundClip="text"
        webkitTextFillColor="transparent"
      >
        <Text noOfLines={2} d="block" ml="2">
          {description}
        </Text>
      </Box>
    </Box>
  );
}
