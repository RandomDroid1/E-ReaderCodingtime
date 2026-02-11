var AllyAttackNumber = 0;
var SimpleAttackSelected = false;
var SimpleHealSelected = false;
var GameIsOver = false;
var CharacterSelected = "none";
var FactionSelected = "none";
var AllyOneSelected = false;
var EnemyOneSelected = false;
var AllyTwoSelected = false;
var EnemyTwoSelected = false;
var AllyOne = "none";
var AllyTwo = "none";
var EnemyOne = "none";
var EnemyTwo = "none";
function VariableUpdater() {
        var EnemyAttackMeter = document.getElementById("EnemyAttackMeter");
        var EnemyOneHealth = document.getElementById("EnemyHealth")
        var AllyHealth = document.getElementById("AllyHealth")
        var GameOver = document.getElementById("GameOver");
        var AllyAttackMeter = document.getElementById("AllyAttackMeter");
        var EnemyAttackMeter = document.getElementById("EnemyAttackMeter");
 
 }



document.addEventListener('DOMContentLoaded', (event) => { // Just yoink a bit of code from stack overflow and now it does what I want!
    console.log('DOM fully loaded and parsed');
});
// ####### START & consistent Checks ####### //
function StartGame() {
    if (AllyTwoSelected == true && EnemyTwoSelected == true){
    location.assign("FightScreen.html")}
}

function StartButton() { // Starts the enemies attack when clicked
    console.log("Started");
    setTimeout(CheckHealth, 10); // is this ethical to 1ms timeout?
    EnemyAttackMeterTiming();
    AllyAttackMeterTiming();
    document.getElementById("StartButton").setAttribute('disabled','disabled'); // IT WORKS IT WORKS
    if (AllyOne = "none") {
        AllyOne = "AngelCat"
        AllyTwo = "Boat"
        EnemyOne = "DevilCat"
        EnemyTwo = "Blob"
        console.log("Test")
    }
}

function GameOver() {
    VariableUpdater()
    if (EnemyHealth.value <= 0) {
        GameOver.innerHTML = "Game over! You Won";
    } else if (AllyHealth.value <= 0) {
        GameOver.innerHTML = "Game over! You Lost ):<";
        console.log("GameLostRan")
    } else if (EnemyHealth.value <= 0 && AllyHealth.value <= 0) {
        GameOver.innerHTML = "Game over! You ALL LOSE";
    };
    document.getElementById("AttackButton").setAttribute('disabled','disabled');
    document.getElementById("HealButton").setAttribute('disabled','disabled');
    var GameIsOver = true
    console.log("GameOver func ran")

}
function CheckHealth() { // Checks health of Ally and enemy, does needed updates and shutdowns
    if (AllyHealth.value > 0 && EnemyHealth.value  > 0) {
        console.log("Both Alive")
        setTimeout(CheckHealth,100)
    } else if (AllyHealth.value <= 0) {
        console.log("AllyDead")
        GameOver()
    } else if (EnemyHealth.value <= 0) {
        console.log("EnemyDead")
        GameOver()
    }
}



// ####### Ally ATTACKS ####### // 

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

function AllyAttackMeterTiming() {
    VariableUpdater()
    if (EnemyHealth.value <= 0 || AllyHealth.value <= 0) {

    } else { 
    setTimeout(AllyAttackMeterUpdate, 1000);
    setTimeout(AllyAttackMeterUpdate, 2000);
    setTimeout(AllyAttackMeterUpdate, 3000);
    setTimeout(AllyAttackMeterAct, 4000);}
}

