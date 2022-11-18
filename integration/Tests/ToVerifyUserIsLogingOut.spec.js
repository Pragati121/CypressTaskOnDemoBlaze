it('sign up test',function(){
    cy.login()
    cy.logout()
    cy.title().should('be.equal','STORE')
})