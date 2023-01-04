// var bodyTag = document.body;
// var p1Tag   = bodyTag.childNodes[3];
// var bTag    = p1Tag.lastChild;
// var p2Tag   = bodyTag.childNodes[5];
// var imgTag  = p2Tag.firstChild;

// console.log("p1Tag  : "+ p1Tag.innerHTML);
// console.log("bTag   : "+ bTag.innerHTML);
// console.log("imgTag : "+ imgTag.src);


document.body.style.margin = "0 25%";
let mainImg = document.querySelector('#id_image');
mainImg.style.width = "100%";
let caroussel = document.querySelector('#caroussel');
caroussel.style.display = "flex";

let boutonsChoix = document.querySelectorAll('.boutonsChoix');
let imagesChoix = document.querySelectorAll('imageChoix');
boutonsChoix.forEach(boutonChoix => {
    console.log(boutonChoix);
    
});
