function cliTool(rl, volverAlMenu) {
  console.log("Bienvenido a la CLI de ejemplo");
  console.log("Comandos disponibles: hola, tiempo, salir");

  function preguntar() {
    rl.question("Ingresa un comando: ", (input) => {
      const cmd = input.trim().toLowerCase();

      switch (cmd) {
        case "hola":
          console.log("¡Hola! ¿Cómo estás?");
          preguntar();
          break;
        case "tiempo":
          console.log(`Tiempo activo: ${process.uptime().toFixed(2)} segundos`);
          preguntar();
          break;
        case "salir":
          console.log("Saliendo de la CLI...");
          volverAlMenu();
          break;
        default:
          console.log("Comando no reconocido");
          preguntar();
      }
    });
  }

  preguntar();
}

module.exports.cliTool = cliTool;
