function AddNewElement(listId, nameItem = 'New Item') {
    let listElement = document.getElementById(listId);
    if (listElement == undefined) throw new TypeError(`L'objet avec l'id ${listId} n'existe pas...`);
    if (listElement.nodeName != "UL") throw new TypeError(`L'objet avec l'id ${listId} n'est pas une liste...`);

    let new_liElement = document.createElement('li');
    new_liElement.innerText = nameItem;
    let btn_li = document.createElement('input');
    btn_li.setAttribute('type','button');
    btn_li.setAttribute('value','🤚');
    btn_li.setAttribute('onclick','toggleList(this.parentNode)');
    new_liElement.appendChild(btn_li);
    listElement.appendChild(new_liElement);
    changeTitle();
}

function toggleList(li_to_switch) {
    document.getElementById('ul_2').appendChild(li_to_switch);
    li_to_switch.getElementsByTagName('input')[0].setAttribute('onclick','goUpItem(this.parentNode)');
}

let student_names = ['Judy', 'Valérie', 'Anaïs', 'Assmaa', 'Laure', 'Caroline', 'Marwa', 'Julie', 'Ylenia', 'Grace', 'Minh', 'Stefania', 'Nicole', 'Jennifer', 'Myriam'];

for (const student_name of student_names) {
    AddNewElement('ul_1', student_name);
}

function changeTitle() {
    let title = document.getElementById("ul_1").parentNode.firstElementChild;
    title.innerText = 'Liste 1 : ' + document.getElementById('ul_1').childNodes.length;
}
changeTitle();

function goUpItem(item){
    let previousItem = item.previousElementSibling;
    if(previousItem) previousItem.parentNode.insertBefore(item, previousItem);
}