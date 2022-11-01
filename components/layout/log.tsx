import {
  Box,
  Button,
  ButtonGroup,
  Checkbox,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import { signIn } from "next-auth/react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { BsTwitter } from "react-icons/bs";
import { ValidationUtils } from "../../utils/validation";
import Layout from "./layout";

type LogForm = {
  email: string;
  password: string;
};

type LogLayoutProps = { page: "Login" | "SignUp" };
export default function LogLayout({ page }: LogLayoutProps) {
  const router = useRouter();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<LogForm>();
  const loginOptions = {
    callbackUrl: router.pathname === "login" ? "/" : router.pathname,
  };
  const action = page === "Login" ? "Continue" : "Sign up";

  return (
    <Layout>
      <Head>
        <title>{page}</title>
      </Head>

      <Stack
        spacing="4"
        width={{ md: "2xl" }}
        m="auto"
        p="12"
        direction="column"
        background="white"
        borderRadius="lg"
        boxShadow="0 0 0 1px var(--chakra-colors-grey-900-rgba)"
      >
        <Stack spacing="6" direction="column" textAlign="center">
          <Box>
            <Heading fontSize="3xl">Welcome to Tech blog</Heading>
            <Text fontSize="md">
              <Link href="/">Tech blog</Link> is a community of 939,039 amazing
              developers
            </Text>
          </Box>

          <ButtonGroup flexDirection="column" size="md">
            <Stack>
              <Button
                onClick={() => signIn("facebook", loginOptions)}
                colorScheme="facebook"
                data-cy="login-with-facebook"
              >
                <BsTwitter />
                {action} with Facebook
              </Button>
              <Button colorScheme="twitter" color="white">
                {action} with Twitter
              </Button>
              <Button
                onClick={() => signIn("github", loginOptions)}
                background="#24292e"
                color="white"
                data-cy="login-with-github"
              >
                {action} with Github
              </Button>
              <Button background="#1da1f2" color="white">
                {action} with Google
              </Button>
            </Stack>
          </ButtonGroup>
        </Stack>

        <Stack spacing="4">
          <Box
            pos="relative"
            textAlign="center"
            _after={{
              position: "absolute",
              top: "50%",
              width: "100%",
              display: "block",
              borderBottom: "1px solid var(--chakra-colors-base-20)",
              content: `''`,
            }}
          >
            <Text
              as="span"
              pos="relative"
              maxW="75%"
              px="2"
              bg="white"
              fontSize="sm"
              zIndex="1"
            >
              Or continue with account
            </Text>
          </Box>

          <Stack
            as="form"
            onSubmit={handleSubmit((data) => console.log(data))}
            spacing="4"
          >
            <FormControl isInvalid={!!errors.email}>
              <FormLabel>Email</FormLabel>
              <Input
                {...register("email", {
                  required: "Email Address is required",
                  pattern: {
                    value: ValidationUtils.emailPattern,
                    message: "Please enter a valid email",
                  },
                })}
              />
              <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={!!errors.password}>
              <FormLabel>Password</FormLabel>
              <Input
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password should contain at least 6 characters",
                  },
                })}
              />
              <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
            </FormControl>

            {page === "SignUp" && (
              <FormControl isInvalid={!!errors.password}>
                <FormLabel>Confirm Password</FormLabel>
                <Input
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password should contain at least 6 characters",
                    },
                  })}
                />
                <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
              </FormControl>
            )}

            <FormControl>
              <Checkbox defaultChecked>Remember me</Checkbox>
            </FormControl>

            <Button variant="primary" type="submit" width="full">
              Continue
            </Button>

            <Box textAlign="center">
              <Link href="">I forgot my password</Link>
            </Box>
          </Stack>
        </Stack>
      </Stack>
    </Layout>
  );
}
