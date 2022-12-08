let i = 0;
let display = 2;
let messages = document.getElementsByClassName("deux");

for(i=0 ; i<=16 ; i++){
    messages[i].innerHTML=parseInt(display) + ' puissance ' + parseInt(i) + ' est égal à ' + Math.pow(parseInt(display),parseInt(i))
}