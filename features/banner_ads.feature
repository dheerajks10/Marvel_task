Feature: Marvel Home Page 

Scenario: Testing on ads functinality

  Given I open url "/explore"
  When I click on the element "//iframe[@id='google_ads_iframe_/21783347309/marvel.com/explore/ad-1-87_0']"
  Then I expect new tab is opened
