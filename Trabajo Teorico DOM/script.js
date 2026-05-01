//Ejercicios de manejo de arrays

//1-
/*
let numeros = [1,2,3,4,5,6,7,8]

function pares(x){
    for(let i=0;i < x.length;i++){
            if(x[i]%2==0){
                console.log(x[i])
            }
    }
}

pares(numeros)
*/

//2-
/*
let numeros = [1,2,2,4,6,4,7,2]

function eliminarRepetidos(x){
    let numerosUnicos=[]
    for(let i=0; i<x.length;i++){
        let esRepetido=false;
        for(let j=i+1; j<x.length;j++){
            if(x[i]==x[j]){
                esRepetido=true;
                break
            }
        }
        if(!esRepetido){
            numerosUnicos.push(x[i])
        }

    }
    return numerosUnicos;
}
console.log(eliminarRepetidos(numeros))*/

//3-
/*
let nombres =["Pedro", "Marcos", "Adriana", "Martina"]
console.log(nombres.sort())
let numeros =[20,15,3,4,66]
console.log(numeros.sort())*/

//4-
/*
let numeros = [1,2,3,4,5,66,55]
function sumarNumeros(x){
    let suma=0;
    for(let i=0; i<x.length;i++){
        suma+=x[i]
    }
    return suma;
}

console.log(sumarNumeros(numeros))*/

//5-
/*
let nombres = ["Pedro", "Marcos", "Adriana", "Martina"]

function buscarNombre(x,nombre){
    let indice=0;
    for(let i=0; i<x.length;i++){
        if(x[i].toLowerCase().trim()==nombre.toLowerCase().trim()){
            indice=i;
        }else{
            indice=-1
        }
    }
    return indice;
}

console.log(buscarNombre(nombres,"Martina"))

*/

//Ejercicios de manejo del DOM con javascript

//1-
/*
const nombre=["Pedro", "Marcos", "Adriana", "Martina"]
const listaUl= document.getElementById("mi-lista")

nombre.forEach(texto=>{
    const li=document.createElement("li")
    li.textContent=texto;
    listaUl.appendChild(li);
})
    

//2-

let mip = document.getElementById("mip")
mip.textContent="Texto Cambiado"

*/
//3-
/*
const boton = document.getElementById('miBoton');

function alternarClase() {
  boton.classList.toggle('activo');
}
boton.addEventListener('click', alternarClase);
*/
//4-
/*
const baseDeDatos = [];

const formulario = document.getElementById('miFormulario');
const listaVisual = document.getElementById('listaUsuarios');

function actualizarLista() {
  listaVisual.innerHTML = '';

  baseDeDatos.forEach((usuario) => {
    const li = document.createElement('li');
    li.textContent = `Nombre: ${usuario.nombre} - Email: ${usuario.email}`;
    listaVisual.appendChild(li);
  });
}

formulario.addEventListener('submit', (e) => {
  e.preventDefault();

  const nombreVal = document.getElementById('nombre').value;
  const correoVal = document.getElementById('correo').value;

  baseDeDatos.push({
    nombre: nombreVal,
    email: correoVal
  });

  actualizarLista();

  formulario.reset();
});

*/
//5-
/*
const usuarios = [
  { id: 1, nombre: "Ana García", rol: "Diseñadora", imagen: "https://picsum.photos/100?random=1" },
  { id: 2, nombre: "Luis Pérez", rol: "Desarrollador", imagen: "https://picsum.photos/100?random=2" },
  { id: 3, nombre: "Marta Ruiz", rol: "Manager", imagen: "https://picsum.photos/100?random=3" }
];

const contenedor = document.getElementById('contenedor-usuarios');

function renderizarTarjetas(datos) {
  const htmlTarjetas = datos.map(usuario => `
    <div class="tarjeta">
      <img src="${usuario.imagen}" alt="${usuario.nombre}">
      <h3>${usuario.nombre}</h3>
      <p>Puesto: <strong>${usuario.rol}</strong></p>
    </div>
  `).join(''); 

  contenedor.innerHTML = htmlTarjetas;
}

renderizarTarjetas(usuarios);
*/