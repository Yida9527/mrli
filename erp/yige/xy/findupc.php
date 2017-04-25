<?php
/**
 * Created by PhpStorm.
 * User: Yang Chengqi
 * Date: 2016/4/6
 * Time: 14:12
 */

require_once('config.php');

$upc = $_GET['upc'];

//连接数据库
$conn = new mysqli($localhost, $username, $password,$database);
if(mysqli_connect_errno())
{
    echo mysqli_connect_error();
}

$conn->query("set names utf8");


$sql = "SELECT * FROM commodity_good WHERE barcode = '$upc'";

//执行sql语句
$res = $conn->query($sql);
//var_dump($res);
if(mysqli_affected_rows($conn)){
    $data = mysqli_fetch_array($res);
    $data['msg'] = 1;
    echo json_encode($data);
}else{
    $data['msg'] = 0;
    echo json_encode($data);
}