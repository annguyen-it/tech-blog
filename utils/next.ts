import { NextRouter } from "next/router";

export class NextUtils {
  static navigate(router: NextRouter, url: string) {
    if (router.pathname === url) {
      router.reload();
    } else {
      router.push(url);
    }
  }
}
