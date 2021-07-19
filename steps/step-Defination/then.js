const { Then } = require('@cucumber/cucumber');
const { assert } = require('chai');

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

Then("I expect the elements {string} position is not equal to the saved position",(After_Hover_location)=>{
    After_Hover_location=comic_card.getLocation();
    console.log("the position after hovering are:",After_Hover_location);
    assert(Before_hover_location!=After_Hover_location);
});