describe('Quantity Selector', () => {
  it('Should pass when a size is selected', () => {
    cy.visit('http://localhost:3000/');

    cy.contains('Select Size').click();
    cy.contains('XS').click();
    cy.should.contain('1');
  })
})