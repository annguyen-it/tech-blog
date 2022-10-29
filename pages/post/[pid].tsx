import AppLayout from "../../components/layout/layout";
import { NextPage } from "next";
import { Grid, GridItem } from "@chakra-ui/react";
import PostLeft from "./post-left";
import { useRouter } from "next/router";

const Post: NextPage = () => {
  const router = useRouter();
  const { pid } = router.query;

  return (
    <AppLayout>
      <Grid templateColumns="64px 2fr 1fr" gap="4">
        <GridItem>
          <PostLeft />
        </GridItem>
        <GridItem></GridItem>
        <GridItem></GridItem>
      </Grid>
    </AppLayout>
  );
};

export default Post;
