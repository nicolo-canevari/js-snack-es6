// Array con i nomi delle squadre
const squadre = [

    { nome: "Juventus", punti: 0, falliSubiti: 0 },
    { nome: "Inter", punti: 0, falliSubiti: 0 },
    { nome: "Milan", punti: 0, falliSubiti: 0 },
    { nome: "Roma", punti: 0, falliSubiti: 0 },
    { nome: "Napoli", punti: 0, falliSubiti: 0 }   

];

console.table(squadre)

// Assegnazione numeri random alle proprietà "punti" e "falliSubiti"
squadre.forEach(squadra => {

    squadra.punti = Math.floor(Math.random() * 100); // Numero random tra 0 e 99
    squadra.falliSubiti = Math.floor(Math.random() * 50); // Numero random tra 0 e 49

  });