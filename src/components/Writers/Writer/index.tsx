import React from "react";

import {
  Container,
  FlexCol,
  MakanBareng,
  Person,
  Rectangle2Copy7,
} from "./styles";

interface WriterProps {
  src: string;
  name: string;
  description: string;
}
export function Writer({ src, name, description }: WriterProps) {
  return (
    <Container>
      <Rectangle2Copy7 src={src} />
      <FlexCol>
        <Person>{name}</Person>
        <MakanBareng>{description}</MakanBareng>
      </FlexCol>
    </Container>
  );
}
