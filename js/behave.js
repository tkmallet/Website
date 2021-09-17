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
  document.getElementById("navbarA").style.display = "block";
  document.getElementById("mainBody").style.marginTop = "0px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}
function closeNav() {
  document.getElementById("navbarID").style.height = "50px";
  document.getElementById("navbarA").style.display = "none";
  document.getElementById("mainBody").style.marginTop = "0";
}