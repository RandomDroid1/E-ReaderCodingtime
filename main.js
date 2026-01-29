var flipped = false;

function SimpleAttack() { // Praise stack overflow
    let health = document.getElementById("health")
    health.value -= 90; // Yoinking small chunks (what the hell does this mean I dont remember writing it)
    if (health.value < 1) {
        health.value = 100
    }
    }

