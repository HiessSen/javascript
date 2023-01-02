let images = document.querySelectorAll('img');
images.forEach(image=>{
    image.addEventListener('click',cacherImg);
})
let boutonCacher = document.querySelector('#btn_cacher');
boutonCacher.addEventListener('click',cacherTout)
let boutonAfficher = document.querySelector('#btn_afficher');
boutonAfficher.addEventListener('click',afficherTout)

let boutonActiver = document.querySelector('#btn_activer');
boutonActiver.addEventListener('click',activerTout)
let boutonDesactiver = document.querySelector('#btn_desactiver');
boutonDesactiver.addEventListener('click',desactiverTout)

// function cacherImg(event){
//     event.srcElement.style.visibility = "hidden";
// }

function cacherImg(event){
    event.srcElement.style.display = "none";
}
function cacherTout(){
    let images =  document.querySelectorAll('.img_1_5')
    images.forEach(image=>{
        image.style.display="none";
    })

}
function afficherTout(){
    let images =  document.querySelectorAll('.img_1_5')
    images.forEach(image=>{
        image.style.display="block";
    })
}
function activerTout(){
    let images =  document.querySelectorAll('img')
    images.forEach(image=>{
        image.addEventListener('click',cacherImg);
    })
}
function desactiverTout(){
    let images =  document.querySelectorAll('img')
    images.forEach(image=>{
        image.removeEventListener('click',cacherImg);
    })
}