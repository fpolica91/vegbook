import styled, { css } from "styled-components";
import { Flex } from "@chakra-ui/react";

export const PoppinsMediumEbonyClay15px = css`
  color: rgba(39, 50, 64, 1);
  font-family: var(--font-family-poppins);
  font-size: 15px;
  font-weight: 500;
  font-style: normal;
`;

export const PoppinsNormalOuterSpace12px = css`
  color: rgba(44, 58, 75, 1);
  font-family: var(--font-family-poppins);
  font-size: var(--font-size-s);
  font-weight: 400;
  font-style: normal;
`;

export const Container = styled(Flex)`
  display: flex;
  align-items: center;
  min-width: 175px;
  margin-top: 33px;
  margin-right: 43px;
  display: flex;
  align-items: center;
  min-width: 178px;
  @media (max-width: 690px) {
    width: 200px;
    justify-content: space-around;
  }
`;

export const Rectangle2Copy7 = styled.img`
  width: 60px;
  height: 60px;
`;

export const FlexCol = styled.div`
  width: 98px;
  margin-left: 15px;
  margin-top: 2px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 48px;
`;

export const Person = styled.div`
  ${PoppinsMediumEbonyClay15px}
  min-height: 26px;
  letter-spacing: 0.3px;
  line-height: 26px;
  white-space: nowrap;
`;

export const MakanBareng = styled.div`
  ${PoppinsNormalOuterSpace12px}
  min-height: 20px;
  margin-top: 2px;
  opacity: 0.5;
  letter-spacing: 0.5px;
  line-height: 20px;
  white-space: nowrap;
`;
