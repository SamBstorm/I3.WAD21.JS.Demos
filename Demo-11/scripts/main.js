function AddNewElement(listId, nameItem = 'New Item'){
    let listElement = document.getElementById(listId);
    if(listElement == undefined) throw new TypeError(`L'objet avec l'id ${listId} n'existe pas...`);
    if(listElement.nodeName != "UL") throw new TypeError(`L'objet avec l'id ${listId} n'est pas une liste...`);

    let new_liElement = document.createElement('li');
    listElement.appendChild(new_liElement);
    new_liElement.innerText = nameItem;
}

let student_names = ['Judy','Valérie','Anaïs', 'Assmaa', 'Laure','Caroline', 'Marwa','Julie','Ylenia','Grace','Minh','Stefania', 'Nicole','Jennifer','Myriam' ];

for (const student_name of student_names) {
    AddNewElement('ul_1', student_name);
}