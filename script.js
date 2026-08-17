const menu = document.querySelector(".menu");
const nav = document.querySelector(".topbar nav");

if (menu && nav) {
  menu.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    menu.classList.toggle("active", open);
    menu.setAttribute("aria-expanded", String(open));
  });
}

document.querySelectorAll(".dropdown .dropbtn").forEach((btn) => {
  btn.setAttribute("aria-expanded", "false");
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const dropdown = btn.parentElement;
    const open = dropdown.classList.toggle("open");
    btn.setAttribute("aria-expanded", String(open));
  });
});

document.querySelectorAll(".topbar nav a").forEach((link) => {
  link.addEventListener("click", () => {
    nav?.classList.remove("open");
    menu?.classList.remove("active");
    menu?.setAttribute("aria-expanded", "false");
  });
});

document.addEventListener("click", (e) => {
  document.querySelectorAll(".dropdown.open").forEach((dropdown) => {
    if (!dropdown.contains(e.target)) {
      dropdown.classList.remove("open");
      dropdown.querySelector(".dropbtn")?.setAttribute("aria-expanded", "false");
    }
  });
});
