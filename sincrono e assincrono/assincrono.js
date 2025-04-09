function tarefaDemorada(nome, tempo) {
    setTimeout(() => {
        console.log(`Tarefa ${nome} concluida`)
    }, tempo)
}
    
console.log("iniciando o programa")
console.log("execultando tarefa 1")
tarefaDemorada(1, 300)


console.log("execultando a tarefa 2")
tarefaDemorada(2, 300)

console.log ("programa finalizado (mas as tarefas ainda estao acontecendo")