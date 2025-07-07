//Role Heading Function

const roles = [
  "Back-End Developer",
  "Front-End Developer",
  "Software Developer",
];
const typingElement = document.getElementById("typing-role");
let roleIndex = 0;
let charIndex = 0;

function typeRole() {
  if (charIndex < roles[roleIndex].length) {
    typingElement.innerHTML += roles[roleIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeRole, 100); // Typing speed
  } else {
    setTimeout(eraseRole, 2000); // Wait before erasing
  }
}

function eraseRole() {
  if (charIndex > 0) {
    typingElement.innerHTML = roles[roleIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseRole, 50); // Erase speed
  } else {
    roleIndex = (roleIndex + 1) % roles.length;
    setTimeout(typeRole, 1000); // Delay before typing next role
  }
}
// Delay typing start (e.g., 1.5s after page load)
setTimeout(typeRole, 1500);

// About Section Skill Experience and Education
let tablinks = document.getElementsByClassName("tab-links");
let tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

//action btn for side menu

let sidemen = document.getElementById("sidemenu");

function openmenu() {
  sidemen.style.right = "0";
}
function closemenu() {
  sidemen.style.right = "-200px";
}

//service function for Read more
document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".toggle-btn");

  buttons.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      const card = this.closest(".service-card");
      card.classList.toggle("expanded");

      // Toggle button text
      this.textContent = card.classList.contains("expanded")
        ? "Read Less"
        : "Learn More";
    });
  });
});
