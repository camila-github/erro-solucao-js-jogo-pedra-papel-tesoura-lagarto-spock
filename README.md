## Exercicio - Jogo-pedra-papel-tesoura-lagarto-spock

O exercicio publicado é referente ao treinamento do BOOTCAMP - Desenvolvedor NodeJS -  Introdução a busca e substituição em JavaScript. [https://digitalinnovation.one](https://digitalinnovation.one)


#### Descrição do Desafio:

Pedra-papel-tesoura-lagarto-Spock é uma expansão do clássico método de seleção em jogo de pedra-papel-tesoura. Atua sob o mesmo princípio básico, mas inclui outras duas armas adicionais: o lagarto (formado pela mão igual a uma boca de fantoche) e Spock (formada pela saudação dos vulcanos em Star Trek). Isso reduz as chances de uma rodada terminar em um empate. O jogo foi inventado por Sam Kass e Karen Bryla, como "Rock Paper Scissors Lizard Spock". As regras de vantagem são as seguintes:
Tesoura corta papel
Papel cobre pedra
Pedra derruba lagarto
Lagarto adormece Spock
Spock derrete tesoura
Tesoura prende lagarto
Lagarto come papel
Papel refuta Spock
Spock vaporiza pedra
Pedra quebra tesoura
Um dia, duas amigas, Fernanda e Marcia, decidiram apostar quem pagaria um almoço para o outro, com esta brincadeira. Sua missão será fazer um algoritmo que, baseado no que eles escolherem, informe quem irá ganhar ou se dará empate.


#### Entrada:

Haverá diversos casos de teste. O primeiro número a ser lido será um inteiro, representando a quantidade de casos de teste. Cada caso de teste tem duas palavras, representando a escolha de Fernanda e de Marcia, respectivamente.


#### Saída:

Para cada caso de teste, imprima quem venceu, ou se houve empate.

Exemplos de Entrada  | Exemplos de Saída
------------- | -------------
3 | empate
spock spock | Marcia
tesoura spock | Fernanda
lagarto spock |


```javascript
//SOLUCAO 1
const jogo = (jogadas) => {
    /*Será armazenado a entrada (string) em atribuição via desestruturação (destruturação de array)*/
    const [jogadaUm, jogadaDois] = jogadas.split(" ");
    const jogadorUm = "fernanda";
    const jogadorDois = "marcia"; 
    /*verificação do switch será feito referente a jogada do primeiro jogador.
      O return será de acordo com o resultado do if ternario, que será verificado 
      de acordo com a jodada do segundo jogador*/
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
  /*Leitura da entrada referente a quantidade de jogadas*/
  (function casosDeTeste(num){
    while (num--) console.log(jogo(gets()));
  })(gets());
    


  //SOLUCAO 2
/*Leitura da entrada referente a quantidade de jogadas*/
let quantJogadas = gets();
/*Será lido cada jogada, armazenado em um array*/
for (var i = 0; i < quantJogadas; i++) {
    let jogadas = gets().split(" ");
    /*será chamado a função e imprimirá no console*/
    console.log(jogo(jogadas[0], jogadas[1]));
}

function jogo(j1, j2) {
    let jogador1 = "fernanda";
    let jogador2 = "marcia";
     /*verificação do switch será feito referente a jogada do primeiro jogador.
      O return será de acordo com o resultado do if ternario, que será verificado 
      de acordo com a jodada do segundo jogador*/
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

```
