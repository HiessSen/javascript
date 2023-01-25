jQuery().ready(function(){
    /* notre code ici*/ 
    console.log('Jquery est bien chargé et la page prête!');
    $('#chargement').hide();
    $('#contenu').show();
});

  $('#customRange').change(function (e) { 
    e.preventDefault();
    console.log('change customRange');
    console.log($('#range')[0].value);
    portFolio.perPicture=$('#range')[0].value;
    updatePorFolio(portFolio);
  });


/**
 * TESTS
 */
var portFolio = new PortFolio();
chargerImages();
