function renderDynamicContent(normalText, boldText) {
    // Seleciona o elemento <section> com a classe "text-wrapper"
    const sectionElement = document.querySelector(".text-wrapper");
    
    // Criação dos elementos <h1> e <span>
    const h1Element = document.createElement('h1');
    h1Element.classList.add('text-wrapper-normal');
    
    const spanElement = document.createElement('span');
    spanElement.classList.add('text-wrapper-bold');
    
    // Definir os textos dos elementos
    h1Element.textContent = normalText;
    spanElement.textContent = boldText;
    
    // Anexar o <span> ao <h1>
    h1Element.appendChild(spanElement);
    
    // Limpar o conteúdo anterior da seção
    sectionElement.innerHTML = '';
    
    // Anexar o <h1> à seção
    sectionElement.appendChild(h1Element);
}

// Chamando a função para renderizar o conteúdo
renderDynamicContent("Optimiza tu productividad", " sumérgete en lo que importa.");

// renderDynamicContent("¿Qué tal tomar un respiro?", " ¡Tómate un breve descanso!");
