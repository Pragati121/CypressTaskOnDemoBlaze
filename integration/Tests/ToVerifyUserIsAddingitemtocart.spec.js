import ToVerifyUserIsAbleToLogin from "../../Pages/ToVerifyUserIsAbleToLogin"
import ToVerifyUserIsAbleToAddItems from "../../Pages/ToVerifyUserIsAbleToAddItems";
const signuppage = new ToVerifyUserIsAbleToLogin()
const additemtocart=new ToVerifyUserIsAbleToAddItems
it('add items to cart',function(){
    signuppage.navigate()
    additemtocart.clickonmobile()
    additemtocart.addingitem()
    additemtocart.clickcart()
    additemtocart.placeorder()
})