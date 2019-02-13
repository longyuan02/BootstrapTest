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

### 生命周期 lifecycle


### 计算属性  computed
### 1基本用法
     用来存储数据，以下特点
     a.数据可以进行逻辑操作
     b.对计算属性中数据进行监视
### 2计算属性 vs方法
    将计算法属性的get函数定义为一个方法也可以实现类似的功能
    区别：
    a:计算属性基于它的依赖更新是，只有相关依赖发上变化时才能更改
    b:计算属性是有缓存的，只要相关依赖没有改变，多次访问计算属性得到的值是之前缓存的计算结果，不会多次执行

### 3    get和set
    计算属性由两部分组成,get和set分别用来获取计算属性和设置计算属性
    默认只有get,如果需要set,要自己添加


### vue实例的属性和方法 vueproperty
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

###  自定义指令 CustomerOrder
###  1.自定义全局指令
    使用全局方法vue.directive(指令id,指令定义对象)
    
### add Target    
