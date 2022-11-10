import { Box, Flex } from "@chakra-ui/react";
import type { NextPage } from "next";
import { useSession } from "next-auth/react";
import Head from "next/head";
import { memo, useState } from "react";
import FourOhFour from "../404";
import Step1 from "./step-1";
import Step2 from "./step-2";

const NewUser: NextPage = () => {
  const { status, data } = useSession();
  const [step, setStep] = useState(1);

  if (status !== "authenticated") {
    return <FourOhFour />;
  }

  return (
    <>
      <Head>
        <title>Welcome to Tech blog</title>
      </Head>

      <Box
        as="main"
        pos="fixed"
        inset="0"
        h="full"
        w="full"
        backgroundImage='url("https://res.cloudinary.com/practicaldev/image/fetch/s--7uWF9VxV--/c_limit,f_auto,fl_progressive,q_75,w_1680/https://dev.to/assets/onboarding-background-white.png");'
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        _before={{
          pos: "absolute",
          inset: 0,
          display: "block",
          bg: "rgba(0,0,0,0.65)",
          content: `''`,
        }}
      >
        <Flex
          direction="column"
          justify="center"
          pos="fixed"
          inset="0"
          w="90%"
          maxW={step === 1 ? "container.sm" : "container.md"}
          m="auto"
        >
          {step === 1 && <Step1 setStep={setStep} />}
          {step === 2 && <Step2 setStep={setStep} data={data} />}
        </Flex>
      </Box>
    </>
  );
};

export default memo(NewUser);
