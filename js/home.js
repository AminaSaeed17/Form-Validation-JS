let userName = document.getElementById("userName");
let logOut = document.getElementById("logOut");
let userNames = [];


if (localStorage.getItem("name") != null) {
    userNames = localStorage.getItem("name");
}
userName.innerHTML = userNames;

logOut.addEventListener("click", function () {
    localStorage.removeItem("name");
});
