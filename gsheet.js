const scriptURL =
  "https://script.google.com/macros/s/AKfycbzQ5fIu0Z8BualyglVHdbpUykRKTVKgu-JzUdbm-R0_SlaTpqK7wjRjwCRrFdnC85S-1A/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");
const emailError = document.getElementById("emailError");
const nameError = document.getElementById("nameError");
const msgError = document.getElementById("msgError");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  // for email validation
  const inputEmail = document.getElementById("inputEmail").value.trim();
  const inputName = document.getElementById("inputName").value.trim();
  const inputMessage = document.getElementById("inputMessage").value.trim();

  nameError.textContent = "";
  nameError.style.opacity = "0";
  if (inputName === "") {
    setTimeout(() => {
      nameError.textContent = "Name is required.";
      nameError.style.opacity = "1";
    }, 100);
    return;
  }

  emailError.textContent = "";
  emailError.style.opacity = "0";
  if (inputEmail === "") {
    setTimeout(() => {
      emailError.textContent = "Email is required.";
      emailError.style.opacity = "1";
    }, 100);
    return;
  }
  if (
    !(
      inputEmail.endsWith("@gmail.com") ||
      inputEmail.endsWith("@yahoo.com") ||
      inputEmail.endsWith("@outlook.com")
    )
  ) {
    setTimeout(() => {
      emailError.textContent = "Please enter a valid Gmail address.";
      emailError.style.opacity = "1";
    }, 100);
    return;
  }
  msgError.textContent = "";
  msgError.style.opacity = "0";
  const wordCount = inputMessage
    .split(/\s+/)
    .filter((word) => word.length > 0).length;
  if (wordCount < 5) {
    setTimeout(() => {
      msgError.textContent = "Please enter atlest 5 words in your Message.";
      msgError.style.opacity = "1";
    }, 100);
    return;
  }

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
          setTimeout(() => {
            msg.style.opacity = "0";
          }, 10000);
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
