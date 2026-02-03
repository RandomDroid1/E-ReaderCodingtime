var PlayerAttackNumber = 0;
var EnemyAttackNumber = 0;
var SimpleAttackSelected = false;
var SimpleHealSelected = false;
let EnemyAttackMeter = document.getElementById("EnemyAttackMeter");
let EnemyHealth = document.getElementById("EnemyHealth")
let PlayerHealth = document.getElementById("PlayerHealth")


document.addEventListener('DOMContentLoaded', (event) => { // Just yoink a bit of code from stack overflow and now it does what I want!
    console.log('DOM fully loaded and parsed');
});
// ####### START & consistent Checks ####### //
function StartButton() { // Starts the enemies attack when clicked
    console.log("Started");
    setTimeout(EnemyAttack, 4000);
    setTimeout(CheckHealth, 500);
    EnemyAttackMeterTiming();
    PlayerAttackMeterTiming();
    document.getElementById("StartButton").setAttribute('disabled','disabled'); // IT WORKS IT WORKS
}

function CheckHealth() { // Checks health of player and enemy, does needed updates and shutdowns
    let PlayerHealth = document.getElementById("PlayerHealth");  
    let EnemyHealth = document.getElementById("EnemyHealth");     
    const HealthCheckTimer = setTimeout(CheckHealth, 500);
    if (PlayerHealth.value > 0 && EnemyHealth.value > 0) {
        console.log("Both Alive")
    } else if (PlayerHealth.value <= 0) {
        console.log("PlayerDead")
        clearTimeout(HealthCheckTimer)
    } else if (EnemyHealth.value <= 0) {
        console.log("EnemyDead")
        clearTimeout(HealthCheckTimer)
    }
}



// ####### PLAYER ATTACKS ####### // 

function SimpleAttack() { // Praise stack overflow
    if (SimpleHealSelected == false) {
        SimpleAttackSelected = true
        document.getElementById("AttackButton").style.borderWidth = "5px";
    }
}

function SimpleHeal() {
    if (SimpleAttackSelected == false) {
        SimpleHealSelected = true
        document.getElementById("HealButton").style.borderWidth = "5px";
    }
}

function PlayerAttackMeterTiming() {
    let EnemyHealth = document.getElementById("EnemyHealth")
    if (EnemyHealth.value <= 0) {

    } else { 
    setTimeout(PlayerAttackMeterUpdate, 1000);
    setTimeout(PlayerAttackMeterUpdate, 2000);
    setTimeout(PlayerAttackMeterUpdate, 3000);
    setTimeout(PlayerAttackMeterAct, 4000);}
}

function PlayerAttackMeterUpdate() {
    let PlayerAttackMeter = document.getElementById("PlayerAttackMeter");
    PlayerAttackMeter.value -= 25
}
function PlayerAttackMeterAct() {
    let PlayerAttackMeter = document.getElementById("PlayerAttackMeter");
    let EnemyHealth = document.getElementById("EnemyHealth");
    let PlayerHealth = document.getElementById("PlayerHealth");
    if (SimpleAttackSelected == true) {
        EnemyHealth.value -= Math.floor(Math.random() * 75);
        SimpleAttackSelected == false
        document.getElementById("AttackButton").style.borderWidth = "1px";
        }
    if (SimpleHealSelected == true) {
        PlayerHealth.value += 35;
        SimpleHealSelected == false
        document.getElementById("HealButton").style.borderWidth = "1px";
        }
    PlayerAttackMeter.value = 100
    PlayerAttackMeterTiming()
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