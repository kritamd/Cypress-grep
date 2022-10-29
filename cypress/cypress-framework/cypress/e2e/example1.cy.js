describe('Test Suite 1', () => {
    it('fb',{tags:'@smoke'}, () => {
      cy.visit('www.facebook.com')
    })

    it('gmail', () => {
        cy.visit('www.gmail.com')
      })


  })