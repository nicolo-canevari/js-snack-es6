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