class Additemstocart {
    clickonloginbutton ="//a[contains(text(),'Log in')]";
    clickonphone="//a[contains(text(),'Samsung galaxy s6')]";
    additemincart="//a[contains(text(),'Add to cart')]";
    clickoncart="//a[contains(text(),'Cart')]";
    clickonplaceorer="//button[contains(text(),'Place Order')]";
    Login(){
       cy.xpath(this.clickonloginbutton).click()
    }
    clickonmobile() {
        cy.xpath(this.clickonphone).click()
    }
    addingitem(){
    cy.xpath(this.additemincart).click()
    }
    clickcart(){
        cy.xpath(this.clickoncart).click()
    }
    placeorder(){
        cy.xpath(this.clickonplaceorer).click()
    }
}
export default Additemstocart
