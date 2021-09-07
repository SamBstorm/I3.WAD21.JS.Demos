let date = prompt('Veuillez indiquer votre date de naissance (jour/mois/année)');
console.log('On récupère la date sous format string et séparé par de /');
console.log('On découpe le string grace aux / et on les transforme en number');
let date_array = date.split('/');
let year = parseInt(date_array[2]);
let month = parseInt(date_array[1]);
let day = parseInt(date_array[0]);

console.log('Avec les valeurs récupérées, on crée une nouvelle Date');
let birthdate = new Date(year,month-1,day);

console.log(birthdate)

console.log('Récupérons la date d\'aujourd\'hui');
let today = new Date();
console.log(today);

console.log('Récupérons le temps en milliseconds de la date de naissance à aujourd\'hui');
let year_old_ms = today.getTime() - birthdate.getTime();
console.log(year_old_ms + " milliseconds");

console.log('Créons une date avec le temps en milliseconds ( age + temps 0)');
let year_old_time_0 = new Date(year_old_ms).getFullYear();
console.log('Soustrayons le nombre d\'année du temps 0 à notre nouveau temps');
console.log( year_old_time_0 - new Date(0).getFullYear() + " ans");