/*------------------- navigation menu js -------------------*/
const hamburger = document.querySelector(".hamburger");
const hamburger_icon = hamburger.querySelector("span");
const mobile_menu = document.querySelector(".mobile-menu")

hamburger.addEventListener("click", function () {
  this.classList.toggle("is-active");

  mobile_menu.classList.toggle('is-open')
});

/*------------------- useful website js -------------------*/
const googleFonts = document.getElementById('google-f');
const fontAwesome = document.getElementById('f-awesome');
const codingFantasy = document.getElementById('c-fantasy');
const codeImage = document.getElementById('c-img');
const rBackground = document.getElementById('r-bg');
const cGpt = document.getElementById('c-gpt');
const roadmapSh = document.getElementById('r-sh');
const tome = document.getElementById('i-finder');
const iconFinder = document.getElementById('tome');

googleFonts.addEventListener('click', function() {
  googleFonts.classList.toggle('expanded');
  fontAwesome.classList.remove('expanded');
  codingFantasy.classList.remove('expanded');
  codeImage.classList.remove('expanded');
  rBackground.classList.remove('expanded');
  cGpt.classList.remove('expanded');
  roadmapSh.classList.remove('expanded');
  tome.classList.remove('expanded');
  iconFinder.classList.remove('expanded');

});


fontAwesome.addEventListener('click', function() {
  fontAwesome.classList.toggle('expanded');
  googleFonts.classList.remove('expanded');
  codingFantasy.classList.remove('expanded');
  codeImage.classList.remove('expanded');
  rBackground.classList.remove('expanded');
  cGpt.classList.remove('expanded');
  roadmapSh.classList.remove('expanded');
  tome.classList.remove('expanded');
  iconFinder.classList.remove('expanded');

});

codingFantasy.addEventListener('click', function() {
  codingFantasy.classList.toggle('expanded');
  googleFonts.classList.remove('expanded');
  fontAwesome.classList.remove('expanded');
  codeImage.classList.remove('expanded');
  rBackground.classList.remove('expanded');
  cGpt.classList.remove('expanded');
  roadmapSh.classList.remove('expanded');
  tome.classList.remove('expanded');
  iconFinder.classList.remove('expanded');

});

codeImage.addEventListener('click', function() {
  codeImage.classList.toggle('expanded');
  googleFonts.classList.remove('expanded');
  fontAwesome.classList.remove('expanded');
  codingFantasy.classList.remove('expanded');
  rBackground.classList.remove('expanded');
  cGpt.classList.remove('expanded');
  roadmapSh.classList.remove('expanded');
  tome.classList.remove('expanded');
  iconFinder.classList.remove('expanded');
});

rBackground.addEventListener('click', function() {
  rBackground.classList.toggle('expanded');
  googleFonts.classList.remove('expanded');
  fontAwesome.classList.remove('expanded');
  codingFantasy.classList.remove('expanded');
  codeImage.classList.remove('expanded');
  cGpt.classList.remove('expanded');
  roadmapSh.classList.remove('expanded');
  tome.classList.remove('expanded');
  iconFinder.classList.remove('expanded');

});

cGpt.addEventListener('click', function() {
  cGpt.classList.toggle('expanded');
  googleFonts.classList.remove('expanded');
  fontAwesome.classList.remove('expanded');
  codingFantasy.classList.remove('expanded');
  codeImage.classList.remove('expanded');
  rBackground.classList.remove('expanded');
  roadmapSh.classList.remove('expanded');
  tome.classList.remove('expanded');
  iconFinder.classList.remove('expanded');

});

roadmapSh.addEventListener('click', function() {
  roadmapSh.classList.toggle('expanded');
  googleFonts.classList.remove('expanded');
  fontAwesome.classList.remove('expanded');
  codingFantasy.classList.remove('expanded');
  codeImage.classList.remove('expanded');
  rBackground.classList.remove('expanded');
  tome.classList.remove('expanded');
  iconFinder.classList.remove('expanded');

});

tome.addEventListener('click', function() {
  tome.classList.toggle('expanded');
  googleFonts.classList.remove('expanded');
  fontAwesome.classList.remove('expanded');
  codingFantasy.classList.remove('expanded');
  codeImage.classList.remove('expanded');
  rBackground.classList.remove('expanded');
  roadmapSh.classList.remove('expanded');
  iconFinder.classList.remove('expanded');

});

iconFinder.addEventListener('click', function() {
  iconFinder.classList.toggle('expanded');
  googleFonts.classList.remove('expanded');
  fontAwesome.classList.remove('expanded');
  codingFantasy.classList.remove('expanded');
  codeImage.classList.remove('expanded');
  rBackground.classList.remove('expanded');
  roadmapSh.classList.remove('expanded');
  tome.classList.remove('expanded');
});
