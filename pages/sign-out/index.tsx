import { Box, Button, Heading } from "@chakra-ui/react";
import type { NextPage } from "next";
import { signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Layout from "../../components/layout/layout";
import FourOhFour from "../404";

const SignOut: NextPage = () => {
  const { status } = useSession();

  if (status !== "authenticated") {
    return <FourOhFour />;
  }

  return (
    <Layout>
      <Head>
        <title>Confirm Sign out</title>
      </Head>

      <Box pb="30%" pt="calc(15% + 50px)" px="2%" textAlign="center">
        <Heading as="h1" mb="2" fontSize="2xl">
          Are you sure you want to sign out?
        </Heading>
        <Button
          onClick={() => signOut({ callbackUrl: "/" })}
          variant="primary"
          size="lg"
          data-cy="sign-out"
        >
          Yes, sign out
        </Button>
      </Box>
    </Layout>
  );
};

export default SignOut;
