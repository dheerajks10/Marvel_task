const { Given } = require('@cucumber/cucumber');
const { assert } = require('chai');

Given("Open url {string}",(link) => {
    link="/explore";
    browser.url(link);
    console.log("The url is:", browser.getUrl());  
    var Window=browser.getWindowHandle();
    console.log("The window handle is:",Window);
});

Given("open url {string}",(link) => {
    link="/explore";
    browser.url(link);
    browser.maximizeWindow();    
});