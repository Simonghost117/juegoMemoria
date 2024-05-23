let emojis = ["😀", "😃", "😄", "😁", "😆", "😅", "😂", "🤣", "😊", "😇"];
emojis = emojis.concat(emojis);
// Se duplica el array de emojis, para que haya dos de cada uno.

emojis.sort(() => Math.random() - 0.5);
// Se mezclan los emojis de manera aleatoria utilizando sort() con una función que devuelve un valor aleatorio.

let tablero = document.getElementById('tablero');
// Se obtiene el elemento HTML con el id 'tablero' y se almacena en la variable tablero.

let celdas = [];
// Se inicializa un array vacío que contendrá las celdas del tablero.

let emojiSeleccionado = null;
// Se crea una variable para almacenar el emoji seleccionado, inicialmente null.

let celdaSeleccionada = null;
// Se crea una variable para almacenar la celda seleccionada, inicialmente null.

for (let i = 0; i < emojis.length; i++) {
    let celda = document.createElement('div');
    celda.classList.add('celda');
    celda.textContent = emojis[i];
    celda.addEventListener('click', manejarClickCelda);
    tablero.appendChild(celda);
    celdas.push(celda);
}

setTimeout(() => {
    for (let celda of celdas) {
        celda.textContent = '';
    }
}, 1000);

function manejarClickCelda(event) {
    let celda = event.target;

    // Verificar si la celda ya está volteada
    if (celda.classList.contains('volteada')) {
        return;
    }

    let emoji = emojis[celdas.indexOf(celda)];

    celda.classList.add('volteada');
    celda.textContent = emoji;

    if (emojiSeleccionado === null) {
        emojiSeleccionado = emoji;
        celdaSeleccionada = celda;
    } else {
        if (emojiSeleccionado === emoji && celdaSeleccionada !== celda) {
            console.log('¡Has encontrado un par!');
            emojiSeleccionado = null;
            celdaSeleccionada = null;
        } else {
            setTimeout(() => {
                celda.classList.remove('volteada');
                celdaSeleccionada.classList.remove('volteada');
                celda.textContent = '';
                celdaSeleccionada.textContent = '';
                emojiSeleccionado = null;
                celdaSeleccionada = null;
            }, 500);
        }
    }
}
