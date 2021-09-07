let array = ['Judy','Valérie','Anaïs','Stefania','Julie', 'Myriam','Caroline','Laure','Marwa','Minh','Assmaa','Ylenia','Grace']

let search_value = prompt('Quel personne cherchez-vous?') 

let trouve = false

for(let i= 0; trouve == false && i < array.length; i++){
    if(array[i] == search_value) {
        alert('La valeur recherchée se situe à l\'index : '+i)
        trouve=!trouve;
    }
}
if(!trouve) alert('La personne recherchée n\'est pas ici...')



for(const index in array){
    console.log(`${array[index]} est en ${parseInt(index) + 1} position`)
}


for(const value of array){
    console.log(`${value} est là...`)
}

