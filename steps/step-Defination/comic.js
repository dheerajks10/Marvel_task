const { Given, When, Then, } = require('@cucumber/cucumber');
const { assert } = require('chai');
var Before_hover_location='';

Given("open url {string}",(link) => {
     link="/explore";
     browser.url(link);
     browser.maximizeWindow();    
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

 Then("I expect the elements {string} position is not equal to the saved position",(After_Hover_location)=>{
     After_Hover_location=comic_card.getLocation();
     console.log("the position after hovering are:",After_Hover_location);
     assert(Before_hover_location!=After_Hover_location);
 });


