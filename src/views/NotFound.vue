<template>
    <default-layout>
      <v-sheet height="100%">
        <v-container class="fill-height justify-center" fluid>
          <v-row align="center" justify="center">
            <v-col cols="12" sm="9" md="6">
              <v-sheet class="fill-height" height="100%">
                <v-img src="../assets/workInProcess.jpg" lazy-src="../assets/not_found.png" height="250"
                  contain>
                </v-img>
                <v-row justify="end" class="fill-height">
                  <v-col cols="12">
                  </v-col>
                  <v-col class="text-center px-10" cols="12">
                    <div class="body-1 mb-5">
                        We are working on this section
                    </div>
                    <v-btn color="secondary" to="/" class="mb-5">Volver atras</v-btn>
                  </v-col>
                </v-row>
              </v-sheet>
            </v-col>
          </v-row>
        </v-container>
      </v-sheet>
    </default-layout>
  </template>
  
  <script>
  import DashboardHome from '@/views/Dashboard.vue'
  export default {
    name: 'not-exist',
    components: {
        DashboardHome
    },
  }
  </script>