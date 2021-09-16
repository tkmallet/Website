function navbar_responsive() {
    var x = document.getElementById("navbarMobile");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
  }