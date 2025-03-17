<template>
  <v-container fluid>
    <v-app-bar app color="white" elevation="1" >
      <div class="px-9">
        <v-text-field
          density="compact"
          placeholder="Search"
          prepend-inner-icon="mdi-magnify"
          variant="solo"
          flat
          hide-details
          single-line
          class="search-bar"
        ></v-text-field>
      </div>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-help-circle-outline</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-bell-outline</v-icon>
      </v-btn>

      <v-btn color="primary" variant="elevated">Add widget</v-btn>
    </v-app-bar>
    <div class="container-dashboard">
      <div class="percentage-container">
        <PercentageBar 
        v-for="(metric, index) in metricsService"
        :key="index"
        :metricItem="metric" 
        :title="metric.name" 
        class="percentage-bar"
        />
      </div>
      <VaccinationSchedule class="vaccination" elevation="0"/>
      <HealthMonitoring class="healthmonitoring" elevation="0"/>
      <Chats class="chat"/>
    </div>
  </v-container>
</template>
<!-- v-row: esta en su propia fila -->
<!-- el mapeo es de options para weekly o daily -->

<script>
import PercentageBar from "@/components/PercentageBar.vue";
import { metricsService } from "@/utils/metrics-service";
import HealthMonitoring from "@/components/HealthMonitoring.vue";
import Chats from "@/components/Chats.vue";
import VaccinationSchedule from "@/components/VaccinationSchedule.vue";

export default {
  name: "DashboardHome",
  components: {
    PercentageBar,
    HealthMonitoring,
    Chats,
    VaccinationSchedule,
  },
  data() {
    return {
      metricsService: metricsService,
    };
  },
};
</script>

<style scoped>
.search-bar{
  width: 882px;
  border: 1px solid #DAE3F8;
  border-radius: 5px;

}
.container-dashboard {
  display: grid;
  grid-template-areas: 
    "circular-dashboard-container vaccination-schedule "
    "health-monitoring vaccination-schedule"
    "health-monitoring  chat";
  grid-template-columns:1fr 1.5fr;
  grid-template-rows: auto 1fr;
  grid-gap: 25px;
  padding: 25px;
}

.percentage-container {
  grid-area: circular-dashboard-container;
  display: flex;
  justify-content: space-between;
  width: 882px;
  height: 330px;

}

/* PercentageBars en fila 1, ocupando 1 columna cada uno */
/* VaccinationSchedule ocupa 2 filas en la última columna */
.vaccination {
  grid-area: vaccination-schedule;
  border: 1px solid #DAE3F8;
  border-radius: 5px;
}

/* HealthMonitoring ocupa 3 columnas en la fila 2 */
.healthmonitoring {
  grid-area: health-monitoring;
}

/* Chat en la última columna y en la segunda fila */
.chat {
  grid-area: chat;
  align-self: start; 
}
</style>