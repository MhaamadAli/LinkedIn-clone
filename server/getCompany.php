<?php
include './connection.php';

header('Access-Control-Allow-Origin: *');

$companyID = $_POST['companyID'];

$query = $mysqli -> prepare('SELECT companyName FROM companies WHERE companyID= ?');

$query -> bind_param('i', $companyID);

$query->execute();
$query->store_result();

$query -> bind_result($companyName);

$query -> fetch();

$num_rows = $query->num_rows();

if ($num_rows == 0) {
    $response['message'] = "company not found";
} else {
    $response['status'] = 200;
    $response['companyName'] = $companyName;
}

echo json_encode($response);

$mysqli ->close();