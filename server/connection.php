<?php 

$host = "127.0.0.1";
$user = "root";
$password = "";
$db_name = "linkedin_db";

$mysqli = new mysqli($host, $user, $password, $db_name);

if ($mysqli->connect_error) {
    die("Connection failed: ". $mysqli->connect_error);
}