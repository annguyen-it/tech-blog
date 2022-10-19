import { Box, Grid, GridItem } from "@chakra-ui/react";
import type { NextPage } from "next";
import Layout from "../components/layout/layout";
import IndexLeft from "./index-left";
import IndexMain from "./index-main";

const Home: NextPage = () => {
  return (
    <Layout>
      <Grid templateColumns="240px 2fr 1fr" gap="4">
        <GridItem>
          <IndexLeft></IndexLeft>
        </GridItem>
        <GridItem>
          <IndexMain></IndexMain>
        </GridItem>
        <GridItem></GridItem>
      </Grid>
    </Layout>
  );
};

export default Home;
