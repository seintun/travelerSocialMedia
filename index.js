// Store AvartarName and Password in Local Storage for later use
// document.addEventListener("DOMContentLoaded", function(event) {
//     load()
// }

function store() {
    var inputName = document.querySelector("#avartarName");
    var inputPassword = document.querySelector("#inputPassword1");

    window.localStorage.setItem("avartarNameLS", inputName.value);
    window.localStorage.setItem("inputPasswordLS", inputPassword.value);
    // Redirects to user's dashboard upon successful registration
    window.location.href = "/articles.html";
    window.onload = load();
}

// Upon Page loads or refresh, personalize greetings
function load() {
    console.log("Page load detected!");
    var name = window.localStorage.getItem('avartarNameLS');
      if (name !== null) {
        // Replace namePlaceholder with avartarName
        document.querySelector('.namePlaceholder').innerHTML = name;
        document.querySelector('.avartarLogout').innerHTML = name;
        // Remove loginValidator
        document.querySelector(".login").style.display="none";
        // Add Not avartarName for SignOut
        document.querySelector(".notMe").style.display="block";
      } else {
        document.querySelector('.namePlaceholder').innerHTML = "Yoda";
        document.querySelector(".login").style.display="block";
        document.querySelector(".notMe").style.display="none";
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

document.querySelector(".notMe").addEventListener("click", function(){
    document.querySelector('.namePlaceholder').innerHTML = "Yoda";
    document.querySelector(".login").style.display="block";
    document.querySelector(".notMe").style.display="none";
});