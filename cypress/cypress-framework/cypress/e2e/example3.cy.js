describe('Test Suite 2', () => {
  it('First', () => {
    cy.visit('www.youtube.com')
  })
  it('Second',{tags:'@smoke'}, () => {
    cy.visit('www.facebook.com')
  })
  it('Third', () => {
    cy.visit('www.hotmail.com')
  })
  it('Fourth', () => {
    cy.visit('www.yahoo.com')
  })
  it('Fifth',{tags:'@smoke'}, () => {
    cy.visit('www.gmail.com')
  })

})