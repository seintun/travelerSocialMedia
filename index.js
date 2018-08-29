// Store AvartarName and Password in Local Storage for later use
function store() {
    var inputName = document.querySelector("#avartarName");
    var inputPassword = document.querySelector("#inputPassword1");

    window.localStorage.setItem("avartarNameLS", inputName.value);
    window.localStorage.setItem("inputPasswordLS", inputPassword.value);
    // Redirects to user's dashboard upon successful registration
    window.location.href = "/articles.html";
    window.onload = load();
}

// Upon Page loads or refresh, personalize greeting with stored name
function load() {
    console.log("Page load detected!");
    var name = window.localStorage.getItem('avartarNameLS');
      if (name !== null) {
        document.querySelector('.namePlaceholder').innerHTML = name;
      } else {
        document.querySelector('.namePlaceholder').innerHTML = "Yoda";
      }
  }
  window.onload = load();

//   Valiate Login Inputs with stored Local Storage using querySelector
function checkLocal() {
    var inputLoginName = document.querySelector("#loginAvartar");
    var inputLoginPassword = document.querySelector("#loginPassword");

    if (inputLoginName.value === window.localStorage.getItem('avartarNameLS') && 
    inputLoginPassword.value === window.localStorage.getItem('inputPasswordLS')) {
            window.location.href = "https://www.google.com";
        } else {
            alert("Invalid Avartar Name and/or Password. Try Again!");
        }
}

// EventListener upon Clear Data request to remove Local Storage Data
document.querySelector(".clearData").addEventListener("click", function(){
    localStorage.clear();
});