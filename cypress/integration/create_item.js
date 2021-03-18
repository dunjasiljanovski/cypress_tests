/// <reference types="cypress" />

beforeEach(() => {
    
  cy
   .visit(Cypress.env('baseUrl'));
    
});

describe('Create_item', () => {

  it('create_positive_test', () => {

  cy
    .get('input')
    .type('vinyl collection{enter}');

  cy
    .contains('vinyl collection')
    .should('exist');
  
  });
  
  it('create_negative_test', () => {

    
  cy
        .get('input')
        .type('vinyl collection');

  cy
        .contains('vinyl collection')
        .should('not.exist');   
  });
  
});