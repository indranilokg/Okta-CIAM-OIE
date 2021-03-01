<template>
  <v-app>
    <v-app-bar app elevate-on-scroll>
      <v-img class="mx-2" src="@/assets/okta-logo.png" max-height="45" max-width="45" contain/>
      <b>OIE Demo - Sign-in Widget</b>
      <v-spacer/>
      <v-btn class="ma-2" color="primary" to="/">Home
          <v-icon right>mdi-home</v-icon>
        </v-btn>
        <v-btn class="ma-2" color="primary"  v-if='authenticated' v-on:click='logout' id='logout-button'>Logout
          <v-icon right>mdi-logout</v-icon>
        </v-btn>
        <v-btn class="ma-2" color="primary"  v-else v-on:click='login' id='login-button'>Login
          <v-icon right>mdi-login</v-icon>
        </v-btn>
        <v-btn class="ma-2" color="primary" to="/profile">Profile
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
  data: () => ({
    authenticated: false
  }),
  created () {
    this.isAuthenticated()
    this.$auth.authStateManager.subscribe(this.isAuthenticated)
  },
  watch: {
    '$route': 'isAuthenticated'
  },
  methods: {
    async isAuthenticated () {
      this.authenticated = await this.$auth.isAuthenticated()
    },
    async login () {
     //this.$auth.loginRedirect('/')
     this.$router.push({ path: '/login' })
    },
    async logout () {
      await this.$auth.signOut()
      await this.isAuthenticated()

      this.$router.push({ path: '/' })
    }
  }
};
</script>

