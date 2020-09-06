Feature: Web Testing
  This Feature will invoke demoqa website and test form filling and element interactions

# ##################################################################
#
# Practice website used for Demonstration purpose.
# Kindly replace URL and other parameters with
# valid data during testing
# https://demoqa.com/automation-practice-form
#
# ##################################################################

  Background:
    * configure driver = { type: 'chrome' }
    * configure retry = {count: 3, interval: 2000}
#    * configure driver = { type: 'chrome', addOptions: [ '--proxy-server="https://testProxy:4000"' ] }
    * def myWebUrl = baseWebUrl
    * def token = authRequest.authToken
    * def token_type = authRequest.authType
    * def headerBody = read('classpath:MicroServiceDefinitionLayer/Config/headerManager.json')

  Scenario: Positive: Invoke demoQA website, fill form and submit
    Given driver myWebUrl
    * fullscreen()
    * waitUntil("document.title == 'ToolsQA'")
    * click('{}Elements')
    * waitFor('{}Forms').click()
    * waitForEnabled('{}Practice Form').click()
    * def textBoxes = locateAll("//input[@type='text']")
    * def size = karate.sizeOf(textBoxes)
    * print 'No Of @type text fields: ', size
    * textBoxes[0].input('Viswanath')
    * textBoxes[1].input('Thothadri')
    * textBoxes[2].input('tester@test.com')
    * textBoxes[3].input('0400000000')
    * textBoxes[4].click()
    * click('{label}Male')
    * waitFor("//*[@class='react-datepicker__tab-loop']")
    * click('{button}Previous Month')
    * locate("//div[@class='react-datepicker__day react-datepicker__day--003']").click()
    And match value('#dateOfBirthInput') == '03 Aug 2020'
    * click('{label}Sports')
    * click('{label}Music')
    * input('#currentAddress', '999 Bourke Street')
    * screenshot()
    * input('input[id=react-select-3-input]', ['Rajasthan', Key.ENTER])
    * waitForEnabled('#react-select-4-input').input('Jaipur')
    * input('#react-select-4-input', Key.ENTER)
    * scroll('#submit').screenshot()
    * click('#submit')
    * waitFor('{}Thanks for submitting the form').screenshot()

