<?php
/**
 * Created by PhpStorm.
 * User: Yang Chengqi
 * Date: 2016/3/29
 * Time: 13:22
 */
require_once('config.php');

//解析post
$data = file_get_contents("php://input");
$a = urldecode($data);
$b = explode("&",$a);
foreach($b as $str=>$val){
    $c = explode("=",$val);
    $m[$c[0]] = $c[1];
}
//解析出商品
foreach($m as $q=>$p){
    $n= explode("_",$q);
    if($n[0] == 'amount'){
        $f[$n[1]] = $p;
    }
}

//将订单中的商品序列化
$good=serialize($f);

$sql = "INSERT INTO commodity_order(ordername,ordernumber,supplier,warehouse,way,purchaseDate,scheduleDay,freight,cost,orderperson,schedule,good)
  VALUES ('$m[ordername]','$m[ordernumber]','$m[supplier]','$m[warehouse]','$m[way]','$m[purchaseDate]','$m[scheduleDay]','$m[freight]','$m[allcost]','$m[orderperson]','$m[schedule]','$good')";

//链接数据库
$mysqli = new mysqli($localhost,$username,$password,$database);

//检验连接是否成功
if(mysqli_connect_errno()){
    echo mysqli_connect_error();
}

//规定字符集
$mysqli->query("set names utf8");

//执行sql语句
$res = $mysqli->query($sql);

if($res){
    $msg['msg'] = '1';
    echo json_encode($msg);
}