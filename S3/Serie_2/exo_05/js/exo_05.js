let i1 = 0;

while(i1 <= 10){
    if(i1 %2 == 0){
        console.log(i1 + " est un nombre pair");
    }else{
        console.log(i1 + " est un nombre impair");
    }
    i1++;
}


let x2 = parseInt(prompt('Veuillez entrer un nombre X'));    // 3
let n2 = parseInt(prompt('Veuillez entrer un nombre N'));    // 5
let i2 = 0;
let j2 = 1;

while(i2 < n2){
    i2++;
    j2 = j2 * x2;
}
console.log(x2 + ' puissance ' + n2 + ' = ' + j2);


let n3 = parseInt(prompt('Veuillez entrer un nombre N'));    // 3
let i3;
let j3 = 1;

while(i3 <= n3){
    j3 = j3 * i3;
    i3++;
}
console.log(n3 + "! = " + j3);


let x4 = prompt('saisir un nombre X');
let i4 = 0;
let j4;

while(i4 < 10){
    i4++;
    j4 = i4 * x4;
    console.log(x4 + ' fois ' + i4 + ' est égal à ' + j4);
};









