let x = parseInt(prompt('Veuillez entrer un nombre X'));    // 3
let n = parseInt(prompt('Veuillez entrer un nombre N'));    // 5
let i;
let j = 1;

for(i=0 ; i<n ; i++){
    j = j * x;
}
console.log(x + ' puissance ' + n + ' = ' + j);
