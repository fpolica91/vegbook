import type { AppProps } from "next/app";
// import { ChakraProvider } from "@chakra-ui/react"
import ThemeContainer from "../contexts/theme/ThemeContainer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeContainer>
      <Component {...pageProps} />
    </ThemeContainer>
  );
}
export default MyApp;
