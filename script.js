const sections = document.querySelectorAll(".section, .project-card");

function reveal() {
  const triggerBottom = window.innerHeight * 0.85;
  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;
    if(top < triggerBottom) section.classList.add("show");
  });
}

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);

