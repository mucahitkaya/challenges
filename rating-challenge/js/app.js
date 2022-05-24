const btn = document.querySelectorAll(".rating-btn");
// const submitBtn = document.getElementById("submit");
const selectedRating = document.querySelector("#rating-value");
var el= document.getElementById('submit');


let rating=0;
btn.forEach((btns)=>{
    btns.addEventListener("click",()=>{
          console.log(btns.textContent);
          rating=btns.textContent;
    })
});

selectedRating.textContent="agaga";


// if(el){
//   el.addEventListener('click', ()=>{
    //   });
    // }
    
    window.addEventListener("submit",()=>{
         document.location.href="http://127.0.0.1:5500/rating-challenge/submittedpage.html";
})














