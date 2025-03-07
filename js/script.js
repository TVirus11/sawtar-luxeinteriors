document.addEventListener("DOMContentLoaded", function () {
  const closeBtn = document.querySelector(".close-btn"); // Select the close button

  if (closeBtn) {
    closeBtn.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent default button behavior

      // Ask for confirmation
      const confirmExit = confirm("Are you sure you want to leave this page?");

      if (confirmExit) {
        window.location.href = "index.html"; // Redirect only if user confirms
      }
    });
  }
});
