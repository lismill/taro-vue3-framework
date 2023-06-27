export default defineAppConfig({
  pages: [
    // home
    "pages/home/index",

    // develop
    "pages/develop/index/index",
    "pages/develop/tour/index",
    "pages/develop/card/index",

    // _login
    "pages/_login/index",
  ],
  window: {
    backgroundColor: "#f7f8fa",
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
  },
  tabBar: {
    selectedColor: "#999999",
    list: [
      {
        pagePath: "pages/home/index",
        text: "首页",
        iconPath: "./assets/images/menus/develop-unselected.png",
        selectedIconPath: "./assets/images/menus/develop-selected.png",
      },
      {
        pagePath: "pages/develop/index/index",
        text: "开发者工具",
        iconPath: "./assets/images/menus/develop-unselected.png",
        selectedIconPath: "./assets/images/menus/develop-selected.png",
      },
    ],
  },
});
