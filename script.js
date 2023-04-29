const singup_container = document.querySelector(".singup-container");
const profile_container = document.querySelector(".profile-container");
const submit = document.getElementById("submit");
const signup_form = document.getElementById("signup-form");
const userName = document.getElementById("userName");
const email = document.getElementById("email");
const pass = document.getElementById("pass");
const cnfPass = document.getElementById("cnfPass");
const error = document.querySelector(".error");
const success = document.querySelector(".success");
const btns = document.querySelector(".btns");
const btnp = document.querySelector(".btnp");
const logOut = document.querySelector(".logout");

let arr = [];
submit.addEventListener("click", (e) => {
  e.preventDefault();
  //if any field is empty
  if (
    userName.value.trim() == "" ||
    email.value.trim() == "" ||
    pass.value.trim() == "" ||
    cnfPass.value.trim() == ""
  ) {
    error.style.display = "block";
    return;
  }
  if (pass.value.trim() !== cnfPass.value.trim()) {
    error.innerHTML += "  -pass unmatch";
    error.style.display = "block";
    return;
  }

  let obj = {
    name: userName.value.trim(),
    email: email.value.trim(),
    pass: pass.value.trim(),
    cnfPass: cnfPass.value.trim(),
  };
  arr.push(obj);
  //   console.log(JSON.stringify(arr));
  localStorage.setItem("myArr", JSON.stringify(arr));
  success.style.display = "block";
  error.style.display = "none";
  restForm();
  location.reload();
});

//clearing the form;
function restForm() {
  signup_form.reset();
}

///checking if local storage exist or not
if (localStorage.getItem("myArr")) {
  var Arrays = JSON.parse(localStorage.getItem("myArr"));
  console.log("yes");
  singup_container.style.display = "none";
  profile_container.style.display = "block";
  document.querySelector(".credential").innerHTML = `
  <p class="pro">Profile</p>
        <p class="fName">Full Name: ${Arrays[0].name}</p>
        <p class="Emails">Email: ${Arrays[0].email}</p>
        <p class="passwords">Password: ${Arrays[0].pass}</p>
  `;
} else {
  singup_container.style.display = "block";
  profile_container.style.display = "none";
}

//
btns.addEventListener("click", () => {
  console.log("singup is clicked");
});
btnp.addEventListener("click", () => {
  console.log("profile is clicked");
});

///////////
//logout
logOut.addEventListener("click", () => {
  localStorage.removeItem("myArr");
  profile_container.style.display = "none";
  singup_container.style.display = "block";
});