import { createApp } from "vue";
import "windi.css";
import "./assets/styles/app.scss";

const App = createApp({
  onShow(options) {
    console.log(options);
  },
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
});

export default App;
