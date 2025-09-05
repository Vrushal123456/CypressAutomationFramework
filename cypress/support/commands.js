
///require('cypress-xpath');
///<reference types="cypress"/>

///<reference types="cypress-xpath"/>

import 'cypress-xpath';

import LoginPage from '../e2e/com.orangeHR.POM/LoginPage.cy';

Cypress.Commands.add('loginOranageWebsite',(username,password)=>{

    const loginPage = new LoginPage();



loginPage.enterUserName(username);
loginPage.enterPassword(password);
loginPage.clickOnSubmitbutton();


})


