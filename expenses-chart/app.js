
fetch("data.json")
.then(res=>res.json())
.then(data=>{
    data.forEach(element => {
        console.log(element);
    });
});