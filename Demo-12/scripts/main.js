function AddNewElement(listId, nameItem = 'New Item') {
    let listElement = document.querySelector(listId);
    if (listElement == undefined) throw new TypeError(`L'objet avec l'id ${listId} n'existe pas...`);
    if (listElement.nodeName != "UL") throw new TypeError(`L'objet avec l'id ${listId} n'est pas une liste...`);

    let new_liElement = document.createElement('li');
    new_liElement.innerText = nameItem;
    let btn_li = document.createElement('input');
    btn_li.setAttribute('type','button');
    btn_li.setAttribute('value','🤚');
    btn_li.setAttribute('onclick', 'definePresent(this.parentNode)');
    //btn_li.onclick= function(){definePresent(new_liElement)};
    new_liElement.appendChild(btn_li);
    listElement.appendChild(new_liElement);
}

let student_names = ['Judy', 'Valérie', 'Anaïs', 'Assmaa', 'Laure', 'Caroline', 'Marwa', 'Julie', 'Ylenia', 'Grace', 'Minh', 'Stefania', 'Nicole', 'Jennifer', 'Myriam'];

for (const student_name of student_names) {
    AddNewElement('ul', student_name);
}

function definePresent(item){
    console.log(item)
    item.setAttribute('class','present');
    let text = document.querySelector('p');
    text.innerText = `Aujourd'hui nous sommes ${document.querySelectorAll('.present').length} en classe...`
}