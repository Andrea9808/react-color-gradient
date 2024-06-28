import React, { useState, useEffect } from "react";
import { rgbToHex } from "../utils/helpers"; // Importa la funzione rgbToHex da un file di utilità

const SingleColor = ({ rgb, type, weight }) => { // Definizione del componente SingleColor, riceve le props rgb, type e weight
    const [message, setMessage] = useState(false); // Stato per gestire il messaggio di conferma della copia del colore

    const copiaColore = () => { // Funzione per copiare il colore nella clipboard
        navigator.clipboard.writeText(rgbToHex(...rgb)) // Converte rgb in formato esadecimale e lo copia nella clipboard
        .then(() => setMessage(true)) // Se la copia ha successo, imposta il messaggio di conferma a true
        .catch((err) => console.log(err)); // Gestisce eventuali errori durante la copia
    }

    const backgroundColorStyle = { // Stile per l'elemento <article> che rappresenta il colore
        backgroundColor: rgbToHex(...rgb), // Imposta il colore di sfondo in formato esadecimale
        padding: '10px', 
        margin: '5px', 
    };

    useEffect(() => { // Effetto collaterale per gestire la visualizzazione del messaggio di conferma
        const timeout = setTimeout(() => { // Imposta un timeout per nascondere il messaggio dopo 1 secondo
            setMessage(false); // Quando scade il timeout, imposta il messaggio di conferma a false
        }, 1000); 

        return () => clearTimeout(timeout); // Pulisce il timeout quando il componente viene dismesso
    }, [message]); // Dipendenza dell'effetto: il messaggio di conferma

    return (
        <article // Elemento <article> che rappresenta un singolo colore
            onClick={copiaColore} // Gestisce il click per copiare il colore
            className={`single-color ${type}`} // Classe CSS dinamica basata sul tipo di colore
            style={backgroundColorStyle} // Applica lo stile di sfondo calcolato
        >
            <h5>{rgbToHex(...rgb)}</h5> {/* Mostra il colore in formato esadecimale */}
            {
                message && <p className="message">Colore copiato</p> // Mostra il messaggio di conferma se message è true
            }
        </article>
    );
};

export default SingleColor; // Esporta il componente SingleColor per l'utilizzo in altri file
