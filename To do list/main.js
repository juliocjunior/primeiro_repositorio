const tarefasIncluidas = [];

$(document).ready(function() {
    $('form').on('submit', function(e) {
        e.preventDefault();
        adicionaNovaTarefa();
    })
    marcaComoFeito();
});

function adicionaNovaTarefa () {
    const inputNovaTarefa = $('#inputNovaTarefa').val();
    const adicionaNovaTarefaNoUl = $(`<li>${inputNovaTarefa}</li><br>`);

    if (tarefasIncluidas.includes(inputNovaTarefa)){
        alert(`A tarefa: '${inputNovaTarefa}' já foi adicionada, utilize outro nome para criar uma nova tarefa.`);  
    } else {
        tarefasIncluidas.push(inputNovaTarefa);
        adicionaNovaTarefaNoUl.appendTo('#ul');
    }

    $('#inputNovaTarefa').val(''); 
}

function marcaComoFeito(){
    $('#ul').on('click', 'li', function (){
        $(this).toggleClass('feito'); 
    }); 
}

