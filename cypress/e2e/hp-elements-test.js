/// <reference types="cypress" />

describe('Interact with elements on Homepage', () => {
  beforeEach('Visit homepage test', () => {
    cy.visit('https://www.sfappworks.com/');
    cy.get('[alt="SFAW Logo"]').should('exist');
  });

  it("Access 'Get in Touch' button from first section", () => {
    cy.get('.content-vertical > .button').click();
    cy.url().should('include', '#section-contact');
  });

  it("Access 'Read Case Study' button", () => {
    cy.get('.case-study-landscape .button').click();
    cy.url().should('include', 'https://www.sfappworks.com/case-studies/top-qsr-in-the-us');
  });

  it('Test the link behind the Landscape Case Study image', () => {
    cy.get('[class="hover-image case-study-image"]').click();
    cy.url().should('include', 'https://www.sfappworks.com/case-studies/top-qsr-in-the-us');
  });

  it('Access Fortune 500 Case study', () => {
    cy.get('a[href="/case-studies/fortune-500-retailer"]').click();
    cy.url().should('include', 'https://www.sfappworks.com/case-studies/fortune-500-retailer');
  });

  it('Access West Elm Case study', () => {
    cy.get('a[href="/case-studies/west-elm"]').click();
    cy.url().should('include', 'https://www.sfappworks.com/case-studies/west-elm');
  });
});
