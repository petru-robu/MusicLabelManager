<?php
header("Access-Control-Allow-Origin: *");
header('Content-Type: application/json');

$mysqli = new mysqli("db", "appuser", "apppass", "appdb");

if ($mysqli->connect_error) {
    http_response_code(500);
    echo json_encode(["error" => "DB connection failed"]);
    exit;
}

// 1. Create table if not exists
$mysqli->query("
CREATE TABLE IF NOT EXISTS artists (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    genre VARCHAR(100) NOT NULL
)");

// 2. Insert sample row only if table is empty
$result = $mysqli->query("SELECT COUNT(*) as cnt FROM artists");
$row = $result->fetch_assoc();
if ($row['cnt'] == 0) {
    $mysqli->query("INSERT INTO artists (name, genre) VALUES ('Sample Artist', 'Pop')");
}

// 3. Fetch all rows
$result = $mysqli->query("SELECT id, name, genre FROM artists");
$artists = $result->fetch_all(MYSQLI_ASSOC);

// 4. Return JSON
echo json_encode($artists);

$mysqli->close();
?>
