import ToVerifyUserIsAbleToLogin from "../../Pages/ToVerifyUserIsAbleToLogin"
import LaptopPage from "../../Pages/ToVerifyUserIsAbleToAddLaptops"
const signuppage = new ToVerifyUserIsAbleToLogin()
const additem =new LaptopPage()
it('add items to cart',function(){
     signuppage.navigate()
      additem.Laptoop()
      additem.AddLaptop()
})