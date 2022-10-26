describe("Navigate home page", () => {
  it("Visits home page", () => {
    cy.visit("/sign-out");
    cy.dataCy("logo").click();
    cy.url().should("equal", Cypress.config().baseUrl + "/");
  });
});

export {}
