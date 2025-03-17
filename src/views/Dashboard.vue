<template>
  <v-container fluid>
    <v-app-bar app color="white" elevation="1" >
      <div class="px-4">
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
        :title="metric.name" />
      </div>
      <VaccinationSchedule class="vaccination" elevation="1"/>
      <HealthMonitoring clas  s="healthmonitoring"/>
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
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto auto;
  grid-gap: 20px;
  padding: 20px;
}

.percentage-container {
  grid-column: span 1;
  display: flex;
  justify-content: space-between;
  width: 882px;
  height: 330px;

}

.vaccination {
  grid-column: span 1; 
  border: 1px solid #DAE3F8;
  border-radius: 5px;
}

.health-monitoring {
  grid-column: span 3;
  
  
}

.chat {
  grid-column: span 1; 
}
</style>