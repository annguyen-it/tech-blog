import { Stack } from "@chakra-ui/react";
import Link from "next/link";

export default function Footer() {
  return (
    <Stack p="12" textAlign="center" background="#e5e5e5">
      <p>
        <Link aria-label="DEV Community 👩&zwj;💻👨&zwj;💻 Home" href="/">
          DEV Community 👩&zwj;💻👨&zwj;💻
        </Link>{" "}
        — A constructive and inclusive social network for software developers.
        With you every step of your journey.
      </p>
      <div>
        <p>
          Built on{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.forem.com"
          >
            Forem
          </a>{" "}
          — the
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://dev.to/t/opensource"
          >
            open source
          </a>{" "}
          software that powers{" "}
          <a target="_blank" rel="noopener noreferrer" href="https://dev.to">
            DEV
          </a>{" "}
          and other inclusive communities.
        </p>
        <p>
          Made with love and{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://dev.to/t/rails"
          >
            Ruby on Rails
          </a>
          . DEV Community 👩&zwj;💻👨&zwj;💻 <span title="copyright">©</span>{" "}
          2016 - 2022.
        </p>
      </div>
    </Stack>
  );
}
