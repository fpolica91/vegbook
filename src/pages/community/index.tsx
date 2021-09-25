import { Menu } from "../../components/navbar";
import { useMediaQuery, Flex } from "@chakra-ui/react";
import Writers from "../../components/Writers";
import {
  Author,
  AuthorImage,
  Container,
  Content,
  HeroBody,
  Name,
  Title,
  Text2,
} from "./styles";
export default function Community() {
  const [isLargerThanHD] = useMediaQuery(["(min-width: 690px)"]);
  console.log(isLargerThanHD);
  return (
    <Container boxShadow="2xl">
      <Menu />
      <Content>
        <HeroBody>
          <Title>
            Fruit combination <br />
            for daily juice
          </Title>
          <Author>
            <AuthorImage src="/img/author.jpg" />
            <Name>Samantha Williams</Name>
          </Author>
          <Text2>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna
          </Text2>
        </HeroBody>
        {isLargerThanHD && <Writers />}
      </Content>
      {!isLargerThanHD && (
        <Flex justify="center">
          <Writers />
        </Flex>
      )}
    </Container>
  );
}
