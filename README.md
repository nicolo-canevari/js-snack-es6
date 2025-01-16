# js-snack-es6
Esercizio: Snack Array e Oggetti

Snack-1:
Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore.

Snack-2:
Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

Snack-3 (Bonus):
Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b). La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.


LOGICA=
Snack-1:

-Creo un array di oggetti (bici)
-All'interno dell' array vado a descrivere le seguenti proprietà: Nome, Peso.
<!-- le bici andranno messe in orine sparso in base alle loro prorprietà per testare il corretto funzionamento del codice -->
-Uso un ciclo for per individuare la bici più leggera dell'array.
-Stampo a schermo la bici che pesa di meno rispetto alle altre.


Snack-2:
-Creo un array di oggetti (squadre)
-Al suo interno, per ogni squadra, aggiungo queste proprietà: nome, punti fatti, falli subiti (Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0).
-Con Math.floor(Math.random) genero randomicamente un numero per le proprietà: “punti” fatti e “falli subiti” (precedentemente settate a 0 nell'array).
-Creo infine un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto.