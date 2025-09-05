import loginPageLocator from "../pageObjects/orangeLogin.cy"

class LoginPage{

enterUserName(username){
cy.get(loginPageLocator.userName).type(username);
}

enterPassword(password){

    cy.get(loginPageLocator.password).type(password);
}

clickOnSubmitbutton()
{ 
    cy.get(loginPageLocator.loginButton).click();

}
    
   



}

export default LoginPage
