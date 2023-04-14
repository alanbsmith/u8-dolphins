const navLinks = document.getElementsByClassName('main-nav__link');
Array.from(navLinks).forEach(link => {
  if (link.href === window.location.href) {
    link.classList.add('active');
  } else {
    link.classList.remove('active');
  }
});
