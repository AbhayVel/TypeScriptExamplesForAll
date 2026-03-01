Feature: Login Feature

  Scenario: Successful login
    Given I open the login page
    When I enter username "abhay.v@gmail.com"
    And I enter password "1234"
    And I click login
    Then I should see dashboard


Scenario: Successful login
    Given I open the login page
    When I enter username "abhay.2@gmail.com"
    And I enter password "1234"
    And I click login
    Then I should see dashboard


Scenario: Successful login
    Given I open the login page
    When I enter username "abhay.2@gmail.com"
    And I enter password "1234"
    And I click login
    Then I should see dashboard