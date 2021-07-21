<template>
  <v-app>
    <v-app-bar app elevate-on-scroll>
      <v-img class="mx-2" src="@/assets/okta-logo.png" max-height="45" max-width="45" contain/>
      <b>Application 1 (OIE Demo)</b>
      <v-spacer/>
      <v-btn class="ma-2" color="primary" to="/">Home
          <v-icon right>mdi-home</v-icon>
        </v-btn>
        <v-btn class="ma-2" color="primary"  v-if='authState.isAuthenticated' v-on:click='logout' id='logout-button'>Logout
          <v-icon right>mdi-logout</v-icon>
        </v-btn>
        <v-btn class="ma-2" color="primary"  v-else v-on:click='login' id='login-button'>Login
          <v-icon right>mdi-login</v-icon>
        </v-btn>
        <v-btn class="ma-2" color="primary" v-if="authState.isAuthenticated" to="/profile">Profile
          <v-icon right>mdi-face</v-icon>
        </v-btn>
		</v-app-bar>
    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",
  methods: {
    async login () {
     this.$auth.signInWithRedirect('/')
    },
    async logout () {
      await this.$auth.signOut()
    }
  }
};
</script>

