jQuery(document).ready(function(){
    console.log('Jquery est bien chargé et la page prête!');
    $('#chargement').hide();
    $("#chargement").css("display", "none");
    $('#contenu').show();
    $("#contenu").css("display", "block");
});
jQuery(document).keyup(function(touche){
    // on écoute l'évènement keyup()
       var appui = touche.which || touche.keyCode; 
    // le code est compatible tous navigateurs grâce à ces deux propriétés
    console.log(appui);
    if(appui == 107){
        zoomer()
    }else if(appui == 109){
        deZoomer()  
    }
})

jQuery('#zoom').click(function(){
    zoomer();
});
jQuery('#dezoom').click(function(){
    deZoomer();
});
function zoomer() {
    console.log('Log du zoom');
    $('img').each(function () {
        console.log('une image vraiment très très zoomée, quoi.');
        $(this).css('height', '100vh');
        $('#zoom').prop('disabled', true);
        $('#dezoom').prop('disabled', false);
    });
}
function deZoomer() {
    console.log('Log du dezoom');
    $('img').each(function () {
        console.log('une image de taille adaptée au visionage');
        $(this).css('height', '50vh');
        $('#zoom').prop('disabled', false);
        $('#dezoom').prop('disabled', true);
    });
}