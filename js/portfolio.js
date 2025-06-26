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


const accordionHeaders = document.querySelectorAll(".accordion-header");

accordionHeaders.forEach(header => {
  header.addEventListener("click", () => {
    const item = header.parentElement;
    const content = item.querySelector(".accordion-content");

    // Collapse all
    document.querySelectorAll(".accordion-content").forEach(c => {
      if (c !== content) {
        c.style.maxHeight = null;
        c.classList.remove("open");
        c.parentElement.querySelector(".accordion-header").classList.remove("active");
      }
    });

    // Toggle current
    const isOpen = content.classList.contains("open");
    if (isOpen) {
      content.style.maxHeight = null;
      content.classList.remove("open");
      header.classList.remove("active");
    } else {
      content.style.maxHeight = content.scrollHeight + 20 + "px";
      content.classList.add("open");
      header.classList.add("active");
    }
  });
});

accordionHeaders[0].click();

const cards = document.querySelectorAll(".accordion-item");

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate-in");
      observer.unobserve(entry.target); // Animate only once
    }
  });
}, {
  threshold: 0.1
});

cards.forEach(card => {
  observer.observe(card);
});


document.getElementById("bput-logo").addEventListener("click", function () {
  window.open("https://bput.ac.in/", "_blank");
});

document.getElementById("bits-logo").addEventListener("click", function () {
  window.open("https://www.bits-pilani.ac.in/", "_blank");
});

document.getElementById("arcstone-logo").addEventListener("click", function () {
  window.open("https://www.arcstone.co/", "_blank");
});

document.getElementById("stellar-logo").addEventListener("click", function () {
  window.open("https://stellarshell.com/", "_blank");
});

// Animate hero h1 text letter by letter
function animateHeroTitle() {
  const heroH1 = document.querySelector('.hero .content h1');
  if (!heroH1) return;

  // Get the original HTML and split into lines (to preserve <br> and <span>)
  const lines = Array.from(heroH1.childNodes);
  heroH1.innerHTML = '';

  lines.forEach((node, lineIdx) => {
    if (node.nodeType === Node.TEXT_NODE) {
      // For plain text, split into letters
      const text = node.textContent;
      text.split('').forEach((char, i) => {
        const span = document.createElement('span');
        span.textContent = char;
        span.style.opacity = '0';
        span.style.transition = 'opacity 0.3s';
        span.classList.add('hero-letter');
        heroH1.appendChild(span);
      });
    } else if (node.nodeType === Node.ELEMENT_NODE && node.tagName === 'BR') {
      heroH1.appendChild(document.createElement('br'));
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      // For elements like <span>, wrap each letter in a span and preserve classes
      const text = node.textContent;
      const wrapper = document.createElement(node.tagName);
      // Copy all classes from the original node
      wrapper.className = node.className;
      for (let i = 0; i < text.length; i++) {
        const span = document.createElement('span');
        span.textContent = text[i];
        span.style.opacity = '0';
        span.style.transition = 'opacity 0.3s';
        span.classList.add('hero-letter');
        wrapper.appendChild(span);
      }
      heroH1.appendChild(wrapper);
    }
  });

  // Animate each letter
  // Animate letters in both direct children and nested spans
  const allSpans = heroH1.querySelectorAll('.hero-letter');
  allSpans.forEach((span, i) => {
    setTimeout(() => {
      span.style.opacity = '1';
    }, i * 60);
  });
}

function animateHeroSubtitle() {
  const heroH2 = document.querySelector('.hero .content h2');
  heroH2.style.color = '#cccccc';
  if (!heroH2) return;
  const text = heroH2.textContent;
  heroH2.innerHTML = '';
  text.split('').forEach((char, i) => {
    const span = document.createElement('span');
    span.textContent = char;
    span.style.opacity = '0';
    span.style.transition = 'opacity 0.3s';
    span.classList.add('hero-letter');
    heroH2.appendChild(span);
  });
  const allSpans = heroH2.querySelectorAll('.hero-letter');
  allSpans.forEach((span, i) => {
    setTimeout(() => {
      span.style.opacity = '1';
    }, i * 60);
  });
}

function animateHeroTitleAndSubtitle() {
  animateHeroTitle();
  // Wait for h1 animation to finish, then animate h2
  const heroH1 = document.querySelector('.hero .content h1');
  if (!heroH1) return;
  const h1LetterCount = heroH1.querySelectorAll('.hero-letter').length;
  setTimeout(() => {
    animateHeroSubtitle();
  }, h1LetterCount * 60 + 300); // 300ms buffer after h1
}

function startContinuousAnimation() {
  animateHeroTitleAndSubtitle();
  
  // Calculate total animation duration
  const heroH1 = document.querySelector('.hero .content h1');
  const heroH2 = document.querySelector('.hero .content h2');
  if (!heroH1 || !heroH2) return;
  
  const h1LetterCount = heroH1.querySelectorAll('.hero-letter').length;
  const h2LetterCount = heroH2.querySelectorAll('.hero-letter').length;
  const totalDuration = (h1LetterCount + h2LetterCount) * 60 + 3000; // 1000ms buffer
  
  // Restart animation after completion
  setTimeout(() => {
    // Reset text to original state
    resetHeroText();
    // Start animation again
    startContinuousAnimation();
  }, totalDuration);
}

function resetHeroText() {
  const heroH1 = document.querySelector('.hero .content h1');
  const heroH2 = document.querySelector('.hero .content h2');
  
  if (heroH1) {
    heroH1.innerHTML = `
      Hi!<br />
      I'm <span class="hero-name">Trishna Pattanaik</span>.
    `;
  }
  
  if (heroH2) {
    heroH2.innerHTML = 'Software Development Engineer';
    heroH2.style.color = 'transparent';
  }
}

document.addEventListener('DOMContentLoaded', function () {
  startContinuousAnimation();
});