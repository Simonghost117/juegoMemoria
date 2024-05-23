let emojis = ["😀", "😒", "😄", "😁", "😆", "😅", "😂", "🤣", "😊", "😇"];
emojis = emojis.concat(emojis);
emojis.sort(() => Math.random() - 0.5);

let tablero = document.getElementById('tablero');
let celdas = [];
let emojiSeleccionado = null;
let celdaSeleccionada = null;

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
    } else if (emojiSeleccionado === emoji && celdaSeleccionada !== celda) {
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

