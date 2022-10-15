import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  IconButton,
  Image,
  Link,
  Stack,
} from "@chakra-ui/react";
import { FaRegComment, FaRegHeart, FaRegBookmark } from "react-icons/fa";

function NavButton({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <Button
      as="a"
      href={href}
      _hover={{
        background: "white",
        color: "rgb(59, 73, 223)",
        textDecoration: "underline",
      }}
    >
      {children}
    </Button>
  );
}

function Post() {
  const posts = [
    {
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
    },
    {
      image: "",
      author: {
        url: "johnny.depp",
        name: "Johnny Depp",
        intro: "I'm an actor",
        work: "Hollywood",
        joined: new Date(2019, 5, 9),
        image: "",
      },
      createdDate: new Date(2022, 9, 9),
      title: "Advice for junior developers",
      url: "123451",
      tags: ["beginners", "newbie", "learning"],
      likes: 1,
      comments: 30,
      timeToRead: 9,
    },
    {
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
    },
    {
      image: "",
      author: {
        url: "johnny.depp",
        name: "Johnny Depp",
        intro: "I'm an actor",
        work: "Hollywood",
        joined: new Date(2019, 5, 9),
        image: "",
      },
      createdDate: new Date(2022, 9, 9),
      title: "Advice for junior developers",
      url: "123451",
      tags: ["beginners", "newbie", "learning"],
      likes: 1,
      comments: 30,
      timeToRead: 9,
    },
    {
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
    },
    {
      image: "",
      author: {
        url: "johnny.depp",
        name: "Johnny Depp",
        intro: "I'm an actor",
        work: "Hollywood",
        joined: new Date(2019, 5, 9),
        image: "",
      },
      createdDate: new Date(2022, 9, 9),
      title: "Advice for junior developers",
      url: "123451",
      tags: ["beginners", "newbie", "learning"],
      likes: 1,
      comments: 30,
      timeToRead: 9,
    },
    {
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
    },
    {
      image: "",
      author: {
        url: "johnny.depp",
        name: "Johnny Depp",
        intro: "I'm an actor",
        work: "Hollywood",
        joined: new Date(2019, 5, 9),
        image: "",
      },
      createdDate: new Date(2022, 9, 9),
      title: "Advice for junior developers",
      url: "123451",
      tags: ["beginners", "newbie", "learning"],
      likes: 1,
      comments: 30,
      timeToRead: 9,
    },
  ];

  return (
    <Stack spacing="2">
      {posts.map((post, i) => (
        <Box
          as="article"
          key={post.url}
          bg="white"
          boxShadow="0 0 0 1px rgba(23, 23, 23, 0.1)"
          borderRadius="md"
          overflow="hidden"
        >
          {/* Image */}
          {i == 0 && <Image src={post.image} alt={post.title}></Image>}

          <Stack direction="column" p="5" spacing="2">
            {/* Author */}
            <Stack direction="row" spacing="2">
              <Avatar size="sm" src={post.author.image}></Avatar>
              <Box lineHeight="shorter">
                <Box fontSize="sm" fontWeight="500">
                  <Link href={post.author.url}>{post.author.name}</Link>
                </Box>
                <Box fontSize="xs">
                  {post.createdDate.toLocaleString("default", {
                    month: "long",
                  })}{" "}
                  {post.createdDate.getDate()}
                </Box>
              </Box>
            </Stack>

            {/* Body */}
            <Stack pl="10" spacing="1">
              <Heading fontSize="3xl">
                <Link href={post.url}>{post.title}</Link>
              </Heading>

              <ButtonGroup variant="ghost" size="sm" spacing="0">
                {post.tags.map((tag) => (
                  <Button as="a" href={`/t/${tag}`} fontWeight="400">
                    #{tag}
                  </Button>
                ))}
              </ButtonGroup>

              <Flex justify="space-between">
                <ButtonGroup variant="ghost" size="sm" spacing="0">
                  {post.likes && (
                    <Button
                      as="a"
                      href={post.url}
                      leftIcon={<FaRegHeart />}
                      fontWeight="400"
                    >
                      {post.likes} like{post.likes > 1 && "s"}
                    </Button>
                  )}
                  <Button
                    as="a"
                    href={`${post.url}#comments`}
                    leftIcon={<FaRegComment />}
                    fontWeight="400"
                  >
                    {!post.comments && "Add comment"}
                    {post.comments == 1 && "1 comment"}
                    {post.comments > 1 && `${post.comments} comments`}
                  </Button>
                </ButtonGroup>

                <Stack direction="row" align="center">
                  <Box fontSize="xs">
                    {post.timeToRead} min{post.timeToRead > 1 && "s"} to read
                  </Box>
                  <IconButton
                    aria-label="Save post"
                    icon={<FaRegBookmark />}
                    variant="ghost"
                  ></IconButton>
                </Stack>
              </Flex>
            </Stack>
          </Stack>
        </Box>
      ))}
    </Stack>
  );
}

export default function IndexMain() {
  return (
    <Stack as="main" spacing="2">
      <Box as="nav">
        <ButtonGroup variant="ghost" spacing="0">
          <NavButton href="/">Relevant</NavButton>
          <NavButton href="/latest">Latest</NavButton>
          <NavButton href="/top/week">Top</NavButton>
        </ButtonGroup>
      </Box>
      <Box>
        <Post></Post>
      </Box>
    </Stack>
  );
}
