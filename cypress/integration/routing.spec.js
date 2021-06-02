describe("Routing", () => {
  it("Navigates to team member page", () => {
    cy.visit("http://localhost:3000");
    cy.get("Header").find("Button").should("exist").click();

    cy.get("nav").find("[data-cy=team-member-page]").should("exist").click();
    cy.url().should("equal", "http://localhost:3000/team-members");
  });
});
