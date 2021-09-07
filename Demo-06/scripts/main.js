console.log('Le principe est simple : toute valeur en javascript peut devenir une valeur booléenne');

console.log('En règle générale, pour les type primitif, le fait qu\'une variable contienne sa valeur par défaut donne false.');

let text = "";
let nb = 0;
let bool = false;

console.log(`Type String : ${text} : donne la valeur ${(text)?'vrai':'faux'}`)
console.log(`Type Number : ${nb} : donne la valeur ${(nb)?'vrai':'faux'}`)
console.log(`Type Boolean : ${bool} : donne la valeur ${(bool)?'vrai':'faux'}`)

console.warn("ATTENTION, bien que les valeurs sont les même que celle du constructeur, si une variable provient du constructeur, le résultat est différent!");


text = new String(); //""
nb = new Number(); //0
bool = new Boolean(); //false

console.log(`Type String : ${text} : donne la valeur ${(text)?'vrai':'faux'}`)
console.log(`Type Number : ${nb} : donne la valeur ${(nb)?'vrai':'faux'}`)
console.log(`Type Boolean : ${bool} : donne la valeur ${(bool)?'vrai':'faux'}`)

console.warn('Les exceptions : ');

let object = new Object();
console.log(`Type Object : ${object} : donne la valeur ${(object)?'vrai':'faux'}`)

object = {};
console.log(`Type Object : ${object} : donne la valeur ${(object)?'vrai':'faux'}`)

object = undefined;
console.log(`Type Object : ${object} : donne la valeur ${(object)?'vrai':'faux'}`)

object = null;
console.log(`Type Object : ${object} : donne la valeur ${(object)?'vrai':'faux'}`)



let not_a_number = Number.NaN
console.log(`Type NaN : ${not_a_number} : donne la valeur ${(not_a_number)?'vrai':'faux'}`)
