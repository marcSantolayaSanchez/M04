function estiljs(){
    document.getElementById("text").style.color = "red";
    document.getElementById("text").style.fontFamily = "ui-sans-serif";




}

function prenValorForm(){
    let nombre = document.getElementsByName("nom")[0].value;
    let apellido = document.getElementsByName("cognom")[0].value;
    console.log(`${nombre} ${apellido}`)
}

function dom3(){
    let p = document.getElementsByTagName("p")
    for(i = 1; i < 5; i++){
    p[i].style.backgroundColor = "orange";
    }


}

function obtenirAtributs(){
    let atributs = document.getElementById("itb").attributes
    for(i = 0 ; i < atributs.length; i++){
        console.log(atributs[i])
    }

}
let finalFila = 2
function insertarFila(){
    let insertarFila = document.getElementById("Taula")
    var nuevaFila = insertarFila.insertRow(finalFila);
    var celda = nuevaFila.insertCell(0);
    finalFila++
    celda.innerHTML = "HOLA BUY BUENAS A TODOS GUAPISIMOS";


}