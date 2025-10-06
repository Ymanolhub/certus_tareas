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

         var nuevoh3= document.createElement("h3");
         var texto=document.createTextNode("ingrese DNI");
         nuevoh3.appendChild(texto);
         vElemento.appendChild(nuevoh3);

         var nuevoInputText= document.createElement("input");
         nuevoInputText.type="number";
         vElemento.appendChild(nuevoInputText);

         
    

         //CREAR  un parrafo de tamaño 20px que pida ingresar tu DNI 
         // CREAR su input number correspondiente


}

function Fqueryselector1() {
    var vObjetoClase=document.querySelector(".classDOM1");
    vObjetoClase.innerHTML="Texto cambiado por query selector a la clase primer indice [0]";

    var vObjetoId= document.querySelector("#ejmDOM1");
    vObjetoId.style.color= "yellow";

    varObjetoTagh2= document.querySelector("h2");
    vObjetoTagh2.style.textAling="center"; //recuerda que afecta al primer elemento de la pagina 


}

function FUsoFor1()
{
  
    const vTextoClass= document.getElementsByClassName("classFOR1");
    var vTextoTotal="";
    //como lenght=4 --> ira desde 0 a 3 
    for(let i=0 ; i< vTextoClass.length; i++)
    {
        vTextoClass[i].style.border="2px solid red";
        vTextoTotal = vTextoTotal + vTextoClass[i].innerText+'-';

    } //fin de for 
    var nuevoH1 =document.createElement("h1");
    var texto =document.createTextNode(vTextoTotal);
    nuevoH1.appendChild(texto);
    vTextoClass[3].appendChild(nuevoH1);

} //fin de function

function FUsoForEach1() {

    const vTextoclass=document.querySelectorAll(".classFOR1");
    var vTextoTotal="";
    //como lenght=4 --> ira desde 0 a 3 
    vTextoclass.forEach
    (iter=>
    {
        iter.style.border="2px solid red";
        vTextoTotal = vTextoTotal + iter.innerText+ '-' ;
    } //fin de for 
    );

    var nuevoh1=document.createElement("h1");
    var texto=document.createTextNode(vTextoTotal);
    nuevoh1.appendChild(texto);
    vTextoclass[3].appendChild(nuevoh1);

}

function FEliminarConcat()
{
    const vTextoClass = document.getElementsByClassName ("classFOR1")
    let rpta =prompt  ("Estas seguro de eliminar el texto concatenado? (S/N)",'');
    if (rpta=="S" || rpta=="s") //doble || significa o
    { let rpta2 =prompt( "Ingrese el numero de fila a eliminar",'' );
        if(rpta2>=0 && rpta2< vTextoClass.length) // doble && significa y
        {
            vTextoClass[rpta2].remove(); //eliminar la class de posicion [rpta2]
        alert("CONCATENACION ELIMINADA"); 
        }

    else 
    {
        alert("Incorrecto, no existe esa fila");
    }

    }
    else
     {  if(rpta=="N" || rpta=="n" )
        { alert("No se eliminará"); 

        }
    else
    {alert("OPCION INCORRECTA-Ingrese nuevamente");

    }

    }
  //removeChild funciona cuando un nodo(class, id, etx) esta dentro de otro
    
}

 function FCapturarNombre(){
    

    const vTexto1 = document.getElementById("Nombre");
    const vTexto2 = document.querySelectorAll("input.datosPersonales");
    const vTexto3 = document.getElementById("clave");
    const vtexto4 = document.getElementById("Apellido");
    const vTexto5 = document.getElementById("usuario");
    // usar input para clases relacionadas a cajas de texto, etc
    vTexto1.style.color="red";

    var valor1 =vTexto1.value; // value detiene el contenido de la caja de texto nombre 
    var valor2 =""; // tipo string
    vTexto3.value=valor1; //asigna el nombre a la clave
    
    var valor3 =vtexto4.value;
    vTexto5.value= valor3;

    
    // foreach recorre todo el contenido del array de la clase de datosPersonales
    vTexto2.forEach(input => {
        valor2 = valor2 + `${input.name}: ${input.value} : ${input.id} \n`; //alt+96
        input.style.border="2px solid orange";
        //para comillas tipotexto permiten colocar variables del form y convertirlas a texto mediante $ 
        });

    vTexto2[1].style.backgroundColor="green";
    document.getElementById('observacion').value = valor2;
    
}
function fValidarCiclo()
{
    //var varciclo=document.get
    const varciclo=document.getElementsByName("ciclo");

    for( let i=0; i < varciclo.length; i ++) {
        if (varciclo [i].checked==true ) {
            document.getElementById('observacion').value= varciclo[i].value;
            return
        }
    }
}

document.addEventListener('DOMContetLoaded', ()=> { 
    const radios  = document.querySelectorAll('input[name="ciclo"]');

    radios.forEach(function(radio){
        radio.addEventListener('change', function(event) {
            
            const cantidad = event.target.value;
            document.getElementById('observacion').value = cantidad;
        }
    );
    }
)
} );
    




