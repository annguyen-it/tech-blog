/// <reference types="cypress" />

Cypress.Commands.add("dataCy", (value, options) =>
  cy.get(`[data-cy="${value}"]`, options)
);

Cypress.Commands.add("login", () => {
  cy.session("user", () => {
    const username = Cypress.env("GITHUB_USER");
    const password = Cypress.env("GITHUB_PW");
    const loginUrl = Cypress.env("SITE_NAME");
    const cookieName = Cypress.env("COOKIE_NAME");

    const socialLoginOptions = {
      username,
      password,
      loginUrl,
      logs: false,
      headless: false,
      loginSelector: "[data-cy='login']",
      loginSelectorDelay: "1000",
      postLoginSelector: "[data-cy='create-post']",
      screenshotOnError: true,
    };

    cy.task<SocialLoginResponse>("GitHubSocialLogin", socialLoginOptions).then(
      ({ cookies, ...params }) => {
        cy.clearCookies();

        const cookie = cookies
          .filter((cookie) => cookie.name === cookieName)
          .pop();
        if (cookie) {
          cy.setCookie(cookie.name, cookie.value, {
            domain: cookie.domain,
            expiry: cookie.expires,
            httpOnly: cookie.httpOnly,
            path: cookie.path,
            secure: cookie.secure,
          });

          Cypress.Cookies.defaults({
            preserve: cookieName,
          });

          // remove the two lines below if you need to stay logged in
          // for your remaining tests
          // cy.visit("/api/auth/signout");
          // cy.get("form").submit();
        }
      }
    );
  });
});

declare global {
  namespace Cypress {
    interface Chainable<Subject = any> {
      task<T>(
        event: string,
        arg?: any,
        options?: Partial<Loggable & Timeoutable>
      ): Chainable<T>;
      dataCy(value: string, options?: Partial<Loggable & Timeoutable & Withinable & Shadow>): Chainable<JQuery<HTMLElement>>;
      login(): void;
    }
  }

  type SocialLoginResponse = {
    cookies: CyCookie[];
    lsd: Map<string, string>;
    ssd: Map<string, string>;
  };

  type CyCookie = {
    domain: string;
    expires: number;
    httpOnly: boolean;
    name: string;
    path: string;
    sameSite: string;
    secure: boolean;
    session: boolean;
    size: number;
    value: string;
  };
}

export {};
