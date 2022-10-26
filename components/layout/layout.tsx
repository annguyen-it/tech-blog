import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import Footer from "./footer";
import TopBar from "./top-bar";

type LayoutProps = { children?: React.ReactNode };
export default function AppLayout({ children }: LayoutProps) {
  return (
    <Flex direction="column" pt="14">
      <TopBar></TopBar>
      <Box w="full" flex="1 auto" p="4">
        {children}
      </Box>
      <Footer></Footer>
    </Flex>
  );
}
