import { Box, Image, Badge, Text } from "@chakra-ui/react";

interface PreviewProps {
  title: string;
  readTime: string;
  imageUrl: string;
  description: string;
}

export function Preview({
  title,
  readTime,
  imageUrl,
  description,
  ...rest
}: PreviewProps) {
  return (
    <Box maxW="xlg" borderWidth="1px" overflow="hidden">
      <Image src={imageUrl} w={["100vw", 360, 360]} />
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
      >
        <Text noOfLines={2} d="block" ml="2">
          {description}
        </Text>
      </Box>
    </Box>
  );
}
