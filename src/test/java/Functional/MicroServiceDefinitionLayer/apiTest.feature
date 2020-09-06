Feature: Validate Pokemon data
  This Feature will invoke Pokemon GET API to validate the characters

# ##################################################################
#
# Fake Rest API used for Demonstration purpose.
# Kindly replace URL, headers and other parameters with
# valid data during testing
# https://pokeapi.co/api/v2/pokemon
#
# ##################################################################

  Background:
    * configure retry = {count: 3, interval: 2000}
    * def myUrl = baseUrl
    * def token = authRequest.authToken
    * def token_type = authRequest.authType
    * def headerBody = read('classpath:MicroServiceDefinitionLayer/Config/headerManager.json')
#    * configure ssl = { keyStore: 'classpath:', keyStorePassword: 'test123', keyStoreType: 'pkcs12' }

  Scenario: Positive: Fetch 10 pokemon characters and validate the schema
    * set headerBody.pokemonHeader.Authorization = token_type + token
    Given url myUrl
    And headers headerBody.authHeader
    And param limit = 10
    And param offset = 200
    And retry until responseStatus == 200
    When method get
    Then status 200

  #    Schema validation
    * match response.count == '#number'
    * match response.next == '#string'
    * match response.previous == '#string'
    * match response.results == '#[10]'
    * match each response.results == { name: '#string', url: '#string' }

  Scenario: Positive: Fetch 10 pokemon characters and validate the response
    * set headerBody.pokemonHeader.Authorization = token_type + token
    Given url myUrl
    And headers headerBody.authHeader
    And param limit = 10
    And param offset = 200
    When method get
    Then status 200
    * match response.next == myUrl + '?offset=210&limit=10'
    * match response.previous == myUrl + '?offset=190&limit=10'
    * match response.results ==
    """
  [
	{
		"name": "unown",
		"url": "https://pokeapi.co/api/v2/pokemon/201/"
	},
	{
		"name": "wobbuffet",
		"url": "https://pokeapi.co/api/v2/pokemon/202/"
	},
	{
		"name": "girafarig",
		"url": "https://pokeapi.co/api/v2/pokemon/203/"
	},
	{
		"name": "pineco",
		"url": "https://pokeapi.co/api/v2/pokemon/204/"
	},
	{
		"name": "forretress",
		"url": "https://pokeapi.co/api/v2/pokemon/205/"
	},
	{
		"name": "dunsparce",
		"url": "https://pokeapi.co/api/v2/pokemon/206/"
	},
	{
		"name": "gligar",
		"url": "https://pokeapi.co/api/v2/pokemon/207/"
	},
	{
		"name": "steelix",
		"url": "https://pokeapi.co/api/v2/pokemon/208/"
	},
	{
		"name": "snubbull",
		"url": "https://pokeapi.co/api/v2/pokemon/209/"
	},
	{
		"name": "granbull",
		"url": "https://pokeapi.co/api/v2/pokemon/210/"
	}
  ]
    """

  Scenario Outline: Positive: Fetch <noOfCharacters> pokemon characters and validate the response
    * set headerBody.pokemonHeader.Authorization = token_type + token
    Given url myUrl
    And headers headerBody.authHeader
    And param limit = <noOfCharacters>
    And param offset = <offSetValue>
    When method get
    Then status 200
    * def nextOffset = <offSetValue> + <noOfCharacters>
    * def previousOffset = <offSetValue> - <noOfCharacters>
    * match response.next == myUrl + '?offset='+ nextOffset + '&limit=' + <noOfCharacters>
    * match response.previous == myUrl + '?offset='+ previousOffset + '&limit=' + <noOfCharacters>
    * match response.results == '#[<noOfCharacters>]'

    Examples:
      | Scenario                 | noOfCharacters | offSetValue |
      | To fetch > 15 characters | 16             | 200         |
      | To fetch 20 characters   | 20             | 200         |
      | To fetch 50 characters   | 50             | 200         |

  Scenario: Negative: Send OffsetValue as -1
    * set headerBody.pokemonHeader.Authorization = token_type + token
    Given url myUrl
    And headers headerBody.authHeader
    And param limit = 10
    And param offset = -1
    When method get
    Then status 200
    * match response ==
    """
    {
    "count": 1050,
    "next": "https://pokeapi.co/api/v2/pokemon?offset=9&limit=10",
    "previous": null,
    "results": []
    }
    """
