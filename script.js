
// Scroll Animation (Fade + Slide)
const cards = document.querySelectorAll(".card, .project");

function reveal() {
  const triggerBottom = window.innerHeight * 0.85;

  cards.forEach(card => {
    const boxTop = card.getBoundingClientRect().top;
    if (boxTop < triggerBottom) card.classList.add("show");
  });
}

// Trigger on scroll and on page load
window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);
