function funcionario (nome, cargo, salario) {
    this.nome = nome;
    this.cargo = cargo;
    this.salario = salario;
    this.apresentar = function() {
        console.log(`Olá, meu chamo ${this.nome}, é um prazer te conhecer.`);
    }
}

<<<<<<< HEAD
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
=======
    fetch('https://api.github.com/users/juliocjunior')
    .then(function(res) {
        return res.json()
    })
    .then (function(json) {
        avatar.src = json.avatar_url;
        name.innerHTML = json.name;
        username.innerHTML = json.login;
        repositories.innerHTML = json.public_repos;
        followers.innerHTML = json.followers;
        following.innerHTML = json.following;
        profileLink.href = json.html_url;
    })
    .catch (function(erro) {
        alert('Ocorreu um erro ao buscar as informações, tente novamente mais tarde')
    })
})
>>>>>>> 8969ed3e2bdad521c45377f85d33e9db2356789a
