describe('failing spec 2', () => {
  it('fails', () => {
    cy.visit('https://example.cypress.io/');
    cy.get('#asdasdjkf');
  });
});
