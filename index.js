let homePoints = document.getElementById("home-points")
let awayPoints = document.getElementById("away-points")
let currentHomePoints = 0
let currentAwayPoints = 0

function addOneHome() {
    currentHomePoints += 1
    homePoints.textContent = currentHomePoints
}

function addTwoHome() {
    currentHomePoints += 2
    homePoints.textContent = currentHomePoints
}

function addThreeHome() {
    currentHomePoints += 3
    homePoints.textContent = currentHomePoints
}

function addOneAway() {
    currentAwayPoints += 1
    awayPoints.textContent = currentAwayPoints
}

function addTwoAway() {
    currentAwayPoints += 2
    awayPoints.textContent = currentAwayPoints
}

function addThreeAway() {
    currentAwayPoints += 3
    awayPoints.textContent = currentAwayPoints
}

function resetGame() {
    homePoints.textContent = 0
    currentHomePoints = 0
    awayPoints.textContent = 0
    currentAwayPoints = 0
}