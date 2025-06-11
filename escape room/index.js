const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let resolvidos = {
    grampeador: false,
    papeis: false,
    almofada: false,
    livro: false,
    janela: false,
    armario: false
};

function menuPrincipal() {
    console.log("\nvoce estáapreso(a) em uma sala estranha e silenciosa...");
    console.log("ao seu redor, vc vê:");
    console.log("1. Um grampeador velho sobre uma prateleira");
    console.log("2. Um monte de papeis amassados em cima da mesa");
    console.log("3. Uma almofada fora do lugar no sofa");
    console.log("4. Um livro misterioso jogado no chao");
    console.log("5. Uma janela embaçada e trancada");
    console.log("6. Um armario trancado com um pequeno teclado numerico");
    console.log("7. Tentar abrir a porta");

    rl.question("\noq vc deseja investigar? ", (resposta) => {
        switch (resposta.trim()) {
            case "1":
                investigarGrampeador();
                break;
            case "2":
                investigarPapeis();
                break;
            case "3":
                investigarAlmofada();
                break;
            case "4":
                investigarLivro();
                break;
            case "5":
                investigarJanela();
                break;
            case "6":
                investigarArmario();
                break;
            case "7":
                verificarSaida();
                break;
            default:
                console.log("escolha invalida");
                menuPrincipal();
        }
    });
}

function investigarGrampeador() {
    if (resolvidos.grampeador) {
        console.log("vc já resolveu o enigma do grampeador.");
        return menuPrincipal();
    }
    rl.question("\n dentro do grampeador tem um bilhete: 'sou cheia de buracos, mas seguro a agua. oq sou?' ", (resposta) => {
        if (resposta.trim().toLowerCase() === "esponja") {
            console.log("✅ acertou!");
            resolvidos.grampeador = true;
        } else {
            console.log("❌ Resposta errada.");
        }
        menuPrincipal();
    });
}

function investigarPapeis() {
    if (resolvidos.papeis) {
        console.log("vc já resolveu o enigma dos papeis");
        return menuPrincipal();
    }
    rl.question("\num dos papeis diz: 'qual palavra esta sempre escrita errada no dicionario?' ", (resposta) => {
        if (resposta.trim().toLowerCase() === "errada") {
            console.log("✅ acertou");
            resolvidos.papeis = true;
        } else {
            console.log("❌ Resposta errada");
        }
        menuPrincipal();
    });
}

function investigarAlmofada() {
    if (resolvidos.almofada) {
        console.log("vc já resolveu o enigma da almofada");
        return menuPrincipal();
    }
    rl.question("\n dentro da almofada há um papel com a pergunta: 'Tenho teclas, mas nao toco música. oq sou?' ", (resposta) => {
        if (resposta.trim().toLowerCase() === "teclado") {
            console.log("✅ Acertou");
            resolvidos.almofada = true;
        } else {
            console.log("❌ Não é isso");
        }
        menuPrincipal();
    });
}

function investigarLivro() {
    if (resolvidos.livro) {
        console.log("vc já leu esse livro e resolveu o enigma.");
        return menuPrincipal();
    }
    rl.question("\n na contracapa do livro está escrito: 'Quanto mais vc tira de mim, maior eu fico. owqsou?' ", (resposta) => {
        if (resposta.trim().toLowerCase() === "buraco") {
            console.log("✅ Muito bem");
            resolvidos.livro = true;
        } else {
            console.log("❌ Tente de novo depois");
        }
        menuPrincipal();
    });
}

function investigarJanela() {
    if (resolvidos.janela) {
        console.log(" vc já olhou pela janela e resolveu o enigma.");
        return menuPrincipal();
    }
    rl.question("\n no vidro embaçado alguém escreveu: 'oq sobe, mas nunca desce?' ", (resposta) => {
        if (resposta.trim().toLowerCase() === "idade") {
            console.log("✅ Acertou");
            resolvidos.janela = true;
        } else {
            console.log("❌ Resposta errada.");
        }
        menuPrincipal();
    });
}

function investigarArmario() {
    if (resolvidos.armario) {
        console.log(" O armário já foi aberto.");
        return menuPrincipal();
    }
    rl.question("\nNo teclado do armario, há um enigma: 'tenho numeros, mas não sou uma calculadora, tenho portas, mas não sou uma casa. oq sou?' ", (resposta) => {
        if (resposta.trim().toLowerCase() === "armario") {
            console.log("✅ Acertou O armário se abre.");
            resolvidos.armario = true;
        } else {
            console.log("❌ Isso não abre o armário.");
        }
        menuPrincipal();
    });
}

function verificarSaida() {
    if (resolvidos.grampeador && resolvidos.papeis && resolvidos.almofada && resolvidos.livro && resolvidos.janela && resolvidos.armario) {
        console.log("\n vc resolveu todos os enigmas e escapou da sala");
        console.log("vc está livre");
        rl.close();
    } else {
        console.log("\na porta ainda está trancada. vc precisa resolver todos os enigmas para sair.");
        menuPrincipal();
    }
}

console.log("bem-vindo ao Escape Room");
menuPrincipal();
