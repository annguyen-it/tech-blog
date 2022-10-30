import Layout from "../../components/layout/layout";
import { NextPage } from "next";
import { Grid, GridItem } from "@chakra-ui/react";
import PostLeft from "./post-left";
import { useRouter } from "next/router";
import Head from "next/head";

const Post: NextPage = () => {
  const router = useRouter();
  const { pid } = router.query;

  return (
    <Layout>
      <Head>
        <title>Post name</title>
      </Head>

      <Grid templateColumns="64px 2fr 1fr" gap="4">
        <GridItem>
          <PostLeft />
        </GridItem>
        <GridItem></GridItem>
        <GridItem></GridItem>
      </Grid>
    </Layout>
  );
};

export default Post;
