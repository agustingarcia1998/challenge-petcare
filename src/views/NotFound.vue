<template>
  <v-row align="center" justify="center">
    <v-col cols="12" sm="9" md="6">
      <v-img
        src="../assets/workInProcess.jpg"
        lazy-src="../assets/not_found.png"
        height="500px"
      >
      </v-img>
      <v-row justify="end" class="fill-height">
        <v-col class="text-center px-10" cols="12">
          <div class="mb-5 text-h4">We are working on this section</div>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "not-exist",
};
</script>
