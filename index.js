/*
Bienvenido/a!!

Te proponemos 10 ejercicios de JS para resolver de forma individual. Si te trabas con alguno, podes continuar con otro de forma independiente. Si corresponde el ejercicio tiene un <div> asignado en el HTML para visualizar el resultado. Algunos te piden solo tocar JS otros, JS + HTML.

Exitos! Happy coding! - Guayerd
*/

/*
Ej - 1: Mostrar con alert el siguiente texto... "Bievenidas/os al Maratón Guayerd"

const texto = "Bievenidas/os al Maratón Guayerd";
alert(texto);
*/



/*
Ej - 2: Completar/arreglar el código para que la función focusHandler() se ejecute cuando el foco este puesto en el input.ej2-nombre. Y cuando el foco se pierda (evento blur), borrar el contenido del div.
*/
const ej2Nombre = document.querySelector("input.ej2-nombre");
const ej2Resultado = document.querySelector("div.ej2-resultado");
ej2Nombre.addEventListener("focus", focusHandler);
ej2Nombre.addEventListener("blur", blurHandler);

function focusHandler(e){
  ej2Resultado.innerText = "El input nombre tiene el foco";
}

function blurHandler(e){
  ej2Resultado.innerText = "";
}

/*
Ej - 3: Codear la función mostrarSaludo() para mostrar un saludo desde el div.ej3
*/

const ej3Div = document.querySelector(".ej3-resultado");

function mostrarSaludo(text, element)
{
  ej3Div.innerText = text;
}

const txtSaludo = "Arranquemos la maratón de código Guayerd! Starting at..." + (new Date()).toLocaleString();
mostrarSaludo(txtSaludo, ej3Div);


/*
Ej - 4: Cuando el usuario haga "click" sobre el botón button.ej4-enviar:
  a) Leer los campos ej4-email, ej4-mensaje
  b) Mostrar el valor de esos campos en div.ej4-resultado
  c) Limpiar los campos asignando "" a los mismos
*/

let btn4Send = document.querySelector('button.ej4-enviar');
let input4email = document.querySelector('input.ej4-email');
let input4msj = document.querySelector('input.ej4-mensaje');
let div4resultado = document.querySelector('div.ej4-resultado');


btn4Send.addEventListener("click", showData)


function showData()
{
  let data = input4email.value + " " + input4msj.value;
  div4resultado.innerText = data;

  input4email.value = "";
  input4msj.value = "";
}

/*
Ej - 5: Crear un div con 2 inputs y un boton "Sumar"
  a) Cuando se clickea en "sumar", sumar ambos valores de inputs y mostrar el resultado en el div.ej5-resultado
  b) Si alguno de los valores ingresados no es numérico (isNaN) informar en div.ej5-resultado "Ingreso erróneo"
*/

let div5sumar = document.querySelector('div.ej5-sumar');

let fragment5 = new DocumentFragment;
let inputFactor1 = document.createElement("input");
let inputFactor2 = document.createElement("input");
let button5sumar = document.createElement("button");

button5sumar.textContent = "Sumar";
fragment5.appendChild(inputFactor1);
fragment5.appendChild(inputFactor2);
fragment5.appendChild(button5sumar);

div5sumar.appendChild(fragment5);

button5sumar.addEventListener("click", initSuma5);

function initSuma5()
{
  let rta = sumarEj5();
  let div5Resultado = document.querySelector('div.ej5-resultado');
  div5Resultado.innerText = rta;
}

function sumarEj5()
{
  let rta;
  if ( !isNaN(inputFactor1.value) && !isNaN(inputFactor2.value) )
  {
    rta = Number(inputFactor1.value) + Number(inputFactor2.value);
    console.log(rta);
  }
  else
  {
    rta = "Ingreso erróneo";
  }

  return rta;  
}

/*
Ej - 6: Completar los elementos <select> del div.ej6 con los arrays correspondientes. Recorrerlos y crear los <option> según corresponda
*/
const paises = ["Argentina","Bolivia","Brasil","Chile","Colombia","Ecuador","Paraguay","Perú","Uruguay","Venezuela"];
const diasSemana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

let selectPaises = document.querySelector('select.ej6-paises');
let selectSemana = document.querySelector('select.ej6-diasSemana');

let fragmentPaises = new DocumentFragment;
let fragmentSemana = new DocumentFragment;

paises.forEach(function(pais)
{
  let newOption = document.createElement("option");
  newOption.value = pais;
  newOption.textContent = pais;
  fragmentPaises.appendChild(newOption);
});

