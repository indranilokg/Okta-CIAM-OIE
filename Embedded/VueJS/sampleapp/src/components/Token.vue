<template>
  <v-container>
    <v-card class="mx-auto">
        <v-card-title class="blue lighten-4">{{tokenType}}</v-card-title>
        <v-card-text  class="blue lighten-4">
            <v-expansion-panels v-model="panel" multiple>
                <v-expansion-panel>
                    <v-expansion-panel-header class="title">Show Token</v-expansion-panel-header>
                    <v-expansion-panel-content>
                        <p class="grey lighten-3 token-text">{{token}}</p>
                    </v-expansion-panel-content>
                </v-expansion-panel>
                <v-expansion-panel>
                    <v-expansion-panel-header class="title">Header</v-expansion-panel-header>
                    <v-expansion-panel-content>
                        <v-list class="grey lighten-3" dense>
                            <v-list-item v-for="(item,key) in decodedToken.header" :key="key">
                              <v-list-item-content>{{ key }} </v-list-item-content>
                              <v-list-item-content class="align-end">{{ item }}</v-list-item-content>
                            </v-list-item>
                        </v-list>
                    </v-expansion-panel-content>
                </v-expansion-panel>
                <v-expansion-panel>
                    <v-expansion-panel-header class="title">Payload</v-expansion-panel-header>
                    <v-expansion-panel-content>
                        <v-list class="grey lighten-3" dense>
                            <v-list-item v-for="(item,key) in decodedToken.payload" :key="key">
                            <v-list-item-content>{{ key }} </v-list-item-content>
                            <v-list-item-content class="align-end">{{ item }}</v-list-item-content>
                            </v-list-item>
                        </v-list>
                    </v-expansion-panel-content>
                </v-expansion-panel>
            </v-expansion-panels>
        </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "User",
  data () {
    return {
      panel: []
    }
  },
  props: {
    tokenType: String,
    token: String,
  },
  computed: {
    decodedToken: function () {
      return this.jwtDecode(this.token)
    }
  },
  methods: {
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

<style scoped>
.token-text {
  font-size: 15px;
}

</style>
