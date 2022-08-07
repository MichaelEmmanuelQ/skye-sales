let myInput = document.getElementById("myInput").value
let register = document.getElementById("registerNOW").value


register.addEventListener("click", ()=> {
    
       alert("youve clicked me")
       console.log("click me")
    
})


function clickMe () {
   if(myInput.length < 6)  {
    alert("password too short")
   }
}