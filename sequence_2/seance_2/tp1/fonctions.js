function boutonOpen() {
    window.open('index.html','resizable');
    console.log(ouvrir);
}
function boutonResizeBy() {
    window.resizeBy(-100, -100);
    console.log(tailleBy);
}
function boutonResizeTo() {
    window.resizeTo(300, 1200);
    console.log(tailleTo);
}
function boutonClose() {
    window.close('index.html','resizable');
    console.log(fermer);
}
