<template>
  <v-navigation-drawer permanent class="sidebar">
    <v-list>
      <v-list-item title="petCare." class="title"></v-list-item>
      <v-divider></v-divider>
      <div v-for="(menu, index) in getMenuItems" :key="index">
        <v-list-subheader>{{ menu.section }}</v-list-subheader>
        <v-list-item
          v-for="(item, i) in menu.listItems"
          :key="i"
          :value="item.text"
          color="primary"
          rounded="shaped"
          :to="item.link"
        >
          <v-list-item>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item>
          <v-list-item-title>{{ item.text }}</v-list-item-title>
        </v-list-item>
      </div>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { menuItems } from '@/utils/side-bar-items';

export default {
  name: 'SideBar',
  computed: {
    getMenuItems() {
      return menuItems;
    },
  },
};
</script>

<style scoped>
.sidebar {
  width: 250px;
  background-color: #f8f9fa;
}

.title {
  font-size: 22px;
  font-weight: bold;
  padding: 16px;
}
</style>