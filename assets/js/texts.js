function addDynamicText(text) {
    const textWrapper = document.querySelector('.text-wrapper');
    const h1Element = document.createElement('h1');

    h1Element.textContent = text;
    
    textWrapper.appendChild(h1Element);
}

// Chamando a função e passando o texto como parâmetro
addDynamicText("Optimiza tu productividad, sumérgete en lo que importa.");
