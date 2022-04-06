describe('First Unit Test', function () {
  it('Tests a testing test', function () {
    expect(true).to.equal(true)
  })
})


describe('Search query input', function () {
  it('Finds search input, enters text', function () {
    cy.visit('http://localhost:3000/');

    cy.get('.search')
      .type('testing a search query')
      .should('have.value', 'testing a search query')
  })
})
