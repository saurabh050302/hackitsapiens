// const applyNow = document.getElementById("apply-now");

// applyNow.addEventListener(onclick, () => {});

function handleSubmit() {
  var firstName = document.getElementById("first-name").value;
  var lastName = document.getElementById("last-name").value;
  var email = document.getElementById("email").value;
  var city = document.getElementById("city").value;
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirm-password").value;

  var id = localStorage.length;
  if (password === confirmPassword) {
    window.localStorage.setItem(
      `${id + 1}`,
      JSON.stringify([
        firstName,
        lastName,
        email,
        city,
        password,
        confirmPassword,
      ])
    );
    console.log("data saved");
  }
}
