#BootstrapTest
https://github.com/longyuan02/BootstrapTest.git
### 过滤第三方库 loadash date-fns日期格式化 accounting.js货币格式化
### property 属性 模板 过滤器
### axios

### user.php
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
?>
### 表格列表 删除 用户系统   
     CustomerSystem

### post.php
<?php
    	$ret = array(
       'name' => isset($_POST['name'])? $_POST['name'] : '',
       'age' => isset($_POST['age'])? $_POST['age'] : ''
);
	echo json_encode($ret);
?>

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



## 四 vue-router路由 
    使用Vue.js开发SPA（Single page Application）单页面应用
    根据不同url地址，显示不同的内容，单显示在同一个页面中，成为单页面应用

   [参考](https://router.vuejs.org/)

   npm info vue-router 查看最新版本
   npm install vue-router  安装

   页面布局