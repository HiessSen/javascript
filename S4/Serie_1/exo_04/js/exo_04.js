function fonctiontab(texte){
    let reponse;
    let i;

    reponse = "oui";
    for(i=0 ; i<texte.length ; i++){
        if(texte[i] > texte[i+1]){
            reponse = "non";
        }
        // console.log(texte[i]);
        // console.log(texte[i+1]);
    }
    return reponse;
}

tableau1 = [0,1,2,3,4,5,6,7,8,9];
console.log(fonctiontab(tableau1));
console.log('   ....    ');
tableau2 = [0,1,2,3,4,4,3,2,1,0];
console.log(fonctiontab(tableau2));
console.log('   ....    ');
tableau3 = [55,88,5565,98789,98799,786546,786549,9999965,999999955,99999999999988];
console.log(fonctiontab(tableau3));
console.log('   ....    ');
tableau4 = [88,55,5565,98789,546,546,98789,5565,55,88];
console.log(fonctiontab(tableau4));