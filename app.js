const body = document.body;
const btn =document.querySelector("button");


const intervalId = setInterval(()=>{
    const red = Math.floor(Math.random() * 256)
    const green = Math.floor(Math.random() * 256)
    const blue = Math.floor(Math.random() * 256)
    const rgb = `rgb(${red},${green},${blue})`
    body.style.backgroundColor = rgb;
},1000)



const interval = btn.addEventListener("click",()=>{
    clearInterval(intervalId);
    btn.textContent = body.style.backgroundColor;
    btn.style.color = body.style.backgroundColor;
    btn.style.borderRadius = "15px"
})


