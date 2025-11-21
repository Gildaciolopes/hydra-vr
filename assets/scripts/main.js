document.addEventListener("DOMContentLoaded", function () {
  const btn = document.querySelector(".hamburger");
  if (!btn) return;

  btn.addEventListener("click", function () {
    const isActive = btn.classList.toggle("is-active");
    btn.setAttribute("aria-expanded", isActive ? "true" : "false");
  });
});
