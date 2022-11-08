import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  IconButton,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Stack,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { FaRegBookmark, FaRegComment, FaRegHeart } from "react-icons/fa";
import { Share } from "../../data";

function LoginBox() {
  return (
    <Stack
      display="flex"
      justifyContent="center"
      zIndex="99"
      background="rgb(255, 255, 255)"
    >
      <Box>
        <Text>Log in to continue</Text>
      </Box>
    </Stack>
  );
}

type PostLeftType = {
  pid: number;
};
export default function PostLeft({ pid }: PostLeftType) {
  const { status } = useSession();
  // console.log(status);
  const [data, setData] = useState({
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

  const like = () => {
    if (status === "authenticated") {
      setData((prev) => {
        return {
          ...prev,
          likes: prev.likes + 1,
        };
      });
    } else {
      return <LoginBox />;
    }
  };

  return (
    <ButtonGroup
      variant="flat"
      position="sticky"
      inset="0"
      top="24"
      w="full"
      zIndex="1"
    >
      <Stack as="nav" spacing="4" m="auto" textAlign="center">
        <Tooltip label="Like">
          <Flex direction="column" align="center">
            <IconButton
              onClick={like}
              borderRadius="50%"
              fontSize="24px"
              aria-label="Like"
              icon={<FaRegHeart />}
              colorScheme="red"
            ></IconButton>
            <Text>{data.likes}</Text>
          </Flex>
        </Tooltip>
        <Tooltip label="Jump to Comment">
          <Flex direction="column" align="center">
            <IconButton
              borderRadius="50%"
              fontSize="24px"
              aria-label="Comment"
              icon={<FaRegComment />}
              colorScheme="yellow"
            ></IconButton>
            <Text>{data.comments}</Text>
          </Flex>
        </Tooltip>
        <Tooltip label="Save">
          <Flex direction="column" align="center">
            <IconButton
              borderRadius="50%"
              fontSize="24px"
              aria-label="Save"
              icon={<FaRegBookmark />}
              colorScheme="indigo"
            ></IconButton>
            <Text>{data.timeToRead}</Text>
          </Flex>
        </Tooltip>

        <Popover placement="right-start">
          <PopoverTrigger>
            <IconButton
              borderRadius="50%"
              fontSize="24px"
              aria-label="Save"
              icon={<BsThreeDots />}
            ></IconButton>
          </PopoverTrigger>

          <PopoverArrow />
          <PopoverContent w="max-content" minW="250px">
            <PopoverBody>
              <ButtonGroup variant="flat" w="full">
                <Flex direction="column" w="full">
                  <Button
                    display="inline-block"
                    fontWeight="700"
                    backgroundColor="inherit"
                    textAlign="left"
                  >
                    Copy link
                  </Button>
                  {Share.map((share, i) => (
                    <Button
                      display="inline-block"
                      key={i}
                      fontWeight="400"
                      textAlign="left"
                    >
                      {share.text}
                    </Button>
                  ))}
                </Flex>
              </ButtonGroup>
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </Stack>
    </ButtonGroup>
  );
}
