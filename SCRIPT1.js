let varGlobal1="Esta es una variable global"
window.vTexto1="";
function Fcambiocolor() 
{
    vTexto1 = document.getElementById( "ejmDOM1");

    vTexto1.textcontent="Texto cambiado por funcion Fcambiocolor()";
    vTexto1.style.color="red";
    vTexto1.style.backgroundColor="darkblue";
    vTexto1.insertAdjacentHTML("afterend", "texto adicional <br><br>");
    console.log("Texto por consola");

}
function Fcambioclase1() {
    let vTexto2=document.getElementsByClassName("classDOM1");
    vTexto2[1].innerText="Elemento [1] del arreglo \n de clase classDOM1";
    vTexto2[1].style.color="cyan";

    console.log("Tamaño del array=",vTexto2.length);
    // se coloca el indice 1 por ser  el 2do elemento de la clase classDOM1 de la  pag web

    vTexto2[0].innerText="Elemento [0] del arreglo" + 
                         "de clase classDOM1 ; Concatenado con global:" + varGlobal1 +
                         "\n y su tipo de variable es:" +typeof(varGlobal1); 

    vTexto2[2].innerHTML="Tamaño del array=" + vTexto2.length +
                         "\n y su tipo de variable es: "+ typeof(vTexto2);
}
function Fcambiotag1() {
    let vTexto3=document.getElementsByTagName('h2');
    vTexto3[0].innerHTML="Elemento 1er h2 cambiado por TagDOM1";
    vTexto3[15].innerHTML="Elemento ultimo h2 cambiado por TagDOM1";
    vTexto3[15].style.color="magenta";
    varGlobal1="variable global modificada";
      vTexto3[15].innerHTML=`Tipo de variable de la varGloval1 es: ${typeof(varGlobal1)}`;

}
function FCrear1() {
    let vLista=document.getElementById("ejmDOM1");
    vLista.style.backgroundColor="white";
    vLista.innerHTML= "  <ul align='center'  style='color:rgb(47, 59, 34)'> " + 
                " <li>Capacidad de atencion</li> " +
                    " <li>Consultar dudas no resueltas</li> " +
                    " <li>Repasar temas y realizar tareas en casa</li>" +
                " </ul> " ;
}

function FAgregarTextoPermanenete1() {

    let vtexto4="<br> <p style= 'font-size: 15px;'> Texto agregado con concatenacion </p>  ";
    vTexto1.innerHTML= vTexto1.innerHTML + vtexto4;
}

function FCrearElemento() {
    var vElemento = document.getElementById("complementario1");

    var nuevoh3= document.createElement("h3");
    var texto=document.createTextNode("deporte favorito");
    nuevoh3.appendChild(texto);
    vElemento.appendChild(nuevoh3);
    //CREAR un input text para poder completar el deporte favortito 

    var nuevoInputText= document.createElement("input");
         nuevoInputText.type="text";

         vElemento.appendChild(nuevoInputText);
         //CREAR  un parrafo de tamaño 20px que pida ingresar tu DNI 
         // CREAR su input number correspondiente


}








