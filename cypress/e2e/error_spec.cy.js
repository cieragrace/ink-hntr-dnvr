export {}

describe('Error page testing', () => {
  beforeEach(() => {
    cy.visit("http://localhost:3001/error")
  })

  it('should display a logo and back to home page button at the top of the page', () => {
    cy.get(".header-logo-container").children().should("have.length", 2)
  })

  it('should alert the user that there has been an error', () => {
    cy.get(".oh-no").contains( "404 Page Not Found")
  })

  it('redirect the user to click link back to home page', () => {
    cy.get(".redirect").contains("To be redirected back to home click logo above")
  })

  it('should send the user back to home when logo is clicked', () => {
    cy.get(".home-btn").click()
    cy.url().should('eq', 'http://localhost:3001/')
  })

  it('should send the uesr home when the logo in header is clicked', () => {
    cy.get(".header-logo").click()
    cy.url().should('eq', 'http://localhost:3001/')
  })
})