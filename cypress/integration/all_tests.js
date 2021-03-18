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

  describe('Edit_item', () => {
  
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


