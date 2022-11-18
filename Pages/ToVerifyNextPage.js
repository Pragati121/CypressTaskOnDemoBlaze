class ToVerifyNextPage{
     Next='//button[@id="next2"]';
    clickonnextpage(){
        cy.xpath(this.Next).click()
     }
}
export default ToVerifyNextPage