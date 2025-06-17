const toggleBtn = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

toggleBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

/**
* update experience dynamically
*/
function updateExperience(startYear, startMonth) {
  const now = new Date();
  const currentYear = now.getFullYear();
  const currentMonth = now.getMonth(); // 0-indexed: Jan = 0

  let years = currentYear - startYear;
  let months = currentMonth - startMonth;

  if (months < 0) {
    years--;
    months += 12;
  }

  let experienceText = `${years}`;
  if (months > 0) {
    experienceText += `+`;
  }

  document.getElementById("experience-years").textContent = experienceText;
}

updateExperience(2017, 10);

/**
 * animat on scroll
 */
document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(".scroll-animate");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // Animate only once
      }
    });
  });

  elements.forEach(el => observer.observe(el));
});


/**
 * footer trigger
 */
document.addEventListener("DOMContentLoaded", function () {
  const emailLink = document.getElementById("email-link");
  const user = "trishnapattanaik1996";
  const domain = "gmail.com";

  emailLink.addEventListener("click", function (e) {
    e.preventDefault();
    const email = `${user}@${domain}`;
    window.location.href = `mailto:${email}`;
  });
});

document.getElementById("github-link").addEventListener("click", function () {
  window.open("https://github.com/trishna06", "_blank");
});

document.getElementById("linkedin-link").addEventListener("click", function () {
  window.open("https://www.linkedin.com/in/trishna-pattanaik-a50970123/", "_blank");
});

document.getElementById("resume-link").addEventListener("click", function () {
  window.open("trishna-resume.pdf", "_blank");
});


document.addEventListener("DOMContentLoaded", function () {
  const target = document.getElementById("side-note");

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Add 5s delay before showing text
        setTimeout(() => {
          target.classList.add("show-text");
        }, 1000);
        observer.unobserve(entry.target); // Run once
      }
    });
  }, { threshold: 0.5 }); // Trigger when 50% in view

  observer.observe(target);
});


/** custom cursor */
const cursor = document.querySelector(".custom-cursor");

let mouseX = 0, mouseY = 0;
let cursorX = 0, cursorY = 0;

const speed = 0.2; // lower = slower

function animateCursor() {
  cursorX += (mouseX - cursorX) * speed;
  cursorY += (mouseY - cursorY) * speed;
  cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
  requestAnimationFrame(animateCursor);
}

window.addEventListener("mousemove", e => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

animateCursor();


document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".experience-card");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); // Stop observing once animated
        }
      });
    },
    {
      root: null,
      threshold: 0.2, // Trigger when 20% visible
    }
  );

  cards.forEach(card => observer.observe(card));
});

