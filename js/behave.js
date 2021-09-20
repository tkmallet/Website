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
  document.getElementById("navbarID").style.height = "150px";
  document.getElementById("navbarA").style.display = "flex";
  document.getElementById("mainBody").style.marginTop = "0px";
}
function closeNav() {
  document.getElementById("navbarID").style.height = "50px";
  document.getElementById("navbarA").style.display = "none";
  document.getElementById("mainBody").style.marginTop = "0";
}