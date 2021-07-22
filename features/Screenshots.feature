Feature: Marvel Home Page 
  
  Scenario: Testing the Banner Ad 
      Given open url "/explore"
      When I click on 'any element' which is not there on the page
      Then I take the screenshot of failed page
