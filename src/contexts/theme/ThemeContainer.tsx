import React from "react";
import { ChakraProvider, CSSReset } from "@chakra-ui/react";

import theme from "../../styles/theme";

const ThemeContainer: React.FC = ({ children }) => (
  <ChakraProvider theme={theme}>
    <CSSReset />
    {children}
    <CSSReset />
  </ChakraProvider>
);

export default ThemeContainer;
