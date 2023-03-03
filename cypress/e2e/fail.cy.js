describe('failing spec', () => {
  it('fails', () => {
    cy.visit('https://example.cypress.io/');
    cy.get('#fail');
  });
});
