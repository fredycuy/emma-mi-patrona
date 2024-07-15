document.addEventListener("DOMContentLoaded", function() {
  // Selecciona todas las fotos en el álbum
  var photos = document.querySelectorAll(".photo");

  // Itera sobre cada foto
  photos.forEach(function(photo) {
    var img = photo.querySelector("img");

    // Cálculo de la altura proporcional basado en la relación de aspecto original
    var aspectRatio = img.width / img.height;
    var height = 200 / aspectRatio;

    // Ajusta la altura de la foto
    photo.style.height = height + "px";
  });
});