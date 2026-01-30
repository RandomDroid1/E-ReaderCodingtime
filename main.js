var flipped = false;

function SimpleAttack() { // Praise stack overflow
    let Ehealth = document.getElementById("EnemyHealth")
    Ehealth.value -= Math.floor(Math.random() * 10); // Yoinking small chunks (what the hell does this mean I dont remember writing it)
    if (Ehealth.value < 1) {
        Ehealth.value = 100
    }
    }

function SimpleHeal() {
    let PlayerHealth = document.getElementById("PlayerHealth")
    PlayerHealth.value += Math.floor(Math.random())* 10;
}

function StartAttack() { // Starts the enemies attack when clicked
    var StartAttack = setInterval(EnemyAttack, 1000)
    console.log("Started")
}

function EnemyAttack() {
    let PlayerHealth = document.getElementById("PlayerHealth")
    
    if (PlayerHealth.value <= 0) {
        console.log("UserDead");
        clearInterval(StartAttack);
    } else {
        PlayerHealth.value -= 50;
        console.log("attacked");
    }
    
}



doWork();