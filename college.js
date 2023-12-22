document.addEventListener("DOMContentLoaded", function () {
  // Ensure the DOM is fully loaded before trying to manipulate elements

  var navLinks = document.getElementById("navLinks");
  var menuIcon = document.getElementById("menuIcon");
  var closeIcon = document.getElementById("closeIcon");

  if (navLinks && menuIcon && closeIcon) {
    // Check if the elements exist before proceeding

    menuIcon.addEventListener("click", showMenu);
    closeIcon.addEventListener("click", hideMenu);
  }

  function showMenu() {
    navLinks.style.right = "0";
    menuIcon.classList.add("hidden");
    closeIcon.classList.remove("hidden");
  }

  function hideMenu() {
    navLinks.style.right = "-200px";
    menuIcon.classList.remove("hidden");
    closeIcon.classList.add("hidden");
  }
});
