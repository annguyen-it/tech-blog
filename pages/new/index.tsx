import { Box, Grid, GridItem } from "@chakra-ui/react";
import type { NextPage } from "next";
import NewBot from "./new-bot";
import NewMain from "./new-main";
import NewTop from "./new-top";

const New: NextPage = () => {
  return (
    <Box as="main" px="4" background="#f5f5f5">
      <Grid as="form" gridTemplateRows="min-content 1fr min-content" gridTemplateColumns="64px 7fr 3fr">
        <GridItem gridColumnStart="1" gridColumnEnd="3">
          <NewTop></NewTop>
        </GridItem>
        <GridItem gridColumnStart="2" gridColumnEnd="2">
          <NewMain></NewMain>
        </GridItem>
        <GridItem gridColumnStart="2" gridColumnEnd="span 2">
          <NewBot></NewBot>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default New;
