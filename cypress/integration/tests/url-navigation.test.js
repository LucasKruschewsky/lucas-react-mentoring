/// <reference types="cypress" />

describe('End-to-end test scenario for url navigation routing', () => {
  it('visit "/" url and redirect to "/search', () => {
    cy.visit('http://localhost:9000');
    cy.url().should('eq', 'http://localhost:9000/search');
  });

  it('search param in url should be initialized inside search input', () => {
    cy.visit('http://localhost:9000/search/war');
    cy.get('input[name="searchField"]').should('have.value', 'war');
    cy.get('#MovieCardContainer h1').should('contain.text', 'war');
  });

  it('type on input, hit search, should go to "/:inputValue', () => {
    cy.visit('http://localhost:9000/search');
    cy.get('input[name="searchField"]').type('war');
    cy.get('button[name="searchFieldButton"]').click();
    cy.url().should('eq', 'http://localhost:9000/search/war');
    cy.get('#MovieCardContainer h1').should('contain.text', 'war');
  });

  it('select a movie from list, banner changes to selected movie', () => {
    let selectedMovieName;

    /**
     * Clicks first movie from list
     */
    cy.visit('http://localhost:9000/search');
    cy.get('#MovieCardContainer button').first().click();

    /**
     * Checks if selected movie banner exist and search banner does not exist
     * at the same time
     */
    cy.get('#selected-movie-details-banner').should('exist');
    cy.contains('Find Your Movies').should('not.exist');

    /**
     * Checks if title from selected movie is the same as the one in the banner
     */
    cy.get('#MovieCardContainer h1')
      .first()
      .should((title) => {
        selectedMovieName = title.text();
      });

    cy.get('#selected-movie-details-banner h1').should((title) => {
      const titleOnBanner = title.text();
      expect(selectedMovieName).equal(titleOnBanner);
    });

    /**
     * Check if url contains search param movie
     */
    cy.url().should('contain', '?movie=');
  });
});
