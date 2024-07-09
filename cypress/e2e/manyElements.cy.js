describe('Big page with may elements', () => {

beforeEach(() => {
  cy.getBaseUrl('/')
})

  it('Complicated page', () => {
    cy.contains('Big page with many elements').click()
  })
})