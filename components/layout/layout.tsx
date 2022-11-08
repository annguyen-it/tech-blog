import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import Footer from "./footer";
import TopBar from "./top-bar";

type LayoutProps = { children?: React.ReactNode };
export default function AppLayout({ children }: LayoutProps) {
  return (
    <Flex direction="column" pt="14">
      <TopBar />
      <Box w="full" flex="1 auto" p={{ base: 2, lg: 4 }}>
        {children}
      </Box>
      <Footer />
    </Flex>
  );
}
