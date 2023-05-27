const form = document.getElementById('formExercicio');
var campoA = document.getElementById('campoA');
var campoB = document.getElementById('campoB');


function validaForm(campoA, campoB) {
    if (campoB > campoA) {
        return true;
    }
    return false;
}

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const formEValido = validaForm(parseInt(campoA.value), parseInt(campoB.value));
    if (formEValido) {
        const mensagemDeSucesso = `Parabéns! O campo B(${campoB.value}) é maior que o campo A(${campoA.value})`;
        document.querySelector('.mensagemDeSucesso').textContent = mensagemDeSucesso;
        document.querySelector('.mensagemDeSucesso').style.display = 'block';
        document.querySelector('.mensagemErro').style.display = 'none';
    } else {
        const mensagemErro = `Desculpe, o campo A(${campoA.value}) está maior que o campo B(${campoB.value})`
        document.querySelector('.mensagemErro').textContent = mensagemErro;
        document.querySelector('.mensagemErro').style.display = 'block';
        document.querySelector('.mensagemDeSucesso').style.display = 'none';
    }
});