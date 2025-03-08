document.addEventListener("DOMContentLoaded", function () {
  let currentPage = window.location.pathname.split("/").pop().toLowerCase();
  console.log("Current Page Detected:", currentPage);

  let navLinks = document.querySelectorAll(
    ".navbar-nav .nav-link, .navbar-nav .dropdown-item"
  );

  navLinks.forEach((link) => link.classList.remove("active"));

  navLinks.forEach((link) => {
    let linkPage = link.getAttribute("href")?.split("/").pop().toLowerCase();
    console.log("Checking link:", linkPage, "vs Current Page:", currentPage);
    if (linkPage === currentPage) {
      link.classList.add("active");
      console.log("✅ Active link set:", link.textContent);
    }
  });
});


window.addEventListener("scroll", function () {
  let navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const scrollContainer = document.querySelector(".why-choose-container");

  if (!scrollContainer) {
    console.log("No scrolling container found on this page.");
    return; // Stop execution if element does not exist
  }

  function duplicateContent() {
    const cards = Array.from(scrollContainer.children);
    cards.forEach((card) => {
      let clone = card.cloneNode(true);
      scrollContainer.appendChild(clone);
    });
  }

  duplicateContent(); // Duplicate content to create an infinite loop

  function smoothScroll() {
    scrollContainer.scrollLeft += 1; // Adjust speed by changing this value
    if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
      scrollContainer.scrollLeft = 0; // Reset scroll position to create a seamless effect
    }
  }

  setInterval(smoothScroll, 20); // Adjust interval for smoother effect
});

const words = ["Wardrobe", "Kitchen", "Full Home"];
let wordIndex = 0;
const animatedText = document.getElementById("animated-text");

if (animatedText) {
  // ✅ Check if element exists
  function changeText() {
    animatedText.style.opacity = "0"; // Fade out
    setTimeout(() => {
      animatedText.textContent = words[wordIndex];
      animatedText.style.opacity = "1"; // Fade in
      wordIndex = (wordIndex + 1) % words.length;
    }, 500);
  }

  setInterval(changeText, 2000);
} else {
  console.log("Animated text element not found on this page.");
}
