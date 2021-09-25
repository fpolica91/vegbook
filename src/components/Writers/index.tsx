import React from "react";
import { Flex } from "@chakra-ui/react";
import styled, { css } from "styled-components";
import { Writer } from "./Writer";

function Writers() {
  const writersData = {
    topContributors: "Top Contributors",
    samantha: "Andrea Wise",
    ngopiSore: "135 articles",
    karenWilliam: "Karen Smith",
    makanBareng: "135 articles",
    angelaSmith: "Samantha William",
    tiketKereta: "135 articles",
    angelaSmith2: "Renata Hope",
    tiketKereta2: "135 articles",
    name: "Angela Smith",
    tiketKereta3: "135 articles",
  };
  const {
    topContributors,
    samantha,
    ngopiSore,
    karenWilliam,
    makanBareng,
    angelaSmith,
    tiketKereta,
    angelaSmith2,
    tiketKereta2,
    name,
    tiketKereta3,
  } = writersData;

  return (
    <Wrapper>
      <Container>
        <Title>{topContributors}</Title>
        <Writer
          src="/img/samantha.png"
          name={samantha}
          description={ngopiSore}
        />
        <Writer
          src="/img/karen1.png"
          name={karenWilliam}
          description={makanBareng}
        />

        <Writer
          src="/img/chimpy.png"
          name={angelaSmith}
          description={tiketKereta}
        />
        <Writer
          src="/img/renata.png"
          name={angelaSmith2}
          description={tiketKereta2}
        />
        <Writer src="/img/angela.png" name={name} description={tiketKereta3} />
      </Container>
    </Wrapper>
  );
}

export const Wrapper = styled(Flex)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  pointer-events: none;
  max-width: 320px;
  width: 100%;
  @media (max-width: 690px) {
    max-width: 600px;
  }
`;

export const Container = styled(Flex)`
  align-items: center;
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  min-height: 577px;
  padding: 40px 0;
  width: 301px;
  @media (max-width: 690px) {
    max-width: 600px;
    width: 100vw;
  }
`;

export const PoppinsMediumEbonyClay15px = css`
  color: var(--ebony-clay);
  font-family: var(--font-family-poppins);
  font-size: var(--font-size-xs2);
  font-weight: 500;
  font-style: normal;
`;

export const PoppinsNormalOuterSpace12px = css`
  color: var(--outer-space);
  font-family: var(--font-family-poppins);
  font-size: var(--font-size-s);
  font-weight: 400;
  font-style: normal;
`;

const Title = styled.h1`
  min-height: 32px;
  margin-right: 13px;
  min-width: 208px;
  font-family: var(--font-family-poppins);
  font-weight: 600;
  color: #0f1935;
  font-size: var(--font-size-xxl);
  letter-spacing: 0;
  line-height: 32px;
  white-space: nowrap;
`;

const Group3Copy4 = styled.div`
  margin-top: 33px;
  margin-right: 43px;
  display: flex;
  align-items: center;
  min-width: 178px;
`;

const Rectangle2Copy7 = styled.img`
  width: 60px;
  height: 60px;
`;

const FlexCol = styled.div`
  width: 101px;
  margin-left: 15px;
  margin-top: 2px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 48px;
`;

const Samantha = styled.div`
  ${PoppinsMediumEbonyClay15px}
  min-height: 26px;
  letter-spacing: 0.3px;
  line-height: 26px;
  white-space: nowrap;
`;

const NgopiSore = styled.div`
  ${PoppinsNormalOuterSpace12px}
  min-height: 20px;
  margin-top: 2px;
  opacity: 0.5;
  letter-spacing: 0.5px;
  line-height: 20px;
  white-space: nowrap;
`;

const Group3 = styled.div`
  margin-top: 33px;
  margin-right: 46px;
  display: flex;
  align-items: center;
  min-width: 175px;
`;

const FlexCol1 = styled.div`
  width: 98px;
  margin-left: 15px;
  margin-top: 2px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 48px;
`;

const Group3Copy = styled.div`
  margin-top: 33px;
  display: flex;
  align-items: center;
  min-width: 221px;
`;

const FlexCol2 = styled.div`
  width: 148px;
  margin-left: 15px;
  margin-top: 2px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 48px;
`;

const Group3Copy1 = styled.div`
  margin-top: 33px;
  margin-right: 45px;
  display: flex;
  align-items: center;
  min-width: 176px;
`;

const FlexCol3 = styled.div`
  width: 103px;
  margin-left: 15px;
  margin-top: 2px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 48px;
`;

const Group3Copy2 = styled.div`
  margin-top: 33px;
  margin-right: 41px;
  display: flex;
  align-items: center;
  min-width: 180px;
`;

const FlexCol4 = styled.div`
  width: 107px;
  margin-left: 15px;
  margin-top: 2px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 48px;
`;

export default Writers;
