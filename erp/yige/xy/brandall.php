<?php
/**
 * Created by PhpStorm.
 * User: Yang Chengqi
 * Date: 2016/4/1
 * Time: 11:52
 */

require_once('config.php');

//连接数据库
$conn = new mysqli($localhost, $username, $password,$database);
if(mysqli_connect_errno())
{
    echo mysqli_connect_error();
}

$conn->query("set names utf8");


$sql = "SELECT * FROM commodity_brand WHERE display = 0";

//执行sql语句
$res = $conn->query($sql);

$i = 0;
while ($row = mysqli_fetch_assoc($res)) {
    $brand[$i] = $row;
    $i++;
}

echo json_encode($brand);