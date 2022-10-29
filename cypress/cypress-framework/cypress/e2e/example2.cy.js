describe('Test Suite 3', () => {
    it('W3', () => {
        cy.visit('https://www.w3schools.com/')
    })

    it('Tutorials', {tags:'@smoke'},() => {
        cy.visit('https://www.javatpoint.com/')

    })

  })
