const scriptURL =
  "https://script.google.com/macros/s/AKfycbzQ5fIu0Z8BualyglVHdbpUykRKTVKgu-JzUdbm-R0_SlaTpqK7wjRjwCRrFdnC85S-1A/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  msg.style.opacity = "0";
  setTimeout(() => {
    msg.style.color = "#ffc107"; // Yellow
    msg.innerHTML = "⏳Submitting...";
    msg.style.opacity = "1";
  }, 100); //delay for fade-in to take effect

  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then(() => {
      msg.style.opacity = "0";
      setTimeout(function () {
        msg.style.color = "#4BB543";
        msg.innerHTML = "✅ Your Response Submited Successfully";

        setTimeout(() => {
          msg.style.opacity = "1";
        }, 1000);
      }, 500);
      form.reset();
    })
    .catch((error) => {
      msg.style.color = "#ff004f";
      msg.style.opacity = "1";
      console.error("Error!", error.message);

      setTimeout(() => {
        msg.style.opacity = "0";
      }, 2500);
    });
});
