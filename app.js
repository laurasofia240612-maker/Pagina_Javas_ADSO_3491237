const numero = document.getElementById("numero");
const mensaje = document.getElementById("mensaje");
const pasiones = document.getElementById("pasiones");
const imagen = document.getElementById("imagen");
const reiniciar = document.getElementById("reiniciar");


const NUMERO_FAVORITO = 7;


numero.addEventListener("input", function () {

    if (numero.value === "") {
        mensaje.textContent = "";
        return;
    }

    let valor = Number(numero.value);

    if (valor < 0 || valor > 99) {
        mensaje.textContent = "Escribe un número entre 0 y 99.";
    } else if (valor === NUMERO_FAVORITO) {
        mensaje.textContent = "¡Correcto! Ese es el número favorito de Sofi.";
    } else if (valor < NUMERO_FAVORITO) {
        mensaje.textContent = "No es ese. Intenta con un número mayor.";
    } else {
        mensaje.textContent = "No es ese. Intenta con un número menor.";
    }
});


pasiones.addEventListener("change", function () {

    switch (pasiones.value) {

        case "lugares":
            imagen.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzfzFLz6jIllbCiAz88KmPH3qB6naBPJ5z9BNM2ecA4wEoX92jLEc7Xw1p&s=10";
            imagen.alt = "Conocer lugares";
            imagen.hidden = false;
            break;

        case "calle":
            imagen.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzRYnvNDsViU8R_TKkpmRMLw64pUcIHA6WX0V9-k__mXphVBU8doj0JVaj&s=10";
            imagen.alt = "Salir a la calle";
            imagen.hidden = false;
            break;

        case "callar":
            imagen.src = "https://i.scdn.co/image/ab67616d0000b2735374e0160ead917b6e73b61f";
            imagen.alt = "Escuchar música";
            imagen.hidden = false;
            break;

        default:
            imagen.src = "";
            imagen.alt = "";
            imagen.hidden = true;
    }
});

reiniciar.addEventListener("click", function () {
    numero.value = "";
    mensaje.textContent = "";
    pasiones.value = "";
    imagen.src = "";
    imagen.alt = "";
    imagen.hidden = true;
    alert("Gracias por hacerme entender que el lenguaje de programación es dificil pero que tu lo haces ver mas sencillo, que cada vez que preguntas si ya terminamos y porque tan lentos me estreso mas pero que me sirve de algo en el mundo laboral y a nivel personal. Gracias por tus frases filosofales que a la final si tuvieron razon. Gracias por todo Profe Deimer :)");
});