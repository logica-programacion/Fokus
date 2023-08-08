// Função para alterar a cor de fundo de um elemento
function changeBackgroundColor(elementSelector, color) {
    const element = document.querySelector(elementSelector);
    
    if (element) {
        element.style.backgroundColor = color;
        element.style.borderColor = color;  
    }
}

// Chame a função para alterar as cores de fundo
changeBackgroundColor('.progress--focus', '#9757FF4D');
changeBackgroundColor('.progress--short', '#02CDA133');
changeBackgroundColor('.progress-big', '#1875E9');
