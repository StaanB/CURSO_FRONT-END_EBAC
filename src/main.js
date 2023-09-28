const notaDaTurma = [{ "Nome": "João", "Nota": 7 }, { "Nome": "Fábio", "Nota": 8.5 }, { "Nome": "Maria", "Nota": 5 }, { "Nome": "Felipe", "Nota": 2 }, { "Nome": "Eduarda", "Nota": 9 }, { "Nome": "Marta", "Nota": 10 }]

const mostrarAprovadosDaTurma = notaDaTurma.filter((aluno) => {
    return aluno.Nota >= 6
})

console.log(mostrarAprovadosDaTurma);