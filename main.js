var PlayerAttackNumber = 0;
var EnemyAttackNumber = 0;
var SimpleAttackSelected = false;
var SimpleHealSelected = false;
var GameIsOver = false;

function VariableUpdater() {
        var EnemyAttackMeter = document.getElementById("EnemyAttackMeter");
        var EnemyHealth = document.getElementById("EnemyHealth")
        var PlayerHealth = document.getElementById("PlayerHealth")
        var GameStatus = document.getElementById("GameOver");
        var PlayerAttackMeter = document.getElementById("PlayerAttackMeter");
        EnemyAttackMeter = document.getElementById("EnemyAttackMeter");
}

    


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

function GameOver() {
    VariableUpdater()
    if (EnemyHealth.value <= 0) {
        GameStatus.innerHTML = "Game over! You Won";
    };
    if (PlayerHealth.value <= 0) {
        GameStatus.innerHTML = "Game over! You Lost ):<";
    };
    if (EnemyHealth.value <= 0 && PlayerHealth.value <= 0) {
        GameStatus.innerHTML = "Game over! You ALL LOSE";
    };
    document.getElementById("AttackButton").setAttribute('disabled','disabled');
    document.getElementById("HealButton").setAttribute('disabled','disabled');
    var GameIsOver = true
}
function CheckHealth() { // Checks health of player and enemy, does needed updates and shutdowns
    if (PlayerHealth.value > 0 && EnemyHealth.value  > 0) {
        console.log("Both Alive")
        setTimeout(CheckHealth,100)
    } else if (PlayerHealth.value <= 0) {
        console.log("PlayerDead")
        PlayerHealth = 0
        GameOver()
    } else if (EnemyHealth.value <= 0) {
        console.log("EnemyDead")
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
    VariableUpdater()
    if (EnemyHealth.value <= 0 || PlayerHealth.value <= 0) {

    } else { 
    setTimeout(PlayerAttackMeterUpdate, 1000);
    setTimeout(PlayerAttackMeterUpdate, 2000);
    setTimeout(PlayerAttackMeterUpdate, 3000);
    setTimeout(PlayerAttackMeterAct, 4000);}
}

function PlayerAttackMeterUpdate() {
    VariableUpdater()
    PlayerAttackMeter.value -= 25
}
function PlayerAttackMeterAct() {
    VariableUpdater()
    if (SimpleAttackSelected == true) {
        PlayerAttackNumber =+ 1;
        var PlayerAttackDamage = Math.floor(Math.random() * (75-10+1));
        SimpleAttackSelected = false;
        const PlayerAttackNumberText = document.getElementById("PlayerAttackLog");
        PlayerAttackNumberText.innerHTML = "Player attacked! <br>" + PlayerAttackDamage + " Damage Dealt (" + PlayerAttackNumber + ")";
        EnemyHealth.value -= PlayerAttackDamage;
        document.getElementById("AttackButton").style.borderWidth = "1px";
        document.getElementById("AttackButton").style.borderColor = "black";
        console.log("PlayerAttacked");
        
        }
    if (SimpleHealSelected == true && PlayerHealth.value > 0) {
        PlayerHealNumber =+ 1;
        var PlayerHealAmount = Math.floor(Math.random() * (50-10+1));
        SimpleAttackSelected = false;
        const PlayerHealNumberText = document.getElementById("PlayerAttackLog");
        PlayerHealNumberText.innerHTML = "Player Healed! <br>" + PlayerHealAmount + " Health Healed (" + PlayerHealNumber + ")";
        PlayerHealth.value += PlayerHealAmount;
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
    VariableUpdater()
    if (PlayerHealth.value <= 0 || EnemyHealth.value <= 0) {
        
    } else {
        EnemyAttackNumber += 1;
        EnemyAttackDamage = Math.floor(Math.random() * (75-10+1));
        const EnemyAttackNumberText = document.getElementById("EnemyAttackLog");
        EnemyAttackNumberText.innerHTML = "Enemy attacked with Claw! <br>" + EnemyAttackDamage + " Damage Dealt (" + EnemyAttackNumber + ")";
        PlayerHealth.value -= EnemyAttackDamage;
        EnemyAttackMeterTiming();
        console.log("attacked");
    }
    
}
function EnemyAttackMeterTiming() {
    VariableUpdater()
    if (EnemyHealth.value <= 0 || PlayerHealth.value <= 0) {

    } else { // I cannot possibly be doing this right, will this introduce like 1ms of delay over time that will haunt me later? probably?? Not my problem. Just like the fnaf world migration glitch
    setTimeout(EnemyAttackMeterUpdate, 1000);
    setTimeout(EnemyAttackMeterUpdate, 2000);
    setTimeout(EnemyAttackMeterUpdate, 3000);
    setTimeout(EnemyAttackMeterReset, 4000);}
}
function EnemyAttackMeterUpdate() {
    VariableUpdater()
    if (PlayerHealth.value <= 0 || EnemyHealth.value <= 0) {
       
    } else {
    
    EnemyAttackMeter.value -= 25 
    }
}
function EnemyAttackMeterReset() {
     if (PlayerHealth.value <= 0 || EnemyHealth.value <= 0) {
       
    } else {
    VariableUpdater()
    console.log("EnemyAttacked")
    EnemyAttackMeter.value = 100
    EnemyAttack()
    }
    
}