// Test Zoho accounts API
import dotenv from 'dotenv';
import fetch from 'node-fetch';

dotenv.config({ path: '.env.local' });

async function testAccounts() {
  const accessToken = process.env.ZOHO_ACCESS_TOKEN;
  
  console.log('🔍 Testing Zoho accounts API...');
  console.log('Access token available:', accessToken ? 'YES' : 'NO');
  
  try {
    const response = await fetch('https://mail.zoho.com/api/accounts', {
      headers: {
        'Authorization': `Zoho-oauthtoken ${accessToken}`,
        'Accept': 'application/json',
      },
    });

    console.log('Response status:', response.status);
    console.log('Response headers:', Object.fromEntries(response.headers));

    const responseText = await response.text();
    console.log('Raw response:', responseText);

    if (response.ok) {
      const data = JSON.parse(responseText);
      console.log('Parsed data:', JSON.stringify(data, null, 2));
      
      if (data.data && data.data.length > 0) {
        data.data.forEach((account, index) => {
          console.log(`\n--- Account ${index + 1} ---`);
          console.log('Account ID:', account.accountId);
          console.log('Email:', account.primaryEmailAddress);
          console.log('Display Name:', account.displayName);
          console.log('Account Name:', account.accountName);
        });
      }
    }
    
  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

testAccounts();
