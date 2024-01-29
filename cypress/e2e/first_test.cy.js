// /// <reference types = "cypress" />



/// <reference types = "cypress" />

describe('flip website test', function() {
  it('Correct login and passwords', function(){
    cy.visit('https://www.flip.kz/user?password');
    cy.get('#username-pass').type('damir_27.12.2001@mail.ru', {force: true})
    cy.get('#password').type('!H.MaX4.6N857xg')
    cy.get('.password-form > .nbtn').click()
    });
  it('handles incorrect login, correct password format', function() {
      cy.visit('https://www.flip.kz/user?password');
      cy.get('#username-pass').type('invalidUsername@mail.ru', { force: true });
      cy.get('#password').type('!H.MaX4.6N857xg');
      cy.get('.password-form > .nbtn').click()
      cy.get('.error > .messege').should('be.visible');
  });
  it('handles correct login and incorrect password format', function() {
    cy.visit('https://www.flip.kz/user?password');
    cy.get('#username-pass').type('damir_27.12.2001@mail.ru', { force: true });
    cy.get('#password').type('invalidPassword123');
    cy.get('.password-form > .nbtn').click()
    cy.get('.error > .messege').should('be.visible');
});
  it('handles incorrect login and  password format', function() {
    cy.visit('https://www.flip.kz/user?password');
    cy.get('#username-pass').type('invalidUsername@mail.ru', { force: true });
    cy.get('#password').type('invalidPassword123');
    cy.get('.password-form > .nbtn').click()
    cy.get('.error > .messege').should('be.visible');
  });
});


