function tarefaDemorada (){
    const agora = new Date();
    const futuro = agora.getTime()+ 3000 //add 3 segundos
    while(new Date().getTime() < futuro) {}
}

console.log("iniciando o programa...")
console.log("execultando tarefa 1")
tarefaDemorada()
console.log("tarefa 1 consluida")

console.log("execultando tarefa 2")
tarefaDemorada()
console.log("tarefa 2 consluida")
console.log("programa finalizado")