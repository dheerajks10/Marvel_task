const { Given} = require('@cucumber/cucumber');

Given("open url {string}",(url) => {
    browser.url(url);
    browser.maximizeWindow();   
    expect(url).toEqual("/explore");
});