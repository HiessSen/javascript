function imageInvisible(images){
    images.foreach(image=>{
        image.srcElement.style.visibility = "hidden";
    })
}