<?php

$host = "localhost";
$dbname = " PBP";
$username = "root";
$password = "Thehues!";

// $mysqli = new mysqli($host, $username, $password, $dbname);
$conn = mysqli_connect($host, $username, $password, $dbname);    

if(!$conn){
    die("Connection error");
}
// if ($conn->connect_error) {
//     die("Connection error: " . $mysqli->connect_error);
// }

echo(“Connected successfully”);

// return $mysqli;
?>