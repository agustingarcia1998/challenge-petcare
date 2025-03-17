<template>
  <v-navigation-drawer permanent>
    <v-list align="center" class="sidebar">
      <div class="title-app">
        <img src="@/assets/logo.png" />
        <v-list-item-title class="title">PetCare.</v-list-item-title>
      </div>
      <div v-for="(menu, index) in getMenuItems" :key="index">
        <v-list-subheader>{{ menu.section }}</v-list-subheader>
        <v-list-item
          v-for="(item, i) in menu.listItems"
          :key="i"
          :value="item.text"
          color="primary"
          rounded="shaped"
          :to="item.link"
          :class="item.text === 'Logout' ? 'logout' : ''"
        >
          <div class="sidebar-item">
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ item.text }}</v-list-item-title>
            <v-list-item-action v-if="item.badge">
              <v-badge :color="item.badge.color" class="rect" inline>
                <template v-slot:badge>
                  <div class="my-badge">{{ item.badge.notification }}</div>
                </template>
              </v-badge>
            </v-list-item-action>
          </div>
        </v-list-item>
        <v-divider
          v-if="index < getMenuItems.length - 2"
          class="my-2"
          color="black"
        ></v-divider>
      </div>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { menuItems } from "@/utils/side-bar-items";

export default {
  name: "SideBar",
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
  height: 100%;
  background-color: #f8f9fa;
}

.title-app {
  display: flex;
  padding-top: 31px;
  padding-bottom: 50px;
  padding-left: 45px;
  min-width: 110px;
}

.title {
  font-weight: bold;
  font-size: 20px;
}

.title-app img {
  width: 24px;
  height: 24px;
  margin-right: 10px;
}

.sidebar-item {
  display: flex;
  align-items: center;
  width: 200px;
  height: 24px;
}

:deep(.v-badge__badge) {
  border-radius: 10px;
  min-width: 18px;
  width: 28px;
  height: 28px;
  margin-left: 10px;
}

.v-icon {
  margin-right: 11px;
}

.logout {
  color: red;
  position: absolute;
  bottom: 25px;
  margin-left: 15px;
}
</style>
