import ToVerifyUserIsAbleToLogin from "../../Pages/ToVerifyUserIsAbleToLogin"
import ToVerifyNextPage from "../../Pages/ToVerifyNextPage";

const signuppage = new ToVerifyUserIsAbleToLogin()
const Page = new ToVerifyNextPage()
it('verify next page', function () {
    signuppage.navigate()
    Page.clickonnextpage()
})