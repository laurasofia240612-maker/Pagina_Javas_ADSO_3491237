const numeroFavorito = 7;

const input = document.getElementById("numero");
const mensaje = document.getElementById("mensaje");
const select = document.getElementById("pasiones");
const foto = document.getElementById("foto");
const boton = document.getElementById("boton");

const imagenes = {
  lugares: "img/paisaje.jpg",
  calle: "https://media1.tenor.com/m/HkgK3n8Fq5QAAAAd/medellin-paisa.gif",
  musica: "img/album.jpg"
};

select.addEventListener("change", function () {
  if (imagenes[select.value]) {
    foto.src = imagenes[select.value];
  }
});

boton.addEventListener("click", function () {
  if (input.value === "") {
    mensaje.textContent = "Escribe un número";
    return;
  }

  const n = Number(input.value);

  if (n > numeroFavorito) {
    mensaje.textContent = "Muy alto";
  } else if (n < numeroFavorito) {
    mensaje.textContent = "Muy bajo";
  } else {
    mensaje.textContent = "¡Acertaste!";
  }
});