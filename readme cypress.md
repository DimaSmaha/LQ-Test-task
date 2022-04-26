# Test task login and exploratory flow for cypress

## Simple automated test with using of Page Object pattern. Test perfoms login to local step instance and extended with browse on step tabs with a check if page loaded

### Requirements: Java,Javascript,NodeJS,Webdriver.io,Mocha,Cypress

## Setup for local application
-Download and install the Open-Source version of step application (https://step.exense.ch/knowledgebase/3.18/getting-started/quick-setup/) 
-Download and install JDK 11(https://www.oracle.com/java/technologies/javase-jdk11-downloads.html)
-Download and install Community MongoDB Server(https://fastdl.mongodb.org/win32/mongodb-win32-x86_64-2008plus-ssl-4.0.9-signed.msi)
-Download and unzip controller archive(https://github.com/exense/step/releases/latest)
-Run startController.bat

## Install software and check out the project
-Download and install Node.JS ( at least 14.X )
-Install Visual Studio Code
-Make new folder and open it in VS code
-Open VS code terminal and enter(npx wdio config)
-Choose to install mocha and chromedriver
-write (cd config) in VS terminal
-Install cypress in VS terminal using (npm install cypress --save-dev)
-Open package.json file and write to scripts("e2e": "cypress open") and save it
-Enter (npm run e2e) to finish cypress setup
-Add project files to cypress>integration folder and enter (npm run e2e) start the project

### Expected results: 
- Tests to be ran successfully



