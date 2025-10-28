// Test login API directly
async function testLogin() {
  try {
    console.log('Testing login API...');
    
    const response = await fetch('http://localhost:3000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: 'fahadfahad@gmail.com',
        password: 'fahadfahad'
      })
    });

    console.log('Login response status:', response.status);
    console.log('Login response headers:', Object.fromEntries(response.headers.entries()));
    
    const data = await response.json();
    console.log('Login response data:', data);

    if (response.ok) {
      // Extract cookies from response
      const setCookieHeader = response.headers.get('set-cookie');
      console.log('Set-Cookie header:', setCookieHeader);
      
      // Test /api/auth/me with the cookie
      if (setCookieHeader) {
        console.log('\nTesting /api/auth/me with cookie...');
        const meResponse = await fetch('http://localhost:3000/api/auth/me', {
          headers: {
            'Cookie': setCookieHeader
          }
        });
        
        console.log('Me response status:', meResponse.status);
        const meData = await meResponse.json();
        console.log('Me response data:', meData);
      }
    }

  } catch (error) {
    console.error('Error testing login:', error);
  }
}

testLogin();