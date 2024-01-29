/// <reference types = "cypress" />

it('flip website test', function(){
    cy.visit('https://www.flip.kz/user?password')
})

// /// <reference types = "cypress" />

// it('flip website test', function(){
//     cy.visit('https://www.flip.kz/user?password');
//     cy.get('#username-pass').type('damir_27.12.2001@mail.ru', {force: true})
//     cy.get('#password').type('!H.MaX4.6N857xg')
//     cy.get('.password-form > .nbtn').click()
//     });