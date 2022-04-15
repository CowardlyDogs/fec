describe('First Unit Test', function () {
  it('Tests a testing test', function () {
    expect(true).to.equal(true);
  });
});


describe('Search query input', function () {
  it('Finds search input, enters text', function () {
    cy.visit('http://localhost:3000/');

    cy.get('.search')
      .type('testing a search query')
      .should('have.value', 'testing a search query');
  });
});

describe('AddQ input fields', function () {
  it('Find AddQ input fields, enters text', function () {
    cy.visit('http://localhost:3000/');

    cy.contains('Ask A Question').click();

    cy.get('textarea[name=AddQbody]')
      .type('Question Body')
      .should('have.value', 'Question Body');

    cy.get('input[name=AddQNickName]')
      .type('Input 1')
      .should('have.value', 'Input 1');

    cy.get('input[name=AddQEmail]')
      .type('email@email.com')
      .should('have.value', 'email@email.com');

    cy.get('button[name=submit]').click({force: true});
  });
});
