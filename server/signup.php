<?php

include './connection.php';

$email = $_POST['email'];
$username = $_POST['username'];
$password = $_POST['password'];
$account_type = $_POST['account_type'];

$check_user = $mysqli ->prepare('SELECT email FROM users WHERE email= ?');
$check_user ->bind_param('s', $email);
$check_user ->execute();
$result = $check_user ->fetch();

if ($result == 1) {
    $response['message'] = "user already exist";
} else {
    $hashed_password = password_hash($password, PASSWORD_BCRYPT);
    $query = $mysqli ->prepare('INSERT INTO users(email,username,account_type, password) VALUES (?,?,?,?)');
    $query ->bind_param('ssss', $email, $username,$account_type, $hashed_password);

    if($query->execute()) {
        $userdata = $mysqli ->prepare('select userID, username, email, account_type from users where email=?');
        $userdata ->bind_param('s', $email);
        $userdata ->execute();
        $userdata ->bind_result($userID, $username, $email, $account_type);
        $userdata ->fetch();

        $user = new stdClass();
        $user->id = $userID;
        $user->user_name = $username;
        $user->email = $email;
        $user->account_type = $account_type;
        $response['status'] = 200;
        $response['user'] = $user;
        $response['message'] = "user created";
    } else {
        $response['message'] = "user not created";
    }
}

echo json_encode($response);

$mysqli ->close();
