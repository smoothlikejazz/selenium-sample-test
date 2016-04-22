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
# Run Specific Test
At times you may want to run individual tests instead of all the tests
```
node nightwatch.js --test tests/akana_login/akana_login_test.js --testcase "akana login"
```

## Directories

### Test Directory
./tests
Here you will write all your tests

### Screenshots
./screenshots
Screen shots are configured to placed in this directory upon failures

### Reports
./reports
Reports will be output here

## Selenium Server
The actuall selenium server is a jar within ```bin/selenium-server-standalone-2.39.0.jar```
This is a standalone server that can be downloaded here https://selenium-release.storage.googleapis.com/index.html

## Chrome Driver
This is what selenim will use as a drive to run the browser
This is where you can download different versions when needed https://chromedriver.storage.googleapis.com/index.html

# If you run into errors and server selenium server is still running
default port project is set to is 4444
lsof -i -n -P | grep 4444
kill <PID>


# References
#### Full Guide
http://nightwatchjs.org/guide

#### Helper assertion library
https://github.com/maxgalbu/nightwatch-custom-commands-assertions
