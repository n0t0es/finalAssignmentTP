function setCookie(name, cvalue, expirDays) {
    var day = new Date();
    day.setTime(day.getTime() + (expirDays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + day.toUTCString();
    document.cookie = name + "=" + cvalue + ";" + expires + ";path=/";
}
function getCookie(name) {
    var cookieName = name + "=";
    var cookies = document.cookie.split(';');

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        while (cookie.charAt(0) == ' ') {

            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(cookieName) == 0) {

            return cookie.substring(cookieName.length, cookie.length);

        }

    }
    return "";
}

var firstName = getCookie("firstName");
if (firstName != "") {

    document.getElementById("welcomeBack").innerHTML = "Welcome back, " + firstName + "! <br><a href = '#' id = 'new-user'>Not  " + firstName +
        "? Click here to start as a new user.</a>";

    document.getElementById("new-user").addEventListener("click", function () {
        setCookie("firstName", "", -1)
        location.reload();

    });
} else {
    document.getElementById("welcomeBack").innerHMTL = "Welcome, new user!";
    var nameInput = prompt("First time? Please enter your first name:");

    if (nameInput != "" && nameInput != null) {
        setCookie("firstName", nameInput, 30);
    }
}

var firstNameInput = document.getElementById("firstName");
if (firstName != "") {
    firstNameInput.value = firstName;
}
firstNameInput.addEventListener("input", function () {
    setCookie("firstName", firstNameInput.value, 30);
});