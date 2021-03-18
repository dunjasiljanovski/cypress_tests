/// <reference types="cypress" />

beforeEach(() => {
    
  cy
   .visit(Cypress.env('baseUrl'));
    
});
describe('Complete_item', () => {
  
  it('Complete_positive_test', () => {
  
      cy
          .get('input')
          .type('vinyl collection{enter}');
    
      cy
          .contains('vinyl collection')
          .should('exist');  
      
      cy
          .get('.toggle')
          .click();
    
      cy
          .get('li:last-child')
          .should('have.class', 'completed');
      });
      
  it('Complete_negative_test', () => {
  
      
      cy
          .get('input')
          .type('vinyl collection{enter}');
    
      cy
          .contains('vinyl collection')
          .should('exist');  
      
      cy
          .get('.toggle')
          .rightclick();
    
      cy
          .get('li:last-child')
          .should('not.have.class', 'completed');
      });
      
    });