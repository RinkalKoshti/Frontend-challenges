let btn = document.querySelector("button");
let url = "https://api.adviceslip.com/advice";

btn.addEventListener("click", async () => {
    let res = await getAdvice();
    document.querySelector("span").innerText = res.id;
    document.querySelector("h2").innerText = res.advice;
});

async function getAdvice() {
    try {
        let res = await axios.get(url);
        return res.data.slip;
    } catch(e) {
        console.log("error -", e);
    }
}
