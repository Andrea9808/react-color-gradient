export const rgbToHex = (r, g, b) => // Definizione della funzione rgbToHex che accetta tre parametri: r, g, b
    "#" + // Aggiunge il carattere # all'inizio del colore esadecimale
    [r, g, b] // Crea un array con i valori r, g, b
        .map((x) => { // Per ciascun valore r, g, b
            const hex = x.toString(16); // Converte il valore in esadecimale
            return hex.length === 1 ? "0" + hex : hex; // Se la lunghezza del valore esadecimale è 1, aggiunge uno zero davanti (es. "0f" invece di "f")
        })
        .join(""); // Unisce tutti i valori esadecimali in una stringa continua senza separatore
