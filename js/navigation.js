const hamburger = document.querySelector(".hamburger");
const hamburger_icon = hamburger.querySelector("span");
const mobile_menu = document.querySelector(".mobile-menu")

hamburger.addEventListener("click", function () {
  this.classList.toggle("is-active");

  mobile_menu.classList.toggle('is-open')
});

// useful website js
const googleFonts = document.getElementById('google-f');
const fontAwesome = document.getElementById('f-awesome');
const codingFantasy = document.getElementById('c-fantasy');


googleFonts.addEventListener('click', function() {
  googleFonts.classList.toggle('expanded');
  fontAwesome.classList.remove('expanded');
  codingFantasy.classList.remove('expanded');
});


fontAwesome.addEventListener('click', function() {
  fontAwesome.classList.toggle('expanded');
  googleFonts.classList.remove('expanded');
  codingFantasy.classList.remove('expanded');
});

codingFantasy.addEventListener('click', function() {
  codingFantasy.classList.toggle('expanded');
  googleFonts.classList.remove('expanded');
  fontAwesome.classList.remove('expanded');
});
