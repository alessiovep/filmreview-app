/// <reference types="cypress" />
export {};

Cypress.Commands.add("login", (email: string, password: string) => {
    cy.visit("/authentication");

    cy.get('[data-cy="email"]').type(email);
    cy.get('[data-cy="password"]').type(password);
    cy.get('[data-cy="login-btn"]').click();

    cy.url().should('eq', 'http://localhost:5173/');
});

declare global {
    namespace Cypress {
        interface Chainable {
            login(email: string, password: string): Chainable<void>;
        }
    }
}
