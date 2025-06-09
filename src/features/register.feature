

Feature: User account registration and login

  Scenario: Create and login with a new user account
    Given I open the Magento registration page
    When I fill the registration form and submit
    Then I should see the account dashboard
    When I log out
    When I click on sign in from homepage
    When I log in with the same credentials
    Then I should be logged in successfully
