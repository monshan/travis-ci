describe('MVP Ideabox Testing', () => {
  beforeEach(() => {
    cy.visit('https://intense-dusk-39851.herokuapp.com/')
    cy.get('#title').type('Example title')
    cy.get('#content').type('Some nonsense content')
    cy.get('#submitBtn').click()
  })

  it('Should be able to add a card', () => {
    cy.get('#cardContainer > fieldset')
      .contains('EXAMPLE TITLE')
    cy.get('#cardContainer > fieldset')
      .contains('Some nonsense content')
  })

  it('Should be able to delete a card', () => {
    cy.get('#cardContainer > fieldset > button')
      .should('exist')
    cy.get('#cardContainer > fieldset > button').click()
    cy.get('#cardContainer > fieldset')
      .should('not.exist')
  })
})