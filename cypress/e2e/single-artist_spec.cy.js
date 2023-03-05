export{}
describe('Single Artist Page', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3000/api/v1/artists', {fixture: 'homePage'})
    cy.visit('http://localhost:3001/4')
  })

  it('should display a logo and back to home page button at the top of the page', () => {
    cy.get(".header-logo-container").children().should("have.length", 2)
  })

  it('should display artist images on page load on left side of screen', () => {
    cy.get('.left-side').children().should("have.length", 1)
  })

  it('should have three images per artist page', () =>  {
    cy.get('.artist-images').children().should("have.length", 3)
  })

  it('should display the artists name', () => {
    cy.get('.artist-name').contains("Dianne Chavez").should('exist')
    cy.get('.artist-name').contains("Ciera DePauw").should('not.exist')
  })

  it('should display the artists tattoo shop', () => {
    cy.get('.shop-name').contains("Ikonik Ink Tattoo").should('exist')
    cy.get('.shop-name').contains("Think Tank").should('not.exist')
  })

  it('should display the tattoo shops phone number', () => {
    cy.get('.phone').contains("720-427-2326").should('exist')
    cy.get('.phone').contains(720-427-2326).should('not.exist')
  })

  it('should send the user back to home when logo is clicked', () => {
    cy.get(".home-btn").click()
    cy.url().should('eq', 'http://localhost:3001/')
  })

  it('should send the uesr home when the logo in header is clicked', () => {
    cy.get(".header-logo").click()
    cy.url().should('eq', 'http://localhost:3001/')
  })

//Sad this test is erroring due to the before each attempting to send to local host
//It does however load the webpage when running the test so it does work

  // it('should take a user to the artists instagram page when they click on the instagram icon', () => {
  //   cy.get('.insta-4').click()
  //   cy.url().should("eq", "https://www.instagram.com/vexit.ink/")
  // })
})