<?php
// Init the connection
$servername = "localhost";
$username = "SSOadmin";
$password = "0731yEA,W>t";
$dbname = "printingservice_sss";
$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

//do your stuff 
$user = $_GET["fname"];
$pass = $_GET["fpassword"];
$query = "SELECT * FROM user_password WHERE username = $user and pass = $pass";
$result = $conn->query($query);

if($result->num_rows > 0){
  echo "success";
}
else{
  echo "failure"; 
}
?>