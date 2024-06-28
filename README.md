# Color Grading App
## Descrizione
Questo progetto è un'applicazione web per la generazione e la visualizzazione di gradazioni di colore basate su un colore specificato dall'utente. L'app utilizza React per la gestione dell'interfaccia utente e Values.js per la manipolazione dei colori. Ogni gradazione di colore viene rappresentata come un componente visualizzato nell'interfaccia.

# Funzionalità Principali
## Input Utente: L'utente può inserire un colore in formato esadecimale e specificare il numero di gradazioni desiderate.

## Generazione di Colori: Utilizzando Values.js, l'app genera gradazioni di colore basate sul colore inserito dall'utente.

## Visualizzazione dei Colori: Le gradazioni di colore vengono visualizzate come blocchi colorati, ognuno rappresentato dal componente SingleColor.

## Copia del Colore: Cliccando su un blocco di colore, il colore viene copiato negli appunti in formato esadecimale.


# Tecnologie Utilizzate
- React.js
- Values.js: Libreria per la manipolazione dei colori, utilizzata per generare gradazioni di colore.
- UUID: Utilizzato per generare ID univoci per i componenti SingleColor.
Struttura del Progetto

# Il progetto è organizzato in due componenti principali:
- ColorGrading: Contiene il form per l'inserimento del colore e la quantità, gestisce la generazione dei colori e visualizza i componenti SingleColor.
- SingleColor: Componente che rappresenta un singolo blocco di colore, con funzionalità per la copia del colore e feedback all'utente.
