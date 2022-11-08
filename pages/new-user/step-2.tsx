import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  IconButton,
  Image,
  Input,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { Session } from "next-auth";
import { SetStateAction } from "react";
import { useForm } from "react-hook-form";
import { MdKeyboardBackspace } from "react-icons/md";

type UpdateInfoForm = {
  name: string;
  nickname: string;
  bio: string;
  work: string;
  education: string;
  codingSkill: string;
};

type Step2Props = {
  setStep: (value: SetStateAction<number>) => void;
  data: Session;
};
function Step2({ setStep, data }: Step2Props) {
  const user = data.user!;
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<UpdateInfoForm>();

  return (
    <Box
      as="form"
      onSubmit={handleSubmit((data) => {})}
      h="800px"
      maxH="calc(100% - 24px)"
      display="grid"
      gridTemplateRows="auto 1fr"
      bg="white"
      borderRadius="2xl"
      overflow="hidden"
      zIndex="1"
    >
      {/* Nav top */}
      <Flex as="nav" justify="space-between" p="4">
        <Box>
          <IconButton
            onClick={() => setStep(1)}
            aria-label="Back to previous onboarding step"
            icon={<MdKeyboardBackspace />}
            variant="flat"
            borderRadius="full"
          ></IconButton>
        </Box>
        <Box>
          <Button type="submit">Continue</Button>
        </Box>
      </Flex>

      {/* Main */}
      <Stack spacing="6" borderTop="2px solid" px="12" py="8" overflow="auto">
        {/* Header */}
        <Stack spacing="1" as="header">
          <Heading as="h1" fontWeight="800">
            Build your profile
          </Heading>
          <Heading fontSize="xl" fontWeight="500" lineHeight="30px">
            Tell us a little bit about yourself — this is how others will see
            you on DEV Community 👩‍💻👨‍💻. You’ll always be able to edit this later
            in your Settings.
          </Heading>
        </Stack>

        {/* Avatar */}
        <Stack spacing="2" textAlign="center">
          <Box as="figure" h="20">
            <Image
              src={user.image!}
              alt="Avatar"
              h="inherit"
              display="inline"
              border="2px solid"
              borderColor="base.90"
            />
          </Box>
          <Heading as="h3" fontSize="xl">
            {user.name!}
          </Heading>
        </Stack>

        {/* Main info */}
        <FormControl isInvalid={!!errors.name}>
          <FormLabel>Name</FormLabel>
          <Input {...register("name", { required: "Name is required" })} />
          <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={!!errors.nickname}>
          <FormLabel>Nickname</FormLabel>
          <Input
            {...register("nickname", { required: "Nickname is required" })}
          />
          <FormErrorMessage>{errors.nickname?.message}</FormErrorMessage>
        </FormControl>
        <FormControl>
          <FormLabel>Bio</FormLabel>
          <Textarea
            {...register("bio")}
            placeholder="Tell us a little about yourself"
          />
        </FormControl>

        {/* Work */}
        <Box>
          <Heading fontSize="27px" lineHeight="base">
            Work
          </Heading>
          <Stack spacing="3">
            <FormControl>
              <FormLabel>Work</FormLabel>
              <Input
                {...register("work")}
                placeholder="What do you do? Example: CEO at ACME Inc."
              />
            </FormControl>
            <FormControl>
              <FormLabel>Education</FormLabel>
              <Input
                {...register("education")}
                placeholder="Where did you go to school"
              />
            </FormControl>
          </Stack>
        </Box>

        {/* Coding */}
        <Box>
          <Heading fontSize="27px" lineHeight="base">
            Coding
          </Heading>
          <FormControl>
            <FormLabel>Skills/Languages</FormLabel>
            <Textarea
              {...register("codingSkill")}
              placeholder="Any languages, frameworks, etc. to highlight?"
            />
          </FormControl>
          <Text mt="2" fontSize="sm" color="grey.600">
            What tools and languages are you most experienced with? Are you
            specialized or more of a generalist?
          </Text>
        </Box>

        <Box></Box>
      </Stack>
    </Box>
  );
}

export default Step2;
