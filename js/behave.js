const menuBars = document.querySelector('.menuBars');
let menuOpen = false;
menuBars.addEventListener('click', () => {
  if (!menuOpen) {
    menuBars.classList.add('open');
    menuOpen = true;
  }
  else {
    menuBars.classList.remove('open');
    menuOpen = false;
  }
  navbarExpand();
})

function navbarExpand() {
    var x = document.getElementById("navbar");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
  }