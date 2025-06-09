 const { expect } = require('@playwright/test');

class RegisterPage {
    constructor(page){
      this.page = page;
      //  this.generatedEmail = '';
    }

    async gotoRegistration() {
    await this.page.goto('https://magento.softwaretestingboard.com/');
    await this.page.click('text=Create an Account')
  }

  async registerNewUser() {
    await this.page.fill('#firstname', 'Jiaana');
    await this.page.fill('#lastname', 'QA');
   const generatedEmail = `test_${Date.now()}@mailinator.com`;
    await this.page.fill('#email_address', generatedEmail);
    await this.page.fill('#password', 'Test@1234');
    await this.page.fill('#password-confirmation', 'Test@1234');
    await this.page.click('button[title="Create an Account"]');
  this.generatedEmail = generatedEmail;
  }
   getGeneratedEmail() {
     return this.generatedEmail;
   }

  async verifyAccountCreation() {
    await expect(this.page.locator('.page-title span')).toHaveText('My Account');
  }

  async logout() {
  await this.page.waitForTimeout(2000);
  const dropdownToggle = this.page.locator('[data-action="customer-menu-toggle"]').first();
  await dropdownToggle.waitFor({ state: 'visible', timeout: 5000 });
  await dropdownToggle.click();

  await this.page.waitForTimeout(1000); // Let dropdown animate open

  const signOutLink = this.page.locator('.authorization-link >> text=Sign Out').first();
  await signOutLink.waitFor({ state: 'visible', timeout: 5000 });
  await signOutLink.click();
  }


}

module.exports = { RegisterPage};
