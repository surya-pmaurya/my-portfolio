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
