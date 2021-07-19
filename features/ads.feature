Feature: Open Marvel Home Page

Scenario: Checking Ads to open in New window or Tab after clicking on it 

    Given Open url "/explore"
    When Click on the element "//iframe[@id='google_ads_iframe_/21783347309/marvel.com/explore/ad-1-87_0']"
    Then I expect new window or tab to be opened
    