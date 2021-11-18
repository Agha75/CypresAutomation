Feature: E2E testing on Ecommerce website

    Feature Description
    @Regression
    Scenario: Ecommerce products delivery
    Given I navigate to Ecommerce website
    When I add items to cart
    And I validate the toatal price
    Then Select the scountry and verify the message 


    @Smoke
    Scenario: Filling the form to Shop
    Given I navigate to Ecommerce website
    When I fill the form details
    |name  |gender |
    |bobsss|Male   |
    And Validate the forms behaviour
    Then Select the shop page


