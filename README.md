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

### post.php
<?php
	$ret = array(
    'name' => isset($_POST['name'])? $_POST['name'] : '',
    'age' => isset($_POST['age'])? $_POST['age'] : ''
);
	echo json_encode($ret);
?>