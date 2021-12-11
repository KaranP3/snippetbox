const navLinks = document.querySelectorAll("nav a");

for (const link in navLinks) {
  if (link.getAttribute("href") == window.location.pathname) {
    link.classList.add("live");
    break;
  }
}
