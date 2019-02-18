# vue-cli-demo3

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).



## 全局组件
    components文件夹新家一个文件夹button
    新建文件 MyButton.vue 和index.js
<pre><code>
import MyButton from './CustomButton.vue'
export default {
  install: function (Vue) {
      /** 使用组件名称Vue.component('组件使用名称', 组件) */
    Vue.component('MyButton', MyButton)
  }
}</code></pre>
    在main.js引入全局组件
<pre><code>
import MyButtons from './components/buttons'
Vue.use(MyButtons)</pre><code>

## Eslint配置问题
[Eslint网站](https://eslint.org/docs/user-guide/configuring)
##### useEslint ture 开启eslint检查器  
    位置conig/index.js dev:{}中

<pre><code>
ESLint附带了大量规则。您可以使用配置注释或配置文件修改项目使用的规则。要更改规则设置，必须将规则ID设置为以下值之一：
"off"或0- 关闭规则
"warn"或1- 将规则作为警告打开（不影响退出代码）
"error"或2- 将规则作为错误打开（触发时退出代码为1）
{
    "rules": {
        "eqeqeq": "off",
        "curly": "error",
        "quotes": ["error", "double"]
    }
}
而在YAML：
---
rules:
  eqeqeq: off
  curly: error
  quotes:
    - error
    - double
要配置在插件中定义的规则，您必须在规则ID前面加上插件名称和a /。例如：
{
    "plugins": [
        "plugin1"
    ],
    "rules": {
        "eqeqeq": "off",
        "curly": "error",
        "quotes": ["error", "double"],
        "plugin1/rule1": "error"
    }
}</code></pre>

## 全局设置axios 网路请求
安装 cnpm install axios -S
     使用axios的两种方式:不是全局插件
     方式1:在每一个组件中引入axios
     方式2:在main.js中全局引入并添加到vue全局
     .native 修饰符
###### main.js中添加  
<pre><code>
 import axios from 'axios'   
Vue.prototype.$httpTo = axios
/** 调用 Vue.$httpTo.post();
</code></pre>
            



