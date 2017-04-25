<?php
/**
 * Created by PhpStorm.
 * User: Yang Chengqi
 * Date: 2016/4/7
 * Time: 10:32
 */


require_once('config.php');

$id = $_GET['id'];

//连接数据库
$conn = new mysqli($localhost, $username, $password,$database);
if(mysqli_connect_errno())
{
    echo mysqli_connect_error();
}

$conn->query("set names utf8");


$sql = "SELECT * FROM commodity_order WHERE id = '$id'";

//执行sql语句
$res = $conn->query($sql);
//var_dump($res);
if($res){
    $data = mysqli_fetch_array($res);
    $data['msg'] = 1;
    $ordernumber = $data['ordernumber'];
    $packnumber = str_replace('CG','ZX',$ordernumber);
    $data['ordernumber'] = $packnumber;
    echo json_encode($data);
}