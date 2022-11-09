import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import axios from "axios";
import { signIn } from "next-auth/react";
import { useRef, useState } from "react";
import LogLayout, { LogForm } from "../../components/layout/log";

export default function SignUp() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [signUpForm, setSignUpForm] = useState<LogForm | null>(null);
  const cancelRef = useRef(null);

  async function signUp(form: LogForm) {
    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE}/register`,
        form
      );
      setSignUpForm(form);
      return null;
    } catch (e) {
      return { error: "This email has already been taken" };
    }
  }

  function updateInformation() {
    signIn("credentials", {
      callbackUrl: "/new-user",
      email: signUpForm!.email,
      password: signUpForm!.password,
    });
  }

  return (
    <>
      <LogLayout page="Sign Up" onConfirm={signUp} onSuccess={onOpen} />

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        closeOnEsc={false}
        closeOnOverlayClick={false}
        isCentered={true}
      >
        <AlertDialogOverlay />

        <AlertDialogContent>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            Account created
          </AlertDialogHeader>

          <AlertDialogBody>
            Please fill more information about you.
          </AlertDialogBody>

          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={() => updateInformation()}>
              Sure
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
