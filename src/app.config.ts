export default defineAppConfig({
  pages: [
    "pages/login/index",
    "pages/home/index",
    "pages/busness/index",
    "pages/user/index",
  ],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
  },
  tabBar: {
    selectedColor: "#fa2c19",
    list: [
      {
        pagePath: "/pages/home/index",
        text: "首页",
        iconPath: "./assets/images/menus/home-unselected.png",
        selectedIconPath: "./assets/images/menus/home-selected.png",
      },
      {
        pagePath: "/pages/busness/index",
        text: "组件",
        iconPath: "./assets/images/menus/busness-unselected.png",
        selectedIconPath: "./assets/images/menus/busness-selected.png",
      },
      {
        pagePath: "/pages/user/index",
        text: "我的",
        iconPath: "./assets/images/menus/user-unselected.png",
        selectedIconPath: "./assets/images/menus/user-selected.png",
      },
    ],
  },
});
