// Mobile menu toggle
const burgerIcon = document.getElementById("burger-icon");
burgerIcon.addEventListener("click", function () {
  const x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".topnav a");

  // Update active nav link on scroll
  const sections = document.querySelectorAll("section[id], .hero[id]");
  const navLinksArray = Array.from(navLinks).filter(function (link) {
    return link.getAttribute("href").startsWith("#");
  });

  function updateActiveNav() {
    const scrollPosition = window.scrollY + 100;

    sections.forEach(function (section) {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute("id");

      if (
        scrollPosition >= sectionTop &&
        scrollPosition < sectionTop + sectionHeight
      ) {
        navLinksArray.forEach(function (link) {
          link.classList.remove("active");
          if (link.getAttribute("href") === "#" + sectionId) {
            link.classList.add("active");
          }
        });
      }
    });
  }

  window.addEventListener("scroll", updateActiveNav);
  updateActiveNav();
});
