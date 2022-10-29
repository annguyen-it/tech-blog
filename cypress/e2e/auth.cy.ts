describe("Login with GitHub, navigate to private route & sign out", () => {
  beforeEach(() => {
    cy.login("github");
    cy.visit("/");
  });

  it("Should has cookie", () => {
    const cookieName = Cypress.env("COOKIE_NAME");
    cy.getCookie(cookieName).should("have.property", "name", cookieName);
  });

  it("Create post", () => {
    cy.visit("/new");
    cy.dataCy("new-post").should("exist");
  });

  it("Sign out", () => {
    cy.dataCy("nav-avatar", { timeout: 5000 }).click();
    cy.dataCy("nav-sign-out").click();
    cy.dataCy("sign-out").click();
    cy.dataCy("login").should("exist");
    cy.url().should("equal", Cypress.config().baseUrl + "/");
  });
});

describe.skip("Navigate to private route", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Should not has cookie", () => {
    const cookieName = Cypress.env("COOKIE_NAME");
    cy.getCookie(cookieName).should("not.exist");
  });

  it("Create post", () => {
    cy.visit("/new");
    cy.dataCy("404").should("exist");
  });

  it("Sign out", () => {
    cy.visit("/out");
    cy.dataCy("404").should("exist");
  });
});

export {};
