<template>
  <div>
    <v-img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/full page/img(20).jpg" aspect-ratio="1.9">
      <v-container class="ma-0 pa-0">
        <v-row>
          <v-col md="1">
          </v-col>
          <v-col md="4">
            <v-text-field dense disabled label="Scenario" v-model = "selectedScenario"></v-text-field>
          </v-col>
          <v-col md="2">
            <v-icon @click="illustationDialog='true'">mdi-play</v-icon>
          </v-col>
        </v-row>
      </v-container>
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
    selectedScenario: "Progressive Profiling",
    scenarioMap: {
      "Progressive Profiling": "ProgressiveProfiling.gif",
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