// Função para atualizar o relógio
function atualizarRelogio() {
    const agora = new Date();
    const horas = String(agora.getHours()).padStart(2, '0');
    const minutos = String(agora.getMinutes()).padStart(2, '0');
    const segundos = String(agora.getSeconds()).padStart(2, '0');
    
    const horarioAtual = `${horas}:${minutos}:${segundos}`;
    console.log(horarioAtual); // Exibe o horário no console

    // Se desejar exibir o horário em um elemento HTML:
    const elementoRelogio = document.getElementById('relogio');
    if (elementoRelogio) {
        elementoRelogio.textContent = horarioAtual;
    }
}

// Atualiza o relógio a cada segundo
setInterval(atualizarRelogio, 1000);

// Para usar no HTML, crie um elemento com o id "relogio"
// <div id="relogio"></div>
