import { Menu } from "../../components/navbar";
import { useMediaQuery, Flex, Box, Image } from "@chakra-ui/react";
import Writers from "../../components/Writers";
import styled from "styled-components";


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

export const Container = styled(Flex)`
  flex-direction: column;
  max-width: 1400px;
  margin: auto;
`;

export const Content = styled(Flex)`
  border-radius: 12px;
  display: flex;
  flex-direction: row;
`;

export const HeroBody = styled(Box)`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 50px;
  align-items: flex-start;
  min-height: 578px;
  max-width: 1000px;
  width: 100vw;
  background-image: url("/img/containerImage.jpg");
  background-position: center;
  background-size: 100% 100%;
  @media only screen and (max-width: 680px) {
  }
`;

export const Title = styled.h1`
  min-height: 110px;
  font-family: var(--font-family-poppins);
  font-weight: 400;
  color: #121212;
  font-size: 42px;
  letter-spacing: 0;
  line-height: 55px;
`;

export const Author = styled(Box)`
  height: 30px;
  margin-top: 20px;
  display: flex;
  align-items: flex-start;
  min-width: 186px;
`;

export const AuthorImage = styled(Image)`
  width: 36px;
  height: 36px;
  margin-left: -3px;
  margin-top: -3px;
  border-radius: 50%;
`;

export const Name = styled.div`
  min-height: 25px;
  align-self: center;
  margin-left: 12px;
  margin-bottom: 1px;
  min-width: 141px;
  font-family: var(--font-family-poppins);
  font-weight: 500;
  color: #000000;
  font-size: 14px;
  letter-spacing: 0.5px;
  line-height: 25px;
  white-space: nowrap;
`;

export const Text2 = styled.p`
  width: 236px;
  min-height: 92px;
  margin-top: 20px;
  opacity: 0.7;
  font-family: var(--font-family-poppins);
  color: #121212;
  font-size: 13pxz;
  letter-spacing: 0.5px;
  line-height: 23px;
`;
