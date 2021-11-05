const resetbtn = document.querySelector("#resetButton")
const p1Display = document.querySelector("#p1Display")
const p2Display = document.querySelector("#p2Display")
const selectWinningScore = document.querySelector("#playto")

let p1Score = 0
let p2Score = 0
let isGameOver = false
let winningScore = 3

let p1 = {
    score: 0,
    button: document.querySelector("#p1Button"),
    display: document.querySelector("#p1Display")
}

let p2 = {
    score: 0,
    button: document.querySelector("#p2Button"),
    display: document.querySelector("#p2Display")
}

function updateScore(player, opponent) {
    if (!isGameOver) {
        player.score++;
        if (player.score === winningScore) {
            isGameOver = true
            player.display.classList.add("has-text-success")
            opponent.display.classList.add("has-text-danger")
            player.button.disabled = true
            opponent.button.disabled = true
        }
    }
    player.display.textContent = player.score
}
selectWinningScore.addEventListener('change', function (e) {
    winningScore = parseInt(this.value)
    resetscore()
})
p1.button.addEventListener('click', function (e) {
    updateScore(p1, p2)
})

p2.button.addEventListener('click', function (e) {
    updateScore(p2, p1)
})

resetbtn.addEventListener('click', resetscore)
function resetscore() {
    isGameOver = false
    for (p of [p1, p2]) {
        p.score = 0;
        p.display.textContent = p.score
        p.button.disabled = false
        p.display.classList.remove("has-text-success", "has-text-danger")
    }
}