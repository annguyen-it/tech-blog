describe("Navigate home page", () => {
  it("Visits home page", () => {
    cy.visit("/signup");
    cy.dataCy("logo").click();
    cy.url().should("equal", Cypress.config().baseUrl + "/");
  });
});

export {};
