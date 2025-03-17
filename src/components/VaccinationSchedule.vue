<template>
  <v-card>
    <v-card-title>
      <v-row class="d-flex" style="width: 100%">
        <v-col cols="6">
          <span class="title">VACCINATION SCHEDULE</span>
        </v-col>
        <v-col class="d-flex align-center justify-end">
          <v-text-field
            class="search-vaccination"
            v-model="searchQuery"
            append-inner-icon="mdi-magnify" 
            v-if="showSearchInput"
          />
          <v-btn v-else icon @click="showSearchInput = true">
            <v-icon>mdi-magnify</v-icon>
          </v-btn>
          <v-select
            v-model="filterDefault"
            :items="types"
			placeholder="By type"
            density="compact"
            style="max-width: 110px; margin-left: 10px"
            class="select-vaccination"
          />
        </v-col>
      </v-row>
    </v-card-title>

    <v-table>
      <thead>
        <tr>
          <th class="text-left">Name</th>
          <th class="text-left">Type</th>
          <th class="text-left">Date</th>
          <th class="text-left">Veterinar</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in filteredSchedule" :key="index">
          <td>{{ item.vaccine }}</td>
          <td>
            <v-chip :color="getTypeColor(item.type)" small>
              {{ item.type }}
            </v-chip>
          </td>
          <td>{{ item.date }}</td>
          <td
            style="vertical-align: middle"
            v-if="item.veterinar === 'Find veterinar'"
          >
            <v-btn
              color="primary"
              small
              class="btn"
            >
              Find veterinar
            </v-btn>
          </td>
          <td v-else>{{ item.veterinar }}</td>
        </tr>
      </tbody>
    </v-table>
  </v-card>
</template>

<script>
export default {
  name: "Vaccination-Schedule",
  data() {
    return {
      searchQuery: "",
      showSearchInput: false,
      filterDefault: "All",
      types: ["Core", "Noncore", "Overdue", "All"],
      schedule: [
        {
          vaccine: "Rabies",
          type: "Overdue",
          date: "01/12/2023",
          veterinar: "Find veterinar",
        },
        {
          vaccine: "Bordetella",
          type: "Noncore",
          date: "11/12/2024",
          veterinar: "James Grey",
        },
        {
          vaccine: "Distemper",
          type: "Core",
          date: "27/06/2024",
          veterinar: "Jim Brown",
        },
        {
          vaccine: "Calicivirus",
          type: "Core",
          date: "16/09/2024",
          veterinar: "Helen Brooks",
        },
      ],
    };
  },
  computed: {
    filteredSchedule() {
      return this.schedule.filter((v) => {
        const matchesSearchQuery =
          this.searchQuery === "" ||
          v.vaccine.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          v.type.toLowerCase().includes(this.searchQuery.toLowerCase());

        const matchesFilter =
          this.filterDefault === "All" || v.type === this.filterDefault;

        return matchesSearchQuery && matchesFilter;
      });
    },
  },
  methods: {
    getTypeColor(type) {
      switch (type) {
        case "Overdue":
          return "pink lighten-4";
        case "Noncore":
          return "orange lighten-4";
        case "Core":
          return "green lighten-4";
        default:
          return "grey";
      }
    },
  },
};
</script>

<style scoped>
.v-card {
  width: 676px;
  height: 531px;
  border-radius: 10px;
}

.v-card-title {
  padding: 28px;
}

.v-simple-table {
  margin-top: 20px;
  width: 100%;
}

.search-vaccination {
	max-width: 120px;
  height: 37px;
  border: 1px solid #dae3f8;
  border-radius: 10px;
}

.select-vaccination {
  max-width: 120px;
  height: 37px;
  border: 1px solid #dae3f8;
  border-radius: 10px;
}

th,
td {
  padding: 24px !important;
}

table {
  width: 100%;
}

.v-row {
  width: 100%;
}
</style>
