<?php
include './connection.php';

$userID = $_POST['userID'];
$bio = isset($_POST['bio']) ? $_POST['bio'] : '';
$summary = isset($_POST['summary']) ? $_POST['summary'] : '';
$profile_img = isset($_POST['profile_img']) ? $_POST['profile_img'] : '';

$query = $mysqli -> prepare('INSERT INTO profiles(userID, bio, summary, profileImg ) VALUES (?,?,?,?)');
$query -> bind_param('isss', $userID, $bio, $summary, $profile_img);
if($query->execute()) {
    $profile = new stdClass();
    $profile->id = $userID;
    $profile->bio = $bio;
    $profile->summary = $summary;
    $profile->profile_img = $profile_img;
    $response['message'] = "profile updated successfully";
    $response['profile'] = $profile;

} else {
    $response['message'] = "profile not updated";
}

echo json_encode($response);

$mysqli ->close();