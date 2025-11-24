// script.js

// Show or hide the extra text
var button = document.getElementById("show-more-button");
var moreText = document.getElementById("more-text");

button.addEventListener("click", function () {
  if (moreText.classList.contains("hidden")) {
    moreText.classList.remove("hidden");
    button.textContent = "Hide";
  } else {
    moreText.classList.add("hidden");
    button.textContent = "Show More";
  }
});

// Display the current year
var yearSpan = document.getElementById("year");
var currentYear = new Date().getFullYear();
yearSpan.textContent = currentYear;
