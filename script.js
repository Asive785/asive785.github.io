
// Scroll Animation (Fade + Slide)
const sections = document.querySelectorAll("section");

function reveal() {
  const triggerBottom = window.innerHeight * 0.85;
  
  sections.forEach(sec => {
    const boxTop = sec.getBoundingClientRect().top;
    if (boxTop < triggerBottom) sec.classList.add("show");
  });
}

window.addEventListener("scroll", reveal);
reveal();
