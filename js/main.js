'use strict'
async function loadComponent(id, file) {
  try {
    const res = await fetch(file);
    if (!res.ok) throw new Error(`Failed to load ${file}`);
    document.getElementById(id).innerHTML = await res.text();
  } catch (err) {
    console.error(err);
  }
}

// Load shared components
loadComponent("navbar", "components/navbar.html");
loadComponent("footer", "components/footer.html");
