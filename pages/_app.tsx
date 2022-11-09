import { Box, ChakraProvider } from "@chakra-ui/react";
import axios, { AxiosRequestConfig } from "axios";
import { NextComponentType, NextPageContext } from "next";
import { Session } from "next-auth";
import { SessionProvider, useSession } from "next-auth/react";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import "../styles/globals.css";
import { theme } from "../styles/theme";

type PageProps = { session: Session };
type SessionContainerProps = {
  Component: NextComponentType<NextPageContext, any, any>;
  pageProps: Omit<PageProps, "session">;
};

let headerInterceptor: (value: AxiosRequestConfig) => AxiosRequestConfig;
let headerInterceptorId: number;

function SessionContainer({ Component, pageProps }: SessionContainerProps) {
  const { status, data } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      if (!headerInterceptor) {
        headerInterceptor = (config) => {
          const token = (data.user as any).accessToken;
          if (token && config.headers) {
            config.headers["Authorization"] = `Bearer ${token}`;
          }
          return config;
        };
      }
      headerInterceptorId = axios.interceptors.request.use(headerInterceptor);
    } else if (status === "unauthenticated") {
      axios.interceptors.request.eject(headerInterceptorId);
    }
  }, [status]);

  // console.log(data?.user);

  const ignoreRedirectNewUser = ["/new-user", "/sign-out", "/out"];

  if (status === "authenticated" && data && data.user) {
    if (
      ignoreRedirectNewUser.indexOf(router.pathname) === -1 &&
      (!data.user.name || !(data.user as any).nickname)
    ) {
      router.push("/new-user");
    } else if (
      router.pathname === "/new-user" &&
      data.user.name &&
      (data.user as any).nickname
    ) {
      router.push("/");
    }
  }

  return (
    <>
      {status !== "loading" && (
        <ChakraProvider resetCSS theme={theme}>
          <Box background="grey.100">
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
        <meta
          name="description"
          content="Tech blog is a community of 947,500 amazing developers"
        />
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
