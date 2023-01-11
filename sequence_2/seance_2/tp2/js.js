let boutonTheme = document.querySelector('#theme');

boutonTheme.addEventListener('click',fonctionChangerTheme);

document.cookie = "firstName=Christopher ; max-age=" + 30*24*60*60 ;
document.cookie = "prenom=Christophe ; expires=Thu, 31 Dec 2099 23:59:59 GMT " ;
document.cookie = "savoureux_cookie_test=menthe;path=/aufilducode/test;secure";
document.cookie = "savoureux_cookie_securized=menthe;secure";
