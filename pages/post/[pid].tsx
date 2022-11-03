import Layout from "../../components/layout/layout";
import { NextPage } from "next";
import { Grid, GridItem } from "@chakra-ui/react";
import PostLeft from "./post-left";
import { useRouter } from "next/router";
import { useState } from "react";
import PostMain from "./post-main";
import Head from "next/head";
import { Post } from "../../models";
import { dummyPost } from "../../data";

const Post: NextPage = () => {
  const router = useRouter();
  const pid = router.query["pid"] as string;
  // console.log(pid);
  const [dataPost, setDataPost] = useState<Post>(dummyPost);

  return (
    <Layout>
      <Head>
        <title>{dataPost.title}</title>
      </Head>

      <Grid
        w="full"
        maxW="7xl"
        m="auto"
        templateColumns="100px 2fr 1fr"
        gap="4"
      >
        <GridItem>
          <PostLeft pid={pid} />
        </GridItem>
        <GridItem>
          <PostMain dataPost={dataPost} />
        </GridItem>
        <GridItem></GridItem>
      </Grid>
    </Layout>
  );
};

export default Post;
