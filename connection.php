<?php 
$server = "localhost";
$username = "root";
$password = "";
$db = "curdoperation";
$conn = new mysqli($server,$username,$password,$db);

if(!$conn){
 die("connection : error")
}



?>