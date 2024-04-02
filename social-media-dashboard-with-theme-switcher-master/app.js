let toggleSwitch = document.querySelector("#checkbox");
let headerBg = document.querySelector("header");
let card = document.querySelectorAll(".card-light");
let h2 = document.querySelector(".h2-light");
// let smallCard = document.querySelectorAll(".small-card")

toggleSwitch.addEventListener("click", () => {
    console.log(card);
    document.body.classList.toggle("dark-body");
    headerBg.classList.toggle("dark-header-top");
    h2.classList.toggle("dark-h2");
    card.forEach((card) => {
        card.classList.toggle("dark-card");
    }); 
});