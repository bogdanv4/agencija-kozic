// // Mobile menu toggle
const burgerIcon = document.getElementById("burger-icon");
burgerIcon.addEventListener("click", function () {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
});

// Close mobile menu when a link is clicked
document.addEventListener("DOMContentLoaded", function () {
  var navLinks = document.querySelectorAll(".topnav a");
  var topnav = document.getElementById("myTopnav");

  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      // Close mobile menu if it's open
      if (topnav.classList.contains("responsive")) {
        topnav.classList.remove("responsive");
      }

      // Update active state
      navLinks.forEach(function (navLink) {
        navLink.classList.remove("active");
      });
      this.classList.add("active");
    });
  });

  // Smooth scroll fallback for browsers that don't support CSS scroll-behavior
  if (!CSS.supports("scroll-behavior", "smooth")) {
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
      anchor.addEventListener("click", function (e) {
        var href = this.getAttribute("href");
        if (href !== "#" && href !== "javascript:void(0);") {
          e.preventDefault();
          var target = document.querySelector(href);
          if (target) {
            var offsetTop = target.offsetTop - 70; // Account for sticky navbar
            window.scrollTo({
              top: offsetTop,
              behavior: "smooth",
            });
          }
        }
      });
    });
  }

  // Update active nav link on scroll
  var sections = document.querySelectorAll("section[id], .hero[id]");
  var navLinksArray = Array.from(navLinks).filter(function (link) {
    return link.getAttribute("href").startsWith("#");
  });

  function updateActiveNav() {
    var scrollPosition = window.scrollY + 100;

    sections.forEach(function (section) {
      var sectionTop = section.offsetTop;
      var sectionHeight = section.offsetHeight;
      var sectionId = section.getAttribute("id");

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
  updateActiveNav(); // Call once on load
});
