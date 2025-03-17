<template>
  <v-card class="card-percentage" elevation="0">
    <v-card-title class="title-select">{{ metricItem.name }}
      <v-select 
        v-model="selectedOption"
        :items="timeframes"
        density="compact"
        class="select-timeframe"
      ></v-select>
    </v-card-title>
    <v-card-text class="card-text">
      <v-progress-circular
        :model-value="percentageNumeric"
        :color="computedColor"
        size="205"
        width="20"
      >
        <span class="text-h4 percentage-text">{{ percentage }}</span>
      </v-progress-circular>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "PercentageBar",
  props: {
    color: String,
    title: String,
    metricItem: Object
  },
  data() {
    return {
      selectedOption: this.metricItem.options[0].title,
      percentage: this.metricItem.options[0].percentage,
      timeframes: ['Daily', 'Weekly']
    }
  },
  computed: {
    computedColor() {
      switch (this.title) {
        case "ACTIVITY":
          return "#E53761";
        case "SLEEP":
          return "#27A468";
        case "WELNESS":
          return "#F2A735";
        default:
          return "blue";
      }
    },
    percentageNumeric() {
      return parseInt(this.percentage); //paso de stringa numero
    },
  },
  watch: {
    selectedOption(newOption) {
      const selectedMetric = this.metricItem.options.find((o) => o.title === newOption);
      this.percentage = selectedMetric ? selectedMetric.percentage : "0%";
    },
  },
};
</script>

<style scoped>
.card-percentage {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px;
  width: 277px;
  height: 330px;
  border: 1px solid #DAE3F8;
  border-radius: 20px;
}

.title-select{
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 221px;
  height: 37px;
  padding: 0;
}

.select-timeframe{
  max-width: 120px;
  height: 37px;
  border: 1px solid #DAE3F8;
  border-radius: 10px;
}

.card-text{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 205px;
  height: 212px;
  padding: 0;
}

.percentage-text{
  color: #0B1C33;
  font-weight: bold;
}

:deep(.v-progress-circular__overlay) {
  stroke-linecap: round;
}
</style>