document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".contact-form form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      subject: document.getElementById("subject").value,
      message: document.getElementById("message").value,
    };

    console.log("Form Data Submitted:", formData);

    // Show success message with animation
    const successMessage = document.createElement("div");
    successMessage.className = "success-message";
    successMessage.textContent = "Thank you! Your message has been sent.";
    document.querySelector(".contact-form").appendChild(successMessage);

    setTimeout(() => successMessage.remove(), 3000);
    form.reset();
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const contactSection = document.querySelector(".contact-section");

  function revealSection() {
    if (contactSection.getBoundingClientRect().top < window.innerHeight - 100) {
      contactSection.classList.add("show");
      window.removeEventListener("scroll", revealSection);
    }
  }

  window.addEventListener("scroll", revealSection);
  revealSection(); // Trigger animation if already in view
});
