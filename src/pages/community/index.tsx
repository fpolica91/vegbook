import { Menu } from "../../components/navbar";
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
        <Writers />
      </Content>
    </Container>
  );
}
