Feature: Generate Authentication Token
  This Feature will be invoked once per test execution run and
  the same token will be used in all supporting tests

# ##################################################################
#
# Dummy PostMan Rest API used for Demonstration purpose
# Kindly replace the URL and headers with valid data during testing
# https://postman-echo.com/basic-auth
#
# ##################################################################

  Background:
    * def authRequestBody = read('classpath:Functional/MicroServiceDefinitionLayer/Config/authBody.json')
    * def headerBody = read('classpath:Functional/MicroServiceDefinitionLayer/Config/headerManager.json')
    * if(env == 'dev') authUrl = 'https://postman-echo.com/basic-auth'
    * if(env == 'test') authUrl = 'https://postman-echo.com/auth/hawk'

    Scenario: Generate Token
      * set headerBody.authHeader.Authorization = 'Basic cG9zdG1hbjpwYXNzd29yZA=='
      Given url authUrl
      And headers headerBody.authHeader
      When method get
      Then status 200
      * def token = response.authenticated
      * def token_type = 'dummy'