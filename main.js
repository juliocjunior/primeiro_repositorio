const alunos = [
    { nome: 'João', nota: 7.5 },
    { nome: 'Maria', nota: 5.0 },
    { nome: 'Pedro', nota: 8.0 },
    { nome: 'Ana', nota: 6.5 },
    { nome: 'Lucas', nota: 6.0 }
];

function alunosAcimaDe6(alunos) {
    return alunos.filter(function(aluno) {
        return aluno.nota >= 6.0;
    });
}

const alunosAprovados = alunosAcimaDe6(alunos);
console.log(alunosAprovados);
