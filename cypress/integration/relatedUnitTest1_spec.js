describe('Related items tests', function () {


  it('Expects proper card displayed at index 0 of Outfit Carousel', function () {
    cy.visit('http://localhost:3000/')

    cy.contains('Add Item to Outfit')
  })
})
