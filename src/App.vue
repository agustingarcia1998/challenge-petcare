<template>
  <v-app>
    <SideBar />
    <v-main>
      <Dashboard />
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import SideBar from "./components/SideBar.vue";
import Dashboard from "./views/Dashboard.vue";
export default {
  name: "App",
  components: {
    SideBar,
    Dashboard,
  },
};
</script>

<style>
body {
  font-family: 'Rethink Sans', sans-serif !important;
  color: #0B1C33;
}
.title{
  color: #0B1C33 !important;

}
</style>