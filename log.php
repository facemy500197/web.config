<?php
// Get the visitor's IP address
$ip = $_SERVER['REMOTE_ADDR'];

// Get the current date and time
$date = date('Y-m-d H:i:s');

// Log the IP address and date/time to a file (you can modify this to store in a database)
$log = "$date - IP: $ip\n";
file_put_contents('ip_log.txt', $log, FILE_APPEND | LOCK_EX);
?>
