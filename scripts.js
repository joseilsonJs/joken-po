
const result = document.querySelector("#result")
const user = document.querySelector("#user")
const machine0 = document.querySelector("#machine")

let userResult = 0
let machineResult = 0

const optionHuman = (change) =>{
    game (change, MachineOption())
}

const MachineOption = () =>{
    const choice = ['stone', 'paper', 'scissors']
    const drawer = Math.floor (Math.random() *3)
    return choice[drawer]
}

const game = (human, machine) => {
    if (human === machine) {
        result.innerHTML = "Saporra deu empate"
    } else if(
        human === 'stone' && machine === 'scissors' ||
        human === 'paper' && machine === 'stone' ||
        human === 'scissors' && machine === 'paper' 
    ) {
        userResult++ 
        user.innerHTML = userResult
        result.innerHTML = "voçê venceu essa play"
    } else{
        machineResult++
        machine0.innerHTML = machineResult
        result.innerHTML = "voçê venceu, fila da puta"

    }
}