function AllyAttackMeterUpdate() {
    VariableUpdater()
    AllyAttackMeter.value -= 25
}
function AllyAttackMeterAct() {
    VariableUpdater()
    if (SimpleAttackSelected == true) {
        AllyAttackNumber =+ 1;
        var AllyAttackDamage = Math.floor(Math.random() * (75-10+1));
        SimpleAttackSelected = false;
        const AllyAttackNumberText = document.getElementById("AllyAttackLog");
        AllyAttackNumberText.innerHTML = "Ally attacked! <br>" + AllyAttackDamage + " Damage Dealt (" + AllyAttackNumber + ")";
        EnemyHealth.value -= AllyAttackDamage;
        document.getElementById("AttackButton").style.borderWidth = "1px";
        document.getElementById("AttackButton").style.borderColor = "black";
        console.log("AllyAttacked");
        
        }
    if (SimpleHealSelected == true && AllyHealth.value > 0) {
        AllyHealNumber =+ 1;
        var AllyHealAmount = Math.floor(Math.random() * (50-10+1));
        SimpleAttackSelected = false;
        const AllyHealNumberText = document.getElementById("AllyAttackLog");
        AllyHealNumberText.innerHTML = "Ally Healed! <br>" + AllyHealAmount + " Health Healed (" + AllyHealNumber + ")";
        AllyHealth.value += AllyHealAmount;
        SimpleHealSelected = false
        document.getElementById("HealButton").style.borderWidth = "1px";
        document.getElementById("HealButton").style.borderColor = "black";
        console.log("AllyHeal")
        }
    AllyAttackMeter.value = 100
    AllyAttackMeterTiming()
}
// ####### ENEMY ONE MOVE HANDLER ####### //
    function EnemyOneAttackSelector() {
        
    }


// ####### ENEMY ONE ATTACKS ####### //


function EnemyOneAttackMeterTiming() {
    VariableUpdater()
    if (EnemyHealth.value <= 0 || AllyHealth.value <= 0) {

    } else { // I cannot possibly be doing this right, will this introduce like 1ms of delay over time that will haunt me later? probably?? Not my problem. Just like the fnaf world migration glitch :(
    setTimeout(EnemyOneAttackMeterUpdate, 1000);
    setTimeout(EnemyOneAttackMeterUpdate, 2000);
    setTimeout(EnemyOneAttackMeterUpdate, 3000);
    setTimeout(EnemyOneAttackMeterReset, 4000);
    console.log(EnemyHealth.value);
    console.log(AllyHealth.value);
}
}
function EnemyOneAttackMeterUpdate() {
    VariableUpdater()
    if (AllyHealth.value <= 0 || EnemyHealth.value <= 0) {
       console.log(EnemyHealth.value);
       console.log(AllyHealth.value);
    } else {
    EnemyAttackMeter.value -= 25
    }
}
function EnemyOneAttackMeterReset() {
     if (AllyHealth.value <= 0 || EnemyHealth.value <= 0) {
       console.log(EnemyHealth.value);
       console.log(AllyHealth.value);
    } else {
    VariableUpdater()
    EnemyAttackMeter.value = 100
    EnemyAttackSelector()
    }
    
}
// ####### AllyAttacks ####### //

function HeavenlyStrike() {
    enemyattack = 0
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
    document.getElementById("Tagline").style.fontSize = "large"
}

function SelectionButton() {
    if (FactionSelected == "Ally") {
        if (AllyOneSelected == false) {
            document.getElementById("AllySelectionPortraitOne").src = CharacterSelected+"HeadshotUnselected.png"
            AllyOneSelected = true
            AllyOne = CharacterSelected
        }
        if (AllyOneSelected == true && AllyTwoSelected == false) {
            if (AllyOne != CharacterSelected) {
            document.getElementById("AllySelectionPortraitTwo").src = CharacterSelected+"HeadshotUnselected.png"
            AllyTwoSelected = true
            AllyTwo = CharacterSelected
        }
        }
    }
    if (FactionSelected == "Enemy") {
        if (EnemyOneSelected == false) {
            document.getElementById("EnemySelectionPortraitOne").src = CharacterSelected+"HeadshotUnselected.png"
            EnemyOneSelected = true
            EnemyOne = CharacterSelected
        }
        if (EnemyOneSelected == true && EnemyTwoSelected == false) {
            if (EnemyOne != CharacterSelected) {
            document.getElementById("EnemySelectionPortraitTwo").src = CharacterSelected+"HeadshotUnselected.png"
            EnemyTwoSelected = true
            EnemyTwo = CharacterSelected
        }
        }
    }
}
function AngelCatHeadshot() {
    UnselectAll()
    CharacterSelected = "AngelCat";
    FactionSelected = "Ally"
    document.getElementById("AngelCatHeadshotImage").src = "AngelCatHeadshotSelected.png";
    document.getElementById("CharacterName").innerText = "AngelCat"
    document.getElementById("Tagline").innerText = "I will be your angle (90 degrees)"
    document.getElementById("AttackOne").innerText = "Heavenly Strike (UPG)"
    document.getElementById("AttackOneText").innerText = "Strike your target down with\nhigh damage to one enemy"
    document.getElementById("AttackTwo").innerText = "Judgement"
    document.getElementById("AttackTwoText").innerText="Deal Medium damage to all \nenemies"
    document.getElementById("AttackThree").innerText="Healing Prayer"
    document.getElementById("AttackThreeText").innerText="Grants medium healing to \nboth allies"
}    
function BlobHeadshot() {
    UnselectAll()
    CharacterSelected = "Blob";
    FactionSelected == "Enemy";
    document.getElementById("BlobHeadshotImage").src = "BlobHeadshotSelected.png";
    document.getElementById("CharacterName").innerText = "Amorphous Blob"
    document.getElementById("Tagline").innerText = "Gleep Glorp Zeep Zip"
    document.getElementById("AttackOne").innerText = "Glob"
    document.getElementById("AttackOneText").innerText = "Extra defense to both enemies \n for three turns!"
    document.getElementById("AttackTwo").innerText = "Reform"
    document.getElementById("AttackTwoText").innerText="Medium healing for both \nenemies!"
    document.getElementById("AttackThree").innerText="Randomize"
    document.getElementById("AttackThreeText").innerText="Picks a random move from \nanyone and uses it!"
}    

