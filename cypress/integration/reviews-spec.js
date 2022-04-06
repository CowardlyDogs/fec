describe('Reviews and Ratings', function () {


  it('Expects initial render to display a show more button - upon click a next page button should appear, function () {
    cy.visit('http://localhost:3000/')

    cy.contains('Show More').click()

    cy.contains('Next Page')
  })
})
