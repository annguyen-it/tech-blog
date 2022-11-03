import { Box, Button, ButtonGroup, Heading, Image } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useFormContext } from "react-hook-form";
import { EditPost } from "../../../models";
import { Markdown } from "../../elements/text/markdown";

export default function NewMainPreview() {
  const { getValues } = useFormContext<EditPost>();
  const { title, body, coverImage, tags: hashtags } = getValues();
  const router = useRouter();

  return (
    <Box as="article">
      <Box as="header">
        {/* Cover image */}
        {coverImage && (
          <Box pos="relative" pt="42%" overflowWrap="anywhere">
            <Image
              src={URL.createObjectURL(coverImage)}
              alt="Cover photo"
              pos="absolute"
              inset="0"
              w="full"
              h="full"
              objectFit="scale-down"
            />
          </Box>
        )}

        <Box pt="8" px="16">
          {/* Title */}
          <Heading as="h1" mb="2">
            {title}
          </Heading>

          {/* Hashtags */}
          <ButtonGroup variant="ghost" size="sm" spacing="0">
            {hashtags.map((hashtag) => (
              <Button
                key={hashtag}
                onClick={() => router.push(`/t/${hashtag}`)}
                fontWeight="400"
              >
                # {hashtag}
              </Button>
            ))}
          </ButtonGroup>
        </Box>
      </Box>

      {/* Body */}
      <Box px="16" py="8">
        <Markdown>{body}</Markdown>
      </Box>
    </Box>
  );
}
