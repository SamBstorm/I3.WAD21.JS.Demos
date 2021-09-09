function changeNameOfObject(object){
    object.name = 'Toto';
}

function changeNameOfValue(value){
    value = 'Toto';
}

let person = {
    name : 'Legrain'
};

changeNameOfValue(person.name);
alert(person.name);


changeNameOfObject(person);
alert(person.name);