const menuBars = document.querySelector('.menuBars');
let menuOpen = false;

menuBars.addEventListener('click', () => {
  if (!menuOpen) {
    openNav();
    menuBars.classList.add('open');
    menuOpen = true;
  }
  else {
    closeNav();
    menuBars.classList.remove('open');
    menuOpen = false;
  }
})

function openNav() {
  document.getElementById("navbarID").style.height = "175px";
  document.getElementById("navbarA").style.height = "120px";
  document.getElementById("navbarA").style.opacity = "1";
  document.getElementById("mainBody").style.opacity = "0.2";
  document.getElementById("socialMedia").style.opacity = "0.2";
  document.getElementById("mainBody").style.marginTop = "0px";
}
function closeNav() {
  document.getElementById("navbarID").style.height = "50px";
  document.getElementById("navbarA").style.height = "0px";
  document.getElementById("navbarA").style.opacity = "0";
  document.getElementById("mainBody").style.opacity = "1";
  document.getElementById("socialMedia").style.opacity = "1";
  document.getElementById("mainBody").style.marginTop = "0";
}