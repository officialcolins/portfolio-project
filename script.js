
// Form validation and submission
const form = document.querySelector(".contact-form");
  const messageBox = document.getElementById("formMessage");

  form.addEventListener("submit", e => {
    e.preventDefault();

    const firstname = document.getElementById("firstName").value.trim();
    const lastname = document.getElementById("lastName").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Check for empty fields
    if (!firstname || !lastname || !phone || !email || !message) {
      messageBox.textContent = "⚠️ Please fill in all fields.";
      messageBox.className = "error";
      return;
    }

    // Success message
    messageBox.textContent = "✅ Form submitted successfully!";
    messageBox.className = "success";

    // Reset form fields
    form.reset();
  });
  
// Smooth scrolling for navigation links
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    document.querySelector(link.getAttribute("href")).scrollIntoView({ behavior: "smooth" });
  });
});
