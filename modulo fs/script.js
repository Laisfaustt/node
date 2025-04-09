const fs = require ("fs")

fs.writeFileSync("mensagem.txt", "oi, criei esse arquivo pelo node")
console.log("arquivo criado com sucesso!")

const conteudo = fs.readFileSync("mensagem.txt", "utf-8")
console.log ("conteudo do arquivo:")
console.log(conteudo)

