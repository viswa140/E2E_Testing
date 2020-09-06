function fn() {    
  var env = karate.env; // get system property 'karate.env'
  karate.log('karate.env system property was:', env);
  if (!env) {
    env = 'dev';
  }
  var config = {
    env: env,
//	myVarName: 'someValue'
  }
  if (env == 'dev') {
    var tokenResult = karate.callSingle('classpath:MicroServiceDefinitionLayer/Config/authRequest.feature', config)
    config.authRequest = {authToken: tokenResult.token, authType: tokenResult.token_type}
    karate.log('AuthenticationToken: ', config.authRequest.authToken)
    karate.log('Token_Type: ', config.authRequest.authType)

    baseUrl = 'https://pokeapi.co/api/v2/pokemon'
    baseWebUrl = 'https://demoqa.com'

  } else if (env == 'test') {
    var tokenResult = karate.callSingle('classpath:MicroServiceDefinitionLayer/Config/authRequest.feature', config)
       config.authRequest = {authToken: tokenResult.token, authType: tokenResult.token_type}
       karate.log('AuthenticationToken: ', config.authRequest.authToken)
       karate.log('Token_Type: ', config.authRequest.authType)

       baseUrl = 'https://pokeapi.co/api/v1/pokemon'
       baseWebUrl = 'https://demoqa.com'
  }
     else if (env == 'sit') {
      // customize
    }
  return config;
}