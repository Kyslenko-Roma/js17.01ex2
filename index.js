const yourName = prompt("Введіть імя");
const yourAge = prompt("Введіть вік")
const sumNumber1 = +prompt("Введіть число");
const sumNumber2 = +prompt("Введіть число");

alert(`"привіт " + ${yourName}`);
alert(`"тобі " + ${yourAge}`);
alert (`${sumNumber1 + sumNumber2}`);


const favouriteTown = prompt("Я люблю місто ____");
const lastYearVisited = prompt("Я там останній раз був о _____ році");
const attractionTown = prompt("Також це місто відомо по ______.");

alert(`"Я люблю місто " ${favouriteTown}`);
alert(`"Також це місто відомо по " ${attractionTown}`);
alert(`"Я там останній раз був в " ${lastYearVisited} " році"`);