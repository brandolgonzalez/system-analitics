const readline = require("readline");

const ctool = require("../src/cli-tool.js");
const rsistema = require("../src/registro-sistema.js");
const smonitor = require("../src/system-monitor.js");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function mostrarMenuPrincipal() {
  console.log("\n=== MENÚ PRINCIPAL ===");
  console.log("1. Herramienta CLI");
  console.log("2. Registro del Sistema");
  console.log("3. Monitor del Sistema");
  console.log("4. Salir");

  rl.question("Elige una opción: ", (opcion) => {
    switch (opcion) {
      case "1":
        ctool.cliTool(rl, mostrarMenuPrincipal);  
        break;
      case "2":
        rsistema.registroSistema(); 
        break;
      case "3":
        smonitor.mostrarInformacion(); 
        break;
      case "4":
        console.log("Saliendo del programa...");
        rl.close();
        break;
      default:
        console.log("Opción inválida");
        mostrarMenuPrincipal();
    }
  });
}

mostrarMenuPrincipal();
