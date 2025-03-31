/// <reference types="cypress" />
export {};

Cypress.Commands.add("login", (email: string, password: string) => {
    cy.visit("/login");
    cy.get('input[type="email"]').type(email);
    cy.get('input[type="password"]').type(password);
    cy.get("form").contains("Login").click();
    cy.contains("Hi").should("exist");
});

declare global {
    namespace Cypress {
        interface Chainable {
            login(email: string, password: string): Chainable<void>;
        }
    }
}
