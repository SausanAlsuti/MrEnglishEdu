document.addEventListener("DOMContentLoaded", function () {

  if (!localStorage.getItem("visited")) {
    alert("👋 Welcome to MrEnglishEdu! Start exploring your English learning journey.");
    localStorage.setItem("visited", "true");
  }

  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });


  const navLinks = document.querySelectorAll("nav a");
  navLinks.forEach(link => {
    if (link.href === window.location.href) {
      link.classList.add("active");
    }
  });


  const menuToggle = document.getElementById("menu-toggle");
  const nav = document.querySelector("nav");
  if (menuToggle && nav) {
    menuToggle.addEventListener("click", () => {
      nav.classList.toggle("open");
    });
  }
});