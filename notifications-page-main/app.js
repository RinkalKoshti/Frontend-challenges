const activeDiv = document.querySelectorAll(".active");
const notifyNo = document.querySelector("header small");
notifyNo.innerText = 3;

activeDiv.forEach((div) => {
    div.addEventListener("click", () => {
        div.classList.remove("active");
        let dot = div.querySelector("div.content > p > span.dot");
        dot.classList.add("active"); 
        let count = notifyNo.innerText;
        if (count == 3 || count == 2) {
            count = count-1;
            notifyNo.innerText = count;
        } else {
            count = 0;
            notifyNo.innerText = count;
        }
    });
});

let allRead = document.querySelector("header p");

allRead.addEventListener("click", () => {
    activeDiv.forEach((div) => {
        div.classList.remove("active");
        let dot = div.querySelector("div.content > p > span.dot");
        dot.classList.add("active"); 
        notifyNo.innerText = 0;
    })
});
