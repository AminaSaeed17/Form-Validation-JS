let userEmailSignin = document.getElementById("userEmailSignin");
let userPasswordSignin = document.getElementById("userPasswordSignin");
let signin = document.getElementById("signin");
let alertMsg = document.getElementById("alert");
let userArr = [];

if (localStorage.getItem("usersContainer") !== null) {
    userArr = JSON.parse(localStorage.getItem("usersContainer"));
}
console.log(userArr);

signin.addEventListener('click', function (e) {
    e.preventDefault();
    login();
})

function login() {
    let userEnter = {
        userEmailSignin: userEmailSignin.value,
        userPasswordSignin: userPasswordSignin.value,
    }
    if (checkData(userEnter)) {
        alertMsg.classList.add("d-none");
        console.log("done");
        window.location.href = '../home.html'; 
    } else {
        alertMsg.classList.remove("d-none");
        console.log("wrong");
    }
}

function checkData(userEnter) {
    for (let i = 0; i < userArr.length; i++){
        if (
            userArr[i].userEmailSignup.toLowerCase() ===
            userEnter.userEmailSignin.toLowerCase() &&
            userArr[i].userPasswordSignup ===
            userEnter.userPasswordSignin
        ) {
            localStorage.setItem("name", userArr[i].userName)
            return true;
        }
        // else {
        //     return false;
        // }
    }
}

