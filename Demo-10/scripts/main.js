function afficherProprietes(obj){
    for (const prop in obj) {
        let value = obj[prop];
        document.getElementById('info').innerHTML +=
        "<br>"+prop+":"+value;
    }
}

afficherProprietes(document);