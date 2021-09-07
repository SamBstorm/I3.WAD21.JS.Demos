/**Différence entre var et let */

function testVar(){
    console.log('La variable x va être initialisée à 1');
    var x = 1;
    if(1==1){
        console.log('Une seconde variable x va être initialisée à 2 dans un bloc d\'instruction');
        var x = 2;
        console.log('La variable x dans le bloc d\'instruction vaut à présent : '+x);
    }
    console.log('La variable x hors du bloc d\'instruction vaut à présent : '+x);
    console.log('Nous constatons qu\'une variable déclaré avec le mot clé var peut écraser une autre variable, peu importe la portée de cette dernière.');
}


function testLet(){
    console.log('La variable x va être initialisée à 1');
    let x = 1;
    if(1==1){
        console.log('Une seconde variable x va être initialisée à 2 dans un bloc d\'instruction');
        let x = 2;
        console.log('La variable x dans le bloc d\'instruction vaut à présent : '+x);
    }
    console.log('La variable x hors du bloc d\'instruction vaut à présent : '+x);
    console.log('Nous constatons qu\'une variable déclaré avec le mot clé let n\'est pas affectée par une autre variable de portée différente.');
}

alert("Veuillez atteindre la console pour voir le résultat (F12)")

console.log("Resultat var");
testVar();
console.log("Resultat let");
testLet();