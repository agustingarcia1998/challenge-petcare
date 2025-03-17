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
						dense
						outlined
						placeholder="Search..."
						append-inner-icon="mdi-magnify"
						hide-details
					/>
					<v-select
						v-model="filterDefault"
						:items="types"
						label="By type"
						dense
						outlined
						style="max-width: 110px; margin-left: 10px"
					/>
				</v-col>
			</v-row>
		</v-card-title>

		<v-simple-table>
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
					<td>{{ item.type }}</td>
					<td>{{ item.date }}</td>
					<td>{{ item.veterinar }}</td>
				</tr>
			</tbody>
		</v-simple-table>
	</v-card>
</template>

<script>
export default {
	name: "Vaccination-Schedule",
	data() {
		return {
			searchQuery: "",
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
};
</script>

<style scoped>
.v-card {
	width: 676px;
	height: 531px;
}

.v-simple-table {
	margin-top: 20px;
	width: 100%;
}

.search-vaccination {
	border: 1px solid #DAE3F8;
	border-radius: 10px;
	max-width: 200px;
}

th,
td {
	padding: 10px;
}

table {
	width: 100%;
}

.v-row {
	width: 100%;
}

</style>
