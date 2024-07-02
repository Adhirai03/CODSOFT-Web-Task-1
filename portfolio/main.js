document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
      event.preventDefault();
      
      // Retrieve form values
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
      
      // Basic form validation
      if (name === '' || email === '' || message === '') {
        alert('Please fill out all fields.');
        return;
      }
      
      // Clear form
      document.getElementById('name').value = '';
      document.getElementById('email').value = '';
      document.getElementById('message').value = '';
  
      // Display success message
      alert('Message sent successfully!');
    });
  });
  
  
