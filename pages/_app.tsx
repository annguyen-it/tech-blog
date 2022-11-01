import { Box, ChakraProvider } from "@chakra-ui/react";
import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import Head from "next/head";
import "../styles/globals.css";
import { theme } from "../styles/theme";

type PageProps = { session: Session };

function MyApp({ Component, pageProps }: AppProps<PageProps>) {
  const { session, ...props } = pageProps;

  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>

      <SessionProvider session={session}>
        <ChakraProvider resetCSS theme={theme}>
          <Box background="#f5f5f5">
            <Component {...props} />
          </Box>
        </ChakraProvider>
      </SessionProvider>
    </>
  );
}

export default MyApp;
