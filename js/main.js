
let userName = document.getElementById("userName");
let userEmailSignup = document.getElementById("userEmailSignup");
let userPasswordSignup = document.getElementById("userPasswordSignup");
let msgExist = document.getElementById("msgExist");
let msgSuccess = document.getElementById("msgSuccess");
let signupBtn = document.getElementById("signupBtn");
let userArr = [];

if (localStorage.getItem("usersContainer") !== null) {
    userArr = JSON.parse(localStorage.getItem("usersContainer"));
}

signupBtn.addEventListener('click', function (e) {
    e.preventDefault();
    if (
        validationOnInputs(userName, "msgName") &&
        validationOnInputs(userEmailSignup, "msgEmail") &&
        validationOnInputs(userPasswordSignup, "msgPassword")
    ) {
        addUser();
    }
});

function addUser() {
    
    let users = {
        userName: userName.value,
        userEmailSignup: userEmailSignup.value,
        userPasswordSignup: userPasswordSignup.value,
    };
    if (checkExist(users)) {
        console.log("Already Exist!!!!!");
        msgExist.classList.remove("d-none");
    } else {
        userArr.push(users);
        console.log(userArr);
        localStorage.setItem("usersContainer", JSON.stringify(userArr));
        clearInputs();
        msgExist.classList.add("d-none");
        msgSuccess.classList.remove("d-none");
        setTimeout(function () {
            window.location.href = "./signin.html";
        }, 3000)
    }
}
function clearInputs() {
    userName.value = '';
    userEmailSignup.value = '';
    userPasswordSignup.value = '';
}


function validationOnInputs(input, alertMSG) {
    let text = input.value;
    let msg = document.getElementById(alertMSG);
    let regex = {
        userName: /^(?!.*[_.]{2})[a-zA-Z0-9](?!.*[_.]{2})[a-zA-Z0-9._]{1,18}[a-zA-Z0-9]$/,
        userEmailSignup: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        userPasswordSignup: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/,
    };

    if (regex[input.id].test(text)) {
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
        msg.classList.add("d-none");
        return true;
    } else {
        input.classList.add("is-invalid");
        msg.classList.remove("d-none");
        return false;
    }
}

userName.addEventListener('change', function () {
    validationOnInputs(userName, "msgName");
})

// function validationName() {
//     let text = userName.value;
//     let regex = /^(?!.*[_.]{2})[a-zA-Z0-9](?!.*[_.]{2})[a-zA-Z0-9._]{1,18}[a-zA-Z0-9]$/;
//     let msg = document.getElementById("msgName");

//     if (regex.test(text)) {
//         userName.classList.add("is-valid");
//         userName.classList.remove("is-invalid");
//         msg.classList.add("d-none");
//         return true;
//     } else {
//         userName.classList.add("is-invalid");
//         msg.classList.remove("d-none");
//         return false;
//     }
// }

userEmailSignup.addEventListener("change", function () {
    validationOnInputs(userEmailSignup, "msgEmail");
});

// function validationEmail() {
//     let text = userEmailSignup.value;
//     let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//     let msg = document.getElementById("msgEmail");

//     if (regex.test(text)) {
//         userEmailSignup.classList.add("is-valid");
//         userEmailSignup.classList.remove("is-invalid");
//         msg.classList.add("d-none");
//         return true;
//     } else {
//         userEmailSignup.classList.add("is-invalid");
//         msg.classList.remove("d-none");
//         return false;
//     }
// }

userPasswordSignup.addEventListener("change", function () {
    validationOnInputs(userPasswordSignup, "msgPassword");
});

// function validationPassword() {
//     let text = userPasswordSignup.value;
//     let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/;
//     let msg = document.getElementById("msgPassword");

//     if (regex.test(text)) {
//         userPasswordSignup.classList.add("is-valid");
//         userPasswordSignup.classList.remove("is-invalid");
//         msg.classList.add("d-none");
//         return true;
//     } else {
//         userPasswordSignup.classList.add("is-invalid");
//         msg.classList.remove("d-none");
//         return false;
//     }
// }


function checkExist(newUser) {
    for (let i = 0; i < userArr.length; i++){
        if (userArr[i].userEmailSignup.toLowerCase() === newUser.userEmailSignup.toLowerCase()) {
            console.log("Email is already exist!!!!!📩");
            msgExist.classList.remove("d-none");
            return true;
        }
    }
}


