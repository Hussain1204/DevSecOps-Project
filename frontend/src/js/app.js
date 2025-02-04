const apiUrl = 'http://your-api-url'; // Set the API URL here
fetch(`${apiUrl}/api/security`)
  .then(response => response.json())
  .then(data => {
    // Handle the response data
  })
  .catch(error => {
    // Handle any errors
  });

