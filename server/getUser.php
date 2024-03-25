<?php
include './connection.php';

$userID = $_POST['userID'];

$query = $mysqli -> prepare('SELECT userName FROM users WHERE userID= ?');

$query -> bind_param('i', $userID);

$query->execute();
$query->store_result();

$query -> bind_result($userName);

$query -> fetch();

$num_rows = $query->num_rows();

if ($num_rows == 0) {
    $response['message'] = "user not found";
} else {
    $response['status'] = 200;
    $response['userName'] = $userName;
}

echo json_encode($response);

$mysqli ->close();