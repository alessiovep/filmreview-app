describe('Authentication', () => {
    it('logs in successfully', () => {
        cy.visit('/authentication');
        cy.get('[data-cy="email"]').type('cypress@gmail.com');
        cy.get('[data-cy="password"]').type('1234');
        cy.get('[data-cy="login-btn"]').click();

        cy.url().should('not.include', '/authentication');
    });

    it('shows error for invalid credentials', () => {
        cy.visit('/authentication');
        cy.get('[data-cy="email"]').type('wrong@email.com');
        cy.get('[data-cy="password"]').type('wrongpass');
        cy.get('[data-cy="login-btn"]').click();

        cy.contains('Invalid Email or password').should('exist');
    });
});
