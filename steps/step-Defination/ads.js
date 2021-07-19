const { Given, When, Then } = require('@cucumber/cucumber');
const { assert } = require('chai');

Given("Open url {string}",(link) => {
    link="/explore";
    browser.url(link);
    console.log("The url is:", browser.getUrl());  
    var Window=browser.getWindowHandle();
    console.log("The window handle is:",Window);
});

When("Click on the element {string}",(ad)=>{
    browser.maximizeWindow();
    ad = $("//iframe[@id='google_ads_iframe_/21783347309/marvel.com/explore/ad-1-87_0']").click();
    browser.pause(3000);   
});

Then("I expect new window or tab to be opened",()=>{
    var Get_handle_1  = browser.getWindowHandles();
    console.log("the window Chandles are:",Get_handle_1);
    browser.pause(3000);
    browser.switchToWindow(Get_handle_1[1])
    Title_2 = browser.getTitle();
    console.log("the title of second tab is:",Title_2);
    browser.switchToWindow(Get_handle_1[0])
    Title_1 = browser.getTitle();
    console.log("the title of first tab is:",Title_1);
    assert(Title_1!=Title_2);
    browser.pause(3000);
});
