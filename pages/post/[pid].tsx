import { Grid, GridItem } from "@chakra-ui/react";
import axios from "axios";
import { GetServerSideProps } from "next";
import Head from "next/head";
import Layout from "../../components/layout/layout";
import { Post, Response } from "../../models";
import FourOhFour from "../404";
import PostLeft from "./post-left";
import PostMain from "./post-main";
import PostRight from "./post-right";

type PostProps = { post: Post | null };

export const getServerSideProps: GetServerSideProps = async (context) => {
  const postId = context.query["pid"];
  let post: Post | null = null;

  try {
    const { data } = await axios.get<Response<Post>>(
      `${process.env.NEXT_PUBLIC_API_BASE}/posts/${postId}`
    );
    post = data.data;
  } catch (e) {}

  return { props: { post } };
};

function Post(props: PostProps) {
  const post = props.post;
  if (!post) {
    return <FourOhFour />;
  }

  return (
    <Layout>
      <Head>
        <title>{post.title}</title>
      </Head>

      <Grid
        w="full"
        maxW="7xl"
        m="auto"
        templateColumns={{ base: "4rem 1fr", lg: "4rem 7fr 3fr" }}
        gap={{ base: 2, lg: 4 }}
      >
        <GridItem as="aside" gridRowEnd={{ base: "span 2", lg: "initial" }}>
          <PostLeft pid={post.id} />
        </GridItem>
        <GridItem minW="0">
          <PostMain dataPost={post} />
        </GridItem>
        <GridItem>
          <PostRight dataPost={post} />
        </GridItem>
      </Grid>
    </Layout>
  );
}

export default Post;
