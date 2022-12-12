// A TRAVAILLER !!!!!!

function fonctiontab(array){
    let somme = 0;
    for(i=0 ; i<array.length ; i++){
        somme = somme + array[i];
    }
    return somme;
}
tableau = [0,1,2,3,4,5,6,7,8,9];
console.log(fonctiontab(tableau));