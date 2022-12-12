
function fonctiontab(texte){
    let reponse;
    for(i=0 ; i<texte.length ; i++){
        if(texte[i] === texte.length - i){
            reponse = "oui";
        }else{
            reponse = "non"
        }
        console.log(texte[i]);
        console.log(texte.length - texte[i])
    }
        return reponse;
}
// tableau1 = [0,1,2,3,4,5,6,7,8,9];
// console.log(fonctiontab(tableau1));
tableau2 = [0,1,2,3,4,4,3,2,1,0];
console.log(fonctiontab(tableau2));