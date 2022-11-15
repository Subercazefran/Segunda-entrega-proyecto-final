function pedirNombre() {
  let nombre = prompt("Ingrese nombre");
  alert("Tu nombre es" + "  " + nombre);
}

pedirNombre();

const donas = [
  { id: 1, name: "Donas de chispitas", precio: 300 },
  { id: 2, name: "Donas rosadita", precio: 300 },
  { id: 3, name: "Donas libre de gluten", precio: 300 },
  { id: 4, name: "Donas kinder", precio: 300 },
];

const nombreDonas = [];
const precioDonas = [];

for (const dona of donas) {
  nombreDonas.push(dona.name);
  precioDonas.push(dona.precio);
}

let todasLasDonas = nombreDonas.join(" | ");

alert(todasLasDonas);

let opcion;

while (opcion != 0) {
  opcion = parseInt(
    prompt(
      "Ingrese 1 para saber el precio de la donas\nIngrese 2 para calcular cuanto saldria la docena de donas\nIngrese 3 para mostrar opciones libres de gluten\ningrese 0 para salir"
    )
  );

  if (opcion === 1) {
    let resultado = prompt("Ingrese el nombre de la dona que quiere saber el precio ");
    let valor = donas.find((el) => el.name === resultado);
    alert(valor.precio + " $ ");
  } else if (opcion === 2) {
    alert("el precio de la docena de donas es  ," + precioDonas[0] * 12 + " $ ");
  } else if (opcion === 3) {
    let resultadoCeliaco = nombreDonas.filter((el) => el === "Donas libre de gluten");
    alert(resultadoCeliaco);
  } else if (opcion === 0) {
    break;
  } else {
    console.log("Opcion incorrecta");
  }
}
