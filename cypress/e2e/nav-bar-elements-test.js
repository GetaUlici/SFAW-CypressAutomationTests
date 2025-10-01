/// <reference types="cypress" />

describe("Nav bar elements test", () => {
  beforeEach(() => {
    cy.visit("https://www.sfappworks.com/");
    cy.get('[alt="SFAW Logo"]').should("exist");
  });

  it("Access the homepage button", () => {
     cy.get('a[href="/"]').click();
     cy.get('[class="title-large home"]').should('be.visible')
  })

  it("Access Real Results Linktext", () => {
   cy.get('a[href="#section-realresults"]').click();
    cy.url().should('include', '#section-realresults');

  })

  it("Access Our Edge Linktext", () => {
   cy.get('a[href="#section-our-edge"]').click();
    cy.url().should('include', '#section-our-edge');

  })

  it("Access Our Playbook Linktext", () => {
   cy.get('a[href="#section-ourplaybook"]').click();
    cy.url().should('include', '#section-ourplaybook');

  })

   it("Access Client Love Linktext", () => {
   cy.get('a[href="#section-clientlove"]').click();
    cy.url().should('include', '#section-clientlove');

  })

  it("Access 'Get in Touch' button", () => {
   cy.get('a[href="#section-contact"]').first().click({force:true});
    cy.url().should('include', '#section-contact');

  })
});


