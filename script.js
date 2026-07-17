document.getElementById("year").textContent = new Date().getFullYear();

document.querySelectorAll(".abstract-toggle").forEach(function (btn) {
  btn.addEventListener("click", function () {
    var abstract = btn.nextElementSibling;
    var isOpen = abstract.classList.toggle("open");
    btn.setAttribute("aria-expanded", isOpen ? "true" : "false");
    btn.textContent = isOpen ? "Abstract −" : "Abstract +";
  });
});
