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

  it('should take user to individual artist page when artist card is clicked', () => {
    cy.get('.1').click()
    cy.url().should("eq", 'http://localhost:3001/1')
  })

  it('should take a user to another artist page if their card is clicked', () => {
    cy.get('.8').click()
    cy.url().should('eq', 'http://localhost:3001/8')
  })


      //<MultiSelect component does not allow select in cypress, need more time to study this

      // it('should filter through the data based on the input selections', () => {
  //   cy.get('.selects')
  //   cy.select(['large scale'])
  //   cy.get(".artists-container").children().should("have.length", 1);
  //   cy.get('.artists-container').contains('Billy Crandall').should('exist');
  //   cy.get('.artists-container').contains('Katrina ALdaco').should('not.exist');
  })
})