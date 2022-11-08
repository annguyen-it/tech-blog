import {
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
import { BsBookmark, BsSuitHeart, BsThreeDots } from "react-icons/bs";
import { FaRegComment } from "react-icons/fa";
import { Share } from "../../data";

type ActionType = {
  pid: string;
};
function Action(props: ActionType) {
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
    }
  };

  return (
    <ButtonGroup variant="flat" position="fixed" zIndex="99">
      <Stack as="nav" spacing="4" m="auto" textAlign="center" paddingTop="40px">
        <Tooltip label="Like">
          <Flex direction="column" align="center">
            <IconButton
              onClick={like}
              borderRadius="50%"
              fontSize="24px"
              aria-label="Like"
              icon={<BsSuitHeart />}
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
              icon={<BsBookmark />}
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

type PostLeftType = {
  pid: string;
};
export default function PostLeft({ pid }: PostLeftType) {
  return <Action pid={pid} />;
}
23;
