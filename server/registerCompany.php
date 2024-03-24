<?php
include './connection.php';

$userID = $_POST['userID'];
$companyName = $_POST['companyName'];
$logo = isset($_POST['logo']) ? $_POST['logo'] : ''; 
$website = isset($_POST['website']) ? $_POST['website'] : ''; 
$description = isset($_POST['description']) ? $_POST['description'] : ''; 


$check_account = $mysqli ->prepare('SELECT userID, account_type FROM users WHERE userID= ?');
$check_account ->bind_param('i', $userID);
$check_account ->execute();
$check_account ->store_result();
$check_account ->bind_result($userID,$account_type);

$check_account->fetch();
$num_rows = $check_account->num_rows();

if ($num_rows == 0) {
    $response['message'] = "user not found";
} else {
    if ($account_type == 'company') {
        $response['message'] = "already a company";
    } else {
        $query = $mysqli ->prepare('INSERT INTO companies(userID, companyName, description ,logo, website) VALUES (?,?,?,?,?)');
        $update_users = $mysqli ->prepare('UPDATE users SET account_type = "company" WHERE userId=?');
        $update_users -> bind_param('i', $userID);
        $query ->bind_param('issss', $userID, $companyName, $description, $logo, $website);
        if($query->execute()) {
            $company = new stdClass();
            $company->userID = $userID;
            $company->companyName = $companyName;
            $company->description = $description;
            $company->logo = $logo;
            $company->website = $website;
            $response['message'] = "company created";
            $response['company'] = $company;
        } else {
            $response['message'] = "company not created";
        }
    }
}


echo json_encode($response);

$mysqli ->close();