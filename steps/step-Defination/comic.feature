Feature: Login Marvel Home Page 
  
   Scenario: Testing Hover on Comic Events Card  

    Given open url "/explore"
    When Scroll to the element "//h3[contains(text(),'Comic Events')]"
    And I save the position of element "(//img[@class='card-thumb-frame__thumbnail img__blur'])[2]"
    And I hover on the element "(//img[@class='card-thumb-frame__thumbnail img__blur'])[2]"
    Then I expect the elements "(//img[@class='card-thumb-frame__thumbnail img__blur'])[2]" position is not equal to the saved position
