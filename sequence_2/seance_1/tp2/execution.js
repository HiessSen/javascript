let mainImg = document.querySelector('#id_image');
let caroussel = document.querySelector('#caroussel');
let boutonsChoix = document.querySelectorAll('.boutonsChoix');
let imagesChoix = document.querySelectorAll('.imagesChoix');
let idQuoi = document.querySelector('#id_quoi');

boutonsChoix.forEach(boutonChoix => {
    boutonChoix.addEventListener('click',fonctionBoutonClic);  
});
imagesChoix.forEach(imageChoix => {
    imageChoix.addEventListener('mouseover',fonctionImageHover);
});

