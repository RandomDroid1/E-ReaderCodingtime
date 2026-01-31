var flipped = false;
let EnemyAttackMeter = document.getElementById("EnemyAttackMeter");
document.addEventListener('DOMContentLoaded', (event) => { // Just yoink a bit of code from stack overflow and now it does what I want!
    console.log('DOM fully loaded and parsed');
});
// ####### START ####### //
function StartButton() { // Starts the enemies attack when clicked
    console.log("Started");
    setTimeout(EnemyAttack, 4000);
    EnemyAttackMeterTiming();
    document.getElementById("StartButton").setAttribute('disabled','disabled'); // IT WORKS IT WORKS
}



// ####### PLAYER ATTACKS ####### //

function SimpleAttack() { // Praise stack overflow
    var AttackAvaliable = false
    let Ehealth = document.getElementById("EnemyHealth")
    Ehealth.value -= Math.floor(Math.random() * 10);
    if (Ehealth.value < 1) {
        Ehealth.value = 100
        }
    }

function SimpleHeal() {
    let PlayerHealth = document.getElementById("PlayerHealth")
    PlayerHealth.value += 20;
}


// ####### ENEMY ATTACK ####### //
function EnemyAttack() {
    let PlayerHealth = document.getElementById("PlayerHealth");
    
    if (PlayerHealth.value <= 0) {
        console.log("UserDead");
        const GameStatus = document.getElementById("GameOver");
        GameStatus.innerHTML = "test"
    } else {
        PlayerHealth.value -= 75;
        setTimeout(EnemyAttack, 4000);
        EnemyAttackMeterTiming()
        console.log("attacked");
    }
    
}
function EnemyAttackMeterTiming() {
    let PlayerHealth = document.getElementById("PlayerHealth")
    if (PlayerHealth.value <= 0) {

    } else { // I cannot possibly be doing this right, will this introduce like 1ms of delay over time that will haunt me later? probably?? Not my problem.
    setTimeout(EnemyAttackMeterUpdate, 1000);
    setTimeout(EnemyAttackMeterUpdate, 2000);
    setTimeout(EnemyAttackMeterUpdate, 3000);
    setTimeout(EnemyAttackMeterReset, 4000);}
}
function EnemyAttackMeterUpdate() {
    let EnemyAttackMeter = document.getElementById("EnemyAttackMeter");
    EnemyAttackMeter.value -= 25
}
function EnemyAttackMeterReset() {
    let EnemyAttackMeter = document.getElementById("EnemyAttackMeter");
    EnemyAttackMeter.value = 100
}