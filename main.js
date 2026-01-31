var flipped = false;
let EnemyAttackMeter = document.getElementById("EnemyAttackMeter");
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

// ####### ENEMY ATTACK ####### //
function StartAttack() { // Starts the enemies attack when clicked
    console.log("Started");
    setTimeout(EnemyAttack, 4000);
    EnemyAttackMeterTiming();
    let EnemyAttackMeter = document.getElementById("EnemyAttackMeter");
}

function EnemyAttack() {
    let PlayerHealth = document.getElementById("PlayerHealth");
    
    if (PlayerHealth.value <= 0) {
        console.log("UserDead");
    } else {
        PlayerHealth.value -= 25;
        setTimeout(EnemyAttack, 1000);
        EnemyAttackMeterTiming()
        console.log("attacked");
    }
    
}

function EnemyAttackMeterTiming() {
    setTimeout(EnemyAttackMeterUpdate, 1000);
    setTimeout(EnemyAttackMeterUpdate, 2000);
    setTimeout(EnemyAttackMeterUpdate, 3000);
    setTimeout(EnemyAttackMeterReset, 4000);
}
function EnemyAttackMeterUpdate() {
    let EnemyAttackMeter = document.getElementById("EnemyAttackMeter");
    EnemyAttackMeter.value -= 25
}
function EnemyAttackMeterReset() {
    let EnemyAttackMeter = document.getElementById("EnemyAttackMeter");
    EnemyAttackMeter.value = 100
}