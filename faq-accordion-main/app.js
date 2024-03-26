const open = document.getElementsByClassName("ques");

for(let i = 0; i < open.length; i++) {
    open[i].addEventListener("click", function() {
        this.classList.toggle("active");
        document.getElementsByClassName("plus")[i].classList.toggle("active");
    });
}