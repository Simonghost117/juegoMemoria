let emojis = ["😀", "😒", "😄", "😁", "😆", "😅", "😂", "🤣", "😊", "😇"];
// Se declara un array con una lista de emojis.

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
    // Se recorre cada emoji en el array de emojis.
    
        let celda = document.createElement('div');
        // Se crea un elemento 'div' para cada celda del tablero.
    
        celda.classList.add('celda');
        // Se añade la clase 'celda' al elemento 'div' creado.
    
        celda.textContent = emojis[i];
        // Se asigna el emoji correspondiente al 'div' creado.
    
        celda.addEventListener('click', manejarClickCelda);
        // Se añade un evento 'click' a cada celda, que llamará a la función manejarClickCelda cuando la celda sea clickeada.
    
        tablero.appendChild(celda);
        // Se añade la celda al elemento 'tablero'.
    
        celdas.push(celda);
        // Se añade la celda al array de celdas.
    }
    
    setTimeout(() => {
        for (let celda of celdas) {
            celda.textContent = '';
        }
    }, 2000);
    // Después de 2 segundo, todas las celdas se vacían, ocultando los emojis.
    
    function manejarClickCelda(event) {
        let celda = event.target;
        // Se obtiene la celda que fue clickeada.
    
        if (celda.classList.contains('volteada')) {
            return;
        }
        // Si la celda ya está volteada (contiene la clase 'volteada'), no hacer nada.
    
        let emoji = emojis[celdas.indexOf(celda)];
        // Se obtiene el emoji correspondiente a la celda clickeada.
    
        celda.classList.add('volteada');
        celda.textContent = emoji;
        // Se marca la celda como volteada y se muestra el emoji.
    
        if (emojiSeleccionado === null) {
            emojiSeleccionado = emoji;
            celdaSeleccionada = celda;
            // Si no hay ningún emoji seleccionado, se guarda el emoji y la celda actuales.
        } else {
            if (emojiSeleccionado === emoji && celdaSeleccionada !== celda) {
                emojiSeleccionado = null;
                celdaSeleccionada = null;
                // Si se encuentra un par (el mismo emoji en dos celdas diferentes), se resetean las variables seleccionadas.
            } else {
                setTimeout(() => {
                    celda.classList.remove('volteada');
                    celdaSeleccionada.classList.remove('volteada');
                    celda.textContent = '';
                    celdaSeleccionada.textContent = '';
                    emojiSeleccionado = null;
                    celdaSeleccionada = null;
                }, 500);
                // Si no es un par, después de 0.5 segundos se voltean de nuevo ambas celdas y se ocultan los emojis.
            }
        }
    }
    