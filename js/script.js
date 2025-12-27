// Mobile menu toggle
const burgerIcon = document.getElementById("burger-icon");
burgerIcon.addEventListener("click", function (e) {
  e.preventDefault();
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
    const href = link.getAttribute("href");
    return href && href.startsWith("#");
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

  // Back to Top Button
  const backToTopButton = document.getElementById("backToTop");

  function toggleBackToTop() {
    if (window.scrollY > 300) {
      backToTopButton.classList.add("visible");
    } else {
      backToTopButton.classList.remove("visible");
    }
  }

  window.addEventListener("scroll", toggleBackToTop);
  toggleBackToTop();

  // Initialize Map
  if (typeof L !== "undefined" && document.getElementById("map")) {
    const map = L.map("map").setView([44.7643025348378, 20.4987253680443], 16);

    // Add OpenStreetMap tiles
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
    }).addTo(map);

    // Add marker at company location
    L.marker([44.7643025348378, 20.4987253680443])
      .addTo(map)
      .bindPopup(
        "<b>Računovodstvena agencija Kozić</b><br>Braće Jerković 185a<br>11000 Beograd"
      )
      .openPopup();
  }
});
