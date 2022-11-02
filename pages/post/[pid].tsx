import Layout from "../../components/layout/layout";
import { NextPage } from "next";
import { Grid, GridItem } from "@chakra-ui/react";
import PostLeft from "./post-left";
import { useRouter } from "next/router";
import { useState } from "react";
import PostMain from "./post-main";
import Head from "next/head";

const Post: NextPage = () => {
  const router = useRouter();
  const pid = router.query["pid"] as string;
  // console.log(pid);
  const [dataPost, setDataPost] = useState({
    id: 1,
    image:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--Vt_eVVRg--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://www.entropywins.wtf/blog/wp-content/uploads/2022/09/code.jpg",
    author: {
      url: "johnny.depp",
      name: "Johnny Depp",
      intro: "I'm an actor",
      work: "Hollywood",
      joined: new Date(2019, 5, 9),
      image:
        "https://res.cloudinary.com/practicaldev/image/fetch/s--4Jbi0yB4--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/2884/27097c7514e0bf985ccbe9a8ccd2a550.jpeg",
    },
    createdDate: new Date(2022, 9, 9),
    title: "Advice for junior developers",
    url: "123456",
    tags: ["beginners", "newbie", "learning"],
    likes: 900,
    comments: 30,
    timeToRead: 9,
  });

  return (
    <Layout>
      <Head>
        <title>Post name</title>
      </Head>

      <Grid templateColumns="64px 2fr 1fr" gap="4">
        <GridItem>
          <PostLeft pid={pid} />
        </GridItem>
        <GridItem>
          <PostMain />
        </GridItem>
        <GridItem></GridItem>
      </Grid>
    </Layout>
  );
};

export default Post;
