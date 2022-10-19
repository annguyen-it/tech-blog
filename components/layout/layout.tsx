import { Box } from "@chakra-ui/react";
import React from "react";
import Footer from "./footer";
import TopBar from "./top-bar";

export default function AppLayout({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <>
      <TopBar></TopBar>
      <Box p="4" maxW="7xl" margin="0 auto">
        {children}
      </Box>
      <Footer></Footer>
    </>
  );
}
