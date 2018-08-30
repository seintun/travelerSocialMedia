// Store AvartarName and Password in Local Storage for later use
function store() {
    var inputName = document.querySelector("#avartarName");
    var inputPassword = document.querySelector("#inputPassword1");
    var loginDatabase = {   users: {avartar: inputName.value,
                                    password: inputPassword.value
                        }
    };
    // Storing identified object data into local storage
    window.localStorage.setItem("database", JSON.stringify(loginDatabase));
    // Assign status as loggedIn
    var statusCheck = "loggedIn";
    window.localStorage.setItem("status", statusCheck);
    // Redirects to user's dashboard upon successful registration
    window.location.href = "./dashboard.html";
};
// Upon Page loads or refresh, validate loggedStatus and personalize greetings (NEW)
function load() {
    // LoggedIn status validation
    var statusCheck = window.localStorage.getItem("status");
    console.log(statusCheck)
    if (statusCheck === null || statusCheck === "loggedOut"){
            console.log("I am redirected to Home Page!")
        document.querySelector('.namePlaceholder').innerHTML = "Yoda!";
        document.querySelector(".notMe").style.display="none";
        document.querySelector(".login").style.display="block";
        document.querySelector(".dashboardNav").style.display="none";
            console.log("Default avartarName, hide dashboardNav & Not avartarName?, and show login NavBar")
    } 
    else {
        var retrievedName = JSON.parse(window.localStorage.getItem("database")).users.avartar;
            console.log(retrievedName + "<<<<< Name is retrieved!")
            console.log("User Information exists!")
        
        // Replace namePlaceholder with avartarName
        document.querySelector('.namePlaceholder').innerHTML = retrievedName;
        // Add Not (avartarLogout)? for SignOut
        document.querySelector(".notMe").style.display="block";
        document.querySelector('.avartarLogout').innerHTML = retrievedName;
        // Remove Login navBar
        document.querySelector(".login").style.display="none";
        document.querySelector(".dashboardNav").style.display="block";
            console.log("Display avartarName, dashboardNav & show Not avartarName? & hide login NavBar")
    }
}
window.onload = load();

//   Valiate Login Inputs with stored Local Storage using querySelector
function checkLocal() {
    var inputLoginName = document.querySelector("#loginAvartar");
    var inputLoginPassword = document.querySelector("#loginPassword");
    var retrievedName = JSON.parse(window.localStorage.getItem("database")).users.avartar;
    var retrievedPassword = JSON.parse(window.localStorage.getItem("database")).users.password;

    if (inputLoginName.value === retrievedName && 
    inputLoginPassword.value === retrievedPassword) {
            window.location.href = "./dashboard.html";
            // Assign status as loggedIn
            var statusCheck = "loggedIn";
            window.localStorage.setItem("status", statusCheck);
        } else {
            alert("Invalid Avartar Name and/or Password. Try Again!");
        }
}

// EventListener upon Clear Data request to remove Local Storage Data
document.querySelector(".clearData").addEventListener("click", function(){
    localStorage.clear();
});

// EventListener upon user clicks Not avartarName to toggle status
document.querySelector(".notMe").addEventListener("click", function(){
    var statusCheck = "loggedOut";
    window.localStorage.setItem("status", statusCheck);
    load();
});