const { expect } = require('@playwright/test');
//  const { generatedEmail } = require('./RegisterPage');
class LoginPage {
constructor(page, email){
      this.page = page;
       this.email = email;
    }
  async clickSignInButtonFromHomePage() {
  const signInButton = this.page.locator('a[href*="customer/account/login"]').first(); // "Sign In" link on homepage
  await signInButton.waitFor({ state: 'visible', timeout: 5000 });
  await signInButton.click();
}  
  async loginWithLastUsedCredentials() {
    // await this.page.goto('https://magento.softwaretestingboard.com/customer/account/login/');
    console.log("Generated Email:", this.email);
    await this.page.waitForTimeout(2000);
    await this.page.fill('#email' , this.email);
    await this.page.fill('#pass', 'Test@1234');
    const signInButton = this.page.locator('button[class="action login primary"]');
    await signInButton.scrollIntoViewIfNeeded();
    await signInButton.click('button[class="action login primary"]');
  }
async verifyLoginSuccess() {
    await this.page.waitForTimeout(2000);
    await expect(this.page.locator('.page-title span')).toHaveText('My Account');
  }
}
module.exports = { LoginPage };
