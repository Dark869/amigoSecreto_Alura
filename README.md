# amigoSecreto_Alura
El presente Challenge tiene como objetivo demostrar el conocimiento y las habilidades obtenidas durante la formación de Principiante en Programación.

Para ello se realizo el challenge del amigo secreto que consiste en agregar en un sitio web nombre de distintos amigos y posterior sortearlos para tener como resultado el nombre de ese amigo secreto, para este trabajo ya se contaba con la estructura de HTML, el estilo con CSS, lo que se añadió fue la interacción con JavaScript.

A continuación se explica el funcionamiento del código:

## Función anónima de invocación inmediata

La función anónima tiene como objetivo aislar nuestro código del entorno global y también se ejecuta al instante, también esta se le conoce como IIFE (*Immediately Invoked Function Expression*), en esta función es donde se encuentra el código que se uso para la interacción.

```jsx
(function () {

//Aqui va el codigo

})();
```

## Esperar a que la pagina este cargada y eventos de botones

Antes de que se pueda ejecutar la funcionalidad del archivo `app.js` se define otra función anónima la cual se le pasa como valor al manejador de evento `window.onload` la cual espera a que la pagina este totalmente cargada antes de ejecutar cualquier función, dentro de ella se recupera los IDs de los botones para añadir a los nombre y para sortearlos, estos se guardan en constantes y se les agregan eventos de escucha (`addEventListener`) para que cuando se les de click realicen cierta interacción.

```jsx
//Se espera a que la pagina este cargada
window.onload = function () {
		//Se recuperan los botones
    const addButton = document.getElementById('addButton');
    const sortear = document.getElementById('sortearAmigo');

		//Se les agrega eventos de escucha y se les asigna la función que ejecutaran
    addButton.addEventListener('click', agregarAmigo);
    sortear.addEventListener('click', sortearAmigo)
}
```

## Constantes

Para este trabajo se usaran 4 constantes las cuales pueden ser usadas en cualquier lugar dentro de la función anónima autoejecutable, una se le llamo `amigosList` la cual guarda un arreglo (Array), en esta es donde se guardaran los nombres de los amigos, la segunda se llama `input`, esta recupera el id del `input` del archivo HTML, esta es usada para recuperar el valor que se encuentre en ese momento en el input, el tercero es `amigoListElement`, esta recupera el elemento `ul` del HTML, en esta se agregaran los nombres guardados dentro del arreglo `amigosList`, el ultimo elemento llamado `result` recupera el `ul` con id `resultado`, es esta se mostrara el nombre del amigo que salió en el sorteo.

```jsx
const amigosList = [];

const input = document.getElementById('amigo');
const amigosListElement = document.getElementById('listaAmigos');
const result = document.getElementById('resultado');
```

## Función agregarAmigo

Esta función agrega los nombres de los amigos dentro del arreglo `amigosList` y los muestra en la pagina.

Comienza definiendo una constante con nombre `li` el cual guarda una creación de elemento del mismo nombre. Antes de continuar se realiza una validación, si no existe algún valor recuperado en el `input`, retorna un `alert` con el texto “Por favor, ingrese un nombre”, si no se cumple la condición continua con la ejecución de la función.

Luego de eso se agrega el valor del `input` dentro del arreglo `amigosList`, se limpia la entrada del `input` y en el elemento `li` creado se le asigna el nombre del ultimo valor ingresado en el arreglo, además de asignar un id único y por ultimo se agrega como elemento hijo de `amigosListElement`.

```jsx
function agregarAmigo() {
    const li = document.createElement('li');

    if (!input.value) {
        return alert('Por favor, ingrese un nombre');
    }

    amigosList.push(input.value);
    input.value = '';

    li.textContent = amigosList[amigosList.length - 1];
    li.id = 'friend_' + amigosList.length;
    
    amigosListElement.appendChild(li);
}
```

## Función sortearAmigo

Esta función elige un numero aleatorio entre 1 y el tamaño del arreglo, y se recupera el valor de esa posición para mostrar en la pagina.

Se valida si el tamaño del arreglo `amigosList` es totalmente igual a 0, si la condición se cumple se retorna un alert con el texto “Por favor, ingrese al menos un amigo” si no se cumple la condición continua con el resto de la función. Se guarda el tamaño del arreglo `amigosList` en la constante `lengtn` luego en la constante `randonIndex` se guarda un valor random usando length como valor máximo, por ultimo se oculta el elemento recuperado por `amigosListElement` y de concatena el valor recuperado en la posición de amigosList.

```jsx
function sortearAmigo() {
    if (amigosList.length === 0) {
        return alert('Por favor, ingrese al menos un amigo');
    }

    const length = amigosList.length;

    const randonIndex = Math.floor(Math.random() * length);

    amigosListElement.style.display = 'none';
    result.textContent = amigosList[randonIndex];
};
```
