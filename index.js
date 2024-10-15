let homePoints = 0
let guestPoints = 0

// Use `const` is best practice if variables aren't likely change after 
const homePointsElement = document.getElementById("home-points") 
const guestPointsElement = document.getElementById("guest-points")

function addPoints(team, points) {
    if (team === "home") {
        homePoints += points;
        homePointsElement.textContent = homePoints;
    } 
    // There is only two team, so if team isn't home, the other is guest. Simplifying with `else` makes your code lighter.
    else /* if (team === "guest") */ {
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
