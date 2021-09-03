/**Différence entre var et let */

function testVar(){
    var x = 1;
    if(1==1){
        var x = 2;
        console.log(x);
    }
    console.log(x);
}


function testLet(){
    let x = 1;
    if(1==1){
        let x = 2;
        console.log(x);
    }
    console.log(x);
}

alert("Resultat var")
testVar();
alert("Resultat let")
testLet();