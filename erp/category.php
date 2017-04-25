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
    $categoryname = $_POST['categoryname'];

    //链接数据库
    $mysqli = new mysqli($localhost, $username, $password,$database);

    //判断是否连接成功
    if(mysqli_connect_errno())
    {
        echo mysqli_connect_error();
    }

    //规定字符集
    $mysqli->query("set names utf8");

    $exist = $mysqli->query("SELECT * FROM commodity_category WHERE categoryname = '$categoryname'");

    if(mysqli_num_rows($exist)){
        $i = 0;
        while ($row = mysqli_fetch_assoc($exist)) {
            $display[$i] = $row;
            $i++;
        }
        if($display[0]['display'] == 1){
            $id = $display[0]['id'];
            $sql = "UPDATE commodity_category SET display = 0 WHERE id = $id";

            $res = $mysqli->query($sql);

            if($res){
                $data['id'] = mysqli_insert_id($mysqli);   //返回添加的品牌id
                echo json_encode($data);
            }
        }else{
            $data['msg'] = "error";
            echo json_encode($data);
        }

    }else {

        $sql = "INSERT INTO commodity_category(categoryname) VALUES ('$categoryname')";

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

    $sql = "UPDATE commodity_category SET display = 1 WHERE id = $id";

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
    $categoryname = $_POST['categoryname'];

    //链接数据库
    $mysqli = new mysqli($localhost, $username, $password,$database);

    //判断是否连接成功
    if(mysqli_connect_errno())
    {
        echo mysqli_connect_error();
    }

    //规定字符集
    $mysqli->query("set names utf8");

    $sql = "UPDATE commodity_category SET categoryname = '$categoryname' WHERE id = $id";

    $res = $mysqli->query($sql);

    if($res){
        $data['id'] = mysqli_insert_id($mysqli);   //返回添加的品牌id
        echo json_encode($data);
    }

}