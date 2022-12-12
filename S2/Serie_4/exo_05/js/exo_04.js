let min=1; 
let max=5;
let random = Math.random() * (max.toFixed(0) - min.toFixed(0)) + min; 
let essai;
let i = 0;
let j = 2;
random = random.toFixed(0);

console.log(random);
do{
    essai = prompt('Choisissez un nombre entre 1 et 10');
    console.log('Encore ' + j +' tentatives !')
    j--;
    if(essai<random){
        console.log('Trop petit !');
    }else if(essai>random){
        console.log('Trop grand !');
    }
    else{
        console.log('bien joué !');
        break;
    }
    i++;
}
while(i<3);
if(i==3){
    console.log('Perdu !');
}
