(function () {

    const amigosList = [];

    const input = document.getElementById('amigo');
    const amigosListElement = document.getElementById('listaAmigos');
    const result = document.getElementById('resultado');

    function agregarAmigo() {
        if (!input.value) {
            return alert('Por favor, ingrese un nombre');
        }

        const li = document.createElement('li');

        amigosList.push(input.value);
        input.value = '';

        li.textContent = amigosList[amigosList.length - 1];
        li.id = 'friend_' + amigosList.length;
        
        amigosListElement.appendChild(li);
    }

    function sortearAmigo() {
        if (amigosList.length === 0) {
            return alert('Por favor, ingrese al menos un amigo');
        }

        const length = amigosList.length;

        const randonIndex = Math.floor(Math.random() * length);

        amigosListElement.style.display = 'none';
        result.textContent = amigosList[randonIndex];
    };

    window.onload = function () {
        const addButton = document.getElementById('addButton');
        const sortear = document.getElementById('sortearAmigo');

        addButton.addEventListener('click', agregarAmigo);
        sortear.addEventListener('click', sortearAmigo)
    }

})();