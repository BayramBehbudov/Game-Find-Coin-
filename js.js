const playerChoose = document.getElementById("playerchooseImg")
const compChoose = document.getElementById("compchooseImg")
const message = document.getElementById("message")
const winSelector = document.getElementById("win")
const loseSelector = document.getElementById("lose")
const headsCountSelector = document.getElementById("headscount")
const tailsCountSelector = document.getElementById("tailscount")
const headesBtn = document.getElementById("heads")
const tailsBtn = document.getElementById("tails")


let winPoints = 0
let losePoints = 0
let tailsCount = 0
let headsCount = 0


const chooseArray = ["heads", "tails"]

function randomChoose() {
    const playerChoose = chooseArray[Math.floor(Math.random() * chooseArray.length)]
    compChoose.innerHTML = `<img src="./img/${playerChoose}.png" alt></img>`
    compChoose.classList.add("animation")
        
    setTimeout(() => {

        compChoose.classList.remove("animation")
    }, 500);

    return playerChoose
}


document.addEventListener("click", (e) => {
    const playerChoosen = e.target.id
    if (chooseArray.includes(playerChoosen)) {
        const compChoosen = randomChoose()

        if (playerChoosen === compChoosen) {
            winPoints++
            message.innerText = "Win!"
            message.setAttribute("style", 'color: green;')
        } else if (e.target.id !== compChoosen) {
            message.innerText = "Lose!"
            message.setAttribute("style", 'color: red;')
            losePoints++
        }

        if (playerChoosen === "heads") {
            headsCount++
            playerChoose.innerHTML = `<img src="./img/heads.png" alt></img>`
        } else {
            playerChoose.innerHTML = `<img src="./img/tails.png" alt></img>`
            tailsCount++
        }
        playerChoose.classList.add("animation")

        setTimeout(() => {

            playerChoose.classList.remove("animation")
        }, 500);



    }
    writeResultPoints()
})


function writeResultPoints() {
    winSelector.textContent = `Win: ${winPoints}`
    loseSelector.textContent = `Lose: ${losePoints}`
    headsCountSelector.textContent = `Heads choosen: ${headsCount}`
    tailsCountSelector.textContent = `Tails choosen: ${tailsCount}`
}