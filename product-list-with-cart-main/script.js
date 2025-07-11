// $(document).ready(function() {
    
// })

function addToCart() {
    let cartBtn = document.getElementById("btn");
    cartBtn.addEventListener("click", () => {
        $(document).ready(function() {
            $(".btn").css("z-index", "1");
            $("img").css("border", "2px solid hsl(14, 86%, 42%)");
        })
    })
}

// function addToCart() {
//     let cartBtn = document.getElementById("btn");
//     cartBtn.addEventListener("click", () => {
//         if(cartBtn.classList.contains("btn")) {
//             cartBtn.classList.remove("btn");
//         } else {
//             cartBtn.classList.add("addBtn");
//             cartBtn.classList.add("#minus-btn");
//             cartBtn.classList.add("#number-btn");
//             cartBtn.classList.add("#plus-btn");
//         }
//     });   
// }