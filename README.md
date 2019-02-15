#BootstrapTest
https://github.com/longyuan02/BootstrapTest.git
[markdown语法](https://blog.csdn.net/guo20082200/article/details/82755387#Markdown_2)

##### 代码块 <pre><code></code></pre>

### 过滤第三方库 loadash date-fns日期格式化 accounting.js货币格式化
### property 属性 模板 过滤器
### axios

### user.php
<pre><code>
<?php
$ret = array(
    'name' => isset($_GET['name'])? $_GET['name'] : '',
    'gender' => isset($_GET['gender'])? $_GET['gender'] : ''
);
header('content-type:application:json;charset=utf8');
$origin = isset($_SERVER['HTTP_ORIGIN'])? $_SERVER['HTTP_ORIGIN'] : '';
$allow_origin = array(
    'http://www.client.com',
    'http://www.client2.com'
);
if(in_array($origin, $allow_origin)){
    header('Access-Control-Allow-Origin:'.$origin);
    header('Access-Control-Allow-Methods:POST');
    header('Access-Control-Allow-Headers:x-requested-with,content-type');
}
echo json_encode($ret);
?></code></pre>
### 表格列表 删除 用户系统   
     CustomerSystem

### post.php
<pre><code><?php
    	$ret = array(
       'name' => isset($_POST['name'])? $_POST['name'] : '',
       'age' => isset($_POST['age'])? $_POST['age'] : ''
);
	echo json_encode($ret);
?></code></pre>
## 生命周期 lifecycle


## 计算属性  computed
### 1基本用法
     用来存储数据，以下特点
     a.数据可以进行逻辑操作
     b.对计算属性中数据进行监视
### 2计算属性 vs方法
    将计算法属性的get函数定义为一个方法也可以实现类似的功能
    区别：
    a:计算属性基于它的依赖更新是，只有相关依赖发上变化时才能更改
    b:计算属性是有缓存的，只要相关依赖没有改变，多次访问计算属性得到的值是之前缓存的计算结果，不会多次执行


###  3get和set
    计算属性由两部分组成,get和set分别用来获取计算属性和设置计算属性
    默认只有get,如果需要set,要自己添加


## vue实例的属性和方法 vueproperty
### 1.属性
    vm.$el
    vm.$data  
    vm.$options
    vm.$refs   获取所有添加ref属性的元素
### 2.方法
    vm.$mount()
    vm.$nextTick(callback)修改数据后 dom还没有更新完,vue实现响应式,并不是数据发生改变后立即更新,需要按照一定的策略进行dom更新,需要时间!
    vm.$destroy()
    vm.$set( target, key, value )
    vm.$delete( target, key )
    vm.$watch( expOrFn, callback, [options] )

## 自定义指令 CustomerOrder
###  1.自定义全局指令
    使用全局方法vue.directive(指令id,指令定义对象)

### 自定义局部指令

### 练习  CustomerOrderTest  鼠标拖动div效果
    拖动元素中的元素
    onmouseover onmouseout
    onmousedown onmousemove onmouseup

## 过渡动画   未进行



## 一 组件 component 
### 1.什么是组件?
    组件(component)是Vue.js最强大的功能之一,组件可以扩展HTML元素,封装可重用的代码
    组件是自定义元素(对象)

### 2.定义组件的方式
    方式1:先创建一个组件构造器,然后由组件构造器创建组件
    方式2:直接创建组件


### 3.组件的分类 ComponentType
    全局和局部
    
### 4.引用模板 ComponentModel
     将组建内容放到模板<template>中并引用

### 5.动态组建   ComponentModel 
    动态组件显示位置相同,只是显示条件不通
    <component :is="">组建
    多个组建使用同一个挂载点,然后动态在他们之间切换
    <keep-alive>组件
    使用<keep-alive>组件缓存非活动组件,可以保留状态,避免重新渲染,默认每次都会销毁非活动组件并重新创建.


##  二 组件之间数据传递  TransformIMformation

### 1.父子组件
    在一个组件内部,定义另一个组件,称之为父组件
    子组件只能在父组件内部中使用.
    默认情况下子组件不能访问父组件数据,每个组件的实例是独立的作用域


### 2.组件间数据传递(通信)  
#### 2.1 子组件访问父组件数据
        a)在调用子组件式,把父组件数据绑定给子组件
        b)在子组件内部使用props选项声明获取的数据,即接受父组件的数据
        总结:父组件通过props向下床底数据给子组件
        注:组件中的数据有三种方式 data,props,computed
#### 2.2 父组件访问子组件数据
     a)在子组件中使用vm.$emit(事件名,数据) 触发一个自定义事件,事件名自定义
     b)父组件在使用子组件的地方监听子组件触发的事件,并在父组件中定义方法,用来获取数据
     总结:子组件通过events给父组件发消息,实际上就是子组件把自己的数据发送给父组件.


#### 3 单向数据流
     props是单向绑定的,当父组件的属性变化时,将传到给子组件,但是不会反向传递
     而且不允许子组件修改父组件中的数据,报错
     解决方式:
         方式1:子组件想把它当成局部数据来用,可以将数据存入另一个变量中再操作,不影响父组件中的数据
         方式2:如果子组件想修改数据并且同步更新到父组件,两个方法:
         a)使用.sync(1.0支持 2.0不支持 2.3支持)
         需要显示触发一个更新事件
         常用方式
         b.可以将父组件中的数据包装成对象,然后在子组件中修改对象的属性(对象是引用类型,指向同一个内存空间)

