import React, { useState, useEffect } from "react";
import Values from "values.js"; // Importa la libreria Values.js per la manipolazione dei colori
import SingleColor from "./SingleColor"; // Importa il componente SingleColor per visualizzare singoli colori
import { v4 as uuidv4 } from "uuid"; // Importa la funzione v4 di uuid per generare ID univoci

const ColorGrading = () => {
  const [error, setError] = useState(false); // Stato per gestire eventuali errori
  const [selectedColor, setSelectedColor] = useState([]); // Stato per memorizzare i colori selezionati
  const [colorInput, setColorInput] = useState({ // Stato per gestire l'input utente (colore e quantità)
    color: "", // Colore inserito dall'utente
    qty: 5, // Quantità di gradazioni di colore desiderate, valore predefinito: 5
  });

  const handleSubmit = (e) => { // Gestisce la submit del form
    e.preventDefault(); // Impedisce il comportamento predefinito di ricaricare la pagina
    if (colorInput.color && colorInput.qty) { // Controlla se sono stati inseriti un colore e una quantità
      const { color, qty } = colorInput; // Destruttura il colore e la quantità dall'oggetto colorInput
      try {
        const colors = new Values(color).all(Math.round(100 / qty) * 2); // Genera le gradazioni di colore usando Values.js
        setSelectedColor(colors); // Imposta i colori generati nello stato selectedColor
      } catch (error) {
        setError(true); // Se si verifica un errore durante la generazione dei colori, imposta lo stato error a true
        console.log(error); // Log dell'errore sulla console per debug
      }
    }
  };

  const handleChange = (e) => { // Gestisce il cambiamento dell'input dell'utente
    const { name, value } = e.target; // Destruttura il nome e il valore dall'elemento che ha scatenato l'evento
    setColorInput({ 
      ...colorInput, // Mantiene immutabile lo stato precedente di colorInput
      [name]: value, // Aggiorna la proprietà specificata (name) con il nuovo valore (value)
    });
  };

  useEffect(() => { 
    setColorInput({ qty: 10, color: "" }); // Imposta il valore predefinito per qty: 10 e color: ""
    setSelectedColor(new Values("#f000").all(Math.round(100 / 10) * 2)); // Genera le gradazioni di colore per il colore predefinito "#f000"
  }, []); // Esegue l'effetto solo al mount iniziale, equivalente a componentDidMount

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <div className="input-group">
          <input 
            type="text" 
            name="color" 
            id="color" 
            value={colorInput.color} // Valore dell'input del colore
            maxLength={7} // Lunghezza massima dell'input
            onChange={handleChange} // Funzione chiamata quando cambia il valore dell'input
            className="input"
          />
          <input 
            type="number" 
            name="qty" 
            id="qty" 
            value={colorInput.qty} // Valore dell'input della quantità
            max={100} // Valore massimo accettato per la quantità
            min={5} // Valore minimo accettato per la quantità
            step={5} // Incremento/decremento per le frecce di aumento/diminuzione
            onChange={handleChange} // Funzione chiamata quando cambia il valore dell'input
            className="input"
          />
        </div>
        <button type="submit" className="btn btn-selector">Crea</button> 
      </form>
      <section className="color-section"> 
        { error ? ( // Se c'è un errore, mostra un messaggio di errore
          <h4 className="section-center">Colore non valido</h4>
        ) : selectedColor.length > 0 ? ( // Se ci sono colori selezionati, mappa ciascun colore e renderizza il componente SingleColor
          selectedColor.map((el) => <SingleColor key={uuidv4()} {...el} />)
        ) : ( // Se non ci sono colori selezionati, mostra un messaggio di caricamento
          <h4>Caricamento...</h4>
        )}
      </section>
    </>
  );
};

export default ColorGrading; 
