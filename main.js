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
    setTimeout(CheckHealth, 10); // is this ethical to 1ms timeout?
    EnemyAttackMeterTiming();
    PlayerAttackMeterTiming();
    document.getElementById("StartButton").setAttribute('disabled','disabled'); // IT WORKS IT WORKS
}
function GameOver(){
    const GameStatus = document.getElementById("GameOver");
    GameStatus.innerHTML = "Game over!";
    document.getElementById("AttackButton").setAttribute('disabled','disabled');
    document.getElementById("HealButton").setAttribute('disabled','disabled');
    var GameIsOver = true
}
function CheckHealth() { // Checks health of player and enemy, does needed updates and shutdowns
    let PlayerHealth = document.getElementById("PlayerHealth");  
    let EnemyHealth = document.getElementById("EnemyHealth");     
    const HealthCheckTimer = setTimeout(CheckHealth, 10);
    if (PlayerHealth.value > 0 && EnemyHealth.value > 0) {
        console.log("Both Alive")
    } else if (PlayerHealth.value <= 0) {
        console.log("PlayerDead")
        clearTimeout(HealthCheckTimer)
        PlayerHealth = 0
        GameOver()
    } else if (EnemyHealth.value <= 0) {
        console.log("EnemyDead")
        clearTimeout(HealthCheckTimer)
        EnemyHealth = 0
        GameOver()
    }
}



// ####### PLAYER ATTACKS ####### // 

function SimpleAttack() { // Praise stack overflow
    if (SimpleHealSelected == false) {
        SimpleAttackSelected = true
        document.getElementById("AttackButton").style.borderWidth = "5px";
        document.getElementById("AttackButton").style.borderColor = "red";
    }
}

function SimpleHeal() {
    if (SimpleAttackSelected == false) {
        SimpleHealSelected = true
        document.getElementById("HealButton").style.borderWidth = "5px";
        document.getElementById("HealButton").style.borderColor = "red";
    }
}

function PlayerAttackMeterTiming() {
    let EnemyHealth = document.getElementById("EnemyHealth")
    let PlayerHealth = document.getElementById("PlayerHealth")
    if (EnemyHealth.value <= 0 || PlayerHealth.value <= 0) {

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
        PlayerAttackNumber =+ 1;
        var PlayerAttackDamage = Math.floor(Math.random() * (75-10+1));
        SimpleAttackSelected = false;
        const PlayerAttackNumberText = document.getElementById("PlayerAttackLog");
        PlayerAttackNumberText.innerHTML = "Player attacked! <br>" + PlayerAttackDamage + " Damage Dealt (" + PlayerAttackNumber + ")";
        EnemyHealth.value -= EnemyAttackDamage;
        document.getElementById("AttackButton").style.borderWidth = "1px";
        document.getElementById("AttackButton").style.borderColor = "black";
        console.log("PlayerAttacked");
        
        }
    if (SimpleHealSelected == true && PlayerHealth.value > 0) {
        PlayerHealth.value += 25;
        SimpleHealSelected = false
        document.getElementById("HealButton").style.borderWidth = "1px";
        document.getElementById("HealButton").style.borderColor = "black";
        console.log("PlayerHeal")
        }
    PlayerAttackMeter.value = 100
    PlayerAttackMeterTiming()
}
// ####### ENEMY ATTACK ####### //
function EnemyAttack() {
    let PlayerHealth = document.getElementById("PlayerHealth"); // I tried to change this to write it out better and it broke so we are not changing it anymore
    
    if (PlayerHealth.value <= 0) {
        
    } else {
        EnemyAttackNumber += 1;
        EnemyAttackDamage = Math.floor(Math.random() * (75-10+1));
        const EnemyAttackNumberText = document.getElementById("EnemyAttackLog");
        EnemyAttackNumberText.innerHTML = "Enemy attacked with Claw! <br>" + EnemyAttackDamage + " Damage Dealt (" + EnemyAttackNumber + ")";
        PlayerHealth.value -= EnemyAttackDamage;
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