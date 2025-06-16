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