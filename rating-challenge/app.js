
const btn =document.querySelectorAll(".rating-btn");


btn.forEach((btns)=>{
    btns.addEventListener("click",()=>{
        console.log(btns.textContent);
    })
});