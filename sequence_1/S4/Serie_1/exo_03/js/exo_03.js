function fonctiontab(texte){
    let reponse;
    let i;

    reponse = "oui";
    for(i=0 ; i<texte.length/2 ; i++){
        if(texte[i] !== texte[texte.length - 1 - i]){
            reponse = "non";
        }
    }
    return reponse;
}

tableau1 = [0,1,2,3,4,6,7,6,8,9];
console.log(fonctiontab(tableau1));
console.log('   ....    ');
tableau2 = [0,1,2,3,4,4,3,2,1,0];
console.log(fonctiontab(tableau2));
console.log('   ....    ');
tableau3 = [88,55,5565,98789,786546,786546,98789,5565,55,88];
console.log(fonctiontab(tableau3));
console.log('   ....    ');
tableau4 = [88,55,5565,98789,546,546,'poils',5565,55,88];
console.log(fonctiontab(tableau4)); 
