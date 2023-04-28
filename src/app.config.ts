export default defineAppConfig({
  pages: [
    // login
    "pages/login/index",

    // home
    "pages/home/index",

    // user
    "pages/user/index",

    // develop
    "pages/develop/index/index",
  ],
  subpackages: [
    {
      root: "packageA",
      pages: ["pages/develop/tour/index", "pages/develop/card/index"],
    },
  ],
  window: {
    backgroundColor: "#f5f6f7",
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
  },
  tabBar: {
    selectedColor: "#fa2c19",
    list: [
      {
        pagePath: "pages/home/index",
        text: "首页",
        iconPath: "./assets/images/menus/home-unselected.png",
        selectedIconPath: "./assets/images/menus/home-selected.png",
      },
      {
        pagePath: "pages/develop/index/index",
        text: "开发",
        iconPath: "./assets/images/menus/develop-unselected.png",
        selectedIconPath: "./assets/images/menus/develop-selected.png",
      },
      {
        pagePath: "pages/user/index",
        text: "我的",
        iconPath: "./assets/images/menus/user-unselected.png",
        selectedIconPath: "./assets/images/menus/user-selected.png",
      },
    ],
  },
});
