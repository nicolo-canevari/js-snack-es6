// Array con i nomi delle squadre
const squadre = [

    { nome: "Juventus", punti: 0, falliSubiti: 0 },
    { nome: "Inter", punti: 0, falliSubiti: 0 },
    { nome: "Milan", punti: 0, falliSubiti: 0 },
    { nome: "Roma", punti: 0, falliSubiti: 0 },
    { nome: "Napoli", punti: 0, falliSubiti: 0 }

];

// console.table(squadre)

// Assegnazione numeri random alle proprietà "punti" e "falliSubiti"
squadre.forEach(squadra => {

    squadra.punti = Math.floor(Math.random() * 100); // Numero random tra 0 e 99
    squadra.falliSubiti = Math.floor(Math.random() * 50); // Numero random tra 0 e 49

});

// Nuovo array con solo i nomi e i falli subiti
// Uso .map per creare nuovo array a partire da uno esistente, ma con un formato diverso o con alcune modifiche ai dati
const squadreFalliSubiti = squadre.map(squadra => ({

  nome: squadra.nome,
  falliSubiti: squadra.falliSubiti

}));

// Stampo entrambi gli array in console usando console.table
console.table(squadre);
console.table(squadreFalliSubiti);

// Funzione per popolare la tabella con tutte le squadre
const tableSquadre = document.getElementById('tableSquadre').getElementsByTagName('tbody')[0];
squadre.forEach(squadra => {

    // inserisco una nuova riga all'interno di tbody
    // row è la variabile che memorizza la nuova riga inserita nella tabella
    let row = tableSquadre.insertRow();
    // row.insertCell(0): Dopo aver creato una nuova riga (row), questa riga crea una nuova cella (<td>) all'interno della riga (cell1/cell2/cell3 è la variabile che memorizza questa cella)
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    // cell1.textContent assegna il contenuto (testo) della prima cella (cell1) al valore della proprietà nome dell'oggetto squadra.nome
    cell1.textContent = squadra.nome;
    cell2.textContent = squadra.punti;
    cell3.textContent = squadra.falliSubiti;

});

// Funzione per popolare la tabella con i nomi e i falli subiti
const tableFalliSubiti = document.getElementById('tableFalliSubiti').getElementsByTagName('tbody')[0];
squadreFalliSubiti.forEach(squadra => {

    // Valgono le stesse regole viste per tableSquare
    let row = tableFalliSubiti.insertRow();
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    cell1.textContent = squadra.nome;
    cell2.textContent = squadra.falliSubiti;

});