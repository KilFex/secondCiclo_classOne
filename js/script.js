let valorPantallita = "";




function mostrarEnPantallita(value){
    valorPantallita += value;
    document.getElementById("pantallita").value = valorPantallita;
}




function limpiar(){
    valorPantallita = "";
    document.getElementById("pantallita").value = valorPantallita;

}

function calcular(){
    try {
        const result = eval(valorPantallita);
        valorPantallita = result.toString();
        document.getElementById("pantallita").value = valorPantallita;


    } catch(error){
        valorPantallita = "";
        document.getElementById("pantallita").value = "Error, solo acuña te puede responder";

    }


}