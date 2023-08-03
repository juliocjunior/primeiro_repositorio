const alunos = [
    { nome: 'João', curso: 'Backend', nota: 7.5 },
    { nome: 'Maria', curso: 'Frontend', nota: 5.0 },
    { nome: 'Pedro', curso: 'Backend', nota: 8.0 },
    { nome: 'Ana', curso: 'Mobile', nota: 6.5 },
    { nome: 'Lucas', curso: 'Backend', nota: 6.0 }
];

function alunosAcimaDe6(alunos) {
    return alunos.filter(function(aluno) {
        return aluno.nota >= 6.0;
    });
}

const alunosAprovados = alunosAcimaDe6(alunos);
console.log(alunosAprovados);