diasSemana.forEach(function(dia)
{
  let newOption = document.createElement("option");
  newOption.value = dia;
  newOption.textContent = dia;
  fragmentSemana.appendChild(newOption);
});

selectPaises.appendChild(fragmentPaises);
selectSemana.appendChild(fragmentSemana);

/*
Ej - 7: Dado el siguiente array, mostrar en el div.ej7-resultado el valor del select cuando el usuario selecciona un valor
*/
const momentos = ["Mañana","Tarde","Noche"];

let selectMomentos = document.querySelector('select.momentos');

let fragMomentos = new DocumentFragment;

momentos.forEach(function(momento)
{
  let newTimeOption = document.createElement("option");
  newTimeOption.value = momento;
  newTimeOption.textContent = momento;
  fragMomentos.appendChild(newTimeOption);
});

selectMomentos.appendChild(fragMomentos);

selectMomentos.addEventListener("change", changeHandler);

function changeHandler()
{
  let div7Resultado = document.querySelector('div.ej7-resultado');
  div7Resultado.innerText = selectMomentos.value;
}


/*
Ej - 8: Validar un ingreso de usuario al sistema utilizando localStorage. Mostrar en div.ej8-resultado "OK" o "Error".
  El form esta creado en el div.ej8
*/
localStorage.setItem("password","js2020"); //Este es el password que deben comparar con el ingreso del usuario


let btnLogIn = document.querySelector('button#ingresar');

btnLogIn.addEventListener("click", checkLogIn);


function checkLogIn()
{
  let inputPass = document.querySelector('input#password');
  let div8Resultado = document.querySelector('div.ej8-resultado');
  


  if ( inputPass.value === localStorage.getItem("password") )
  {
    div8Resultado.innerText = "OK";
  }
  else
  {
    div8Resultado.innerText = "Error";
  }
  
}

/*
Ej - 9: Mostrar en el div.ej9-resultado el listado de usuarios que se encuentra en el array utilizando la siguiente plantilla:

<div class="usuario-contenedor">
  <div class="fila1">
    <span class="title">Nombre:</span><span>valor</span>
    <span class="title">NroCliente:</span><span>valor</span>
  </div>
  <div class="fila2">
    <span class="title">DNI:</span><span>valor</span>
    <span class="title">Fecha Nacimiento:</span><span>valor</span>
  </div>
</div>

*/

const usuarios = [
  {
    nombre: "Juan Perez",
    nroCliente: 1001,
    dni: 88888888,
    fechaNacimiento: "10/10/1988"
  },
  {
    nombre: "Ana Martinez",
    nroCliente: 1010,
    dni: 88888886,
    fechaNacimiento: "10/10/1990"
  },
  {
    nombre: "Susana Gomez",
    nroCliente: 1021,
    dni: 88888889,
    fechaNacimiento: "10/10/1985"
  },
];


let div9Resultado = document.querySelector('div.ej9-resultado');



usuarios.forEach(function(usuario)
{
  div9Resultado.innerHTML += 
      `<div class="usuario-contenedor">
        <div class="fila1">
          <span class="title">Nombre: </span><span>${usuario.nombre}</span>
          <span class="title">NroCliente: </span><span>${usuario.nroCliente}</span>
        </div>
        
        <div class="fila2">
          <span class="title">DNI: </span><span>${usuario.dni}</span>
          <span class="title">Fecha Nacimiento: </span><span>${usuario.fechaNacimiento}</span>
        </div>
      </div>`
});


/*
Ej - 10: Nuestro cliente es una empresa de marketing que busca generar una base de datos de contactos para poder vender productos. Debemos crear para ellos un formulario de carga con los siguientes datos:

  - Nombre
  - Email
  - Teléfono
  - Horario de contacto (Mañana/Tarde/Noche)
  - Producto (Crédito/Celular/Viajes/Seguros)
  - Botón "Guardar"
  - Botón "Finalizar"

  a) Crear el <form> dentro del elemento div.ej10-form
  b) Crear los elementos input, select, button que correspondan
  c) Cuando el usuario hace "click" en el botón, guardar los datos de contacto en un array
  d) Limpiar los elementos del form
  e) Cada vez que se guarden datos, guardarlos tambien en localStorage
  f) Cuando la página se vuelve a cargar, recuperar el array desde localStorage si es que existe.
  e) Cuando se hace click en "Finalizar", mostrar de forma clara el listado de contactos y sus datos dentro de div.ej10-resultado y limpiar el localStorage.

  Bonus!!
  1) Validar los datos según el tipo.
  2) Todos los datos son requeridos. Evitar cargar datos vacios.
  3) Evitar cargar datos si el email ya existe en el array de contactos.
  4) En todos los casos, informar de forma clara al usuario si hay problemas de validación de datos.
*/



