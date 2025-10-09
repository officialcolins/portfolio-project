

// Form validation
document.querySelector("form").addEventListener("submit", e => {
  const firstname = document.getElementById("firstName").value;
  const lastname = document.getElementById("lastName").value;
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;


  if (!firstname || !lastname || !phone || !email || !message) {
    e.preventDefault();
    alert("Please fill in all fields.");
    return;
  }
  alert("Form submitted successfully!"); 
  e.target.reset();  // Clear the form after submission
});
  
// Smooth scrolling for navigation links
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    document.querySelector(link.getAttribute("href")).scrollIntoView({ behavior: "smooth" });
  });
});