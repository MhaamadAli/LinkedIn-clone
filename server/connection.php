<?php 

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Authorization, Content-Type');
header('Content-Type: application/json');


$host = "127.0.0.1";
$user = "root";
$password = "";
$db_name = "linkedin_db";

$mysqli = new mysqli($host, $user, $password, $db_name);

if ($mysqli->connect_error) {
    die("Connection failed: ". $mysqli->connect_error);
}