let x = prompt("Veuillez entrer un nombre");
let y = prompt("Veuillez entrer un autre nombre");

let paragraphe = document.getElementById("p1");
   
if(x > y)
    paragraphe.innerHTML="X est plus grand que Y";
else{
    paragraphe.innerHTML="Y est plus grand que X";
    }
