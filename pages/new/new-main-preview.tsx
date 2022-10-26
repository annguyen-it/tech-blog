import { Box, Button, ButtonGroup, Heading, Image } from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";
import { Markdown } from "../../components/elements/text/markdown";
import { Post } from "../../models";

export function NewMainPreview() {
  const { getValues } = useFormContext<Post>();
  const { title, body, coverImage, hashtags } = getValues();

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
            ></Image>
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
                as="a"
                key={hashtag}
                href={`/t/${hashtag}`}
                fontWeight="400"
              >
                # {hashtag}
              </Button>
            ))}
          </ButtonGroup>
        </Box>
      </Box>

      {/* Body */}
      <Box px="16" py="8" fontSize="xl">
        <Markdown>{body}</Markdown>
      </Box>
    </Box>
  );
}
