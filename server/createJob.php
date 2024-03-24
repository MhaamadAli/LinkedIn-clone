<?php
include './connection.php';

$companyID = $_POST['companyID'];
$title = $_POST['title'];
$description = $_POST['description'];
$postedAt = isset($_POST['postedAt']) ? $_POST['postedAt'] : $postedAt = date('Y-m-d H:i:s');;

$check_company = $mysqli ->prepare('SELECT companyID FROM companies WHERE companyID= ?');
$check_company ->bind_param('i', $companyID);
$check_company ->execute();
$check_company ->store_result();
$check_company ->bind_result($companyID);
$check_company->fetch();
$num_rows = $check_company->num_rows();

if ($num_rows == 0) {
    $response['message'] = "compony not found";
} else {
    $query = $mysqli ->prepare('INSERT INTO jobposts(companyID, title, description, postedAt) VALUES (?,?,?,?)');
    $query ->bind_param('isss', $companyID, $title, $description, $postedAt);
    if($query->execute()) {
        $jobpost = new stdClass();
        $jobpost->companyID = $companyID;
        $jobpost->title = $title;
        $jobpost->description = $description;
        $jobpost->postedAt = $postedAt;

        $response['message'] = "jobpost created";
        $response['jobpost'] = $jobpost;
    } else {
        $response['message'] = "jobpost not created";
    }
}


echo json_encode($response);

$mysqli ->close();