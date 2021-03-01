<template>
  <div>
    <v-container class="ma-0 pa-0">
      <v-row>
        <v-col md="4">
          <v-select dense :items="scenarioList" label="Scenario" v-model = "selectedScenario"></v-select>
        </v-col>
        <v-col md="2">
          <v-icon @click="illustationDialog='true'">mdi-play</v-icon>
        </v-col>
      </v-row>
    </v-container>
    <v-img src="@/assets/oie2.png" aspect-ratio="1.9">
    </v-img>
    <Illustrator v-model="illustationDialog" :title = "selectedScenario" :src = "scenarioMap[selectedScenario]"/>
  </div>
</template>

<script>
import Illustrator from '@/components/Illustrator.vue'
export default {
  name: "Home",
  components: {
    Illustrator
  },
  data: () => ({
    illustationDialog: false,
    selectedScenario: "Onboarding",
    scenarioList: ["Onboarding","Magic Link", "Anonymous Access"],
    scenarioMap: {
      "Onboarding": "Onboarding.gif",
      "Anonymous Access": "NoAuth.gif",
      "Magic Link": "MagicLink.gif",
    }
  }),

};
</script>

<style scoped>
 img {
  width:100%; 
  height:100%; 
}
</style>