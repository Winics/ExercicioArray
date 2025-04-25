const alunos = ['Winicios', 'Gabrieli', 'Douglas', 'Gean'];

const nota = alunos.map(function(nomeDoAlunos) {
    nomeDoAlunos = {
        nome: nomeDoAlunos,
        nota: 60
    }

    return nomeDoAlunos;
})

const semNota = function() {
    nota.forEach(function(aluno) {
        if(aluno.nota === undefined) {
            aluno.nota = 0;
        }
    });
}

function alteraNota (nome, novaNota) {
    nota.forEach(function(aluno) {
        if(aluno.nome === nome) {
            aluno.nota =novaNota;
        }
    });
}

nota.push ({
    nome: 'Ricardo'
})

alteraNota('Winicios', 90);
alteraNota('Douglas', 50);

semNota();

const alunosAprovados = nota.filter(function(aluno) {
    return aluno.nota >= 60;
});

const alunosReprovados = nota.filter(function(aluno) {
    return aluno.nota <= 59;
});

const contarTodos = function() {
    return nota.length;
}

const totalAlunos = contarTodos();

const ContarAprovados = function() {
    let numeroAprovados = 0;
    nota.forEach(function(aluno) {
        if (aluno.nota >= 60) {
            numeroAprovados++;
        }
    });
    return numeroAprovados;
};

const totalAprovados = ContarAprovados();

const ContarReprovados = function() {
    let numeroReprovados = 0;
    nota.forEach(function(aluno) {
        if (aluno.nota <= 59) {
            numeroReprovados++;
        }
    });
    return numeroReprovados;
};
const totalReprovados = ContarReprovados();

console.log("Alunos")
console.log(nota);
console.log("Total de alunos:", totalAlunos)

console.log("---------------------------------")

console.log("Alunos Aprovados")
console.log(alunosAprovados);
console.log("Total de alunos:", totalAprovados)

console.log("---------------------------------")

console.log("Alunos Reprovados")
console.log(alunosReprovados);
console.log("Total de alunos:", totalReprovados)