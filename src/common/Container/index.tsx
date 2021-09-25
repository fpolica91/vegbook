import { Container } from "./styles";

interface WrapperProps {
  children: React.ReactNode;
}

export function Wrapper({ children }: WrapperProps) {
  return <Container boxShadow="2xl">{children}</Container>;
}
