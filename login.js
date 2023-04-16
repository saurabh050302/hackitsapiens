function handleLogin() {
  var loginEmail = document.getElementById("email").value;
  var loginPassword = document.getElementById("password").value;

  for (let i = 0; i < localStorage.length; i++) {
    var item = JSON.parse(localStorage.getItem(`${i + 1}`));
    if (item[2] === loginEmail && item[4] === loginPassword) {
      console.log("login successful");
    }
  }
}

//    if(loginEmail===window.localStorage)
// console.log(window.localStorage);
