function mostrarInfo(nombre) {
  const info = equipo[nombre];
  if (info) {
    document.getElementById("info-equipo").innerHTML = info;
  } else {
    document.getElementById("info-equipo").innerHTML = "<p>Información no disponible.</p>";
  }
}