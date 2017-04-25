
<?php

/**
 * Created by PhpStorm.
 * User: Yang Chengqi
 * Date: 2016/3/30
 * Time: 9:15
 */

require_once('config.php');//引用数据库信息文件

$pageSize = $_POST['pageSize'];//每页显示条数
$pageNum = $_POST['pageNum'];//页码号
$startNum = $_POST['startNum'];//起始记录

@$select = $_POST['select'];

//连接数据库
$conn = new mysqli($localhost, $username, $password,$database);
if(mysqli_connect_errno())
{
    echo mysqli_connect_error();
}

$conn->query("set names utf8");


$start =  $pageSize * $pageNum;//当前页起始记录
$limit = $pageSize;//显示条数

if($select)
{
	@$goods_name = $_POST['goodname'];
	@$goods_id = $_POST['goodid'];
	@$goods_upc = $_POST['barcode'];
	$where = "";
	if($goods_name){
		$where.="and goodname = '$goods_name'";
	}
	if($goods_id){
		$where.="and goodid = '$goods_id'";
	}
	if($goods_upc){
		$where.="and goodcode = '$goods_upc'";
	}
	$sql = "SELECT goodid,goodname,goodcode,thirdtype,price,cost,firsttype,photo,volume,weight,inventory FROM commodity_good where 1=1 $where ORDER BY goodid DESC";
}else{
	$sql = "SELECT goodid,goodname,goodcode,thirdtype,price,cost,firsttype,photo,volume,weight,inventory FROM commodity_good ORDER BY goodid DESC";
}

//执行sql语句
$res = $conn->query($sql);

//将查询的结果生成数组
$i = 0;
while ($row = mysqli_fetch_assoc($res)) {
    $good[$i] = $row;
    $i++;
}

/*//更改数组的列名
for($i = 0;$i<count($data);$i++){
    $a = 'a';
    foreach($data[$i] as $key => $val){
        $good[$i][$a] = $val;
        $str = ord($a);
        $str++;
        $a = chr($str);
    }
}*/

$data["rows"] = array_slice($good,$start,$limit);
$data["results"] = count($good);//总条数

//返回JSON
echo json_encode($data);



