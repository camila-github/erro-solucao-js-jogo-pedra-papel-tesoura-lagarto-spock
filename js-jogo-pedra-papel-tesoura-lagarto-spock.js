//SOLUCAO 1
const jogo = (jogadas) => {
    const [jogadaUm, jogadaDois] = jogadas.split(" ");
    const jogadorUm = "fernanda";
    const jogadorDois = "marcia"; 
    
    switch (jogadaUm) {
        case 'papel':
        return (jogadaDois === 'papel') ? "empate" : ((jogadaDois === 'pedra' || jogadaDois === 'spock') ? jogadorUm : jogadorDois);
        break;
        
        case 'pedra':
        return (jogadaDois === 'pedra') ? "empate" : ((jogadaDois === 'tesoura' || jogadaDois === 'lagarto') ? jogadorUm : jogadorDois);
        break;

        case 'tesoura':
        return (jogadaDois === 'tesoura') ? "empate" : ((jogadaDois === 'papel' || jogadaDois === 'lagarto') ? jogadorUm : jogadorDois);
        break;
        
        case 'lagarto':
        return (jogadaDois === 'lagarto') ? "empate" : ((jogadaDois === 'spock' || jogadaDois === 'papel') ? jogadorUm : jogadorDois);
        break;

        case 'spock':
        return (jogadaDois === 'spock') ?  "empate" : ((jogadaDois === 'pedra' || jogadaDois === 'tesoura') ? jogadorUm : jogadorDois);
        break;
    }
}

(function casosDeTeste(num){
    while (num--) console.log(jogo(gets()));
})(gets());
    


//SOLUCAO 2
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
