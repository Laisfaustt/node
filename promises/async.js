const { error } = require("console")

function buscarUsuario (id){
    return new Promise ((resolve, reject) => {
        console.log(`buscando usuario com o ID: ${id}`)
        setTimeout(() => {
            const usuario = {id: id, nome: "bruna"}
            if (usuario){
                resolve(usuario)
            }else{
                reject ("usuario nao encontrado")
            }
        },  2000)
    })
}

buscarUsuario(1)
    .then((usuario)=> {
        console.log("usuario encontrado:", usuario)
    })
    .catch((erro)=>{
        console.log("erro", erro)
    })