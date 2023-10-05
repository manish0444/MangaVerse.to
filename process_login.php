<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST["username"];
    $email = $_POST["email"];

    // Your email address
    $to = "manishbhandari0444@gmail.com";  // Replace with your personal email address
    $subject = "New Signup";
    $message = "Username: $username\nEmail: $email";

    // Send the email
    mail($to, $subject, $message);

    // Redirect to a thank you page
    header("Location: thank_you.html");
    exit;
}
error_reporting(E_ALL);
ini_set('display_errors', '1');

?>
