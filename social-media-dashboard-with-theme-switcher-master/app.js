let toggleSwitch = document.querySelector("#checkbox");
let headerBg = document.querySelector("header");
let card = document.querySelectorAll(".card-light");
let h2 = document.querySelector(".h2-light");

toggleSwitch.addEventListener("click", () => {
    document.body.classList.toggle("dark-body");
});