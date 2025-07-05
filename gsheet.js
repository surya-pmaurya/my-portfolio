const scriptURL =
  "https://script.google.com/macros/s/AKfycbzQ5fIu0Z8BualyglVHdbpUykRKTVKgu-JzUdbm-R0_SlaTpqK7wjRjwCRrFdnC85S-1A/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then(() => {
      msg.innerHTML = "Your Response Submited Successfully";
      setTimeout(function () {
        msg.innerHTML = "";
      }, 200);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});
