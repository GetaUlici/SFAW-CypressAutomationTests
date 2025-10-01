/// <reference types="cypress" />

it("Visit homepage test", () => {
    cy.visit("https://www.sfappworks.com/");
    cy.get('[alt="SFAW Logo"]').should('exist');
});
