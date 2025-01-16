// Creiamo un array di oggetti con le poprietà delle bici
let bici = [

    { nome: "Bici Bianchi", peso: 8.5 },
    { nome: "Bici Wilier Triestina", peso: 7.2 },
    { nome: "Bici Colnago", peso: 6.9 },
    { nome: "Bici De Rosa", peso: 9.1 }

];

console.table(bici)

// Inizializziamo la bici più leggera come il primo oggetto dell'array
let biciLeggera = bici[0];

// Ciclo for sull'array per trovare la bici con il peso minore
for (let i = 1; i < bici.length; i++) {

    if (bici[i].peso < biciLeggera.peso) {

        biciLeggera = bici[i];

    }

}

// Stampiamo a schermo la bici con il peso minore
console.log(`La bici con il peso minore è: ${biciLeggera.nome} con un peso di ${biciLeggera.peso} kg.`);

// Stampiamo il risultato nel div con id "result"
document.getElementById('result').innerHTML = `La bici con il peso minore è: <strong>${biciLeggera.nome}</strong> con un peso di <strong>${biciLeggera.peso} kg</strong>.`;

// Riempio la tabella dinamicamente con le informazioni delle bici, aggiungendo una riga per ogni bici nell'array
let tableBody = document.getElementById('biciTable').getElementsByTagName('tbody')[0];
bici.forEach(function(bici) {

    // inserisco una nuova riga all'interno di tbody
    // row è la variabile che memorizza la nuova riga inserita nella tabella
    let row = tableBody.insertRow();
    // row.insertCell(0): Dopo aver creato una nuova riga (row), questa riga crea una nuova cella (<td>) all'interno della riga (cell1/cell2 è la variabile che memorizza questa cella)
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    // cell1.textContent assegna il contenuto (testo) della prima cella (cell1) al valore della proprietà nome dell'oggetto bici
    cell1.textContent = bici.nome;
    cell2.textContent = bici.peso + " kg";

});