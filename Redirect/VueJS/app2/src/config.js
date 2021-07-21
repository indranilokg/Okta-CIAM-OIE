const { CLIENT_ID, ISSUER, OKTA_TESTING_DISABLEHTTPSCHECK } = process.env

export default {
  oidc: {
    issuer: ISSUER,
    clientId: CLIENT_ID,
    redirectUri: "http://localhost:8081/login/callback",
    scopes: ['openid', 'profile', 'email'],
    pkce: true,
    testing: {
      disableHttpsCheck: OKTA_TESTING_DISABLEHTTPSCHECK
    }
  }
}