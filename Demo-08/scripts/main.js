let nbRecherche;
do{
    nbRecherche = parseInt(prompt('Veuillez introduire un nombre positif : '))
}while(isNaN(nbRecherche) || nbRecherche < 0);
alert('Ceci est bien un nombre entier : '+nbRecherche)

/**
 * estCarre est une fonction permettant de déterminer si un nombre entier positif est un carré.
 * @param {number} nombre - Nombre entier positif qui sera analyser
 * @returns Phrase écrite en français permettant de connaitre si nombre est un carré ou pas
 */
function estCarre(nombre){
    for (let i = 0; i <= (nombre /2)+1; i++) {
        if(i*i == nombre) return `Le nombre ${nombre} est le carré de ${i}!`;
    }
    return `Le nombre ${nombre} n'est pas un carré...`;
}

alert(estCarre(nbRecherche));

//Procédure et return "vide";
/**
 * Fonction effectuant une alerte saluant la personne par son nom, seulement si ce nom est composé d'au moins 1 caractère.
 * @param {string} name - Nom de l'utilisateur
 */
function direBonjour(name){
    if(name.length == 0) return;
    alert('Bonjour '+name);
}

direBonjour('')