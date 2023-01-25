function onProgress(pEvent){
    console.log(`chargement: ${((pEvent.loaded/pEvent.total)*100).toFixed(0)}%`);
}
function onError(){
    console.log('ERREUR RESEAU');
}
function onLoad (){
    console.log(xhr.status);
    console.log(xhr.response);
}
