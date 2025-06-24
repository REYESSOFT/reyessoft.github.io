
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formulario-contacto");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nombre = this.elements[0].value.trim();
    const correo = this.elements[1].value.trim();
    const mensaje = this.elements[2].value.trim();

    const aviso = document.createElement("p");
    aviso.style.marginTop = "10px";

    const existente = form.querySelector("p.aviso");
    if (existente) form.removeChild(existente);

    aviso.classList.add("aviso");

    if (!nombre || !correo || !mensaje) {
      aviso.textContent = "Por favor, completa todos los campos.";
      aviso.style.color = "red";
      form.appendChild(aviso);
      return;
    }

    aviso.textContent = "¡Gracias por tu mensaje, " + nombre + "! Pronto te responderemos.";
    aviso.style.color = "green";
    form.appendChild(aviso);

    this.reset();
  });
});
