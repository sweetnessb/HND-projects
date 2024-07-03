document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Form submitted successfully!");
  });

const emailElement = document.querySelector('[data-testid="slackEmail"]');

// Fetch the email from the data-email attribute
const email = emailElement.getAttribute("data-email");

emailElement.textContent = email;
