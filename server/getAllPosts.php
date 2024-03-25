<?php

include './connection.php';

$allPosts = []; 

$query = $mysqli->prepare("SELECT * FROM posts");


if (!$query->execute()) {
  die("Error fetching posts: " . $query->error);
}


$query->bind_result($postID, $userID, $companyID, $postContent, $postImage, $postedAt);


while ($query->fetch()) {
  $post = [
    "postID" => $postID,
    "userID" => $userID,
    "companyID" => $companyID,
    "postContent" => $postContent,
    "postImage" => $postImage,
    "postedAt" => $postedAt
  ];
  $allPosts[] = $post;
}

$query->close();


$json_response = json_encode($allPosts);

echo $json_response;

