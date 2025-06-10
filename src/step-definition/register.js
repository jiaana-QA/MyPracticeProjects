 const { Given, When, Then } = require('@cucumber/cucumber');
 const { LoginPage } = require('../pages/LoginPage');
const { RegisterPage } = require('../pages/RegisterPage');

 let registerPage, loginPage;

Given('I open the Magento registration page', {timeout: 20000}, async function () {
  registerPage = new RegisterPage(this.page);
  await registerPage.gotoRegistration();
});

When('I fill the registration form and submit', async function () {
  await registerPage.registerNewUser();
});

Then('I should see the account dashboard', async function () {
  await registerPage.verifyAccountCreation();
});

When('I log out', {timeout: 20000}, async function () {
  await registerPage.logout();
});
When('I click on sign in from homepage',async function () {
   loginPage = new LoginPage(this.page, null);
  await loginPage.clickSignInButtonFromHomePage();
});
When('I log in with the same credentials', async function () {
   const email = registerPage.getGeneratedEmail();
   console.log("Email received in login step:", email);
   loginPage = new LoginPage(this.page, email);
  await loginPage.loginWithLastUsedCredentials();
});

Then('I should be logged in successfully', async function () {
  await loginPage.verifyLoginSuccess();
});

