import { Stack } from "@chakra-ui/react";
import { Markdown } from "../../components/elements/text/markdown";


function Post() {
    const body = `## title\n
    ### title1\n
    #### title2\n
        **Hello**
        
    `
    return(
        <Stack as='nav'>
            <Markdown>{body}</Markdown>
        </Stack>
    )
}

export default function PostMain() {
    return <Post />;
  }