export{}
describe('Home Page', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3000/api/v1/artists', {fixture: 'homePage'})
    cy.visit('http://localhost:3001/')
  })
  it('on load user should see the logo and selector at the top of the scrren', () => {
    cy.get('.form-container').children().should('have.length', 2)
  })

  it('should show all artists in load', () => {
    cy.get('.artists-container').children().should("have.length", 10)
  })

  it('should display each artists name and shop on load', () => {
    cy.get('.card-deets').children().should("have.length", 20)
  })
})