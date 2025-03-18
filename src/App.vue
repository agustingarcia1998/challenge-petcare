<template>
  <v-app>
    <SideBar />
    <v-main>
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
.v-container {
  padding: 0;
  margin: 0;
}

body {
  font-family: "Rethink Sans", sans-serif !important;
  color: #0b1c33;
}
.title {
  color: #0b1c33;
  opacity: 75%;
}
</style>
