var PlayerAttackNumber = 0;
var EnemyAttackNumber = 0;
let EnemyAttackMeter = document.getElementById("EnemyAttackMeter");
document.addEventListener('DOMContentLoaded', (event) => { // Just yoink a bit of code from stack overflow and now it does what I want!
    console.log('DOM fully loaded and parsed');
});
// ####### START & consistent Checks ####### //
function StartButton() { // Starts the enemies attack when clicked
    console.log("Started");
    setTimeout(EnemyAttack, 4000);
    setTimeout(CheckPlayerHealth, 500);
    EnemyAttackMeterTiming();
    PlayerAttackMeterTiming();
    document.getElementById("StartButton").setAttribute('disabled','disabled'); // IT WORKS IT WORKS
}

function CheckPlayerHealth() { // repeatedly checks player health to ensure that our guy hasnt died!!
    let PlayerHealth = document.getElementById("PlayerHealth");    
    const CheckPlayerHealthVar = setTimeout(CheckPlayerHealth, 500);
    CheckPlayerHealthVar;
    if (PlayerHealth.value <= 0) {
        clearTimeout(CheckPlayerHealthVar)
        console.log("Cleared, player dead")
    } else {
        console.log ("PlayerAlive")
    }
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

function PlayerAttackMeterTiming() {
    let EnemyHealth = document.getElementById("EnemyHealth")
    if (EnemyHealth.value <= 0) {

    } else { 
    setTimeout(PlayerAttackMeterUpdate, 1000);
    setTimeout(PlayerAttackMeterUpdate, 2000);
    setTimeout(PlayerAttackMeterUpdate, 3000);
    setTimeout(PlayerAttackMeterReset, 4000);}
}

function PlayerAttackMeterUpdate() {
    let PlayerAttackMeter = document.getElementById("PlayerAttackMeter");
    PlayerAttackMeter.value -= 25
}
function PlayerAttackMeterReset() {
    let PlayerAttackMeter = document.getElementById("PlayerAttackMeter");
    PlayerAttackMeter.value = 100
}

// ####### ENEMY ATTACK ####### //
function EnemyAttack() {
    let PlayerHealth = document.getElementById("PlayerHealth"); // I tried to change this to write it out better and it broke so we are not changing it anymore
    
    if (PlayerHealth.value <= 0) {
        const GameStatus = document.getElementById("GameOver");
        GameStatus.innerHTML = "Game over!"
    } else {
        EnemyAttackNumber += 1;
        const EnemyAttackNumberText = document.getElementById("EnemyAttackLog");
        EnemyAttackNumberText.innerHTML = "Enemy attacked with Claw! <br> 25 Damage Dealt (" + EnemyAttackNumber + ")"; 
        PlayerHealth.value -= 25;
        setTimeout(EnemyAttack, 4000);
        EnemyAttackMeterTiming();
        console.log("attacked");
    }
    
}
function EnemyAttackMeterTiming() {
    let PlayerHealth = document.getElementById("PlayerHealth")
    if (PlayerHealth.value <= 0) {

    } else { // I cannot possibly be doing this right, will this introduce like 1ms of delay over time that will haunt me later? probably?? Not my problem. Just like the fnaf world migration glitch
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