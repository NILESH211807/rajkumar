<?php
// Enable error reporting for debugging
error_reporting(0);
// error_reporting(E_ALL);
// ini_set('display_errors', 1);
header('Content-Type: application/json');
header("Access-Control-Allow-Origin: http://localhost:5173"); // Allow only your frontend
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");


use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Load PHPMailer classes
// require 'vendor/autoload.php';
require 'PHPMailer/Exception.php';
require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';

// Initialize response array
$response = [
    'success' => false,
    'message' => "",
];

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
}

// Ensure request is POST
if ($_SERVER['REQUEST_METHOD'] !== "POST") {
    die(json_encode(['success' => false, 'message' => 'Unauthorized access']));
}

// Sanitization and validation function
function sanitizeInput($input)
{
    return htmlspecialchars(stripslashes(trim($input)), ENT_QUOTES, 'UTF-8');
}

// Collect and sanitize inputs
$name = sanitizeInput($_POST['name'] ?? '');
$email = sanitizeInput($_POST['email'] ?? '');
$phone = sanitizeInput($_POST['phone'] ?? '');
$query = sanitizeInput($_POST['query'] ?? '');
$message = sanitizeInput($_POST['message'] ?? '');

// Validation
try {
    // Name validation
    if (empty($name)) {
        throw new Exception('Name is required');
    }
    if (strlen($name) < 3) {
        throw new Exception('Name must be at least 3 characters');
    }
    if (!preg_match("/^[a-zA-Z\s'-]+$/", $name)) {
        throw new Exception('Invalid name format');
    }
    // Email validation
    if (empty($email)) {
        throw new Exception('Email is required');
    }
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        throw new Exception('Invalid email format');
    }
    // Phone validation
    if (empty($phone)) {
        throw new Exception('Phone number is required');
    }
    if (!preg_match("/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/", $phone)) {
        throw new Exception('Invalid phone number format');
    }
    // Query validation
    if (empty($query)) {
        throw new Exception('Query is required');
    }
    // Message validation
    if (empty($message)) {
        throw new Exception('Message is required');
    }

    if (strlen($message) < 10) {
        throw new Exception('Message must be at least 10 characters');
    }

    // Send email
    if (sendEmailWithPHPMailer($name, $email, $phone, $query, $message)) {
        $response['success'] = true;
        $response['message'] = 'Form submitted successfully';
    } else {
        throw new Exception('Failed to send email');
    }
} catch (Exception $e) {
    $response['message'] = $e->getMessage();
}

echo json_encode($response);

// Function to send email using PHPMailer
function sendEmailWithPHPMailer($name, $email, $phone, $query, $message)
{
    $mail = new PHPMailer(true);
    $senderMail = 'nileshkumar0815@gmail.com';
    $senderPassword = 'yqasafzssswruqes';

    try {
        // SMTP Configuration
        $mail->isSMTP();
        $mail->Host       = 'smtp.gmail.com';
        $mail->SMTPAuth   = true;
        $mail->Username   = $senderMail; // Replace with your email
        $mail->Password   = $senderPassword; // Use an App Password, not your actual password
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port       = 587;

        // Email Headers
        $mail->setFrom($senderMail, 'Contact Form Submission');
        $mail->addAddress($email, $name); // Replace with recipient email
        $mail->addReplyTo($email, $name);

        // Email Content
        $mail->isHTML(true);
        $mail->Subject = 'Contact Form Submission';
        $mail->Body = '
            <html>
            <head>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        background-color: #f4f4f4;
                        padding: 20px;
                    }
                    .email-container {
                        max-width: 600px;
                        margin: 0 auto;
                        background: #ffffff;
                        padding: 20px;
                        border-radius: 8px;
                        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
                    }
                    .header {
                        background: #007bff;
                        color: #ffffff;
                        text-align: center;
                        padding: 15px;
                        border-radius: 8px 8px 0 0;
                        font-size: 20px;
                        font-weight: bold;
                    }
                    .content {
                        padding: 20px;
                        color: #333333;
                    }
                    .content p {
                        margin: 10px 0;
                        font-size: 16px;
                    }
                    .content strong {
                        color: #007bff;
                    }
                    .footer {
                        text-align: center;
                        padding: 10px;
                        font-size: 14px;
                        color: #777777;
                        border-top: 1px solid #dddddd;
                    }
                    .footer a {
                        color: #007bff;
                        text-decoration: none;
                    }
                </style>
            </head>
            <body>
                <div class="email-container">
                    <div class="header">
                        Contact Form Submission
                    </div>
                    <div class="content">
                        <p><strong>Name:</strong> ' . $name . '</p>
                        <p><strong>Email:</strong> ' . $email . '</p>
                        <p><strong>Phone:</strong> ' . $phone . '</p>
                        <p><strong>Query:</strong> ' . $query . '</p>
                        <p><strong>Message:</strong> ' . nl2br($message) . '</p>
                    </div>
                    <div class="footer">
                        <p>Thank you for reaching out! We will get back to you soon.</p>
                        <p><a href="https://yourwebsite.com">Visit Our Website</a></p>
                    </div>
                </div>
            </body>
            </html>
        ';
        $mail->AltBody = "Contact Form Details:\n
            Name: {$name}\n
            Email: {$email}\n
            Phone: {$phone}\n
            Query: {$query}\n
            Message: {$message}";

        // Send Email
        return $mail->send();
    } catch (Exception $e) {
        error_log("Mailer Error: " . $mail->ErrorInfo);
        return false;
    }
}
