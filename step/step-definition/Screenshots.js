const { Given, When, Then } = require('@cucumber/cucumber');
const { assert } = require('chai');

Given("I open url {string}",(url) => {
    browser.url(url);
    browser.maximizeWindow();   
    expect(url).toEqual("/explore");
});

When(/^I click on 'any element' which is not there on the page$/,()=>{
    try{
    content = $("#promo-9 > div > div > div > a").click();
    }
    catch{
        console.log("No Such Element, test case fails...");
    }
});

Then(/^I take the screenshot of failed page$/,()=>{

    browser.saveScreenshot('/Users/dheerajks/Applications/cucumber/features/step-definitions/Screenshot/ss1.png');
    scroll1=$("//h3[contains(text(),'Comic Events')]");
    scroll1.scrollIntoView();
    browser.saveScreenshot('/Users/dheerajks/Applications/cucumber/features/step-definitions/Screenshot/ss2.png');

    scroll2=$("//h3[contains(text(),'Featured Characters')]");
    scroll2.scrollIntoView();
    browser.saveScreenshot('/Users/dheerajks/Applications/cucumber/features/step-definitions/Screenshot/ss3.png');

    scroll3=$("//h3[contains(text(),'Character Spotlight')]");
    scroll3.scrollIntoView();
    browser.saveScreenshot('/Users/dheerajks/Applications/cucumber/features/step-definitions/Screenshot/ss4.png');

});