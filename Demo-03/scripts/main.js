alert("Veuillez atteindre la console pour voir le résultat (F12)")

let email = 'samuel.legrain@bstorm.be';

console.log('Voici mon adresse email :');
console.log(email);

console.log('On aimerait récupérer le domaine situer à droite du @');
console.log('Pour ce faire on a besoin de la position par index du @');
let position_arobase = email.indexOf('@');
console.log(position_arobase);
console.log('Ensuite on peut récupérer ce qui se trouve à droite');
let domaine = email.substr(position_arobase+1);

console.log(domaine);

console.log('Nous savons que la partie de gauche est constitué du nom et prénom d\'une personne, séparé par un . ');
let person_array = email.substring(0,position_arobase).split('.');
console.log(person_array)
let person = {
    nom : person_array[1],
    prenom : person_array[0]
};
console.log(person);

let guess = {
    nom : 'Strimelle',
    prenom : 'Aurelien'
}
console.log('Voici les données d\'un nouvel utilisateur, auquels nous devons créez son e-mail :');
console.log(guess);
console.log('Utilisons le formattage de texte pour le générer :');
console.log('Attention, notre e-mail ne doit pas avoir de majuscules...');
console.log(`${guess.prenom.toLowerCase()}.${guess.nom.toLowerCase()}@${domaine}`);

