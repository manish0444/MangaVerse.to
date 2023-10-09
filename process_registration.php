<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Collect form data
    $name = $_POST['Name'];
    $email = $_POST['Email'];
    $message = $_POST['Message'];
    
    // Set recipient email address
    $to = "manishbhandari0444@gmail.com";
    
    // Email subject
    $subject = "Contact Form Submission from $name";
    
    // Email headers
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-type: text/html\r\n";
    
    // Email body
    $body = "<h2>Contact Form Submission</h2>";
    $body .= "<p><strong>Name:</strong> $name</p>";
    $body .= "<p><strong>Email:</strong> $email</p>";
    $body .= "<p><strong>Message:</strong> $[message]</p>";
    
    // Send email
    if (mail($to, $subject, $body, $headers)) {
        echo "Message sent successfully.";
    } else {
        echo "Message could not be sent.";
    }
} else {
    // Handle the case where the form wasn't submitted
    echo "Form not submitted.";
}
?>
