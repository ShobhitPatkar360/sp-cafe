/**
 * AWS Lambda function to handle contact form submissions from Artisan Brews website
 * This would be triggered by the API Gateway endpoint
 * 
 * Instructions:
 * 1. Create a Lambda function in AWS console
 * 2. Paste this code as the function handler
 * 3. Add the required permissions for SES
 * 4. Set up API Gateway to trigger this Lambda function
 */

// AWS SDK for sending emails via SES
const AWS = require('aws-sdk');
const SES = new AWS.SES({ region: 'us-east-1' }); // Change region as needed

exports.handler = async (event) => {
  try {
    // Parse the incoming request body
    const body = JSON.parse(event.body);
    const { name, email, subject, message } = body;
    
    // Validate required fields
    if (!name || !email || !subject || !message) {
      return {
        statusCode: 400,
        headers: {
          'Access-Control-Allow-Origin': '*', // Adjust for production
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message: 'All fields are required' })
      };
    }
    
    // Email parameters for SES
    // Replace recipient email with the actual recipient email
    const params = {
      Source: 'noreply@yourdomain.com', // Change to your verified SES email
      Destination: {
        ToAddresses: ['hello@artisanbrews.com'] // Change to recipient email
      },
      ReplyToAddresses: [email],
      Message: {
        Subject: {
          Data: `Website Contact Form: ${subject}`
        },
        Body: {
          Text: {
            Data: `
              Name: ${name}
              Email: ${email}
              Subject: ${subject}
              
              Message:
              ${message}
            `
          },
          Html: {
            Data: `
              <h2>New Contact Form Submission</h2>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Subject:</strong> ${subject}</p>
              <h3>Message:</h3>
              <p>${message.replace(/\n/g, '<br>')}</p>
            `
          }
        }
      }
    };
    
    // Send the email
    await SES.sendEmail(params).promise();
    
    // Return success response
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*', // Adjust for production
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message: 'Email sent successfully' })
    };
  } catch (error) {
    console.error('Error processing contact form:', error);
    
    // Return error response
    return {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': '*', // Adjust for production
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message: 'Error processing your request' })
    };
  }
};