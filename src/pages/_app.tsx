import type { AppProps } from "next/app";
import { useEffect } from "react";
import LogRocket from "logrocket";
import setupLogRocketReact from "logrocket-react";
import { ApolloProvider } from "@apollo/client";
import client from "../client/apolloClient";
import ThemeContainer from "../contexts/theme/ThemeContainer";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      LogRocket.init("personal-use/vegbook");
      setupLogRocketReact(LogRocket);
    }
  }, []);

  return (
    <ThemeContainer>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </ThemeContainer>
  );
}
export default MyApp;
