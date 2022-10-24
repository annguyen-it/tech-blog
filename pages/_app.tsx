import { Box, ChakraProvider } from "@chakra-ui/react";
import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import "../styles/globals.css";
import { theme } from "../styles/theme";

type PageProps = { session: Session };

function MyApp({ Component, pageProps }: AppProps<PageProps>) {
  return (
    <SessionProvider session={pageProps.session}>
      <ChakraProvider resetCSS theme={theme}>
        <Box background="#f5f5f5">
          <Component {...pageProps} />
        </Box>
      </ChakraProvider>
    </SessionProvider>
  );
}

export default MyApp;
