<?php

include './connection.php';

$email = $_POST['email'];
$password = $_POST['password'];

$check_user = $mysqli ->prepare('SELECT email FROM users WHERE email= ?');
$check_user ->bind_param('s', $email);
$check_user ->execute();
$result = $check_user ->fetch();

if ($result == 1) {
    $response['message'] = "user already exist";
} else {
    $hashed_password = password_hash($password, PASSWORD_BCRYPT);
    $query = $mysqli ->prepare('INSERT INTO users(email, password) VALUES (?, ?)');
    $query ->bind_param('ss', $email, $hashed_password);

    if($query->execute()) {
        $response['message'] = "user created";
        $response['email'] = $email;
    } else {
        $response['message'] = "user not created";
    }
}

echo json_encode($response);

$mysqli ->close();
