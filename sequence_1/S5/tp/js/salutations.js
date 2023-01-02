function saluerSansAlertes(event) {
    // bloquer l'événement par défaut, on peut récupérer les informations de l'événement
    // grâce au paramètre event qui est rempli automatiquement par le listener.
    event.preventDefault();
    // génération du message et des emotes
    let message = genererMessageSalutation();

    let emoteRaciale = genererEmoteRaciale();
    let emoteSociale = genererEmoteSociale();
    let classes = listerLesClasses();

document.querySelector('#emotes').innerHTML=`<ul><li>${emoteRaciale}</li><li>${emoteSociale}</li></ul>`;
    document.querySelector('#salutations').innerHTML= message;
    document.querySelector('#classes').innerHTML = classes;
}

function genererEmoteSociale() {
    let rang = document.querySelector('input[name=rank]:checked').value;
    let emote = "";
    switch (rang) {
        case 'royal':
            emote = emoteRoi();
            break;
        case 'noble':
            emote = emoteNoble();
            break;
        default:
            emote = emoteRoture();
            break;
    }
    return emote;
}

function genererEmoteRaciale() {
    let race = document.querySelector('#race').value;
    let emote = "";
    switch (race) {
        case 'elf':
            emote = emoteElfe();
            break;
        case 'ork':
            emote = emoteOrque();
            break;
        default:
            emote = emoteHumain();
            break;
    }
    return emote;
}

function genererMessageSalutation() {
    let prenom = document.querySelector('#prenom').value;
    let nom = document.querySelector('#nom').value;
    // construction du message
    let message = "";
    if (prenom.length == 0 && nom.length == 0)
        message = "Bonjour, illustre inconnu(e)";

    else
        message = `Bonjour ${prenom} ${nom}`;
    return message;
}

function emoteHumain()
{
    return "l'ordinateur observe la personne qui approche.";
}
function emoteElfe()
{
    return "l'ordinateur observe la personne, totalement subjugué par la grâce elfique.";
}
function emoteOrque()
{
    return "l'ordinateur observe la personne difforme et repoussante, plissant le nez.";
}

function emoteRoture()
{
    return "Lorsqu'il voit l'état de sa gueule, il ne peut s'empecher de se marrer.";
}
function emoteNoble()
{
    return "Il remarque que la personne est bien appretée : il ferme bien sa gueule de pute.";
}
function emoteRoi()
{
    return "Il jete à peine un oeil sur le manteau royal du voyageur, il se met à pleurer, quoi. Je crois même qu'il s'est chié dessus.";
}
function getNombreClasse()
{
    let classes= document.querySelectorAll('.classe:checked');
    return classes.length;
}
function listerLesClasses()
{
    let classes= document.querySelectorAll('.classe:checked');
    let message = "<ul>";
    classes.forEach(classe => {
        message+=`<li>${classe.name}</li>`;
    });
    return message; 
}


