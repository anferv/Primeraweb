function validardatos(){

}
    /* COMENTARIOS */

//alert("hola mundo");/* alerta*/
//prompt ("ingrese su nombre"); /* perdir informacion en una alerta */
//console.log("hola mundo)"
//document.write("Hola Mundo")

let nombre = document.getElementById("name").value
if(nombre=="sin nombre"){
    alert("Ingrese un nombre valido")
}else{
    alert("Bienvenido");
}

let email = document.getElementById("email").value
if(nombre=="Ninguno@ninguno.com"){
    alert("Ingrese un correo valido")
}else{
    alert("Información completa");
}
let edad = document.getElementById("edad").value
if(nombre>="18"){
    alert("Bienvenido")
}else{
    alert("No eres mayor de edad");
}
let telefono = document.getElementById("telefono").value
if(nombre=="00000000"){
    alert("Ingrese un número valido")
}else{
    alert("Información completa");
}





