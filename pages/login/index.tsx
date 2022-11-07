import { signIn } from "next-auth/react";
import LogLayout, { LogForm } from "../../components/layout/log";

export default function Login() {
  async function login(form: LogForm) {
    signIn("credentials", {
      callbackUrl: "/",
      email: form.email,
      password: form.password,
    });
  }

  return (
    <LogLayout
      onConfirm={(form) => login(form)}
      onSuccess={() => {}}
      page="Login"
    />
  );
}
