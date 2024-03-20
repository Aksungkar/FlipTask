// /// <reference types = "cypress" />



/// <reference types = "cypress" />

describe('flip website test', function() {
  it('Correct login and passwords', function(){
    cy.visit('/user?password');
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
  it('checking h1 text', function(){
    cy.visit('https://www.flip.kz/user?password');
    cy.get('.logo > a').should('exist');
  })

  it('Adding product in cart', function(){
    cy.visit('/user?password');
    cy.get('#username-pass').type('damir_27.12.2001@mail.ru', {force: true})
    cy.get('#password').type('!H.MaX4.6N857xg')
    cy.get('.password-form > .nbtn').click()
    cy.visit('/catalog?prod=898883');
    cy.get('#cart_button').click();
    cy.get('form > .nbtn').click();
    cy.visit('/order?form=address');
    cy.get(':nth-child(3) > .w-0 > form > .nbtn').click()
    cy.get('#items-id-4-1700').click()
    cy.get('.item-4 > .v-top > .p-l-10 > .m-t-15 > .cell > .nbtn').click()
    cy.get(':nth-child(2) > .w-0 > form > .nbtn').click()
    
  });
  
});


