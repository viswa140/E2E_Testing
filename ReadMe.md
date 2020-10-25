### **End To End Testing Framework**

This test automation framework supports API, UI and NFT. This can be extended to Mobile and Desktop.

**Framework Explained**

**Karate-config.js -**
* Framework flow starts here where all the environment settings should be configured. Additionally, this config file should contain one time run scenarios - In case of API's, all the token generation feature files should be configured here to run once per execution.

**MicroServiceDefinitionLayer -**
* All the API test features, authorization features and test data should be updated in this package.
* authRequest.feature is the token authorization token generation file which should be configured in Karate-config.js to be called once per execution and reuse same token across
* Multiple authorization feature files can be created for generating authorization token for different environments and configured in karte-config.js under each corresponding environment block
* If the authorization request is POST which requires an auth body, it should be configured in authBody.json as for different environments and the corresponding auth body should be passed to the POST request during runtime in authRequest.feature
* All the test data should be updated in testData.json
* API test scenarios should be split into different feature files depending on the functionality - apiTest.feature
All the API test features, authorization features and test data should be present within this package.

**WebDefinitionLayer -**
* All the UI test feature files and test data should be present in this package.
* The preferred driver should be configured in the background which will be used throughout all the scenarios in the feature
* Optionally proxy settings can be configured along with the driver if needed.
* Tests will run in the configured actual browser instance when running from local and uses a headless browser when running from CICD pipelines

**NFTDefinitionLayer -**
* All the Non functional scala files and related test data should be present in this package.
* All API and UI karate scenarios can be reused for NFT
* Individual scenarios from the feature file can be selected for NFT using tags
* For basic NFT load test, reuse the same setup in the scala file by changing the feature file path to the file under test

**Run Commands -**

* **API:** mvn test "-Dkarate.env = dev" -Dkarate.options="--tags @Functional classpath:Functional/MicroServiceDefinitionLayer/apiTest.feature" -Dtest=TestRunner
* **UI:** mvn test "-Dkarate.env = dev" -Dkarate.options="classpath:Functional/WebDefinitionLayer/WebTest.feature" -Dtest=TestRunner
* **NFT:** mvn clean test-compile gatling:test -Dgatling.simulationClass=NonFunctional.NFTDefinitionLayer.apiSimulation

**More Details -**

For details on the reusable actions, assertions, schema validation methods, karate library features etc.,  please visit below 

API - https://github.com/intuit/karate

UI/Mobile(Appium) - https://github.com/intuit/karate/tree/master/karate-core

NFT - https://github.com/intuit/karate/tree/master/karate-gatling

Desktop - https://github.com/intuit/karate/tree/master/karate-robot
 

