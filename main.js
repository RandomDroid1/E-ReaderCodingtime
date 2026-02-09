var PlayerAttackNumber = 0;
var EnemyClawNumber = 0;
var EnemyStrikeNumber = 0;
var EnemyHealNumber = 0;
var SimpleAttackSelected = false;
var SimpleHealSelected = false;
var GameIsOver = false;

function VariableUpdater() {
        var EnemyAttackMeter = document.getElementById("EnemyAttackMeter");
        var EnemyHealth = document.getElementById("EnemyHealth")
        var PlayerHealth = document.getElementById("PlayerHealth")
        var GameOver = document.getElementById("GameOver");
        var PlayerAttackMeter = document.getElementById("PlayerAttackMeter");
        var EnemyAttackMeter = document.getElementById("EnemyAttackMeter");
 
 }
// ####### SelectionMenu ####### // I do not love this system but I do not know the alternative
function UnselectAll() {
    document.getElementById("AngelCatHeadshotImage").src = "AngelCatHeadshotUnselected.png";
    document.getElementById("BlobHeadshotImage").src = "BlobHeadshotUnselected.png";
    document.getElementById("ClockHeadshotImage").src = "ClockHeadshotUnselected.png";
    document.getElementById("SlugcatHeadshotImage").src = "SlugcatHeadshotUnselected.png";
    document.getElementById("SquareHeadshotImage").src = "SquareHeadshotUnselected.png";
    document.getElementById("BoatHeadshotImage").src = "BoatHeadshotUnselected.png";
    document.getElementById("FlibbitHeadshotImage").src = "FlibbitHeadshotUnselected.png";
    document.getElementById("DevilCatHeadshotImage").src = "DevilCatHeadshotUnselected.png";
    document.getElementById("CarHeadshotImage").src = "CarHeadshotUnselected.png";
    document.getElementById("OrigamiHeadshotImage").src = "OrigamiHeadshotUnselected.png";
    document.getElementById("DNAHeadshotImage").src = "DNAHeadshotUnselected.png";
    document.getElementById("HandManHeadshotImage").src = "HandManHeadshotUnselected.png";
}

function AngelCatHeadshot() {
    UnselectAll()
    document.getElementById("AngelCatHeadshotImage").src = "AngelCatHeadshotSelected.png";
    document.getElementById("CharacterName").innerText = "AngelCat"
    document.getElementById("Tagline").innerText = "I will be your angle (90 degrees)"
}    
function BlobHeadshot() {
    UnselectAll()
    document.getElementById("BlobHeadshotImage").src = "BlobHeadshotSelected.png";
    document.getElementById("CharacterName").innerText = "Amorphous Blob"
    document.getElementById("Tagline").innerText = "Gleep Glorp Zeep Zip"
}    

function ClockHeadshot() {
    UnselectAll()
    document.getElementById("ClockHeadshotImage").src = "ClockHeadshotSelected.png";
    document.getElementById("CharacterName").innerText = "Tovar"
    document.getElementById("Tagline").innerText = "Is it really the right time for this?"
}    

function SlugcatHeadshot() {
    UnselectAll()
    document.getElementById("SlugcatHeadshotImage").src = "SlugcatHeadshotSelected.png";
    document.getElementById("CharacterName").innerText = "The Watcher"
    document.getElementById("Tagline").innerText = "Blatant copyright infrigement"
}    

function SquareHeadshot() {
    UnselectAll()
    document.getElementById("SquareHeadshotImage").src = "SquareHeadshotSelected.png";
    document.getElementById("CharacterName").innerText = "Waffle"
    document.getElementById("Tagline").innerText = "They said be there or be square, he wasn't there"
}    
function BoatHeadshot() {
    UnselectAll()
    document.getElementById("BoatHeadshotImage").src = "BoatHeadshotSelected.png";
    document.getElementById("CharacterName").innerText = "Boat"
    document.getElementById("Tagline").innerText = "Boat"
}    

function FlibbitHeadshot() {
    UnselectAll()
    document.getElementById("FlibbitHeadshotImage").src = "FlibbitHeadshotSelected.png";
    document.getElementById("CharacterName").innerText = "Flibbit"
    document.getElementById("Tagline").innerText = "Get a load of this guy"
}    

function DevilCatHeadshot() {
    UnselectAll()
    document.getElementById("DevilCatHeadshotImage").src = "DevilCatHeadshotSelected.png";
    document.getElementById("CharacterName").innerText = "DevilCat"
    document.getElementById("Tagline").innerText = "The devil to your angle (180 degrees)"
}    

function CarHeadshot() {
    UnselectAll()
    document.getElementById("CarHeadshotImage").src = "CarHeadshotSelected.png";
    document.getElementById("CharacterName").innerText = "Dashboard"
    document.getElementById("Tagline").innerText = "Don't get ran over!"
}    

function OrigamiHeadshot() {
    UnselectAll()
    document.getElementById("OrigamiHeadshotImage").src = "OrigamiHeadshotSelected.png";
    document.getElementById("CharacterName").innerText = "Crane"
    document.getElementById("Tagline").innerText = "Still can't fold one IRL"
}    

function DNAHeadshot() {
    UnselectAll()
    document.getElementById("DNAHeadshotImage").src = "DNAHeadshotSelected.png";
    document.getElementById("CharacterName").innerText = "Helix" 
    document.getElementById("Tagline").innerText = "Hopefully prion free"
}    

