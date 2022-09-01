# Apppium-Nightwatch-Examples
Appium is an open source tools that help you drive your mobile apps(native, hybrid, and mobile web). At a high-level appium works on client-server architecture. 
Appium server is Node JS based web server that exposes REST APIs and bridges command to native frameworks.
## Overview
The aim of the repo is to demonstrate features of Nightwatch which will be useful for writing testcases for mobile devices.

## Demo

![iPhone Nightwatch Session](.github/assets/demo.gif)

## Setup

1. To run tests locally on mobile devices we need to [download and setup Appium](https://appium.io/docs/en/about-appium/getting-started/?lang=en#installing-appium). 
2. Now that you have installed Appium, run the appium server using command:
```sh
$ appium
```
3. clone the repository:
```sh
$ git clone 
```
4. Install the dependencies
```sh
$ npm install
```
5. To run on Lambdatest
    // Please set the username and access key by setting the environment variables:  |
    // - LT_USERNAME                                                           |
    // - LT_ACCESS_KEY                                                           | 
    // More info on configuring capabilities can be found on:
    // https://www.lambdatest.com/capabilities-generator/  
```sh
$ npm install
```
6. Run the test
```sh
$ npm test
```


## Configuration

We can add in a test setting in nightwatch config for appium server and then can extend for various desired target-devices/desired-capabilites(https://www.lambdatest.com/capabilities-generator/  ) to run on:

```js
'appium': {
      selenium: {
        host: 'mobile-hub.lambdatest.com/wd/hub',
        port: 80
      },
      desiredCapabilities: {
        'lt:options': {
          username: '${LT_USERNAME}',
          accessKey: '${LT__ACCESS_KEY}'
        }
      },
      disable_error_log: true,
      webdriver: {
        timeout_options: {
          timeout: 150000,
          retry_attempts: 3
        },
        keep_alive: true,
        start_process: false
      }
    },
    
    'appium.ios13': {
      extends: 'appium',
      desiredCapabilities: {
       // browserName: 'Safari',
        javascriptEnabled: true,
        platformName: 'ios',
        platformVersion: '15.0',
        deviceName: 'iPhone 13',
        isRealMobile: true,
        user: '${LT_USERNAME}',
        accessKey: '${LT__ACCESS_KEY}',
        app: "lt://APP10160621161658226142499826" // path for the ios app you want to test
      }
    },
```

## Gestures
 Gestures are commonly used while interacting with mobile devices. We can use non-standard APIs commands to generate gestures which would be specific to platform, commands like ` browser.execute('mobile: swipe', args);` to stimulate a swipe in iOS-specific platform. The other option is to use Actions API from Nightwatch that is based on W3C Webdriver Spec. Actions API is very general and is platform independent. It relies on the concept of input sources(key, pointer, wheel). You can refer [W3C spec](https://www.w3.org/TR/webdriver/#actions) for more details. The example test shows a sample swipe and zoom in using actions API.
