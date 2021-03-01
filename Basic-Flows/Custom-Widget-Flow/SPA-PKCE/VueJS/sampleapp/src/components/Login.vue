<template>
  <div class="login">
    <div id="okta-signin-container"></div>
  </div>
</template>

<script>
import OktaSignIn from "@okta/okta-signin-widget"
import "@okta/okta-signin-widget/dist/css/okta-sign-in.min.css"

export default {
  name: 'Login',
  mounted: function () {
    this.$nextTick(function () {
      this.widget = new OktaSignIn({
        baseUrl: 'https://acmecorp.twisec.com',
        clientId: '0oax7szi44siifGwt0h7',
        redirectUri: 'http://localhost:8080/login/callback',
        features: {
         registration: true
        },
        //useInteractionCodeFlow: true,
        authParams: {
          issuer: 'https://acmecorp.twisec.com/oauth2/ausx90vikfMjKld000h7',
          display: 'page',
          scopes: ['openid', 'profile', 'email']
        }
      })
      this.widget.showSignInAndRedirect(
        { el: '#okta-signin-container' }
      )
    })
  },
  destroyed () {
    // Remove the widget from the DOM on path change
    this.widget.remove()
  }
}
</script>