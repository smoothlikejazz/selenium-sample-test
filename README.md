# selenium-sample-test
Setup a sample selenium based testing suite


# How To Instructions

Run npm install in the root directory
```
npm install
```
To Run the tests
```
node nightwatch.js
```

# Directorys

## Test Directory
./tests
Here you will write all your tests

## Screenshots
./screenshots
Screen shots are configured to placed in this directory upon failures

## Reports
./reports
Reports will be output here

# Selenium Server
The actuall selenium server is a jar within ```bin/selenium-server-standalone-2.39.0.jar```
This is a standalone server that can be downloaded here https://selenium-release.storage.googleapis.com/index.html

# Chrome Driver
This is what selenim will use as a drive to run the browser
This is where you can download different versions when needed https://chromedriver.storage.googleapis.com/index.html

# References
#### Full Guide
http://nightwatchjs.org/guide

#### Helper assertion library
https://github.com/maxgalbu/nightwatch-custom-commands-assertions
