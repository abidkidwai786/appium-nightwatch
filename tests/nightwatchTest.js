const Device = require('selenium-webdriver/lib/input').Pointer;
describe('Nightwatch app tests', function() {
   
  it('swipe down and zoom in the page - native gestures api', function() {
   
    browser.useXpath().click("(//*[contains(@class,'android.widget.EditText')])[1]")
    browser.pause(4000);

    browser.useXpath().click("(//*[contains(@class,'android.widget.EditText')])[2]")
    browser.pause(4000);

  });    
});