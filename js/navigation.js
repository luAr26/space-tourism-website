// NAVIGATION
const navBtn = document.querySelector('.mobile-nav-toggle');

navBtn.addEventListener('click', function() {
  document.body.classList.toggle('jsOpenNav');
  const ariaExpandedAttr = this.getAttribute('aria-expanded');
  if (ariaExpandedAttr === 'false') {
    this.setAttribute('aria-expanded', 'true')
  } else {
    this.setAttribute('aria-expanded', 'false');
  }  
})