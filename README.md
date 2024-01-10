# Esercizio di oggi: Griglia Dinamica
## repo: js-campominato-grid
### Consegna
    L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
    Ogni cella ha un numero progressivo, da 1 a 100.
    Ci saranno quindi 10 caselle per ognuna delle 10 righe.
    Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
## MILESTONE 1
    Prepariamo l'HTML ed il CSS per ottenere il risultato grafico che vediamo nell'immagine allegata.
## MILESTONE 2
    Rimuoviamo le celle che abbiamo inserito nell'HTML in modo da generarle tramite JS. Al click del bottone play, vengono generate 100 celle in 10 righe da 10 celle ciascuna.
## MILESTONE 3
    In ogni cella, deve comparire il numero corrispondente, in ordine da 1 a 100;
## MILESTONE 4
    Al click sulla cella, stampiamo il numero della cella cliccata in console, poi coloriamo la cella d'azzurro!
# BONUS
    Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
### `Note`:
- questo bonus richiederà un evento diverso dal 'click'
- questo bonus richiederà una riflessione extra per quel che riguarda il calcolo della larghezza delle celle.
- **Consigli del giorno:**  
    - Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
    - Ad esempio:
        - Di cosa ho bisogno per generare i numeri?
    - Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
    - Le validazioni e i controlli possiamo farli anche in un secondo momento.


### Scaletta:
1. Preparo i fogli html e css inserendo gli elementi necessari per generare, visualizzare e stilizzare la griglia
2. Sul file js recupero gli elementi che mi servono dal DOM
3. Mi creo le variabii necessarie:
    - Numero di righe
    - Numero di colonne
    - Il totale delle celle
4. Procedo per gradi: 
    1. Creo un event listener per regire alla prima azione dell'utente
    2. Devo generare le celle:
        - mi sposto fuori dall'eventlistener per dichiarare una funzione con cui creare le celle della griglia con tutte le sue proprietà
    3. Torno nell'eventlistener e invoco la funzione per creare le celle e le appendo nella griglia
    4. Creo all'esterno un nuovo event listener che reagisce al click su ogni cella
        - Al click do una classe css alla cella per farla colorare e stampo il suo valore numerico in console