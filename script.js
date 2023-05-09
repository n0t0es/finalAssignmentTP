{
    date = new Date();
    year = date.getFullYear();
    month = date.getMonth() + 1;
    day = date.getDate();
    document.getElementById("currentDate").innerHTML = month + "/" + day + "/" + year;
}
function firstNameValidation() {
    firstName = document.getElementById("firstName").value;
    let namePattern = /^[A-Za-z'-]+$/;

    if (firstName == '') {
        document.getElementById("firstNameError").innerHTML = "First Name must not be left blank"
        return false;
    } else if (firstName != '') {
        if (!firstName.match(namePattern)) {
            document.getElementById("firstNameError").innerHTML = "Letters, apostrophes, and dashes only!";
            return false;
        } else if (firstName.length < 1) {
            document.getElementById("firstNameError").innerHTML = "First name must contain at least 1 charactrer"
            return false;
        } else if (firstName.length > 30) {
            document.getElementById("firstNameError").innerHTML = "First name must be less than 30!"
            return false;
        }
        else {
            document.getElementById("firstNameError").innerHTML = "";
            return true;
        }
    }
}

function midNameValidation() {
    middleName = document.getElementById("midName").value;
    let namePattern2 = /[A-Z]/;

    if (!middleName.match(namePattern2)) {
        document.getElementById("midNameError").innerHTML = "Capital Letters Only!";
        return false;
    } else if (middleName.length !== 1) {
        document.getElementById("midNameError").innerHTML = "First name must contain only 1 charactrer"
        return false;
    }
    else {
        document.getElementById("midNameError").innerHTML = "";
        return true;
    }
}



function lastNameValidation() {
    firstName = document.getElementById("lastName").value;
    let namePattern3 = /^[A-Za-z'-]+$/;

    if (firstName == '') {
        document.getElementById("lastNameError").innerHTML = "Last Name must not be left blank!";
        return false;
    } else if (firstName != '') {
        if (!firstName.match(namePattern3)) {
            document.getElementById("lastNameError").innerHTML = "Letters, apostrophes, and dashes only!";
            return false;
        } else if (firstName.length < 1) {
            document.getElementById("lastNameError").innerHTML = "Last name must contain at least 1 charactrer!";
            return false;
        } else if (firstName.length > 30) {
            document.getElementById("lastNameError").innerHTML = "Last name must be less than 30!";
            return false;
        }
        else {
            document.getElementById("lastNameError").innerHTML = "";
            return true;
        }
    }
}

function emailValidation() {
    email = document.getElementById('email').value;
    let emailpattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (email == '') {
        document.getElementById("emailError").innerHTML = "Email must be entered!";
        return false;
    } else if (!email.match(emailpattern)) {
        document.getElementById("emailError").innerHTML = "Email address must be valid!";
        return false;
    } else {
        document.getElementById("emailError").innerHTML = "";
        return true
    }
}



function dateValidation() {
    let date = document.getElementById('dob');
    date = new Date(date.value);
    let maxAge = new Date().setFullYear(new Date().getFullYear() - 120)
    let error = document.getElementById("dateError");

    if (date > new Date() || date < new Date(maxAge)) {
        error.innerHTML = "Please do not enter a date that is more than 120 Years ago, or, a date from the future"
        return false;
    } else {
        error.innerHTML = ''
        return true;
    }
}


function getData() {
    let form = document.getElementById("medicalForm");
    let outputTableBody = document.getElementById("outputTableBody");
    let row, dataNameCell, valueCell;

    outputTableBody.innerHTML = "";

    for (let i = 0; i < form.elements.length; i++) {
        if (form.elements[i].value !== "") {
            row = document.createElement("tr");
            dataNameCell = document.createElement("td");
            valueCell = document.createElement("td");

            dataNameCell.textContent = form.elements[i].name;
            valueCell.textContent = form.elements[i].value;

            row.appendChild(dataNameCell);
            row.appendChild(valueCell);
            outputTableBody.appendChild(row);
        }
    }
}

function userValidation() {
    // Get the input element and convert its value to lowercase
    let input = document.getElementById("uName");
    input.value = input.value.toLowerCase();

    let user = input.value;
    let userPattern = /^[^0-9]/;
    let unamePattern = /^\S+[A-Za-z-][A-Za-z0-9-]+$/;
    let alert = document.getElementById('uNameError');

    if (user == '') {
        alert.innerHTML = "Must not be empty.";
        return false;
    } else if (!user.match(userPattern)) {
        alert.innerHTML = "UserID must not start with a number.";
        return false;
    } else if (!user.match(unamePattern)) {
        alert.innerHTML = "UserID must not include spaces or special characters.";
        return false;
    } else if (user.length < 5) {
        alert.innerHTML = "UserID must be at least 5 characters.";
        return false;
    } else if (user.length > 30) {
        alert.innerHTML = "UserID must not exceed 30 characters.";
        return false;
    } else {
        alert.innerHTML = '';
        return true;
    }
}



function phoneValidation() {
    const phoneNumberInput = document.getElementById('phoneNumber');
    let phone = phoneNumberInput.value;

    // Clean the phone number by removing non-digit characters
    const cleaned = ('' + phone).replace(/\D/g, '');

    // Check if the cleaned phone number is valid
    const phonePattern = /^\d{3}\d{3}\d{4}$/;
    if (!phonePattern.test(cleaned)) {
        document.getElementById("phoneError").innerHTML = "Please enter a valid phone number ex: 555-555-5555!";
        return false;
    }

    // Format the phone number as XXX-XXX-XXXX
    const formattedPhone = cleaned.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3");
    phoneNumberInput.value = formattedPhone;

    document.getElementById("phoneError").innerHTML = "";
    return true;
}

function passValidation() {
    pass = document.getElementById('pass').value
    uName = document.getElementById('uName').value
    let passPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[^\s]{8,30}$/
    console.log(pass)

    if (pass == '') {
        document.getElementById("passError").innerHTML = "Password is required!"
        return false;
    } else if (!pass.match(passPattern)) {
        console.log(pass)
        console.log(pass.match(passPattern))
        document.getElementById("passError").innerHTML = "Please include at least 8 characters, no more than 30, at least 1; digit, uppercase letter, lowercase letter, and special character!";
        return false
    } else if (uName == pass) {
        document.getElementById("passError").innerHTML = "It can not be the same as your username!"
        return false
    } else {
        document.getElementById("passError").innerHTML = ""
        return true
    }
}

function pass2Validation() {
    pass = document.getElementById("pass").value
    pass2 = document.getElementById('pass2').value

    if (pass !== pass2) {
        document.getElementById("pass2Error").innerHTML = "Passwords must match!"
        return false;
    } else if (pass2 == "") {
        document.getElementById("pass2Error").innerHTML = "Please re-enter your Password!"
        return false;
    } else {
        document.getElementById("pass2Error").innerHTML = ""
        return true;
    }
}

let slider = document.getElementById("painLevel");
let output = document.getElementById("rangedDisplay");
output.innerHTML = slider.value;

slider.oninput = function () {
    output.innerHTML = this.value;
}


const validations = [
    firstNameValidation,
    lastNameValidation,
    emailValidation,
    dateValidation,
    userValidation,
    phoneValidation,
    passValidation,
    pass2Validation
];
function checkValidations() {
    for (let func of validations) {
        if (!func()) {
            document.getElementById("checkBack").innerHTML = "Please fix your fields and re-submit";
            return false;
        }
    }
    return true;
}
