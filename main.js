function funcionario (nome, cargo, salario) {
    this.nome = nome;
    this.cargo = cargo;
    this.salario = salario;
    this.apresentar = function() {
        console.log(`Olá, meu chamo ${this.nome}, é um prazer te conhecer.`);
    }
}

function estagiario(nome,cargo,salario) {
    funcionario.call(this, nome, cargo, salario);

    this.cargo = 'Estágiario';
    this.salario = 1000;

    this.pedirAjuda = function() {
        console.log(`${this.nome} diz: ei, você pode me ajudar pfv?`)
    }
}

function gerente(nome, cargo, salario) {
    funcionario.call(this, nome, cargo, salario);

    this.cargo = 'Gerente';
    this.salario = 10000;

    this.vaiTrabalhar = function () {
        console.log(`${this.nome} diz: Parem com isso e vão trabalhar!`);
    }
}

const joao = new estagiario('João');
const lucas = new estagiario('Lucas');
const maria = new gerente('Maria');

joao.pedirAjuda();
maria.vaiTrabalhar();
