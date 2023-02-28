document.querySelector("#contact button").addEventListener("click",function(){
    var userName=document.querySelector("input.Name").value;
    var firstLetter=userName.slice(0,1).toUpperCase();
    var remainingName=userName.slice(1,userName.length);
    userName=firstLetter+remainingName;
    var contactElm=document.createElement("p");
    contactElm.classList.add("reachout");
    contactElm.innerHTML="Hello "+userName+", I will make sure to contact you 😊😊"
   document.querySelector(".contact-form").appendChild(contactElm);
    
});