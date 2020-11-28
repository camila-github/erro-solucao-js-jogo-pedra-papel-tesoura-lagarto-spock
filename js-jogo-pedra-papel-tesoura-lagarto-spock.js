//SOLUCAO 1
let quantJogadas = gets();
for (var i = 0; i < quantJogadas; i++) {
    let jogadas = gets().split(" ");
    console.log(jogo(jogadas[0], jogadas[1]));
}

function jogo(j1, j2) {
    let jogador1 = "fernanda";
    let jogador2 = "marcia";
    switch (j1) {
        case 'papel':
            return (j2 === 'papel') ? "empate" : ((j2 === 'pedra' || j2 === 'spock') ? jogador1 : jogador2);
            break;

        case 'pedra':
            return (j2 === 'pedra') ? "empate" : ((j2 === 'tesoura' || j2 === 'lagarto') ? jogador1 : jogador2);
            break;

        case 'tesoura':
            return (j2 === 'tesoura') ? "empate" : ((j2 === 'papel' || j2 === 'lagarto') ? jogador1 : jogador2);
            break;

        case 'lagarto':
            return (j2 === 'lagarto') ? "empate" : ((j2 === 'spock' || j2 === 'papel') ? jogador1 : jogador2);
            break;

        case 'spock':
            return (j2 === 'spock') ? "empate" : ((j2 === 'pedra' || j2 === 'tesoura') ? jogador1 : jogador2);
            break;
    }
}

//SOLUCAO 2
quantTeste = gets();
while (quantTeste--) console.log(jogo(gets()));

function jogo(jogadas) {
    j = jogadas.split(" ");
    jogador1 = "fernanda";
    jogador2 = "marcia";
    switch (j[0]) {
        case 'papel':
            return (j[1] === 'papel') ? "empate" : ((j[1] === 'pedra' || j[1] === 'spock') ? jogador1 : jogador2);
            break;

        case 'pedra':
            return (j[1] === 'pedra') ? "empate" : ((j[1] === 'tesoura' || j[1] === 'lagarto') ? jogador1 : jogador2);
            break;

        case 'tesoura':
            return (j[1] === 'tesoura') ? "empate" : ((j[1] === 'papel' || j[1] === 'lagarto') ? jogador1 : jogador2);
            break;

        case 'lagarto':
            return (j[1] === 'lagarto') ? "empate" : ((j[1] === 'spock' || j[1] === 'papel') ? jogador1 : jogador2);
            break;

        case 'spock':
            return (j[1] === 'spock') ? "empate" : ((j[1] === 'pedra' || j[1] === 'tesoura') ? jogador1 : jogador2);
            break;
    }
}