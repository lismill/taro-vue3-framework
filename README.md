# taro-vue3-framework

taro-vue3-framework

## Feature

| 名称                                      |
| ----------------------------------------- |
| eslint + husky + commitlint + lint-staged |
| tailwindcss                               |
| pinia                                     |

## eslint + husky + commitlint + lint-staged

### eslint

`package.json`

```json
"scripts": {
  "lint": "eslint --ext .js,.ts,.jsx,.tsx src"
}
```

`settings.json`

```json
"editor.codeActionsOnSave": {
  "source.fixAll.eslint": true
},
```

### husky + commitlint

```
1. npm install husky --save-dev

2. npx husky install

3. package.json
"scripts": {
  "prepare": "husky install",
}

4. npx husky add .husky/pre-commit "npx lint-staged"

5. npx husky add .husky/commit-msg 'npx --no-install commitlint --edit "$1"'

6. npm install @commitlint/cli @commitlint/config-conventional --save-dev

7. `commitlint.config.js`
module.exports = {
  extends: ['@commitlint/config-conventional']
};
```

### lint-staged

```
1. npm install lint-staged --save-dev

2. package.json
"lint-staged": {
  "*.(js|ts|jsx|tsx)": "eslint --cache"
}
```

## tailwindcss

### 安装

`npm install @dcasia/mini-program-tailwind-webpack-plugin --save-dev`

### 配置

`config/index.js`

```js
plugins: [
  // ...
  [
    "@dcasia/mini-program-tailwind-webpack-plugin/dist/taro",
    {
      enableDebugLog: true,
    },
  ],
],
```

`windi.config.js`

```js
export default {
  prefixer: false,
  extract: {
    exclude: ["node_modules", ".git", "dist"],
  },
  corePlugins: {
    container: false,
  },
};
```

`app.ts`

```ts
import "windi.css";
```

### 使用

```vue
<div class="my-[32px] h-[2000px] text-red-700 text-center">
  tailwindcss
</div>
```
