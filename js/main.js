document.addEventListener("DOMContentLoaded", function () {
  const scrollContainer = document.querySelector(".why-choose-container");

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

function changeText() {
  animatedText.style.opacity = "0"; // Fade out
  setTimeout(() => {
    animatedText.textContent = words[wordIndex];
    animatedText.style.opacity = "1"; // Fade in
    wordIndex = (wordIndex + 1) % words.length;
  }, 500);
}

setInterval(changeText, 2000);
