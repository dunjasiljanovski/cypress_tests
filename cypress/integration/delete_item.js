/// <reference types="cypress" />

beforeEach(() => {
    
  cy
   .visit(Cypress.env('baseUrl'));
    
});

describe('Delete_item', () => {
  
  it('delete_positive_test', () => {
  
  cy
      .get('input')
      .type('vinyl collection{enter}');

  cy
      .get('.destroy')
      .click({force: true});

  cy
      .contains('vinyl collection')
      .should('not.exist');

  });
  
  it('delete_negative_test', () => {

  cy
      .get('input')
      .type('vinyl collection{enter}');

  cy
      .get('.destroy')
      .rightclick({force: true});
    
  cy
      .contains('vinyl collection')
      .should('exist');
    
  });
  
});