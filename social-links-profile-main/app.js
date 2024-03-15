// let div1 = document.createElement("div");
// div1.style.width = "100px";
// div1.style.height = "100px";
// div1.style.border = "1px solid black";
// document.body.appendChild(div1);

// let div2 = document.createElement("div");
// div2.style.width = "100px";
// div2.style.height = "100px";
// div2.style.border = "1px solid black";
// div2.style.marginTop = "10px";
// document.body.appendChild(div2);

let main = document.getElementsByClassName("main");
let con = document.getElementsByClassName("container");
let btn = document.getElementsByClassName("btn").length-1;

function getRandomColor() {
    let r = Math.floor(Math.random() * 100);
    let g = Math.floor(Math.random() * 100);
    let b = Math.floor(Math.random() * 100);
    let color = `rgb(${r}, ${g}, ${b})`;
    main[0].style.background = color;
    
}

function getLightColor() {
    let r = Math.floor(Math.random() * 56) + 200;
    let g = Math.floor(Math.random() * 56) + 200;
    let b = Math.floor(Math.random() * 56) + 200;
    let opacity = 0.5;
    let lightColor = `rgba(${r}, ${g}, ${b}, ${opacity})`;
    con[0].style.background = lightColor;
}

getRandomColor();
getLightColor();