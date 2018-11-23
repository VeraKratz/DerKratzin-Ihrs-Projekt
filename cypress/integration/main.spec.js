describe('App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })
  it('has the right title', () => {
    cy.title().should('be', 'DerKratzin-Ihrs-Projekt')
  })

  it('has an input', () => {
    cy.get('input
    placeholder="about me"')
    .should('be', 'DerKratzin-Ihrs-Projekt')
  })
})

