let i = 0;
let display = 2;
let messages = document.getElementsByClassName("deux");

while(i<=16){
    messages[i].innerHTML=parseInt(display) + ' puissance ' + parseInt(i) + ' est égal à ' + Math.pow(parseInt(display),parseInt(i));
    i++;
}
