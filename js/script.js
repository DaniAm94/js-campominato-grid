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
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.innerText = content;
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
    const difficulty = challenge.value;
    grid.innerHTML = '';
    grid.classList.remove('d-none');
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

    totCells = rows * cols;
    for (let i = 1; i <= totCells; i++) {

        const cell = createCell(difficulty, i);
        grid.appendChild(cell);
    }

})