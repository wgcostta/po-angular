/// <reference types="Cypress" />

context('Accordion:', () => {

    before(() => {
        cy.visit('http://localhost:4200/')
    })

    beforeEach(() => {
        cy.get('.po-button.po-text-ellipsis').contains('Sample Restore').click();
    })
  
    it('.shouldn´t have accordion item.', () => {
        cy.get('.po-accordion-item').and('not.be.visible'); // não deve ter accordion item
    })
    
    it('.should add a accordion item.', () => {
        cy.get('.po-input.po-input-icon-right').type('item a');
        cy.get('.po-button.po-text-ellipsis').contains('Add Accordion').click();
        cy.get('.po-accordion-item').and('be.visible'); // deve adicionar um accordion
    })
    
    it('.should expand the accordion item.', () => {
        cy.get('.po-accordion-item-body').and('not.be.visible');

        cy.get('.po-input.po-input-icon-right').type('New item');
        cy.get('.po-button.po-text-ellipsis').contains('Add Accordion').click();      

        cy.get('.po-accordion-item').contains('New item').click(); // deve expandir o accordion
        cy.get('.po-accordion-item-body').and('be.visible');
    })
  
    it('.should collpase the accordion item after second click.', () => {
        cy.get('.po-input.po-input-icon-right').type('A new item');
        cy.get('.po-button.po-text-ellipsis').contains('Add Accordion').click();

        cy.get('.po-accordion-item').contains('A new item').click();        
        cy.get('.po-accordion-item-body').and('be.visible');

        cy.get('.po-accordion-item').contains('A new item').click();
        cy.get('.po-accordion-item-body').and('not.be.visible'); // deve colapsar o accordion
    })

    it('.should have add two accordion items dynamically.', () => {
        cy.get('.po-input.po-input-icon-right').type('Item A');
        cy.get('.po-button.po-text-ellipsis').contains('Add Accordion').click();

        cy.get('.po-input.po-input-icon-right').type('Item B');
        cy.get('.po-button.po-text-ellipsis').contains('Add Accordion').click();

        cy.get('.po-accordion-item').should('have.length', 2) // deve adicionar dois accordion items
    })
  
    it('.should click in both accordion items but keep only one expanded.', () => {
        cy.get('.po-input.po-input-icon-right').type('Item A');
        cy.get('.po-button.po-text-ellipsis').contains('Add Accordion').click();

        cy.get('.po-input.po-input-icon-right').type('Item B');
        cy.get('.po-button.po-text-ellipsis').contains('Add Accordion').click();

        cy.get('.po-accordion-item').contains('Item A').click();
        cy.get('.po-accordion-item').contains('Item B').click();

        cy.get('.po-accordion-item-body').should('have.length', 1) // deve clicar nos accordions sequencialmente e manter apenas um expandido
    })

})
  