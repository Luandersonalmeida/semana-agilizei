// implementação dos passos descritos na features
/// <reference types="cypress"/>

let Chance = require('chance');
let chance = new Chance();



When(/^informar meu dados$/, () => {
    cy.get('input[placeholder="First Name"]').type(chance.first());
    cy.get('input[ng-model^=Last]').type(chance.last());
    cy.get('input[ng-model^=Email]').type(chance.email());
    cy.get('input[ng-model^=Phone]').type(chance.phone({ formatted: false }));
    // Radios e checkbox
    cy.get('input[value=FeMale]').check();
    cy.get('input[type=checkbox]').check('Cricket');
    cy.get('input[type=checkbox]').check('Hockey');

    // Select e select2(Combos )
    cy.get('select#Skills').select('Javascript');
    cy.get('select#countries').select('Argentina');
    cy.get('select#country').select('Australia', { force: true });
    cy.get('select#yearbox').select('1995');
    cy.get('select[ng-model^=month]').select('February');
    cy.get('select#daybox').select('22');

    cy.get('input#firstpassword').type('Teste@123');
    cy.get('input#secondpassword').type('Teste@123');

    cy.get('input#imagesrc').attachFile('imagem.jpg');
});

When(/^salvar$/, () => {
    cy.get('button#submitbtn').click();
});

Then(/^devo ser cadastrado com sucesso$/, () => {
    cy.wait('@postNewtable').then((resNewtable) => {
        expect(resNewtable.status).to.eq(200);
    })
    cy.wait('@postUsertable').then((resNewtable) => {
        expect(resNewtable.status).to.eq(200);
    })
    cy.wait('@getNewtable').then((resNewtable) => {
        expect(resNewtable.status).to.eq(200);
    })
    cy.url().should('contain', 'WebTable');

});

