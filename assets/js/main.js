/* 
Data una lista della spesa, stampare sulla pagina gli elementi della lista individualmente con un ciclo while.
*/

const listaSpesa = [
    "latte",
    "uova",
    "pane",
    "pasta",
    "mela",
    "farina"
]

let i = 0;

while ( i < listaSpesa.length){
    
    console.log(listaSpesa[i])

    i++;
}