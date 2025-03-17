<template>
  <v-card class="chatsCont">
    <v-card-title>
      <span class="title">CHAT</span>
    </v-card-title>
    <v-list dense>
      <v-list-item v-for="(item, index) in conversations" :key="index">
        <div class="chat-item">
          <img :src="item.image" alt="foto de usuario" class="user-image" />

          <div class="chat-content">
            <div class="chat-header">
              <span class="chat-name">{{ item.name }}</span>
              <span class="chat-time">{{ item.time }}</span>
            </div>
            <div class="chat-message">{{ item.message }}</div>
          </div>

          <div class="chat-notification" v-if="item.notification">
            <v-badge
              color="red"
              :content="item.notification"
              overlap
              inline
            ></v-badge>
          </div>
        </div>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
export default {
  name: "Chat-s",
  data() {
    return {
      conversations: [
        {
          name: "Helen Brooks",
          message:
            "Luna has been scratching her ears a lot lately and shaking her head...",
          time: "15:56",
          image: new URL("@/assets/user1.PNG", import.meta.url).href,
        },
        {
          name: "Kathryn Murphy",
          message:
            "The best way to treat an ear infection is to visit your local vet...",
          time: "Wed",
          image: new URL("@/assets/user2.PNG", import.meta.url).href,
          notification: 2,
        },
        {
          name: "James Grey",
          message:
            "You should follow the instructions on the ear drops label...",
          time: "Tue",
          image: new URL("@/assets/user3.PNG", import.meta.url).href,
        },
        {
          name: "Jim Brown",
          message: "Hi, I have a question about my cat.",
          time: "Tue",
          image: new URL("@/assets/user4.PNG", import.meta.url).href,
        },
      ],
    };
  },
};
</script>

<style scoped>
.chatsCont {
  width: 677px;
  height: 380px;
  background-color: white;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  border: 1px solid #dae3f8;
  border-radius: 10px;
  padding: 10px;
  overflow-y: auto;
}

.chat-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
}

.chat-content {
  flex: 1;
  margin-left: 10px;
}

.user-image{
  width: 51px;
  height: 48;
}

:deep(.v-badge__badge) {
  border-radius: 4px !important;
  min-width: 18px;
  height: 18px;
}

.chat-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.chat-name {
  font-weight: 550;
  font-size: 14px;
}

.chat-time {
  font-size: 12px;
  color: gray;
}

.chat-message {
  font-size: 13px;
  color: #555;

  margin-top: 3px;
  max-width: 400px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* Notificación */
.chat-notification {
  margin-left: 10px;
}
</style>
