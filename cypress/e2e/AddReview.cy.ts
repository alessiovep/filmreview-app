/// <reference types="cypress" />
let createdReviewId: number;

describe("Add Review", () => {
    beforeEach(() => {
        cy.login("mariana@gmail.com", "1234");
    });

    it("should allow a user to add a review", () => {
        cy.visit("http://localhost:5173/films/3");

        cy.contains("Add Review").click();
        cy.get('[data-cy="comment"]').type("This movie was truly amazing!");
        cy.get('[data-cy="rating"]').clear().type("5");

        cy.intercept("POST", "**/reviews").as("createReview");

        cy.get('[data-cy="submit"]').click();

        cy.wait("@createReview").then((interception) => {
            createdReviewId = interception.response?.body?.id;
            expect(createdReviewId).to.exist;
        });

        cy.contains("This movie was truly amazing!").should("exist");
    });

    afterEach(() => {
        if (createdReviewId) {
            cy.request("DELETE", `http://localhost:3001/reviews/${createdReviewId}`);
        }
    });
});
