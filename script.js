
// Small smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', function(e){
    e.preventDefault();
    const id = this.getAttribute('href');
    document.querySelector(id).scrollIntoView({behavior:'smooth'});
  });
});
