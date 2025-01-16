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