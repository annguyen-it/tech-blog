import {
  Avatar,
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  IconButton,
  Input,
  Stack,
  Text,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { Session } from "next-auth";
import { memo, SetStateAction, useState } from "react";
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
    setError,
  } = useForm<UpdateInfoForm>();
  const toast = useToast();

  async function update(data: UpdateInfoForm) {
    setIsSubmitting(true);
    try {
      await axios.patch(`${process.env.NEXT_PUBLIC_API_BASE}/users/1`, data);
      toast({
        description: "Updated successfully",
        duration: 3000,
        isClosable: true,
      });
      await axios.get(
        `/api/auth/session?update&name=${data.name}&nickname=${data.nickname}`
      );
      window.location.replace("/");
    } catch (e) {
      setError("nickname", { message: "This nickname has already been taken" });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Box
      as="form"
      onSubmit={handleSubmit(update)}
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
          <Button type="submit" isLoading={isSubmitting}>
            Continue
          </Button>
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
          <Box as="figure">
            <Avatar
              src={user.image ?? undefined}
              border="2px solid"
              borderColor="base.90 !important"
            />
          </Box>
          {/* <Heading as="h3" fontSize="xl">
            {user.name!}
          </Heading> */}
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

export default memo(Step2);
