// Variabili esempio della funzione
const array = [10, 20, 30, 40, 50, 60, 70];
const a = 2;  // Indice di partenza
const b = 5;  // Indice finale (escluso)

// Chiamata alla funzione
const risultato = estraiIntervallo(array, a, b);

// Stampo il risultato 
console.table(risultato);

// Funzione che accetta un array e due numeri, a e b, e restituisce un nuovo array con valori tra gli indici a e b
function estraiIntervallo(arr, a, b) {

    // Verifica che a sia più piccolo di b e che gli indici siano validi
    if (a < b && a >= 0 && b <= arr.length) {

        // Return restituisce un nuovo array con gli elementi compresi tra a e b (a incluso, b escluso) u
        // Utilizzo .slice per estrarre una porzione di un array o di una stringa senza modificare l'array o la stringa originale. 
        return arr.slice(a, b);

    } else {

        // Se la condizione non è soddisfatta, restituisce un array vuoto
        console.error("Assicurati che 'a' sia minore di 'b' e che gli indici siano validi.");
        return [];

    }

}

 // Funzione per gestire il click sul pulsante
//  Quando l'utente clicca sul pulsante, verrà eseguita la funzione che segue
 document.getElementById('estraiBtn').addEventListener('click', function() {

    const risultato = estraiIntervallo(array, a, b);  // Chiamata alla funzione

    // Seleziona l'elemento con l'ID result, che è il contenitore dove andrà a inserire i risultati estratti
    const resultContainer = document.getElementById('result');
    // Ogni volta che si clicca il pulsante, prima di aggiungere nuovi dati, cancella i risultati precedenti per evitare che i nuovi dati si accumulino
    resultContainer.innerHTML = "";

    // Aggiungiamo ogni elemento del risultato come un div
    risultato.forEach(item => {

        const div = document.createElement('div');
        // Aggiungiamo una classe CSS
        div.classList.add('result-item');
        // Impostiamo il contenuto di testo del div
        div.textContent = item;
        // Aggiunge il div al DOM rendendolo visibile in pagina dall'utente
        resultContainer.appendChild(div);

    });

});