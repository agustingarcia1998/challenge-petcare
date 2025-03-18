<template>
  <v-navigation-drawer permanent>
    <v-list align="center" class="sidebar">
      <div class="logo-app">
        <img src="@/assets/logo.png" />
        <v-list-item-title class="item-title">PetCare.</v-list-item-title>
      </div>
      <div v-for="(menu, index) in menuItems" :key="index" class="menu-items">
        <v-list-subheader>{{ menu.section }}</v-list-subheader>
        <v-list-item
          v-for="(item, i) in menu.listItems"
          :key="i"
          link
          :value="item.text"
          rounded="shaped"
          :to="item.link"
          :class="item.text === 'Logout' ? 'logout' : ''"
        >
          <div class="sidebar-item">
            <v-list-item>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item>
            <v-list-item-title>{{ item.text }}</v-list-item-title>
            <img
              v-if="item.image"
              :src="getImage(item.image)"
              alt="Chats activos"
              class="chat-icon"
            />
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
          v-if="index < menuItems.length - 2"
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
  data() {
    return {
      menuItems,
    };
  },
  methods: {
    getImage(urlImage) {
      return new URL(`../assets/${urlImage}`, import.meta.url).href;
    },
  },
};
</script>

<style scoped>
.sidebar {
  max-width: 288px;
  height: 100%;
  background-color: #f8f9fa;
}

.logo-app {
  display: flex;
  padding-top: 31px;
  padding-bottom: 50px;
  padding-left: 45px;
  min-width: 110px;
}

.logo-app img {
  width: 24px;
  height: 24px;
  margin-right: 10px;
}

.item-title {
  font-weight: bold;
  font-size: 20px;
}

.v-list-subheader {
  color: #0b1c33;
  font-size: 15px;
  padding-left: 35px !important;
}

.v-list-item--active {
  background-color: #3788e5;
  color: white;
  border-radius: 10px !important;
  max-width: 220px;
  padding: 0px !important;
}

.v-list-item--active :deep(.v-icon) {
  color: white;
}

.sidebar-item {
  display: flex;
  align-items: center;
  width: 220px;
  height: 24px;
}

.sidebar-item .v-list-item-title {
  font-size: 14px;
}

:deep(.v-icon) {
  color: #0b1c33;
  opacity: 80%;
}

.chat-icon {
  width: 56px;
  height: 26px;
  margin-left: 65px;
}

:deep(.v-badge__badge) {
  border-radius: 10px;
  width: 28px;
  height: 28px;
  margin-left: 25px;
}

.logout {
  color: red;
  position: absolute;
  bottom: 25px;
  margin-left: 15px;
}

.logout :deep(.v-icon) {
  color: red !important;
  opacity: 1 !important;
}
</style>
