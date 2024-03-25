<?php

include './connection.php';

$email = $_POST['email'];
$password = $_POST['password'];

$query = $mysqli ->prepare('SELECT userID,username, email, password, account_type from users WHERE email=?');
$query ->bind_param('s', $email);

$query->execute();
$query->store_result();

$query->bind_result($userID, $username, $email, $hashed_password, $account_type);

$query->fetch();

$num_rows = $query->num_rows();

if ($num_rows == 0) {
    $response['message'] = "user not found";
} else {
    if (password_verify($password, $hashed_password)) {
        $user = new stdClass();
        $user->id = $userID;
        $user->user_name = $username;
        $user->email = $email;
        $user->account_type = $account_type;
        $response['status'] = 200;
        $response['message'] = "logged in";
        $response['user'] = $user;
    } else {
        $response['message'] = "incorrect password";
    }
}

echo json_encode($response);

$mysqli ->close();