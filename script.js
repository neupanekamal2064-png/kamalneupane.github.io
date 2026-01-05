document.addEventListener("DOMContentLoaded", () => {

  // Footer year
  document.querySelectorAll("footer span").forEach(span => {
    span.textContent = new Date().getFullYear();
  });

  // Dark mode
  const darkBtn = document.getElementById("darkModeToggle");
  if (darkBtn) {
    darkBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
    });
  }

  // Active navigation
  document.querySelectorAll("nav a").forEach(link => {
    if (link.href === window.location.href) {
      link.classList.add("active");
    }
  });

  // Contact form
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", e => {
      e.preventDefault();
      alert("Thank you! Your message has been sent.");
      form.reset();
    });
  }

});
const text = "IT Student | Web Development Enthusiast | Future Developer";
let i = 0;

function typingEffect() {
  if (i < text.length) {
    document.getElementById("typing").textContent += text.charAt(i);
    i++;
    setTimeout(typingEffect, 70);
  }
}

window.addEventListener("load", typingEffect);
document.querySelectorAll("nav a").forEach(link => {
  if (link.href === window.location.href) {
    link.classList.add("active");
  }
});
document.body.classList.add("page-transition");