const formulario = document.querySelector(".ej10-form");


//Creo un formulario
let form = document.createElement("form");
form.classList.add("ejercicio-10");
form.setAttribute("method", "GET");
formulario.appendChild(form);
//-----------------------------------------------------------


//Creo input Nombre
let input_nombre = document.createElement("input");
input_nombre.setAttribute("type", "text");
input_nombre.setAttribute("name", "nombre");
input_nombre.setAttribute("placeholder", "Ingrese su nombre");
input_nombre.setAttribute("id", "nombre");
input_nombre.required = "true";


//Creo label de nombre
let label_nombre = document.createElement("label");
label_nombre.setAttribute("for", "nombre");
label_nombre.innerText = " Nombre: ";


//Agrego el nombre y el input del nombre al formulario
form.appendChild(label_nombre);
form.appendChild(input_nombre);
//-----------------------------------------------------------


//creo el input mail
let input_email = document.createElement("input");
input_email.setAttribute("type", "email");
input_email.setAttribute("name", "email");
input_email.setAttribute("placeholder" , "Ingrese su mail");
input_email.setAttribute("id", "email");
input_email.required = "true";


//Creo label de mail
let label_email = document.createElement("label");
label_email.setAttribute("for", "email");
label_email.innerText = " Email: ";


//Agrego el nombre y el input del mail al formulario
form.appendChild(label_email);
form.appendChild(input_email);
//-----------------------------------------------------------


//Creo el input de telefono
let input_telefono = document.createElement("input");
input_telefono.setAttribute("type", "number");
input_telefono.setAttribute("name", "telefono");
input_telefono.setAttribute("placeholder", "Ingrese su telefono"); 
input_telefono.setAttribute("id", "telefono");
input_telefono.setAttribute("required", "true");


//Creo label de telefono
let label_telefono = document.createElement("label");
label_telefono.setAttribute("for", "telefono");
label_telefono.innerText = " Telefono: ";


//Agrego el nombre y el input del telefono al formulario
form.appendChild(label_telefono);
form.appendChild(input_telefono);
//-----------------------------------------------------------


//creo select de horarios de contacto
let select_horarios = document.createElement("select");
select_horarios.setAttribute("id", "horariosDeContacto");
select_horarios.setAttribute("name", "horarios_contacto");
select_horarios.setAttribute("value", "horarios de contacto");
select_horarios.required = "true";

let option_horario_manana = document.createElement("option");
option_horario_manana.value = "Mañana";
option_horario_manana.innerText = "Mañana";

let option_horario_tarde = document.createElement("option");
option_horario_tarde.value = "Tarde";
option_horario_tarde.innerText = "Tarde";

let option_horario_noche = document.createElement("option");
option_horario_noche.value = "Noche";
option_horario_noche.innerText = "Noche";


//Creo label de horarios de contacto
let label_horarios = document.createElement("label");
label_horarios.setAttribute("for", "horarios_contacto");
label_horarios.innerText = "Horario de contacto: ";


//Agrego las opciones al select
select_horarios.appendChild(option_horario_manana);
select_horarios.appendChild(option_horario_tarde);
select_horarios.appendChild(option_horario_noche);


//Agrego el select al formulario
form.appendChild(label_horarios);
form.appendChild(select_horarios);
//-----------------------------------------------------------


//Creo el select de productos
let select_productos = document.createElement("select");
select_productos.setAttribute("id", "productos");
select_productos.setAttribute("name", "productos");
select_productos.required = "true";

let option_producto_creditos = document.createElement("option");
option_producto_creditos.value = "creditos";
option_producto_creditos.innerText = "Creditos";

let option_producto_celular = document.createElement("option");
option_producto_celular.value = "celular";
option_producto_celular.innerText = "Celular";

let option_producto_viajes = document.createElement("option");
option_producto_viajes.value = "viajes";
option_producto_viajes.innerText = "Viajes";

let option_producto_seguros = document.createElement("option");
option_producto_seguros.value = "seguros";
option_producto_seguros.innerText = "Seguros";


//Creo label de horarios de contacto
let label_productos = document.createElement("label");
label_productos.setAttribute("for", "productos");
label_productos.innerText = "Productos: ";


//Agrego las opciones al select
select_productos.appendChild(option_producto_creditos);
select_productos.appendChild(option_producto_celular);
select_productos.appendChild(option_producto_viajes);
select_productos.appendChild(option_producto_seguros);


//Agrego el select al formulario
form.appendChild(label_productos);
form.appendChild(select_productos);
//-----------------------------------------------------------


