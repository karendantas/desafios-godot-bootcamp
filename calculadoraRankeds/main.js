
//npm i prompt-sync
const prompt = require('prompt-sync')();

const playerWins = prompt('Informe suas vitórias: ')
const playersLosses =  prompt('Informe suas derrotas: ')


function calculateRank (playerWins, playersLosses) {
    const rankedBalance =  playerWins - playersLosses
    let level = "Sem ranked"

    
    if (rankedBalance < 10) level = "Ferro" 
    if (rankedBalance >= 11 && rankedBalance<=20) level = "Bronze"
    if (rankedBalance >= 21 && rankedBalance <= 50) level = "Prata"       
    if (rankedBalance >= 51 && rankedBalance <= 80) level = "Ouro"         
    if (rankedBalance >= 81 && rankedBalance <=90) level = "Diamante"      
    if (rankedBalance >= 91 && rankedBalance <100) level = "Lendário"       
    if (rankedBalance >=101) level = "Imortal"
             
    return `O héroi tem o saldo de ${rankedBalance} e está no nível de ${level}`
}



total = calculateRank(playerWins, playersLosses)
console.log(total)