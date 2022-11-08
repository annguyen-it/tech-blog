describe.skip("Login with GitHub, navigate to private route & sign out", () => {
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
    cy.dataCy("layout_avatar", { timeout: 5000 }).click();
    cy.dataCy("layout_sign-out").click();
    cy.dataCy("sign-out_confirm").click();
    cy.url().should("equal", Cypress.config().baseUrl + "/");
  });
});

describe("Login with credentials", () => {
  beforeEach(() => {
    cy.login("credentials");
    cy.visit("/");
  });

  it("Should has cookie", () => {
    const cookieName = Cypress.env("COOKIE_NAME");
    cy.getCookie(cookieName).should("have.property", "name", cookieName);
  });

  it("Create post", () => {
    cy.visit("/new");
    cy.dataCy("new-post_component").should("exist");
  });

  it("Sign out", () => {
    cy.dataCy("layout_avatar", { timeout: 5000 }).click();
    cy.dataCy("layout_sign-out").click();
    cy.dataCy("sign-out_confirm").click();
    cy.url().should("equal", Cypress.config().baseUrl + "/");
  });
});

describe("Navigate to private route", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Should not has cookie", () => {
    const cookieName = Cypress.env("COOKIE_NAME");
    cy.getCookie(cookieName).should("not.exist");
  });

  it("Home => Should have auth components", () => {
    cy.dataCy("layout_login").should("exist");
    cy.dataCy("home_introduction").should("exist");
  });

  it("Create post => Login", () => {
    cy.visit("/new");
    cy.dataCy("log_component").should("exist");
  });

  it("Sign out => 404", () => {
    cy.visit("/out");
    cy.dataCy("404").should("exist");
  });
});

export {};
