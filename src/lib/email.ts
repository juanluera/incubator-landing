// Zoho Mail API configuration
const ZOHO_API_BASE = 'https://mail.zoho.com/api';
const ZOHO_AUTH_BASE = 'https://accounts.zoho.com/oauth/v2';

// Function to refresh access token
async function refreshZohoToken() {
  try {
    const response = await fetch(`${ZOHO_AUTH_BASE}/token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        refresh_token: process.env.ZOHO_REFRESH_TOKEN!,
        client_id: process.env.ZOHO_CLIENT_ID!,
        client_secret: process.env.ZOHO_CLIENT_SECRET!,
        grant_type: 'refresh_token',
      }),
    });

    if (!response.ok) {
      throw new Error(`Token refresh failed: ${response.status}`);
    }

    const data = await response.json();
    return data.access_token;
  } catch (error) {
    console.error('Token refresh error:', error);
    throw error;
  }
}

// Function to send email via Zoho API with auto token refresh
async function sendZohoEmail(to: string, subject: string, htmlContent: string, textContent: string) {
  let accessToken = process.env.ZOHO_ACCESS_TOKEN;

  try {
    const apiUrl = `${ZOHO_API_BASE}/accounts/${process.env.ZOHO_ACCOUNT_ID}/messages`;
    
    const requestBody = {
      fromAddress: process.env.ZOHO_FROM_EMAIL,
      toAddress: to,
      subject: subject,
      content: htmlContent,
    };
    
    // Try with current token first
    let response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Zoho-oauthtoken ${accessToken}`,
      },
      body: JSON.stringify(requestBody),
    });

    // If token expired (401), refresh and retry
    if (response.status === 401) {
      console.log('Access token expired, refreshing...');
      accessToken = await refreshZohoToken();
      
      // Retry with new token
      response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Zoho-oauthtoken ${accessToken}`,
        },
        body: JSON.stringify({
          fromAddress: process.env.ZOHO_FROM_EMAIL,
          toAddress: to,
          subject: subject,
          content: htmlContent,
        }),
      });
    }

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Zoho API error: ${response.status} ${response.statusText} - ${errorText}`);
    }

    const result = await response.json();
    return { success: true, messageId: result.data?.messageId };
  } catch (error) {
    console.error('Zoho API error:', error);
    throw error;
  }
}

// Email templates
export const EMAIL_TEMPLATES = {
  WAITLIST_CONFIRMATION: {
    subject: 'Thank you for your interest in Tensor!',
    getHtml: (name: string) => `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="text-align: center; margin-bottom: 30px;">
          <h1 style="color: #2563eb; margin: 0;">Tensor</h1>
          <p style="color: #6b7280; margin: 5px 0;">The most exclusive Venture Studio in LATAM</p>
        </div>
        
        <h2 style="color: #1f2937;">Thank you for your interest!</h2>
        
        <p>Hi ${name},</p>
        
        <p>Thank you for expressing your interest in Tensor. We've successfully received your information and are excited to have you in our community.</p>
        
        <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #1f2937; margin-top: 0;">What to expect:</h3>
          <ul style="color: #4b5563; line-height: 1.6;">
            <li>You'll be the first to know about upcoming Tensor events and workshops</li>
            <li>Receive exclusive updates about our programs and opportunities</li>
            <li>Get early access to applications when our programs launch</li>
            <li>Join our community of ambitious founders and innovators in LATAM</li>
          </ul>
        </div>
        
        <p>We're building something special and we're thrilled to have forward-thinking individuals like you be part of this journey from the beginning.</p>
        
        <p>Stay tuned for exciting updates!</p>
        
        <p>Best regards,<br>
        <strong>The Tensor Team</strong></p>
        
        <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;">
        <p style="color: #6b7280; font-size: 14px; text-align: center;">
          This is an automated confirmation email. Please do not reply to this message.
        </p>
      </div>
    `,
    getText: (name: string) => `
      Hi ${name},

      Thank you for expressing your interest in Tensor. We've successfully received your information and are excited to have you in our community.

      What to expect:
      - You'll be the first to know about upcoming Tensor events and workshops
      - Receive exclusive updates about our programs and opportunities
      - Get early access to applications when our programs launch
      - Join our community of ambitious founders and innovators in LATAM

      We're building something special and we're thrilled to have forward-thinking individuals like you be part of this journey from the beginning.

      Stay tuned for exciting updates!

      Best regards,
      The Tensor Team

      ---
      This is an automated confirmation email. Please do not reply to this message.
    `
  },

  NETWORK_CONFIRMATION: {
    subject: 'Welcome to the Tensor Mentorship Network!',
    getHtml: (name: string) => `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="text-align: center; margin-bottom: 30px;">
          <h1 style="color: #2563eb; margin: 0;">Tensor</h1>
          <p style="color: #6b7280; margin: 5px 0;">The most exclusive Venture Studio in LATAM</p>
        </div>
        
        <h2 style="color: #1f2937;">Welcome to our Mentorship Network!</h2>
        
        <p>Hi ${name},</p>
        
        <p>Thank you for you interest in joining our mentorship network! We're thrilled to have experienced professionals like you as part of our community.</p>
        
        <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #1f2937; margin-top: 0;">What to expect:</h3>
          <ul style="color: #4b5563; line-height: 1.6;">
            <li>You'll be the first to know about mentorship opportunities with promising founders</li>
            <li>Receive invitations to exclusive network events and workshops</li>
            <li>Get early access to our programs and startup showcases</li>
          </ul>
        </div>
        
        <p>We're building a powerful network of mentors and advisors to support the next generation of foundersin LATAM, and we're excited to have you be part of this journey.</p>
        
        <p>Stay tuned for exciting opportunities to make an impact!</p>
        
        <p>Best regards,<br>
        <strong>The Tensor Team</strong></p>
        
        <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;">
        <p style="color: #6b7280; font-size: 14px; text-align: center;">
          This is an automated confirmation email. Please do not reply to this message.
        </p>
      </div>
    `,
    getText: (name: string) => `
      Hi ${name},

      Thank you for joining our mentorship network! We're thrilled to have experienced professionals like you as part of our community.

      What to expect:
      - You'll be the first to know about mentorship opportunities with promising founders
      - Receive invitations to exclusive network events and workshops
      - Connect with other industry leaders and experienced professionals
      - Get early access to our programs and startup showcases

      We're building a powerful network of mentors and advisors to support the next generation of entrepreneurs in LATAM, and we're excited to have you be part of this journey.

      Stay tuned for exciting opportunities to make an impact!

      Best regards,
      The Tensor Team

      ---
      This is an automated confirmation email. Please do not reply to this message.
    `
  }
};

// Send email function using Zoho API
export async function sendConfirmationEmail(
  to: string,
  name: string,
  type: 'waitlist' | 'network'
) {
  try {
    const template = type === 'waitlist' 
      ? EMAIL_TEMPLATES.WAITLIST_CONFIRMATION 
      : EMAIL_TEMPLATES.NETWORK_CONFIRMATION;

    const result = await sendZohoEmail(
      to,
      template.subject,
      template.getHtml(name),
      template.getText(name)
    );

    console.log('✅ Email sent successfully via Zoho API:', result.messageId);
    return result;
  } catch (error) {
    console.error('❌ Failed to send email via Zoho API:', error);
    return { success: false, error: error };
  }
}
