import { signIn } from "next-auth/react";
import LogLayout, { LogForm } from "../../components/layout/log";

export default function Login() {
  async function login(form: LogForm) {
    const res = await signIn("credentials", {
      callbackUrl: "/",
      redirect: false,
      email: form.email,
      password: form.password,
    });

    if (res?.error) {
      return { error: "Your account or password is incorrect" };
    }
    return null;
  }

  return <LogLayout page="Login" onConfirm={login} />;
}