function HandManHeadshot() {
    UnselectAll()
    document.getElementById("HandManHeadshotImage").src = "HandManHeadshotSelected.png";
    document.getElementById("CharacterName").innerText = "Evil"
    document.getElementById("Tagline").innerText = "I don't even know man"
}    


document.addEventListener('DOMContentLoaded', (event) => { // Just yoink a bit of code from stack overflow and now it does what I want!
    console.log('DOM fully loaded and parsed');
});
// ####### START & consistent Checks ####### //
function StartButton() { // Starts the enemies attack when clicked
    console.log("Started");
    setTimeout(CheckHealth, 10); // is this ethical to 1ms timeout?
    EnemyAttackMeterTiming();
    PlayerAttackMeterTiming();
    document.getElementById("StartButton").setAttribute('disabled','disabled'); // IT WORKS IT WORKS
}

function GameOver() {
    VariableUpdater()
    if (EnemyHealth.value <= 0) {
        GameOver.innerHTML = "Game over! You Won";
    } else if (PlayerHealth.value <= 0) {
        GameOver.innerHTML = "Game over! You Lost ):<";
        console.log("GameLostRan")
    } else if (EnemyHealth.value <= 0 && PlayerHealth.value <= 0) {
        GameOver.innerHTML = "Game over! You ALL LOSE";
    };
    document.getElementById("AttackButton").setAttribute('disabled','disabled');
    document.getElementById("HealButton").setAttribute('disabled','disabled');
    var GameIsOver = true
    console.log("GameOver func ran")

}
function CheckHealth() { // Checks health of player and enemy, does needed updates and shutdowns
    if (PlayerHealth.value > 0 && EnemyHealth.value  > 0) {
        console.log("Both Alive")
        setTimeout(CheckHealth,100)
    } else if (PlayerHealth.value <= 0) {
        console.log("PlayerDead")
        GameOver()
    } else if (EnemyHealth.value <= 0) {
        console.log("EnemyDead")
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
// ####### ENEMY "AI" HANDLER ####### //
    function EnemyAttackSelector() {
        
    }


// ####### ENEMY ATTACKS ####### //

function EnemyClaw() {
    VariableUpdater()
    if (PlayerHealth.value <= 0 || EnemyHealth.value <= 0) {
        console.log("EnemyClawStopped")
    } else {
        EnemyClawNumber += 1;
        EnemyAttackDamage = Math.floor(Math.random() * (75-10+1));
        const EnemyAttackNumberText = document.getElementById("EnemyAttackLog");
        EnemyAttackNumberText.innerHTML = "Enemy attacked with Claw! <br>" + EnemyAttackDamage + " Damage Dealt (" + EnemyClawNumber + ")";
        PlayerHealth.value -= EnemyAttackDamage;
        EnemyAttackMeterTiming();
    }
}

function EnemyStrike() {
    VariableUpdater()
    if (PlayerHealth.value <= 0 || EnemyHealth.value <= 0) {
        console.log("EnemyStrikeStopped")
    } else {
        EnemyStrikeNumber += 1;
        EnemyAttackDamage = Math.floor(Math.random() * 50);
        const EnemyAttackNumberText = document.getElementById("EnemyAttackLog");
        EnemyAttackNumberText.innerHTML = "Enemy attacked with Strike! <br>" + EnemyAttackDamage + " Damage Dealt (" + EnemyStrikeNumber + ")";
        PlayerHealth.value -= EnemyAttackDamage;
        EnemyAttackMeterTiming();
    }
}

function EnemyHeal() {
    VariableUpdater()
    if (PlayerHealth.value <= 0 || EnemyHealth.value <= 0) {
        console.log("EnemyHealStopped")
    } else {
        EnemyHealNumber += 1;
        EnemyHealAmount = Math.floor(Math.random() * 35);
        const EnemyAttackNumberText = document.getElementById("EnemyAttackLog");
        EnemyAttackNumberText.innerHTML = "Enemy healed! <br>" + EnemyHealAmount + " Damage Dealt (" + EnemyStrikeNumber + ")";
        EnemyHealth.value += EnemyHealAmount;
        EnemyAttackMeterTiming();
    }
}
function EnemyAttackMeterTiming() {
    VariableUpdater()
    if (EnemyHealth.value <= 0 || PlayerHealth.value <= 0) {

    } else { // I cannot possibly be doing this right, will this introduce like 1ms of delay over time that will haunt me later? probably?? Not my problem. Just like the fnaf world migration glitch
    setTimeout(EnemyAttackMeterUpdate, 1000);
    setTimeout(EnemyAttackMeterUpdate, 2000);
    setTimeout(EnemyAttackMeterUpdate, 3000);
    setTimeout(EnemyAttackMeterReset, 4000);
    console.log(EnemyHealth.value);
    console.log(PlayerHealth.value);
}
}
function EnemyAttackMeterUpdate() {
    VariableUpdater()
    if (PlayerHealth.value <= 0 || EnemyHealth.value <= 0) {
       console.log(EnemyHealth.value);
       console.log(PlayerHealth.value);
    } else {
    EnemyAttackMeter.value -= 25
    }
}
function EnemyAttackMeterReset() {
     if (PlayerHealth.value <= 0 || EnemyHealth.value <= 0) {
       console.log(EnemyHealth.value);
       console.log(PlayerHealth.value);
    } else {
    VariableUpdater()
    EnemyAttackMeter.value = 100
    EnemyHeal()
    }
    
}