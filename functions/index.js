// Import the latest Firebase Functions and Admin SDK
const { onDocumentCreated } = require("firebase-functions/v2/firestore");
const { setGlobalOptions } = require("firebase-functions/v2");
const { initializeApp } = require("firebase-admin/app");
const { getFirestore } = require("firebase-admin/firestore");
const { logger } = require("firebase-functions");

// Import SendGrid Mail
const sgMail = require("@sendgrid/mail");

// Initialize Firebase Admin SDK
initializeApp();
const db = getFirestore();

// Set SendGrid API Key from environment variable
const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;

if (!SENDGRID_API_KEY) {
  logger.error("Missing SendGrid API key. Set it as an environment variable.");
  throw new Error("Missing SendGrid API key");
}

sgMail.setApiKey(SENDGRID_API_KEY);

// Cloud Function to send a welcome email when a new user joins the waitlist
exports.sendWelcomeEmail = onDocumentCreated("waitlist/{userId}", async (event) => {
  const snapshot = event.data;
  if (!snapshot) {
    logger.warn("No document found in event");
    return;
  }

  const userData = snapshot.data();
  const email = userData?.email;
  const firstName = userData?.firstName;

  if (!email) {
    logger.warn("No email found in document");
    return;
  }

  // Prepare email content
  const msg = {
    to: email,
    from: "your-email@example.com", // Replace with a verified sender
    subject: "Welcome to Next Starter!",
    text: `Hi ${firstName}, thank you for joining the Next Starter waitlist!`,
    html: `<strong>Hi ${firstName},</strong><br><br>Thank you for joining the Next Starter waitlist! We'll keep you updated.`,
  };

  // Send email using SendGrid
  try {
    await sgMail.send(msg);
    logger.info(`Welcome email sent to ${email}`);
  } catch (error) {
    logger.error("Error sending email:", error);
  }
});
