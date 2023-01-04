function fonctionBoutonClic(event){
    // console.log(event);
    // console.log(event.srcElement.value);
    let texteInfoImage = event.srcElement.value;
    mainImg.src = texteInfoImage;
    // console.log(texteInfoImage);
    let mainValue = event.srcElement.id;
    idQuoi.innerText = mainValue;
}
function fonctionImageHover(event){
    let imageHover = document.querySelector('#id_image');
    imageHover.src = event.srcElement.src;
    idQuoi.innerText = event.srcElement.id;
    // // console.log(imageChoix);
}
