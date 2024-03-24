<?php

include './connection.php';

$email = $_POST['email'];
$password = $_POST['password'];

$query = $mysqli ->prepare('SELECT id,username, email from users WHERE email=? and password=?');
$query ->bind_param('ss', $email, $password);

$query->execute();
$query->store_result();

$query->bind_result($id, $username, $email, $hashed_password);

$query->fetch();

$num_rows = $query->num_rows();

if ($num_rows == 0) {
    $response['message'] = "user not found";
} else {
    if (password_verify($password, $hashed_password)) {
        $response['message'] = "logged in";
        $response['id'] = $id;
        $response['user_name'] = $username;
        $response['email'] = $email;
    } else {
        $response['message'] = "incorrect password";
    }
}

echo json_encode($response);

$mysqli ->close();