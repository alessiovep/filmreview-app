describe("Logout Flow", () => {
    beforeEach(() => {
        cy.login("cypress@gmail.com", "1234");
    });

    it("logs out the user and redirects to home", () => {
        cy.get('[data-cy="logout-btn"]').click();

        // Should be redirected to home
        cy.url().should("eq", "http://localhost:5173/");
        cy.contains("Login").should("exist"); // Login button shows again
    });

    it("blocks access to /account after logout", () => {
        cy.get('[data-cy="logout-btn"]').click();
        cy.visit("/account");
        cy.url().should("include", "/authentication"); // Redirects back to login
    });
});
