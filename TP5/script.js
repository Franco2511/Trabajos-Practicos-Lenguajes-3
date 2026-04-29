const nombre = document.getElementById("inName")
const apellido = document.getElementById("inApellido")
const email = document.getElementById("inEmail")
const fecha = document.getElementById("inBirth")
const contra1 = document.getElementById("inPass-1")
const contra2 = document.getElementById("inPass-2")

let labelN = document.getElementById("error-1")
let labelA = document.getElementById("error-2")
let labelE = document.getElementById("error-3")
let labelBirth = document.getElementById("error-4")
let labelCon1 = document.getElementById("error-5")
let labelCon2 = document.getElementById("error-6")

nombre.addEventListener("input", esNombre);
apellido.addEventListener("input", esApellido);


function esNombre(){
    const valorNombre = nombre.value;
    const tieneNumeros = /\d/.test(valorNombre)

    if(tieneNumeros){
        labelN.textContent = "El nombre no puede contener numeros"
        nombre.style.borderColor = "red"
        return false;
    }else{
        labelN.textContent = ""
        return true;
        
    }
}


function esApellido(){
    const valorApellido = apellido.value;
    const tieneNumeros = /\d/.test(valorApellido)

    if(tieneNumeros){
        labelA.textContent = "El nombre no puede contener numeros"
        return false;        
    }else{
        labelA.textContent = ""
        return true;        
    }
}

function formatoMail(){
    const valorMail = email.value;
    
    if(valorMail.endsWith("@ucasal.edu.ar")){
        labelE.textContent=""
        return true;
    }
    else{
        labelE.textContent="Debe terminar en @ucasal.edu.ar"
        return false;
    }
}

function validarEdad() {
    const fechaIngresada = fecha.value; 
    const hoy = new Date();
    const cumpleanos = new Date(fechaIngresada);
    
    let edad = hoy.getFullYear() - cumpleanos.getFullYear();
    const diferenciaMeses = hoy.getMonth() - cumpleanos.getMonth();

    if (diferenciaMeses < 0 || (diferenciaMeses === 0 && hoy.getDate() < cumpleanos.getDate())) {
        edad--;
    }

    if (edad < 18) {
        labelBirth.textContent = "Debes ser mayor de 18 años.";
        return false;
    } else if (edad > 40) {
        labelBirth.textContent = "Debes ser menor de 40 años.";
        return false;
    } else {
        labelBirth.textContent = ""; 
        return true;
    }
}

function validarContraseña(){
    const Password1 = contra1.value;
    const Password2 = contra2.value;

    if(Password1 != Password2){
        labelCon2.textContent = "Las contraseñas no son iguales"
        return false;
    }
    else{
        labelCon2.textContent = ""
        return true;
    }
}

function validarTodo() {
    const v1 = esNombre();
    const v2 = esApellido();
    const v3 = formatoMail();
    const v4 = validarEdad();
    const v5 = validarContraseña();

    if (v1 && v2 && v3 && v4 && v5) {
        alert("Formulario enviado con éxito");
        return true;
    } else {
        return false; 
    }
}