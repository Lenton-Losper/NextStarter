// Open the form popup when any "Join the Waitlist" button (anchor) is clicked
document.querySelectorAll('.cta-button').forEach(button => {
    button.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent the default anchor behavior (e.g., navigating)
      document.getElementById('form-popup').style.display = 'flex'; // Show the form popup
    });
  });
  
  // Event listener for form submission
  document.getElementById('waitlist-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission to avoid page reload
  
    // Hide the form popup
    document.getElementById('form-popup').style.display = 'none';
  
    // Show the thank you popup
    document.getElementById('thank-you-popup').style.display = 'flex';
  });
  
  // Close the Thank You popup when the "Close" button is clicked
  document.getElementById("close-thank-you-popup").addEventListener("click", function () {
    // Hide the Thank You popup
    document.getElementById("thank-you-popup").style.display = "none";
    document.getElementById('form-popup').style.display = 'none';
  });
  
  // Ensure that the form and Thank You popup don't interfere
  document.getElementById('thank-you-popup').addEventListener('click', function(event) {
    // Only close if the overlay itself (the outer area) is clicked, not the inner content
    if (event.target === this) {
      this.style.display = 'none';
    }
  });
  