function ClockHeadshot() {
    UnselectAll()
    CharacterSelected = "Clock";
    FactionSelected = "Ally";
    document.getElementById("ClockHeadshotImage").src = "ClockHeadshotSelected.png";
    document.getElementById("CharacterName").innerText = "Tovar"
    document.getElementById("Tagline").innerText = "Is it really the right time for this?"
    document.getElementById("AttackOne").innerText = "Bad Time"
    document.getElementById("AttackOneText").innerText = ""
    document.getElementById("AttackTwo").innerText = ""
    document.getElementById("AttackTwoText").innerText=""
    document.getElementById("AttackThree").innerText=""
    document.getElementById("AttackThreeText").innerText=""
}    

function SlugcatHeadshot() {
    UnselectAll()
    CharacterSelected = "Slugcat";
    FactionSelected = "Ally";
    document.getElementById("SlugcatHeadshotImage").src = "SlugcatHeadshotSelected.png";
    document.getElementById("CharacterName").innerText = "The Watcher"
    document.getElementById("Tagline").innerText = "Blatant copyright infrigement"
    document.getElementById("AttackOne").innerText = "Spear"
    document.getElementById("AttackOneText").innerText = "25% chance to instakill an \nenemy"
    document.getElementById("AttackTwo").innerText = "The Mark"
    document.getElementById("AttackTwoText").innerText="Increased attack for 20 seconds"
    document.getElementById("AttackThree").innerText=""
    document.getElementById("AttackThreeText").innerText=""
}    

function SquareHeadshot() {
    UnselectAll()
    CharacterSelected = "Square";
    FactionSelected = "Ally";
    document.getElementById("SquareHeadshotImage").src = "SquareHeadshotSelected.png";
    document.getElementById("CharacterName").innerText = "Square"
    document.getElementById("Tagline").innerText = "They said be there or be square, \nhe wasn't there"
    document.getElementById("Tagline").style.fontSize = "medium"
    document.getElementById("AttackOne").innerText = ""
    document.getElementById("AttackOneText").innerText = ""
    document.getElementById("AttackTwo").innerText = ""
    document.getElementById("AttackTwoText").innerText=""
    document.getElementById("AttackThree").innerText=""
    document.getElementById("AttackThreeText").innerText=""
}    
function BoatHeadshot() {
    UnselectAll()
    CharacterSelected = "Boat";
    FactionSelected = "Ally";
    document.getElementById("BoatHeadshotImage").src = "BoatHeadshotSelected.png";
    document.getElementById("CharacterName").innerText = "Boat"
    document.getElementById("Tagline").innerText = "Boat"
    document.getElementById("AttackOne").innerText = "Boat"
    document.getElementById("AttackOneText").innerText = "Hit the enemy with medium \nto high damage"
    document.getElementById("AttackTwo").innerText = "Fish"
    document.getElementById("AttackTwoText").innerText="Apply a random status\n effect to you or the enemy"
    document.getElementById("AttackThree").innerText="Hook"
    document.getElementById("AttackThreeText").innerText="Medium damage with a\n 50% chance to slow enemies"
}    

