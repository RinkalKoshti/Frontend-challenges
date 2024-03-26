const btn = document.getElementById("submit");
let inp = document.querySelector("input");
const modal = document.getElementById("staticBackdrop");

btn.addEventListener("click", () => {
    if(inp.value !== "") {
        modal.style.display = "block";
    } else {
        inp.classList.toggle("error");
    }
});

const close = document.getElementById("close");
close.addEventListener("click", () => {
    modal.style.display = "none";
});

let forms = document.forms["my-form"];
// let email = document.getElementById("email").value;
forms.addEventListener("submit", getValues);

function getValues(event) {
    event.preventDefault();

    let email = this.email.value;
    console.log(email);
}

if (window.innerWidth <= 786) {
    modal.style.background = "hsl(0, 0%, 100%)";
    document.getElementById("modal-box").classList.add("active");
} 