var numeroCuenta;
var saldoActual = 1000;

function verificarCuenta() {
  numeroCuenta = document.getElementById("numeroCuenta").value;
  if (numeroCuenta !== "") {
    document.getElementById("opciones").classList.remove("oculto");
    document.getElementById("saldoActual").innerHTML = saldoActual;
    document.getElementById("pantalla").classList.add("oculto");
  }
}verificarCuenta()

function verSaldo() {
  document.getElementById("saldo").classList.remove("oculto");
  document.getElementById("opciones").classList.add("oculto"); // agregamos "oculto" para ocultar las opciones
}verSaldo()
