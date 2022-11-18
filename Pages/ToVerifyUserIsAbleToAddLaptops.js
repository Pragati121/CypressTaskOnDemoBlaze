class LaptopPage{
 clickonlaptop = "//a[@id='itemc'][2]";
 laptopmodel="(//a[@class='hrefch'])[1]";

Laptoop() {
    cy.xpath(this.clickonlaptop).click()
}
AddLaptop(){
    cy.xpath(this.laptopmodel).click()
}
}
export default LaptopPage
