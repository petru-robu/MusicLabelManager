<?php
$mysqli = new mysqli("db", "appuser", "apppass", "appdb");

if ($mysqli->connect_error) 
{
    die("Connection failed: " . $mysqli->connect_error);
}

echo "Connected successfully";
$mysqli->close();

?>
