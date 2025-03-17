import { color } from "echarts";

export const menuItems = [
  {
    section: "MENU",
    listItems: [
      { icon: "mdi-view-dashboard", text: "Dashboard", link: "#" },
      { icon: "mdi-paw", text: "Pet Profile", link: "#" },
    ],
  },
  {
    section: "ANALYTICS",
    listItems: [
      { icon: "mdi-heart-box-outline", text: "Health Monitoring", link: "#" },
      { icon: "mdi-needle", text: "Vaccination Schedule", link: "#" },
    ],
  },
  {
    section: "SCHEDULE",
    listItems: [
      { icon: "mdi-message-outline", text: "Chat", link: "#" },
      { icon: "mdi-calendar", text: "Appointments", link: "#", badge: { color:"red", notification: "2", icon: "mdi-circle-small"} },
    ],
  },
  {
    section: "HELP",
    listItems: [
      { icon: "mdi-nut", text: "Settings", link: "#" },
      { icon: "mdi-file-document", text: "Documentation", link: "#" },
    ],
  },
  {
    section: "",
    listItems: [{ icon: "mdi-logout", text: "Logout", link: "#" }],
  }
];