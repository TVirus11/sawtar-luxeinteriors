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