//Creo el boton Guardar
let boton_guardar = document.createElement("button");
boton_guardar.setAttribute("type", "submit");
boton_guardar.setAttribute("id" , "boton-guardar")
boton_guardar.innerText = "Guardar";
form.appendChild(boton_guardar);
//-----------------------------------------------------------


//Creo el boton Finalizar
let boton_finalizar = document.createElement("button");
boton_finalizar.setAttribute("type", "submit");
boton_finalizar.setAttribute("id", "boton-finalizar");
boton_finalizar.innerText = "Finalizar";
form.appendChild(boton_finalizar);
//-----------------------------------------------------------


// Definicion de variables y constantes
const guardar = document.querySelector("#boton-guardar");
const finalizar = document.querySelector("#boton-finalizar");
const ej10_resultados = document.querySelector("div.ej10-resultado");
let nombre = document.querySelector("#nombre");
let email = document.querySelector("#email");
let telefono = document.querySelector("#telefono");
let horario = document.querySelector("#horariosDeContacto");
let producto = document.querySelector("#productos");


//Clave del LS
const CONTACTS_LS = "contactos";


// Identificador único para consultas al arreglo de constactos de LocalStorage
let contactsFromLS;
//-----------------------------------------------------------


//Eventos-----------------------------------------------------------------------------------------------------------------------
guardar.addEventListener("click" , guardarDatosContacto);
finalizar.addEventListener("click" , finalizarHandler);
telefono.addEventListener("blur", validarTelefono);
//-----------------------------------------------------------------------------------------------------------------------------


//Funciones Handler ---------------------------------------------------------------------------------------------------------
function guardarDatosContacto(e)
{
  e.preventDefault();

  contactsFromLS = localStorage.getItem(CONTACTS_LS);

  if ( !existeEmail(email.value, JSON.parse(contactsFromLS)) )
  {
    let contacto = crearContacto(nombre.value , email.value , telefono.value , horario.value , producto.value);

    if ((contactsFromLS === null)) 
    {
      let arrayContactos = [];
      arrayContactos.push(contacto);
      guardarDatosEnLS(arrayContactos);
      limpiarCampos();
    } 
    else 
    {
      let contactos = JSON.parse(contactsFromLS);
      contactos.push(contacto);
      guardarDatosEnLS(contactos);
      limpiarCampos();
    }
  }
  else
  {
    alert("El mail ya está registrado en el sistema.")
    email.value = "";
  }
}

function finalizarHandler(e)
{
  e.preventDefault();
  mostrarArray();
}
function mostrarArray()
{
  contactsFromLS = localStorage.getItem(CONTACTS_LS);
  let contactos = JSON.parse(contactsFromLS);

  let listado = document.createElement("ol");

  contactos.forEach(function(contacto)
  {
    let itemContacto = document.createElement("li");

    let listaContacto = document.createElement("ul");

    let liNombre = document.createElement("li");
    let liMail = document.createElement("li");
    let liTelefono = document.createElement("li");
    let liHorario = document.createElement("li");
    let liProducto = document.createElement("li"); 

    liNombre.innerText = contacto.nombre;
    liMail.innerText = contacto.email;
    liTelefono.innerText = contacto.telefono;
    liHorario.innerText = contacto.horario;
    liProducto.innerText = contacto.producto;

    listaContacto.appendChild(liNombre);
    listaContacto.appendChild(liMail);
    listaContacto.appendChild(liTelefono);
    listaContacto.appendChild(liHorario);
    listaContacto.appendChild(liProducto);

    itemContacto.appendChild(listaContacto);

    listado.appendChild(itemContacto)
  }); 

  ej10_resultados.appendChild(listado);
  localStorage.removeItem(CONTACTS_LS);

}

//Otras funciones --------------------------------------------------------------------------
function guardarDatosEnLS(array)
{
  let string = JSON.stringify(array);
  localStorage.setItem(CONTACTS_LS , string);
}
function crearContacto (nombre , email , telefono , horario , producto)
{
  let contacto = Object.assign({nombre, email, telefono, horario, producto}); 
  return contacto;
}


function limpiarCampos()
{
  nombre.value = "";
  email.value = "";
  telefono.value = "";
}

function existeEmail(mail, array)
{
  let respuesta = false;

  if ( array != null )
  {
    let i = 0;
    while ( respuesta == false && i < array.length )
    {
      const contacto = array[i];
      if ( contacto.email === mail )
      {
       respuesta = true;
      }

      i++;
    }
  }

  return respuesta;
}


function validarTelefono()
{
  if ( isNaN(telefono.value) )
  {
    telefono.setCustomValidity("Formato incorrecto.");
  }
}




















