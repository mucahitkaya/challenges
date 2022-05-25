const btn = document.querySelectorAll(".rating-btn");
const submitBtn = document.getElementById("submit");
const selectedRating = document.querySelector("#rating-value");
const firstPage=document.getElementById("firstpage");
const secondPage= document.getElementById("secondpage")
let x;

btn.forEach((btns)=>{
    btns.addEventListener("click",()=>{
          console.log(btns.textContent);
          deneme(btns.textContent);
    })
});
function deneme(value){
x=value;
 console.log("uff"+x);
 
}
submitBtn.addEventListener("click",()=>{
    if(secondPage.classList.contains("remove")){
        secondPage.classList.remove("remove");
        firstPage.classList.add("remove");
       console.log(deneme());
    }
})


    














