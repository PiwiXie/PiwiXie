const form = document.getElementById("loginForm");

form.addEventListener("submit", function(e){
  e.preventDefault();

  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  if(username.length < 3){
    alert("Kullanıcı adı en az 3 karakter olmalı");
    return;
  }

  if(password.length < 6){
    alert("Şifre en az 6 karakter olmalı");
    return;
  }

  window.location.href = "dashboard.html";
});

/* ŞİFRE GÖSTER */
const toggle = document.getElementById("togglePassword");
const password = document.getElementById("password");

const eyeOpen = document.getElementById("eyeOpen");
const eyeClosed = document.getElementById("eyeClosed");

toggle.addEventListener("click", () => {
  if(password.type === "password"){
    password.type = "text";
    eyeOpen.style.display = "none";
    eyeClosed.style.display = "block";
  } else {
    password.type = "password";
    eyeOpen.style.display = "block";
    eyeClosed.style.display = "none";
  }
});


/* ŞİFRE UNUTTUM */
document.querySelector(".forgot").addEventListener("click", () => {
  alert("Şifre sıfırlama sayfası açılacak");
});

const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");

const goRegister = document.getElementById("goRegister");
const goLogin = document.getElementById("goLogin");

goRegister.addEventListener("click", () => {
  loginForm.classList.add("hidden");
  registerForm.classList.remove("hidden");
});

goLogin.addEventListener("click", () => {
  registerForm.classList.add("hidden");
  loginForm.classList.remove("hidden");
});

const formTitle = document.getElementById("formTitle");

goRegister.addEventListener("click", () => {
  loginForm.classList.add("hidden");
  registerForm.classList.remove("hidden");
  formTitle.innerText = "Kayıt Ol";
});

goLogin.addEventListener("click", () => {
  registerForm.classList.add("hidden");
  loginForm.classList.remove("hidden");
  formTitle.innerText = "Giriş Yap";
});

const register = document.getElementById("registerForm");

register.addEventListener("submit", function(e){
  e.preventDefault();

  let username = document.getElementById("regUsername").value;
  let email = document.getElementById("regEmail").value;
  let pass1 = document.getElementById("regPassword").value;
  let pass2 = document.getElementById("regPassword2").value;

  if(username.length < 3){
    alert("Kullanıcı adı en az 3 karakter olmalı");
    return;
  }

  if(pass1.length < 6){
    alert("Şifre en az 6 karakter olmalı");
    return;
  }

  if(pass1 !== pass2){
    alert("Şifreler eşleşmiyor");
    return;
  }

  window.location.href = "dashboard.html";
});

localStorage.setItem("user", username);

