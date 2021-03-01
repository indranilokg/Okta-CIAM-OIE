<template>
  <v-container fluid>
    <v-card>
        <v-card-title class="subheading font-weight-bold">Profile details</v-card-title>
        <v-card-text>
          <v-divider></v-divider>
          <v-list dense>
            <v-list-item>
              <v-list-item-content>First Name:</v-list-item-content>
              <v-list-item-content class="align-end">{{ userinfo.given_name }}</v-list-item-content>
            </v-list-item>

            <v-list-item>
              <v-list-item-content>Last Name:</v-list-item-content>
              <v-list-item-content class="align-end">{{ userinfo.family_name }}</v-list-item-content>
            </v-list-item>

            <v-list-item>
              <v-list-item-content>Email:</v-list-item-content>
              <v-list-item-content class="align-end">{{ userinfo.email }}</v-list-item-content>
            </v-list-item>

            <v-list-item>
              <v-list-item-content>Full Name:</v-list-item-content>
              <v-list-item-content class="align-end">{{ userinfo.name }}</v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card-text>
        <v-card-actions>
          <v-dialog scrollable>
            <template v-slot:activator="{ on }">
              <v-btn color="primary" dark v-on="on">Show Tokens</v-btn>
            </template>
            <v-card>
              <v-card-text>
                <v-row>
                  <v-col cols="6">
                      <Token tokenType="ID Token" :token="idToken"/>
                  </v-col>
                  <v-col cols="6">
                      <Token tokenType="Access Token" :token="accessToken"/>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-dialog>
        </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
import Token from '@/components/Token'

export default {
  name: "User",

  data: () => ({
    userinfo : null,
    accessToken : null,
    idToken : null,
    showDecodedIdToken: false,
    showDecodedAccessToken: false,
    showTokendialog: true,
  }),
  components: {
    Token
  },
  async created () {
    this.getToken()
  },
  computed: {
    decodedIdToken: function () {
      return this.jwtDecode(this.idToken)
    },
    decodedAccessToken: function () {
      return this.jwtDecode(this.accessToken)
    }
  },
  methods: {
    async getToken () {
      this.userinfo = await this.$auth.getUser()
      this.accessToken = await this.$auth.getAccessToken()
      this.idToken = await this.$auth.getIdToken()
    },
    toggleDecodedIdToken () {
      this.showDecodedIdToken = !this.showDecodedIdToken
    },
    toggleDecodedAccessToken () {
      this.showDecodedAccessToken = !this.showDecodedAccessToken
    },
    jwtDecode(t) {
      let token = {};
      //token.raw = t;
      token.header = JSON.parse(window.atob(t.split('.')[0]));
      token.payload = JSON.parse(window.atob(t.split('.')[1]));
      return (token)
    }
  }
};
</script>
