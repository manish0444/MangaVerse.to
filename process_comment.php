<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["Name"];
    $email = $_POST["Email"];
    $message = $_POST["Message"];

    // Your email address
    $to = "manishbhandari0444@gmail.com"; // Replace with your personal email address
    $subject = "New Contact Form Submission";
    $messageBody = "Name: $name\nEmail: $email\nMessage:\n$message";

    // Send the email
    mail($to, $subject, $messageBody);

    // Redirect to a thank you page
    header("Location: thank_you.html");
    exit;
}
error_reporting(E_ALL);
ini_set('display_errors', '1');

?>
