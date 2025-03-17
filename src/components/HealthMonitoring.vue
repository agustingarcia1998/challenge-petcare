<template>
  <v-card>
    <v-card-title class="title-select">
      <span class="title">HEALTH MONITORING</span>
      <v-select
        v-model="selectedTimeFrame"
        :items="timeFrames"
        density="compact"
        class="select-health"
      />
    </v-card-title>
    <v-card-text>
      <v-btn-toggle v-model="selectedMetric" class="metricsToggle">
        <v-btn value="stress">
          <v-icon left>mdi-heart-pulse</v-icon>
          Stress level
        </v-btn>
        <v-btn value="pulse">
          <v-icon left>mdi-pulse</v-icon>
          Pulse
        </v-btn>
        <v-btn value="temperature">
          <v-icon left>mdi-thermometer-low</v-icon>
          Temperature
        </v-btn>
        <v-btn value="calories">
          <v-icon left>mdi-fire</v-icon>
          Calories burned
        </v-btn>
      </v-btn-toggle>
      <v-chart class="chart" :option="chartOptions" autoresize />
    </v-card-text>
  </v-card>
</template>

<script>
import { defineComponent } from "vue";
import VChart from "vue-echarts";
import * as echarts from "echarts/core";
import { LineChart } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";
import {
  GridComponent,
  TooltipComponent,
  LegendComponent,
  TitleComponent,
} from "echarts/components";

echarts.use([
  LineChart,
  CanvasRenderer,
  GridComponent,
  TooltipComponent,
  LegendComponent,
  TitleComponent,
]);

export default defineComponent({
  name: "HealthMonitoring",
  components: {
    VChart,
  },
  data() {
    return {
      selectedMetric: "stress",
      timeFrames: ["Daily", "Weekly", "Monthly"],
      selectedTimeFrame: "Monthly",
      metrics: {
        stress: [1, 4, 5, 2, 3, 6, 7],
        pulse: [60, 62, 64, 63, 61, 65, 66],
        temperature: [34, 36.7, 35, 36.8, 36.9, 37, 36],
        calories: [250, 300, 350, 400, 450, 500, 550],
      },
      chartOptions: {
        grid: {
          left: "3%",   
          right: "3%", 
          top: "10%",  
          bottom: "10%", 
        },
        tooltip: {
          trigger: "axis",
        },
        xAxis: {
          type: "category",
          data: [],
        },
        yAxis: {
          type: "value",
        },
        series: [],
      },
    };
  },
  methods: {
    getLabelsTimeFrame() {
      const timeFrames = {
        Daily: Array.from({ length: 31 }, (_, index) => (index + 1).toString()), // 31 días
        Weekly: ["Week 1", "Week 2", "Week 3", "Week 4"],
        Monthly: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      };
      return timeFrames[this.selectedTimeFrame] || [];
    },
    updateChartData() {
      const labels = this.getLabelsTimeFrame();
      const data = this.metrics[this.selectedMetric] || [];

      this.chartOptions = {
        ...this.chartOptions,
        xAxis: { ...this.chartOptions.xAxis, data: labels },
        series: [
          {
            name:
              this.selectedMetric.charAt(0).toUpperCase() +
              this.selectedMetric.slice(1),
            type: "line",
            data: data.slice(0, labels.length),
            itemStyle: { color: "#3788e5" },
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: "rgba(55, 136, 229, 0.5)" },
                { offset: 1, color: "rgba(55, 136, 229, 0)" },
              ]),
            },
          },
        ],
      };
    },
  },
  watch: {
    selectedMetric() {
      this.updateChartData();
    },
    selectedTimeFrame() {
      this.updateChartData();
    },
  },
  mounted() {
    this.updateChartData();
  },
});
</script>

<style scoped>
.v-card {
  background-color: white;
  border-radius: 10px;
  border: 1px solid #dae3f8;
  width: 882px;
  max-height: 576px;
}

.title-select {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 28px;
}

.select-health {
  max-width: 130px;
  height: 37px;
  border: 1px solid #dae3f8;
  border-radius: 10px;
  background-color: white;
}

.chart {
  width: 850px;
  height: 367px;
}

.metricsToggle {
  border: 1px solid #dae3f8;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  width: 826px;
  height: 67px;
}

.v-btn {
  padding: 10px 20px;
  width: 189px;
  max-height: 48px;
  border-radius: 10px !important;

}

.v-btn--active {
  background-color: #1867C0;
  color: white;

}
</style>
