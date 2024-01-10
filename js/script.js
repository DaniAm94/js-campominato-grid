// Recupero gli elementi dal DOm
const challenge = document.getElementById('challenge');
const form = document.querySelector('form');
const grid = document.querySelector('.grid');

// Preparazione
let rows;
let cols;
let totCells;

// Funzioni

/**
 * Create a cell
 * @param {string} difficulty it decide the class to be added
 * @param {number} content the content  of the cell
 * @returns the cell
 */
const createCell = (difficulty, content) => {
    // Creo il nodo come div
    const cell = document.createElement('div');

    // Gli do la classe cell appositamente creata su css
    cell.classList.add('cell');

    // GLi inserisco il contenuto
    cell.innerText = content;

    // A seconda del parametro difficulty la cell avrà un'altra classe che determina la sua taglia
    switch (difficulty) {
        case 'easy':
            cell.classList.add('cell-l')
            break;
        case 'normal':
            cell.classList.add('cell-m')
            break;
        case 'hard':
            cell.classList.add('cell-sm')
            break;
    }
    return cell;
}

// Svolgimento
form.addEventListener('submit', e => {
    e.preventDefault();
    // Ripulisco la griglia
    grid.innerHTML = '';
    const difficulty = challenge.value;

    // ! Validazione
    if (difficulty !== 'easy' && difficulty !== 'normal' && difficulty !== 'hard') {
        alert('La difficoltà deve avere un valore tra: easy, normal e hard!');
        return;
    }


    //La rendo visibile
    grid.classList.remove('d-none');

    // a seconda del valore di difficulty la griglia avrà un diverso numero di righe e colonne
    switch (difficulty) {
        case 'easy':
            rows = 7;
            cols = 7;
            break;
        case 'normal':
            rows = 9;
            cols = 9;
            break;
        case 'hard':
            rows = 10;
            cols = 10;
            break;
    }
    // Calcolo il numero di celle
    totCells = rows * cols;

    //Genero le celle e le appendo alla griglia
    for (let i = 1; i <= totCells; i++) {
        const cell = createCell(difficulty, i);
        // Creo un event listener per reagire al click sulle celle
        cell.addEventListener('click', () => {
            cell.classList.add('clicked');
        })
        grid.appendChild(cell);
    }

})


