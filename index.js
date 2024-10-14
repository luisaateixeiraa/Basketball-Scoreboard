let homePoints = 0
let guestPoints = 0

let homePointsElement = document.getElementById("home-points")
let guestPointsElement = document.getElementById("guest-points")

function addPoints(team, points) {
    if (team === "home") {
        homePoints += points;
        homePointsElement.textContent = homePoints;
    } else if (team === "guest") {
        guestPoints += points;
        guestPointsElement.textContent = guestPoints;
    }
}

function resetPoints() {
    homePoints = 0;
    guestPoints = 0;
    homePointsElement.textContent = homePoints;
    guestPointsElement.textContent = guestPoints;
}
