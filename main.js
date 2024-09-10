onload = () => {
  document.body.classList.remove("container");
};

function toggleAudio() {
  var audio = document.getElementById("miCancion");
  var icono = document.getElementById("icono");

  if (audio.paused) {
    audio.play();
    icono.classList.remove("ph-play");
    icono.classList.add("ph-pause");
  } else {
    audio.pause();
    icono.classList.remove("ph-pause");
    icono.classList.add("ph-play");
  }
}

function showFlowers() {
  var flowers = document.getElementById("flowers");
  var contenido = document.getElementById("contenido-texto");
  var pregunta = document.getElementById("pregunta");

  if (flowers.classList.contains("none")) {
    flowers.classList.remove("none");
    contenido.classList.add("none");
    pregunta.classList.remove("none");
  } else {
    flowers.classList.add("none");
    contenido.classList.remove("none");
    pregunta.classList.add("none");
  }
}
