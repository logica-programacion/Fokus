function addDynamicText(text) {
     // Seleciona o elemento da seção com a classe "text-wrapper"
    const textWrapper = document.querySelector('.text-wrapper');

    // Cria um elemento <h1>
    const h1Element = document.createElement('h1');

    //Acessando elemento <h1> e modificando o seu valor
    h1Element.textContent = text;

    // Adiciona o elemento <h1> à seção
    textWrapper.appendChild(h1Element);
}

// Chamando a função e passando o texto como parâmetro
addDynamicText("Optimiza tu productividad, sumérgete en lo que importa.");
// addDynamicText("¿Qué tal tomar un respiro? ¡Tómate un breve descanso!");
// addDynamicText("Es hora de volver a la superficie. Toma un largo descanso.");
