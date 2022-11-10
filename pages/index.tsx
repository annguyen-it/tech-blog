import { Grid, GridItem } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import Layout from "../components/layout/layout";
import IndexLeft from "./index-left";
import IndexMain from "./index-main";

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Tech blog</title>
      </Head>

      <Grid
        w="full"
        maxW="7xl"
        m="auto"
        templateColumns="240px 3fr 1fr"
        gap="4"
      >
        <GridItem>
          <IndexLeft />
        </GridItem>
        <GridItem>
          <IndexMain />
        </GridItem>
        <GridItem>
          {/* <IndexRight /> */}
        </GridItem>
      </Grid>
    </Layout>
  );
};

export default Home;
