<?php
/**
 * Created by PhpStorm.
 * User: Yang Chengqi
 * Date: 2016/4/1
 * Time: 10:23
 */

require_once('config.php');

$saveType = $_POST['saveType'];

switch($saveType){
    case "add":
        add();
        break;
    case "remove":
        remove();
        break;
    case "update":
        update();
        break;
    default:
        break;
}


function add(){
    //全局获取数据库信息
    global $localhost;
    global $username;
    global $password;
    global $database;

    //获取品牌信息
    $brandname = $_POST['brandname'];
    $brandurl = $_POST['brandurl'];

    //链接数据库
    $mysqli = new mysqli($localhost, $username, $password,$database);

    //判断是否连接成功
    if(mysqli_connect_errno())
    {
        echo mysqli_connect_error();
    }

    //规定字符集
    $mysqli->query("set names utf8");

    //查询该品牌是否已经存在
    $exist = $mysqli->query("SELECT * FROM commodity_brand WHERE brandname = '$brandname'");

    if(mysqli_num_rows($exist)){
        $i = 0;
        while ($row = mysqli_fetch_assoc($exist)) {
            $display[$i] = $row;
            $i++;
        }
        //如果存在,判断display是不是真
        if($display[0]['display'] == 1){
            $id = $display[0]['id'];
            $sql = "UPDATE commodity_brand SET display = 0,brandurl = '$brandurl' WHERE id = $id";

            $res = $mysqli->query($sql);

            if($res){
                $data['id'] = mysqli_insert_id($mysqli);   //返回添加的品牌id
                echo json_encode($data);
            }
        }else{
            $data['msg'] = "error";   //返回添加的品牌id
            echo json_encode($data);
        }
    }else
    {

        $sql = "INSERT INTO commodity_brand(brandname,brandurl) VALUE ('$brandname','$brandurl')";

        $res = $mysqli->query($sql);

        if ($res) {
            $data['id'] = mysqli_insert_id($mysqli);   //返回添加的品牌id
            echo json_encode($data);
        }
    }
}

function remove(){
    global $localhost;
    global $username;
    global $password;
    global $database;

    //获取品牌信息
    $id = $_POST['ids'];

    //链接数据库
    $mysqli = new mysqli($localhost, $username, $password,$database);

    //判断是否连接成功
    if(mysqli_connect_errno())
    {
        echo mysqli_connect_error();
    }

    //规定字符集
    $mysqli->query("set names utf8");

    $sql = "UPDATE commodity_brand SET display = 1 WHERE id = $id";

    $res = $mysqli->query($sql);

    if($res){
        $data['id'] = mysqli_insert_id($mysqli);   //返回添加的品牌id
        echo json_encode($data);
    }

}

function update(){
    global $localhost;
    global $username;
    global $password;
    global $database;

    //获取品牌信息
    $id = $_POST['id'];
    $brandname = $_POST['brandname'];
    $brandurl = $_POST['brandurl'];

    //链接数据库
    $mysqli = new mysqli($localhost, $username, $password,$database);

    //判断是否连接成功
    if(mysqli_connect_errno())
    {
        echo mysqli_connect_error();
    }

    //规定字符集
    $mysqli->query("set names utf8");

    $sql = "UPDATE commodity_brand SET brandname = '$brandname',brandurl = '$brandurl' WHERE id = $id";

    $res = $mysqli->query($sql);

    if($res){
        $data['id'] = mysqli_insert_id($mysqli);   //返回添加的品牌id
        echo json_encode($data);
    }

}