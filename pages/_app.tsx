import { Box, ChakraProvider } from "@chakra-ui/react";
import { NextComponentType, NextPageContext } from "next";
import { Session } from "next-auth";
import { SessionProvider, useSession } from "next-auth/react";
import type { AppProps } from "next/app";
import Head from "next/head";
import "../styles/globals.css";
import { theme } from "../styles/theme";

type PageProps = { session: Session };
type SessionContainerProps = {
  Component: NextComponentType<NextPageContext, any, any>;
  pageProps: Omit<PageProps, "session">;
};

function SessionContainer({ Component, pageProps }: SessionContainerProps) {
  const { status } = useSession();

  return (
    <>
      {status !== "loading" && (
        <ChakraProvider resetCSS theme={theme}>
          <Box background="#f5f5f5">
            <Component {...pageProps} />
          </Box>
        </ChakraProvider>
      )}
    </>
  );
}

function MyApp({ Component, pageProps }: AppProps<PageProps>) {
  const { session, ...props } = pageProps;

  return (
    <>
      <Head>
        <meta name="description" content="Tech blog is a community of 947,500 amazing developers" />
        <meta name="keywords" content="tech, blog, code" />
        <meta name="author" content="John Doe" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>

      <SessionProvider session={session}>
        <SessionContainer Component={Component} pageProps={props} />
      </SessionProvider>
    </>
  );
}

export default MyApp;
