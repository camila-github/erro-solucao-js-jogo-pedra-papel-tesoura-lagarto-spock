//SOLUCAO 1
//Leitura da entrada referente a quantidade de jogadas*/
let quantJogadas = gets();
/*Será lido cada jogada, armazedo em um array*/
for (var i = 0; i < quantJogadas; i++) {
    let jogadas = gets().split(" ");
    /*será chamado a função e imprimirá no console*/
    console.log(jogo(jogadas[0], jogadas[1]));
}

function jogo(j1, j2) {
    let jogador1 = "fernanda";
    let jogador2 = "marcia";
    /*verificação do switch será feito referente a jodada do primeiro jogador.
    O return será de acordo com o resultado do if ternario, que será verificado de acordo com a jodada do segundo jogador*/
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
//Leitura da entrada referente a quantidade de jogadas*/
quantTeste = gets();
/*Será lido cada jogada. Será chamado a função e impresso no console*/
while (quantTeste--) console.log(jogo(gets()));

function jogo(jogadas) {
    j = jogadas.split(" "); /*Será lido cada jogada, armazedo em um array*/
    jogador1 = "fernanda";
    jogador2 = "marcia";
    /*verificação do switch será feito referente a jodada do primeiro jogador.
      O return será de acordo com o resultado do if ternario, que será verificado de acordo com a jodada do segundo jogador*/
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