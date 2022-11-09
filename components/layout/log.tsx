import {
  Box,
  Button,
  ButtonGroup,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Icon,
  Input,
  Link,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import { signIn, useSession } from "next-auth/react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { BsFacebook, BsGithub, BsGoogle } from "react-icons/bs";
import { ValidationUtils } from "../../utils/validation";
import Layout from "./layout";
const md5 = require("md5");

export type LogForm = {
  email: string;
  password: string;
  confirmPassword?: string;
};

type LogLayoutProps = {
  onConfirm: (form: LogForm) => Promise<{ error: string } | null>;
  onSuccess?: () => void;
  page: "Login" | "Sign Up";
};
export default function LogLayout({
  onConfirm,
  onSuccess,
  page,
}: LogLayoutProps) {
  const { status } = useSession();
  const router = useRouter();
  const {
    register,
    getValues,
    formState: { errors },
    handleSubmit,
  } = useForm<LogForm>();
  const [routerPushed, setRouterPushed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const toast = useToast();

  const loginOptions = {
    callbackUrl: router.pathname.includes("login") ? "/" : router.pathname,
  };
  const action = page === "Login" ? "Continue" : "Sign up";
  const pseudo = page === "Login" ? "Sign in" : "Sign up";

  useEffect(() => {
    if (status === "authenticated" && !routerPushed) {
      router.push("/");
      setRouterPushed(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);

  async function onClickSubmit(form: LogForm) {
    const { confirmPassword, ...postForm } = form;
    postForm.password = md5(postForm.password);
    setIsSubmitting(true);
    const errors = await onConfirm(postForm);

    if (errors) {
      toast({
        title: "An error occurred",
        description: errors.error,
        status: "error",
        duration: 4000,
        isClosable: true,
      });
    } else {
      onSuccess?.();
    }

    setIsSubmitting(false);
  }

  if (status === "authenticated") {
    return <></>;
  }

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
        data-cy="log_component"
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
                data-cy="log_with-facebook"
              >
                <Icon as={BsFacebook} mr="2" />
                {action} with Facebook
              </Button>
              {/* <Button
                colorScheme="twitter"
                color="white"
                data-cy="log_with-twitter"
              >
                <Icon as={BsTwitter} mr="2" />
                {action} with Twitter
              </Button> */}
              <Button
                onClick={() => signIn("github", loginOptions)}
                colorScheme="github"
                data-cy="log_with-github"
              >
                <Icon as={BsGithub} mr="2" />
                {action} with Github
              </Button>
              <Button
                onClick={() => signIn("google", loginOptions)}
                colorScheme="google"
                data-cy="log_with-google"
              >
                <Icon as={BsGoogle} mr="2" />
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
              borderBottom: "1px solid",
              borderColor: "base.20",
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
              Or {pseudo} down there
            </Text>
          </Box>

          <Stack
            as="form"
            onSubmit={handleSubmit((data) => onClickSubmit(data))}
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
                data-cy="log_email"
              />
              <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={!!errors.password}>
              <FormLabel>Password</FormLabel>
              <Input
                {...register("password", {
                  required: "Password is required",
                  minLength:
                    page === "Sign Up"
                      ? {
                          value: 6,
                          message:
                            "Password should contain at least 6 characters",
                        }
                      : undefined,
                })}
                type="password"
                data-cy="log_pw"
              />
              <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
            </FormControl>

            {page === "Sign Up" && (
              <FormControl isInvalid={!!errors.confirmPassword}>
                <FormLabel>Confirm Password</FormLabel>
                <Input
                  type="password"
                  {...register("confirmPassword", {
                    required: "Confirm password is required",
                    validate: {
                      passwordEqual: (value) =>
                        value === getValues().password ||
                        "Confirm password do not match!",
                    },
                  })}
                />
                <FormErrorMessage>
                  {errors.confirmPassword?.message}
                </FormErrorMessage>
              </FormControl>
            )}

            {/* <FormControl>
              <Checkbox defaultChecked>Remember me</Checkbox>
            </FormControl> */}

            <Button
              isLoading={isSubmitting}
              type="submit"
              width="full"
              data-cy="log_submit"
            >
              {action}
            </Button>

            <Box pt="2" textAlign="center">
              <Link href="#" fontSize="sm">
                I forgot my password
              </Link>
            </Box>
          </Stack>
        </Stack>
      </Stack>
    </Layout>
  );
}
