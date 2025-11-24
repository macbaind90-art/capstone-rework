// script.js
// Smooth scrolling for in-page navigation
document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll('a[href^="#"]');

  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href");
      if (!targetId || targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (!targetElement) return;

      event.preventDefault();
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      // Close mobile nav after click
      const navList = document.querySelector(".nav-links");
      if (navList && navList.classList.contains("is-open")) {
        navList.classList.remove("is-open");
      }
    });
  });

  // Mobile nav toggle
  const navToggle = document.querySelector(".nav-toggle");
  const navList = document.querySelector(".nav-links");

  if (navToggle && navList) {
    navToggle.addEventListener("click", () => {
      navList.classList.toggle("is-open");
    });
  }

  // "More about my journey" toggle
  const toggleJourneyBtn = document.getElementById("toggle-journey");
  const journeyPanel = document.getElementById("journey-panel");

  if (toggleJourneyBtn && journeyPanel) {
    toggleJourneyBtn.addEventListener("click", () => {
      const isOpen = journeyPanel.classList.toggle("is-open");
      journeyPanel.setAttribute("aria-hidden", String(!isOpen));
      toggleJourneyBtn.textContent = isOpen
        ? "Hide journey details"
        : "More about my journey";
    });
  }

  // Dynamic year in footer
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear().toString();
  }
});
