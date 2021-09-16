function navbar_responsive() {
    var x = document.getElementById("myNavbar");
    if (x.className === "navbar") {
      x.className += " .responsive";
    } else {
      x.className = "topnav";
    }
  }