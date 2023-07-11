const mensagemClick = 'Parabens! Você clicou no botão'
var numeroDeClicks = 0;

document.getElementById('button').addEventListener('click', function() {
    if (numeroDeClicks == 0){
        document.getElementById('mensagem').textContent = mensagemClick;
        numeroDeClicks++;
    } else {
        numeroDeClicks++;
        document.getElementById('mensagem').textContent = mensagemClick + ' ' + numeroDeClicks + ' vezes';
    }
})

console.log(numeroDeClicks);



