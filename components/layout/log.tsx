import {
  Box,
  Button,
  ButtonGroup,
  Checkbox,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Icon,
  Input,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import { signIn, useSession } from "next-auth/react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { BsTwitter, BsGithub, BsGoogle, BsFacebook } from "react-icons/bs";
import { ValidationUtils } from "../../utils/validation";
import Layout from "./layout";

export type LogForm = {
  email: string;
  password: string;
  confirmPassword?: string;
};

type LogLayoutProps = {
  onConfirm: (form: LogForm) => any;
  onSuccess: () => void;
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
    setIsSubmitting(true);
    try {
      const data = await onConfirm(postForm);
      onSuccess();
    } catch (err) {
      console.log(err);
    } finally {
      setIsSubmitting(false);
    }
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
                variant="solid"
                colorScheme="facebook"
                data-cy="login-with-facebook"
              >
                <Icon as={BsFacebook} mr="2" />
                {action} with Facebook
              </Button>
              <Button variant="solid" colorScheme="twitter" color="white">
                <Icon as={BsTwitter} mr="2" />
                {action} with Twitter
              </Button>
              <Button
                onClick={() => signIn("github", loginOptions)}
                variant="solid"
                colorScheme="github"
                data-cy="login-with-github"
              >
                <Icon as={BsGithub} mr="2" />
                {action} with Github
              </Button>
              <Button
                onClick={() => signIn("google", loginOptions)}
                variant="solid"
                colorScheme="google"
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
              />
              <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={!!errors.password}>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
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

            {page === "Sign Up" && (
              <FormControl isInvalid={!!errors.confirmPassword}>
                <FormLabel>Confirm Password</FormLabel>
                <Input
                  type="password"
                  {...register("confirmPassword", {
                    required: "Confirm password is required",
                    validate: {
                      passwordEqual: (value) => {
                        console.log(value, getValues().email);

                        return (
                          value === getValues().password ||
                          "Confirm password do not match!"
                        );
                      },
                    },
                  })}
                />
                <FormErrorMessage>
                  {errors.confirmPassword?.message}
                </FormErrorMessage>
              </FormControl>
            )}

            <FormControl>
              <Checkbox defaultChecked>Remember me</Checkbox>
            </FormControl>

            <Button
              isLoading={isSubmitting}
              variant="primary"
              type="submit"
              width="full"
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
