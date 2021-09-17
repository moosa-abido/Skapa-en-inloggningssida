let main = document.getElementById("main");                // Jag skapade koppling.
let userName = document.getElementById("userName");
let password = document.getElementById("password");
let logIn = document.getElementById("logIn");
let loginForm = document.getElementById("loginForm");
let msg = document.getElementById("msg");

logIn.addEventListener("click", login_click);     // Det startar programmet när användaren fyller i och trycker på login knapp.

checkPrevLogin();

function checkPrevLogin() {
  let l = localStorage.getItem("logged_in");  // Användaren behåller sin inloggning när webbläsaren stängs.
  if (l == "yes") {
    welcome();
    return;
  }
}
function welcome() {
  localStorage.setItem("logged_in", "yes");    // Användaren loggar in.

  hideLoginForm();
  showMessage("Welcom! You have logged in.");

  showLogOut();
}

function showMessage(text) { // En funktion som passerar ett meddelande till användaren.
  msg.innerHTML = text;
}

function incorrect() {
  hideLoginForm();
  showMessage("Login Faild! The user name or password is incorrect."); // Det visar ett meddelande när användaren skriver felaktigt lösenord eller namn.

  showGoBack();
}
function logout_click() {
  localStorage.setItem("logged_in", "no"); //Logga ut när användaren trycker på utloggningsknappen och går till startsidan.
  hideLogOut();
  showLoginForm();
}
function goBack_click() { 
  hideGoBack();
  showLoginForm();
}

function login_click() {
  if (userName.value == "test" && password.value == "123") { // kolla om användarnamn eller lösenord är korrekt
    welcome(); 
  } else {
    incorrect();
  }
}
function hideLoginForm() { 
  loginForm.remove();
}
function showLoginForm() { 
  main.appendChild(loginForm); //Användarnamn och lösenord sparas inte när användaren loggar ut.
  showMessage("");
  userName.value = "";
  password.value = "";
}
function hideLogOut() {
  let logout = document.getElementById("logout");
  if (logout != null) logout.remove();
}
function showLogOut() {
  let logout = document.createElement("button"); // Här skapade jag log out knapp.
  logout.innerHTML = "Log Out";
  logout.addEventListener("click", logout_click); // koppla till logout_click
  main.appendChild(logout);
  logout.id = "logout";
}
function hideGoBack() {
  let goback = document.getElementById("goback");
  if (goback != null) goback.remove();
}
function showGoBack() {
  let goback = document.createElement("button"); //Jag skapade "Go back" knapp ifall användaren anger felaktig lösenord eller namn
  goback.innerHTML = "Go Back";
  goback.addEventListener("click", goBack_click);
  main.appendChild(goback);
  goback.id = "goback";
}
