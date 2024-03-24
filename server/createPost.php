<?php
include './connection.php';

$userID = $_POST['userID'];
$companyID = isset($_POST['companyID']) ? $_POST['companyID'] : null;
$content = $_POST['content'];
$postImage = isset($_POST['postImage']) ? $_POST['postImage'] : '';
$postedAt = isset($_POST['postedAt']) ? $_POST['postedAt'] : $postedAt = date('Y-m-d H:i:s');;

$check_user = $mysqli ->prepare('SELECT userID FROM users WHERE userID= ?');
$check_user ->bind_param('i', $userID);
$check_user ->execute();
$check_user ->store_result();
$check_user ->bind_result($userID);
$check_user->fetch();
$num_rows = $check_user->num_rows();

if ($num_rows == 0) {
    $response['message'] = "user not found";
} else {
    $query = $mysqli ->prepare('INSERT INTO posts(userID,companyID, content, postImage, postedAt) VALUES (?,?,?,?,?)');
    $query ->bind_param('iisss', $userID, $companyID, $content, $postImage, $postedAt);
    if($query->execute()) {
        $post = new stdClass();
        $post->userID = $userID;
        $post->companyID = $companyID;
        $post->content = $content;
        $post->postImage = $postImage;
        $post->postedAt = $postedAt;

        $response['message'] = "post created";
        $response['post'] = $post;
    } else {
        $response['message'] = "post not created";
    }
}


echo json_encode($response);

$mysqli ->close();