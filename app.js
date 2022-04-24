let nombreUser = prompt("Ingresa tu nombre.");
let tasaAnual = 45.5;
let tasaMensual = tasaAnual / 12 / 100;
let capital;
let meses;
let resultadoOperacion;
let interesesObtenidos;

let opcion = parseInt(prompt(`Hola! ${nombreUser}\n ¿Qué te gustaría elegir? \n 1 - Ver Tasa nomial anual vigente. \n 2 - Entrar al simulador de plazo fijo. \n 3 - Entrar al simulador de plazo fijo con interes compuesto. \n 4 - ¿Qué es el interes compuesto? \n \n Para elegir una opción escribir su número.`));

/* Funciones */

const multiplicacion = (a,b) => a * b;
const sumaIntereses = (a,b) => a + b;
const memoriaInteres = (a,b) => a + b;
const capitalPorMes = (a,b) => a * b;
const interesElevado = (a,b) => a ** b;

/* Recargar Navegador */
function recargarNavegador() {
    window.location.reload();
  }

while (opcion < 0 && opcion > 5);{
        switch (opcion) {
            case 1:
                opcion = 1;

                alert(`La TNA vigete es ${tasaAnual}%`)

                break;

            case 2:
                opcion = 2;

                capital = parseInt(prompt("Ingresa el capital."));
                meses = parseInt(prompt("Ahora la cantidad de meses que desea hacer el plazo fijo."));
            
                resultadoOperacion = multiplicacion(capital,sumaIntereses(1,multiplicacion(tasaMensual,meses)));
                interesesObtenidos = resultadoOperacion - capital;
            
                alert(`Ingresaste de capital: $${capital} \n Con una TNA ${tasaAnual}% \n A ${meses} meses \n El capital obtenido en ese tiempo es $${resultadoOperacion} \n Los intereses obtenidos en esos ${meses} meses es de $${interesesObtenidos}`);
            
                break;

            case 3:
                opcion = 3;

                capital = parseInt(prompt("Ingresa el capital."));
                meses = parseInt(prompt("Ahora la cantidad de meses que desea hacer el plazo fijo."));

                resultadoOperacion = capitalPorMes(capital,interesElevado(memoriaInteres(1,tasaMensual),meses));
                interesesObtenidos = resultadoOperacion - capital;

                alert(`Ingresaste de capital: $${capital} \n Con una TNA ${tasaAnual}% \n A ${meses} meses \n El capital obtenido en ese tiempo es $${resultadoOperacion} \n El interese obtenidos en esos ${meses} menses es $${interesesObtenidos}`);
            
                break;

            case 4:
                opcion = 4;

                alert(`El interés compuesto es aquel que se va sumando al capital inicial y sobre el que se van generando nuevos intereses.`);
            
                break;

            case 5:
                opcion = 5;
    
                alert(`${nombreUser} nos vemos! :) `);
                
                break
                
            
            default:
                opcion > 5;

                opcion = parseInt(prompt(`Mmm... ${nombreUser} no ingresaste una opción correcta. \n ¿Qué te gustaría elegir? \n 1 - Ver Tasa nomial anual vigente. \n 2 - Entrar al simulador de plazo fijo. \n 3 - Entrar al simulador de plazo fijo con interes compuesto. \n 4 - ¿Qué es el interes compuesto? \n \n 5 - Para finalizar el simulador \n Para elegir una opción escribir su número.`));
        }
}
