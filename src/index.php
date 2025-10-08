<?php
$mysqli = new mysqli("db", "appuser", "apppass", "appdb");

if ($mysqli->connect_error) {
    die("Connection failed: " . $mysqli->connect_error);
}

// 1️⃣ Create table if it doesn't exist
$createTableSql = "CREATE TABLE IF NOT EXISTS artists (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    genre VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)";
$mysqli->query($createTableSql);

// 2️⃣ Insert a row
$name = "The Beatles";
$genre = "Rock";

$stmt = $mysqli->prepare("INSERT INTO artists (name, genre) VALUES (?, ?)");
$stmt->bind_param("ss", $name, $genre);
$stmt->execute();
$stmt->close();

// 3️⃣ Fetch a row and display it
$result = $mysqli->query("SELECT id, name, genre, created_at FROM artists LIMIT 1");

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        echo "ID: " . $row['id'] . "<br>";
        echo "Name: " . $row['name'] . "<br>";
        echo "Genre: " . $row['genre'] . "<br>";
        echo "Created At: " . $row['created_at'] . "<br>";
    }
} else {
    echo "No artists found.";
}

$mysqli->close();

?>
