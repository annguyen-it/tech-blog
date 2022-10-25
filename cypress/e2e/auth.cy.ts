describe("Login & Sign out", () => {
  before(() => {
    cy.login();
  });

  it("Sign out", () => {
    const cookieName = Cypress.env("COOKIE_NAME");
    cy.visit("/");
    cy.getCookie(cookieName).should("have.property", "name", cookieName);

    cy.dataCy("nav-avatar", { timeout: 5000 }).click();
    cy.dataCy("nav-sign-out").click();
    cy.url().should("contain", "sign-out");

    cy.dataCy("sign-out").click();
    cy.dataCy("login").should("exist");
    cy.url().should("equal", Cypress.config().baseUrl + "/");
  });
});

describe("Navigate to private route", () => {
  beforeEach(() => {
    cy.visit("/");
  });
});

export {};
