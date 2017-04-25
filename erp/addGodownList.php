<?php
/**
 * Created by PhpStorm.
 * User: Yang Chengqi
 * Date: 2016/4/10
 * Time: 14:51
 */
require_once('config.php');

$good = $_POST['good'];
$godownname = $_POST['godownname'];
$godownnumber = $_POST['godownnumber'];
$warehouse = $_POST['warehouse'];
$godownperson = $_POST['godownperson'];
$godownDate = $_POST['godownDate'];

//连接数据库
$conn = new mysqli($localhost,$username,$password,$database);
if(mysqli_connect_errno())
{
    echo mysqli_connect_error();
}

$conn->query("set names utf8");


$sql = "INSERT INTO commodity_godown(godownname,godownnumber,warehouse,godownperson,godownDate)
  VALUES ('$godownname','$godownnumber','$warehouse','$godownperson','$godownDate')";

//执行sql语句
$res = $conn->query($sql);
echo count($good);
if($res){
    for($i=1;$i<count($good);$i++){
        $upc = $good[$i][2];
        $quantity = $good[$i][4];
        $expiration = $good[$i][5];
        $conn = new mysqli($localhost,$username,$password,$database);
        if(mysqli_connect_errno())
        {
            echo mysqli_connect_error();
        }
        $conn->query("set names utf8");
        $SQL = "INSERT INTO commodity_godownlist(upc,quantity,expiration)VALUES ('$upc','$quantity','$expiration')";
        $result = $conn->query($SQL);
        if($result){
            echo $i;
        }
    }
}else{
    $data['msg'] = 0;
    echo json_encode($data);
}