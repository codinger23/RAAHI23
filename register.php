<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the phone number from the form
    $phoneNumber = $_POST["phoneNumber"];

    // Your email address where you want to receive the registered phone numbers
    $to = "milansinghh1786@gmail.com";

    // Subject of the email
    $subject = "New Phone Number Registration";

    // Email message body
    $message = "New phone number registered: " . $phoneNumber;

    // Send email
    mail($to, $subject, $message);

    // Optionally, you can save the phone number to a text file
    $file = fopen("registered_numbers.txt", "a");
    fwrite($file, $phoneNumber . "\n");
    fclose($file);
}
?>
