/// <reference types="cypress" />


describe('Edit item positive', () => {

  it('edit_positive_test', () => {
    
    cy
        .visit(Cypress.env('baseUrl'));
      
    cy
        .get('input')
        .type('vinyl collection{enter}');
    
    cy
        .contains('vinyl collection')
        .should('exist');

    cy
        .get('.todo-list li div label').dblclick()
        .get ('.todo-list li.editing .edit').clear()
        .type('new vinyl collection{enter}');


    cy
        .get('.todo-list li div label')
        .contains('new vinyl collection')
        .should('exist');
        
     });

  it('edit_negative_test', () => {
  
    cy
     .visit(Cypress.env('baseUrl'));

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
     .get('.todo-list li div label').dblclick()
     .get ('.todo-list li.editing .edit').clear()
     .type('new vinyl collection{enter}');

   cy
     .get('li:last-child')
     .should('not.have.value', 'vinyl collection');

 });
}); 

