<?php
	include_once 'conn.php';

	$userName = $_POST['userName'];
	$emailAdd = $_POST['emailAdd'];
	$userMessage = $_POST['userMessage'];
	
	$sql = "INSERT INTO inquiries (userName, emailAdd, userMessage) VALUES ('$userName', '$emailAdd', '$userMessage');";

	mysqli_query($conn, $sql);

	header("Location: ../serviceSubsuccess.html");
?>