####  4.非父子组件之间的通信   CrossingCommunication
     非父子组件之间的通信,可以通过一个空的Vue实例作为中央事件总线,用它来触发事件和监听事件
     var event=new Vue();
     evnet.$emit(事件名,数据);
     event.$on(事件名,data=>{})


## 三.内容分发slot   CrossingCommunication
     本意位置、槽
     作用：用来获取组件中的原内容，类似angular中的transclude指令



## 四 vue-router路由 恩
#### 1.基本介绍
    使用Vue.js开发SPA（Single page Application）单页面应用
    根据不同url地址，显示不同的内容，单显示在同一个页面中，成为单页面应用
[参考](https://router.vuejs.org/)
   npm info vue-router 查看最新版本
   npm install vue-router  安装

#### 2.基本用法
   a.页面布局
   b.配置路由

#### 3.路由嵌套和参数传递    VueRouterPass
     传递参数的两种方式:
     a.查询字符串:login?name=tom$pwd=123
     {{$route.query}}
     b.rest风格:regist/alice/123456
     {{$route.params}}

#### 4.路由实例的方法
     router.push()添加路由,功能上与<router-link>相同
     router.replace()替换路由,不产生历史记录     
## 5.路由结合动画
### 1. .vue文件
     .vue文件称为单文件组件,是Vue.js自定的一种文件格式,一个.Vue文件就是一个单独的组件,在文件内封装了组件相关的代码: html、css、js
     .vue文件由三个部分组成:<template>、<scripte>、<style>
     <template>
     </template>
     <scripte>
     </scripte>
     <style>
     <s/tyle>

### 2. vue-loader 
     浏览器本身并不认识.vue文件,所以不许对.Vue文件进行加载解析,此时需要Vue-loader
     类似的loader还哟许多,若html-loader、css-loader、style-loader、babel-loader等
     需要注意的是Vue-loader是基于webpaci的

### 3. webpack
     webpack是一个前段资源模块化加载器和打包工具,它能把各种资源都作为模块来使用和处理
     实际上,webpack 是通过不同的loader将这下资源加载后打包,然后输出打包后文件
     简单来说,webpack就是一个模块化加载器,所有资源都可以作为模块来加载,最后打包输出
[官网链接](https://webpack.github.io/)

     webpack 版本 v1.x v2.x
     webpack有一个核心配置文件:webpack.config.js必须放在项目的根目录下

#### 4.1 创建项目目录结构   webpack-demo 文件夹--了解设置选项 工程设置有瑕疵
     webpack-demo
     |-index.html
     |-main.js 入口文件
     |-App.vue  vue文件
     |-package.json  工程文件
     |-webpack.config.js  webpack配置文件
     |-.babelrc      Babel配置文件

     package.json文件生成 cd到指定目录 npm init --yes

#### 4.2 编写App.uve

#### 4.3 安装相关模块
     cnpm install vue -S
     <!-- cnpm install webpack --save dev -->
     cnpm install webpack -D
     cnpm install webpack-dev-server -D//起服务器

     cnpm install vue-loader -D
     cnpm install vue-html-loader -D
     cnpm install css-loader -D
     cnpm install vue-style-loader -D
     cnpm install file-loader -D   //字体字库

     cnpm install babel-loader -D
     cnpm install babel-core -D
     cnpm install babel-preset-env -D //根据配置的运行环境自动启用需要的babel插件
     cnpm install vue-template-compiler -D //预编译模板

     合并:cnpm install webpack webpack-dev-server vue-loader vue-html-loader css-loader vue-style-loader file-loader babel-loader babel-core babel-preset-env vue-template-compiler


#### 4.4编写入口文件 main.js

#### 4.5编写webpack.config.js文件

#### 4.5编写babelrc文件     

#### 4.5编写package.json文件    
     替换: // "test": "echo \"Error: no test specified\" && exit 1"

#### 4.6运行
     npm run dev     

## 五 脚手架 Vue-CLI
### 1.简介
     vue-cli是一个Vue脚手架,可以快速构建项目结构
     vue-cli本身集成了多种项目模板
[github介绍](https://github.com/vuejs/vue-cli/tree/v2#vue-cli--)
     simple 很少使用
     webpack 包含ESLint工具--代码规范检查、单元测试等
     webpack-simple 没有代码规范检查和单元测试
     browserify 基本功能与webpack相同 使用也比较多
     browserify-simple
### 2 示例,步骤:
####    2.1.安装vue-cli
     npm install -g vue-cli   //(-g)全局安装
     vue --version  查看版本
     vue list 可用模板

#### 2.2初始化项目
     语法:vue init 模板名称 项目名
#### 2.3 进入生成的项目目录,安装模块宝
     cd 到工程目录
     npm install //安装相应依赖

#### 2.4运行
     npm run dev //启动测试服务
     npm build //将项目打包输入到dis目录,上模上线的话要将dis目录拷贝到服务器上
##### 代码块 指定输入输入路径
 <pre><code>
 module.exports = {
     entry: './src/main.js',
     output: {
     path: path.resolve(__dirname, './dist'),
     publicPath: '/dist/',
     filename: 'build.js'
     }
</code></pre>    

### 3.使用webpack模板
     退回上一次 cd ..
     vue init webpack vue-cli-demo2
     
     ESLint 是用来统一代码规范和风格的工具,如:缩进空格符号要求比较严格
     .eslintrc.js 设置规则等
     .eslintgnore 设置忽略文件
[官网](http://eslint.org)