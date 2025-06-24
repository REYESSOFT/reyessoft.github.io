
function mostrarInfo(persona) {
  const info = {
    daniel: `
      <h3>Daniel Reyes Jarama</h3>
      <p>Contador Público Autorizado y Magíster en Finanzas con más de 15 años de experiencia en control contable, planificación tributaria y auditoría externa. Ha liderado estudios de factibilidad y control presupuestario en entidades comerciales, industriales y agrícolas. Aporta a REYVAL con estrategias sólidas para la sostenibilidad empresarial.</p>
    `,
    veronica: `
      <h3>Verónica Valle de Jarama</h3>
      <p>Economista, Magíster en Tributación y Finanzas, con Diplomado en Tributación. Más de 15 años de experiencia asesorando en áreas contables, tributarias, societarias y financieras. Dirige el área de Outsourcing Contable y Asesorías Tributarias en REYVAL para diversos sectores económicos.</p>
    `
  };
  document.getElementById("info-equipo").innerHTML = info[persona];
}