function FlibbitHeadshot() {
    UnselectAll()
    CharacterSelected = "Flibbit";
    FactionSelected = "Ally";
    document.getElementById("FlibbitHeadshotImage").src = "FlibbitHeadshotSelected.png";
    document.getElementById("CharacterName").innerText = "Flibbit"
    document.getElementById("Tagline").innerText = "Get a load of this guy"
    document.getElementById("AttackOne").innerText = ""
    document.getElementById("AttackOneText").innerText = ""
    document.getElementById("AttackTwo").innerText = ""
    document.getElementById("AttackTwoText").innerText=""
    document.getElementById("AttackThree").innerText=""
    document.getElementById("AttackThreeText").innerText=""
}    

function DevilCatHeadshot() {
    UnselectAll()
    CharacterSelected = "DevilCat";
    FactionSelected = "Enemy";
    document.getElementById("DevilCatHeadshotImage").src = "DevilCatHeadshotSelected.png";
    document.getElementById("CharacterName").innerText = "DevilCat"
    document.getElementById("Tagline").innerText = "The devil to your angle (180 degrees)"
    document.getElementById("Tagline").style.fontSize = "medium"
    document.getElementById("AttackOne").innerText = "Demonic Strike (UPG)"
    document.getElementById("AttackOneText").innerText = "Strike your target down with\nhigh damage to one Ally"
    document.getElementById("AttackTwo").innerText = "Damning"
    document.getElementById("AttackTwoText").innerText="Deal Medium damage to all \nAllys"
    document.getElementById("AttackThree").innerText="Fire Blast"
    document.getElementById("AttackThreeText").innerText="Deals significant fire \ndamage to Allys"
}    

function CarHeadshot() {
    UnselectAll()
    CharacterSelected = "Car";
    FactionSelected = "Enemy";
    document.getElementById("CarHeadshotImage").src = "CarHeadshotSelected.png";
    document.getElementById("CharacterName").innerText = "Dashboard"
    document.getElementById("Tagline").innerText = "Don't get ran over!"
    document.getElementById("AttackOne").innerText = ""
    document.getElementById("AttackOneText").innerText = ""
    document.getElementById("AttackTwo").innerText = ""
    document.getElementById("AttackTwoText").innerText=""
    document.getElementById("AttackThree").innerText=""
    document.getElementById("AttackThreeText").innerText=""
}    

function OrigamiHeadshot() {
    UnselectAll()
    CharacterSelected = "Origami";
    FactionSelected = "Enemy";
    document.getElementById("OrigamiHeadshotImage").src = "OrigamiHeadshotSelected.png";
    document.getElementById("CharacterName").innerText = "Crane"
    document.getElementById("Tagline").innerText = "Still can't fold one IRL"
    document.getElementById("AttackOne").innerText = "Fold"
    document.getElementById("AttackOneText").innerText = "Does 10 damage, \ninfinitely upgradeable"
    document.getElementById("AttackTwo").innerText = "Peck"
    document.getElementById("AttackTwoText").innerText="Does medium damage to a \nrandom Ally"
    document.getElementById("AttackThree").innerText=""
    document.getElementById("AttackThreeText").innerText=""
}    

function DNAHeadshot() {
    UnselectAll()
    CharacterSelected = "DNA";
    FactionSelected = "Enemy";
    document.getElementById("DNAHeadshotImage").src = "DNAHeadshotSelected.png";
    document.getElementById("CharacterName").innerText = "Helix" 
    document.getElementById("Tagline").innerText = "Hopefully prion free"
    document.getElementById("AttackOne").innerText = ""
    document.getElementById("AttackOneText").innerText = ""
    document.getElementById("AttackTwo").innerText = ""
    document.getElementById("AttackTwoText").innerText=""
    document.getElementById("AttackThree").innerText=""
    document.getElementById("AttackThreeText").innerText=""
}    

function HandManHeadshot() {
    UnselectAll()
    CharacterSelected = "HandMan";
    FactionSelected = "Enemy";
    document.getElementById("HandManHeadshotImage").src = "HandManHeadshotSelected.png";
    document.getElementById("CharacterName").innerText = "Evil"
    document.getElementById("Tagline").innerText = "I don't even know man"
    document.getElementById("AttackOne").innerText = "Grab"
    document.getElementById("AttackOneText").innerText = "Reduces enemy speed and \n attack for 20 seconds"
    document.getElementById("AttackTwo").innerText = ""
    document.getElementById("AttackTwoText").innerText=""
    document.getElementById("AttackThree").innerText=""
    document.getElementById("AttackThreeText").innerText=""
}    