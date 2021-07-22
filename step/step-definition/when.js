const { When} = require('@cucumber/cucumber');

When("click on the element {string}",(locator) =>{
    var ad=$(locator);
    ad.click();
});

When("Scroll to the element {string}",(locator)=>{
    var scroll=$(locator);
    scroll.scrollIntoView();
});

When("I save the position of element {string}",(locator)=>{
  var comic_card=$(locator);
  before_location=Number(comic_card.getLocation('y'));
  console.log("the position before hovering is ",before_location);
});

When("I hover on the element {string}",(locator)=>{
     var comic_card=$(locator);
     comic_card.moveTo();
});