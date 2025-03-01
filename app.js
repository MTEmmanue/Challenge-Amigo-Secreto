// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Lista parar agregar y almacenar los nombres de los amigos
let amigos = [];


function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim(); // Cambiado a 'value'


    //Validar que el campo dado no este vacio
    if (nombreAmigo === '') {
        alert('Por favor ingrese un nombre');
        return; //Detiene la ejecución de la función
    }

    //Validar que el nombre no se repita
    if(amigos.includes(nombreAmigo)){
        alert(`El nombre ${nombreAmigo} ya esta agregado`);
        return;
    }

    //Agregar el nombre a la lista
    amigos.push(nombreAmigo);

    //Limpiar el input
    inputAmigo.value = ''; // Corregido aqu

    //Actualizar la lista de amigos
    actualizarListaAmigos();    
}


//Actualizar la lsta de amigos en el HTML
function actualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');

    //Limpiar el contenido actual de la lista
    listaAmigos.innerHTML = ""; //Limpiar el contenido de la lista

    //Recorrer la lista de amigos 
    for(let i = 0; i < amigos.length; i++){
        const li = document.createElement('li');
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }
    
}

//Funcion para seleccionar un amigo al azar
function sortearAmigo() {
    //Validar que existan amigos en la lista
    if(amigos.length === 0){ //Comprobar si la lista de amigos esta vacia
        alert('No hay amigos en la lista para sortear. Por favor agrega amigos');
        return;
    }

    //Generar un número aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length); //Generar un número aleatorio entre 0 y la longitud de la lista de amigos

    //Obtener el nombre del amigo seleccionado apartir del indice aleatorio
    const amigoSeleccionado = amigos[indiceAleatorio];

    //Mostrar el nombre del amigo seleccionado en el HTML
    const resultado = document.getElementById('resultado');
    resultado.textContent = `Amigo sorteado: ${amigoSeleccionado}`;
     //Eliminar el amigo seleccionado de la lista de amigos
     amigos.splice(indiceAleatorio, 1);

     //Comprobar si la lista de amigos está vacía después de eliminar el amigo
     if (amigos.length === 0) {
         alert('Todos los amigos han sido sorteados. La lista se ha restablecido.');
         // Restablecer la lista de amigos (aquí debes definir cómo restablecer la lista original de amigos)
         // Por ejemplo:
         // amigos = ['Amigo1', 'Amigo2', 'Amigo3', ...];
     }
      //Eliminar todos los amigos de la lista después de mostrar el resultado
    amigos = [];

}

