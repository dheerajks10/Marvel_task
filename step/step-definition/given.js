const { Given } = require('@cucumber/cucumber');

Given("I open url {string}",(url) => {
    browser.url(url);
    browser.maximizeWindow();
});