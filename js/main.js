"use strict";
async function loadComponent(id, file) {
  try {
    const res = await fetch(file);
    if (!res.ok) throw new Error(`Failed to load ${file}`);
    document.getElementById(id).innerHTML = await res.text();

    if (id === "navbar") {
      initNavbar();
    }
  } catch (err) {
    console.error(err);
  }
}


// Loading Navbar and Footer
loadComponent("navbar", "components/navbar.html");
loadComponent("footer", "components/footer.html");




// Hamburger Menu
function initNavbar() {
  const offscreen = document.querySelector(".offscreen");
  const hamburgerIcon = document.querySelector(".hamIcon");
  const crossIcon = document.querySelector(".cross");

  if (!offscreen || !hamburgerIcon || !crossIcon) return;

  hamburgerIcon.addEventListener("click", () => {
    offscreen.classList.toggle("active");
    hamburgerIcon.classList.toggle("none");
    crossIcon.classList.remove("none");
  });

  crossIcon.addEventListener("click", () => {
    offscreen.classList.remove("active");
    crossIcon.classList.toggle("none");
    hamburgerIcon.classList.remove("none");
  });
}
