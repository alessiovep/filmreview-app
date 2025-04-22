describe("Film Browsing", () => {
    it("displays film cards with title, year, and director", () => {
        cy.visit("/films");

        cy.get('[data-cy="film-card"]').should("have.length.at.least", 1);

        cy.get('[data-cy="film-card"]').each(($card) => {
            cy.wrap($card).within(() => {
                cy.get('[data-cy="film-poster"]').should("exist");
                cy.get(".v-card-title").should("not.be.empty");
                cy.get(".v-card-subtitle").should("have.length.at.least", 1); // year & director
            });
        });
    });

    it("navigates to film details page when a card is clicked", () => {
        cy.visit("/films");

        cy.get('[data-cy="film-card"]').contains("Spirited Away").click();

        cy.url().should("include", "/films/3");
        cy.contains("Chihiro").should("exist");
    });
});
