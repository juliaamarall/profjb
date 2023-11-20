// INICIO JAVASCRIPT, ANIMAÇÃO DOS BUTÕES (TESTE DE CONSOLE.LOG):

function animateButtonClick(buttonNumber) {
    // Adicione a lógica da sua animação aqui
    console.log("Botão " + buttonNumber + " clicado!");
}

// CONFIGURAÇÃO DA DATA:
function showDate() {
    const dateContainer = document.querySelector('.date-text');
    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.toLocaleDateString('pt-BR', { month: 'long' });
    dateContainer.innerHTML = `<div>${day}</div><div>${month}</div>`;
}

showDate();

// HOVER PARA A IMAGEM DE PERFIL (ALTAMENTE NECESSÁRIO!):

// Seleciona a imagem e a mensagem:
const imagem = document.getElementById('imagem');
const imagemp = document.getElementById('imagemp');


// Adiciona o evento de mouseover na imagem:
imagem.addEventListener('mouseover', function() {
imagemp.style.transition = '0.5s';
imagemp.style.filter = 'brightness(70%)';
imagemp.style.cursor = 'pointer';
});

// Adiciona o evento de mouseout na imagem:
imagem.addEventListener('mouseout', function() {
imagemp.style.transition = '0.5s';
imagemp.style.filter = 'brightness(100%)';
});