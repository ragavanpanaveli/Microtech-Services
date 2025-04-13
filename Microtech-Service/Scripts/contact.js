// Contact Form Submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Get form values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const service = document.getElementById('service').value;
  
  // Simple validation
  if(name && email && service) {
    alert(`Thank you ${name}! We've received your enquiry about ${service}. We'll contact you soon at ${email}.`);
    this.reset();
  } else {
    alert('Please fill all required fields');
 