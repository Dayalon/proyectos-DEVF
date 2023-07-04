
/*
class Nodo {
    constructor(valor){
        this.valor = valor;
        this.left = null;
        this.right = null;
    }
}
// Creación del árbol binario

let raiz = new Nodo ( 5 );
raiz.left = new Nodo ( 3 );
raiz.right = new Nodo ( 8 );
raiz.left.left = new Nodo ( 1 );
raiz.left.right = new Nodo ( 4 );
raiz.right.left = new Nodo ( 7 );
raiz.right.right = new Nodo ( 9 );
raiz.left.left.right = new Nodo ( 2 );
raiz.right.left.left = new Nodo ( 6 );
raiz.right.right.right = new Nodo ( 10 )
console.log(raiz)

*/
/*
function busquedaBinaria(arr, elemento) {

    let inicio = 0;
    let fin = arr.lenght - 1;

    while (inicio <= fin) {
        let medio = math.floor((inicio + fin) / 2);
        if (arr[medio] === elemento) {
            return = medio;
        }
        if (elemento < arr[medio]) {
            fin = medio - 1;
        }
        else {
            inicio = medio + 1;
        }
    }
    return -1;
}

const miArray = [1,2,3,4,5,6,7,8,9]
const indice = 
*/

function bubbleSort (arr){
    let len = arr.lenght;
    let cambiado = true;

while(cambiado){
    cambiado = false;
    for (let i = 0; i < len -1; 1++){
        if (arr[1] < arr[i+1]){
            //Realizar intercambio
            let temp = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = temp;
            cambiado = true;
        }
    }

}

}

