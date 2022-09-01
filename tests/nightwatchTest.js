const Device = require('selenium-webdriver/lib/input').Pointer;
describe('Nightwatch app tests', function() {
   
  it('swipe down and zoom in the page - native gestures api', function() {
    browser.click('color');
    // using appium non-standard gestures api.
    browser.execute('mobile: swipe', {direction: 'up', velocity: 5000}); // swipe up the page
    browser.execute('mobile: pinch', {scale: '1.5', velocity: 1.1}); // zoom in
    browser.pause(4000);
  });
    
});