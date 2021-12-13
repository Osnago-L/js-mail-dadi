let userName = prompt("Inserisci Il tuo nome e ti verrà assegnato un numero random");
let userDice = Math.floor(Math.random() * 6 + 1);
let userAI = Math.floor(Math.random() * 6 + 1);

if (userDice > userAI){
    console.log(userDice)
    console.log(userAI)
    alert(`${userName} win (${userDice}), AI lose (${userAI})`)
}else if (userDice == userAI){
    alert(`Tie`)
}else{
    console.log(userDice)
    console.log(userAI)
    alert(`${userName} lose (${userDice}), AI win (${userAI})`)
}