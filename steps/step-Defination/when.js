const { When } = require('@cucumber/cucumber');
const { assert } = require('chai');

When("Click on the element {string}",(ad)=>{
    browser.maximizeWindow();
    ad = $("//iframe[@id='google_ads_iframe_/21783347309/marvel.com/explore/ad-1-87_0']").click();
    browser.pause(3000);   
});

When("Scroll to the element {string}",(scroll)=>{
    scroll=$("//h3[contains(text(),'Comic Events')]");
    scroll.scrollIntoView();
});

When("I save the position of element {string}",(comic_card)=>{
    comic_card=$("(//img[@class='card-thumb-frame__thumbnail img__blur'])[2]");
    Before_hover_location=comic_card.getLocation();
    console.log("the position before hovering are:",Before_hover_location);
});

When("I hover on the element {string}",(mouse)=>{
   comic_card=$("(//img[@class='card-thumb-frame__thumbnail img__blur'])[2]");
   mouse=$(comic_card);
   mouse.moveTo();
   browser.pause(3000);
});