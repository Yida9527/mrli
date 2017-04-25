<?php
/**
 * Created by PhpStorm.
 * User: Yang Chengqi
 * Date: 2016/3/29
 * Time: 10:43
 */

require_once('config.php');//引用数据库信息文件

//获取搜索条件
$good['goodname'] = $_POST['goodname'];
$good['goodcode'] = $_POST['goodcode'];
$good[''] = $_POST[''];


//连接数据库
$conn = new mysqli($localhost, $username, $password,$database);
if(mysqli_connect_errno())
{
    echo mysqli_connect_error();
}

//去除空条件组成sql语句
$where = '';
foreach ($good as $key=>$val) {
    if (trim($val)) {
        if ($where == '') {
            $where = $key . '=' . $val;
        } else {
            $where += ' AND ' . $key . '=' . $val;
        }
    }
}

//连接数据库
$conn = new mysqli($localhost, $username, $password,$database);
if(mysqli_connect_errno())
{
    echo mysqli_connect_error();
}
$sql = "SELECT * FROM goods WHERE $where";

//执行sql语句
$res = $conn->query($sql);

//将sql结果json输出
echo json_encode($res);


