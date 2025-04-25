/**
 * This module contains functions for interacting with AWS API Gateway
 */

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

/**
 * Sends a contact form submission to AWS API Gateway
 * 
 * @param formData Contact form data to submit
 * @returns Promise that resolves to the API response
 */
export const sendContactForm = async (formData: ContactFormData): Promise<any> => {
  try {
    // Replace this URL with your actual AWS API Gateway endpoint
    const apiEndpoint = '__aws_api_gateway_invoke_url/__resource';
    
    const response = await fetch(apiEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || 'Failed to send contact form');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error sending contact form:', error);
    throw error;
  }
};