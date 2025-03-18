export const menuItems = [
  {
    section: "MENU",
    listItems: [
      { icon: "mdi-view-dashboard", text: "Dashboard", link: "/dashboard" },
      { icon: "mdi-paw", text: "Pet Profile", link: "/pet-profile" },
    ],
  },
  {
    section: "ANALYTICS",
    listItems: [
      {
        icon: "mdi-heart-box-outline",
        text: "Health Monitoring",
        link: "/health-monitoring",
      },
      {
        icon: "mdi-needle",
        text: "Vaccination Schedule",
        link: "/vaccination-schedule",
      },
    ],
  },
  {
    section: "SCHEDULE",
    listItems: [
      {
        icon: "mdi-message-outline",
        text: "Chat",
        link: "/chat",
        image: "userschat.PNG",
      },
      {
        icon: "mdi-calendar",
        text: "Appointments",
        link: "/appoinments",
        badge: { color: "red", notification: "2", icon: "mdi-circle-small" },
      },
    ],
  },
  {
    section: "HELP",
    listItems: [
      { icon: "mdi-nut", text: "Settings", link: "/settings" },
      {
        icon: "mdi-file-document",
        text: "Documentation",
        link: "/documentation",
      },
    ],
  },
  {
    section: "",
    listItems: [{ icon: "mdi-logout", text: "Logout", link: "logout" }],
  },
];
