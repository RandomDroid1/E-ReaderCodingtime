var AllyAttackNumber = 0;
var EnemyOneAttackNumber = 0;

var AllyOneDefense = 0;
var EnemyOneDefense = 0;

var EnemyOneAttack = "none";

var GameIsOver = "false";

var CharacterSelected = "none";
var FactionSelected = "none";

var AllyOneSelected = false;
var EnemyOneSelected = false;

var EnemyOneSelfDamage = 0;

var EnemyOneAttackTarget = "none"

var FoldCounter = 0;
var EnemyOneAttackNumberText = document.getElementById("EnemyOneAttackLog"); // what could this possbiley be for?

var PlayerOneAttackType = "none";
var PlayerTwoAttackType = "none";
var EnemyOneAttackType = "none";

var EnemyOneVirusSlotOne = "Free";
var EnemyOneVirusSlotTwo = "Free";

var EnemyOneVirusSlotOneCounter = 0;
var EnemyOneVirusSlotTwoCounter = 0;

var EnemyOneVirusSlotOneTargetLock = "none";
var EnemyOneVirusSlotTwoTargetLock = "none";

var InformationShown = "false";

var EnemyOneAttackValue = 0
var AllyOneAttackValue = 0

var EnemyOneHealValue = 0

var EnemyOneFireCounter = 0

var DamningCounter = 0

var FishStatus = "Attack"

var AllyOneLocked = "false"

var AllyOneAttackUsed = "none"

var AllyOneAttackType = "none"

var AllyOneAttackSelected = "none"

var AllyOneHealValue = 0

var EnemyOneVirusTarget = "none"


var ReduceCounterVariable = 10
var DomainCounterVariable = 10
var ReduceIntervalVariable = "none"
var DomainIntervalVariable = "none"

var VirusIntervalVariable = "none"

var AllyOneDead = false
var EnemyOneDead = false

var EnemySlowAmount = 0

var TheMarkInitial = 0 // how many seconds hook lasts
var TheMarkIncrease = 0 // how much to increase hook by if its used twice

var HookCounterIncrease = 0 // how much to increase hook by if its used twice
var HookCounterInitial = 0 // how many seconds hook lasts

var VirusDamage = 0 // how much damage the virus does per second
var VirusThreshold = 0 // how many seconds it takes for the virus to wear off

var EnemyOneFireAttackValue = 0
var FireIntervalVariable = 0
var FireThreshold = 0

var EnemySlowAmount = 0 // How much to slow enemies by, such as in moves like hook. Adds directly to attack meter max
var SpeedMode = "Slow";
if (AllyOne == undefined) {
var AllyOne = "none";
var EnemyOne = "none";

console.log("NoneRan")
}

// ############################## // 
// ############################## // 
// ####### SPEED SETTINGS ####### // 
// ############################## // 
// ############################## // 

function SpeedSettings() {// I could probably do this with math but i dont wanna
    if(SpeedMode == "Snail") {
        console.log("Snail Speed Activated")
        AllyOneAttackMeterHTML.max = 200 // 8 seconds
        EnemyOneAttackMeterHTML.max = 200 
        EnemyOneFireAttackValue = 5
        FireIntervalThreshold = 8
    }
    if(SpeedMode == "Slow") {
        console.log("Slow Speed Activated")
        AllyOneAttackMeterHTML.max = 150 // 6 seconds
        EnemyOneAttackMeterHTML.max = 150 
        EnemyOneFireAttackValue = 5
        FireIntervalThreshold = 6

    }
    if(SpeedMode == "Standard") { // complete
        console.log("Standard Speed Activated")
        AllyOneAttackMeterHTML.max = 100 // 4 seconds
        EnemyOneAttackMeterHTML.max = 100 
        EnemySlowAmount = 75
        EnemyOneFireAttackValue = 10
        FireIntervalThreshold = 4
    }
    if(SpeedMode == "Speedy") { // complete
        console.log("Standard Speed Activated")
        AllyOneAttackMeterHTML.max = 50 // 2 seconds
        EnemyOneAttackMeterHTML.max = 50 
        EnemySlowAmount = 25
        EnemyOneFireAttackValue = 15
        FireIntervalThreshold = 2
    }
        if(SpeedMode == "Swift") { // complete
        console.log("Standard Speed Activated")
        AllyOneAttackMeterHTML.max = 25 // 1 seconds
        EnemyOneAttackMeterHTML.max = 25
        EnemyOneFireAttackValue = 20
        FireIntervalThreshold = 2
    }
}

function VariableUpdater() {
        var EnemyOneHealth = document.getElementById("EnemyOneHealth")
        var AllyOneHealth = document.getElementById("AllyOneHealth")
        var GameOver = document.getElementById("GameOver");
        var AllyOneAttackMeterHTML = document.getElementById("AllyOneAttackMeterHTML");
        var EnemyOneAttackMeterHTML = document.getElementById("EnemyOneAttackMeterHTML")
 }



document.addEventListener('DOMContentLoaded', (event) => { // Just yoink a bit of code from stack overflow and now it does what I want!
    console.log('DOM fully loaded and parsed');
});

function GameIsOverCheck() {
    AllyOneAttackType = "AttackEnemyOne"
    console.log(AllyOneAttackType)
}
// ####### START & consistent Checks ####### //
function StartGame() {
    if (AllyOneSelected == true && EnemyOneSelected == true){
    localStorage.setItem("SpeedModeStorage",SpeedMode);
    location.assign("FightScreen.html")}
}


function StartButton() { // Starts the enemies attack when clicked
    VariableUpdater()
    console.log(AllyOne, EnemyOne)
    console.log("Started");
    console.log("EnemyOneHealth = " + EnemyOneHealth.value)
    console.log("AllyOneHealth = " + AllyOneHealth.value)
    setTimeout(CheckHealth, 10);
    document.getElementById("StartButton").setAttribute('disabled','disabled');
    AllyOne = "AngelCat"
    EnemyOne = "DevilCat"
    SpeedSettings()
    console.log("GAME SPEED = " + SpeedMode)
    document.getElementById("AllyOneImage").src = AllyOne+".png"
    document.getElementById("EnemyOneImage").src = EnemyOne+".png"
    AllyOneMoveList()
    TurnCaller()
    EnemyOneAttackMeterHTML.value = EnemyOneAttackMeterHTML.max
    AllyOneAttackMeterHTML.value = AllyOneAttackMeterHTML.max
    document.getElementById("StartButton").style.visibility = "hidden"
    document.getElementById("SnailModeButton").style.visibility = "hidden"
    document.getElementById("SlowModeButton").style.visibility = "hidden"
    document.getElementById("StandardModeButton").style.visibility = "hidden"
    document.getElementById("SpeedyModeButton").style.visibility = "hidden"
    document.getElementById("SwiftModeButton").style.visibility = "hidden"

}



function GameOver() {
    VariableUpdater()
    if (EnemyOneHealth.value <= 0) {
        document.getElementById("GameOver").innerHTML = "Game over! You Won";
        GameIsOver = "true"
        BaseGameOver()
        GameOverWin()
    } 
    if (AllyOneHealth.value <= 0) {
        document.getElementById("GameOver").innerHTML = "Game over! You Lost ):<";
        GameIsOver = "true"
        BaseGameOver()
        GameOverLoss()
    } 
    if (EnemyOneHealth.value <= 0 && AllyOneHealth.value <= 0) {
        document.getElementById("GameOver").innerHTML = "Game over! You ALL LOSE";
        GameIsOver = "true"
        BaseGameOver()
        GameOverTie()
    };
    

}
function CheckHealth() { // Checks health of Ally and enemy, does needed updates and shutdowns
    if (AllyOneHealth.value >= 0 && EnemyOneHealth.value >= 0) {
        setTimeout(CheckHealth,100)
    } 
    if (AllyOneHealth.value <= 0) {
        AllyOneHealth.max = 999999999999999999999999999 // i mean it technically works to make health irrelevant but like its not a good solution at all
        AllyOneAttackMeterHTML.value = AllyOneAttackMeterHTML.max
        GameOver()
    } 
    if (EnemyOneHealth.value <= 0) {
        EnemyOneHealth.max = 999999999999999999999999999
        GameOver()
    }

}

// ############################### // 
// ############################### // 
// ####### Game Over Stuff ####### // 
// ############################### // 
// ############################### // 

function BaseGameOver() {
    document.getElementById("EnemyExplanation").innerText = ""
    document.getElementById("EnemyAttackOneExplanation").innerText = ""
    document.getElementById("EnemyAttackTwoExplanation").innerText = ""
    document.getElementById("EnemyAttackThreeExplanation").innerText = ""
    document.getElementById("AttackOneExplanation").innerText = ""
    document.getElementById("AttackTwoExplanation").innerText = ""
    document.getElementById("AttackThreeExplanation").innerText = ""
    document.getElementById("AllyOneLabel").innerText = "OPTIONS"
    document.getElementById("AllyOneAttackOne").style.width = "580px"
    document.getElementById("AllyOneAttackTwo").style.width = "580px"
    document.getElementById("AllyOneAttackThree").style.width = "580px"
    document.getElementById("AllyOneAttackOne").style.borderWidth = "1px"
    document.getElementById("AllyOneAttackTwo").style.borderWidth = "1px"
    document.getElementById("AllyOneAttackThree").style.borderWidth = "1px"
    document.getElementById("AllyOneAttackOne").innerText = "REPLAY"
    document.getElementById("AllyOneAttackTwo").innerText = "RETURN TO MODE SELECTION SCREEN"
    document.getElementById("AllyOneAttackThree").innerText = "JUMP TO CAMPAIGN MODE"
}

function GameOverLoss() {
    document.getElementById("TutorialBlurb").innerText = "You lost... If you want to retry, or do anything else, those buttons down there where the attacks were will help you do that."
}
function GameOverWin() {
    document.getElementById("TutorialBlurb").innerText = "You WON!!!!! If you want to retry, or do anything else, those buttons down there where the attacks were will help you do that. Good job!"
}
function GameOverTie() {
    document.getElementById("TutorialBlurb").innerText = "You tied???? Was it because of fire damage? It was probably because of fire damage. If you want to retry, or do anything else, those buttons down there where the attacks were will help you do that."
}

function ReplayButton() {
    window.location.reload();
}

function ReturnModeSelectionButton() {
    window.location.href = "ModeSelection.html"
}

function CampaignModeButton() {
    window.location.href = "CampaignBattleSelection.html"
}

function AnimationReset() {
    document.getElementById("HeavenlyStrikeAnimationID").src = ""
    document.getElementById("JudgementAnimationID").src = ""
    document.getElementById("HealingPrayerAnimationID").src = ""
    document.getElementById("DemonicStrikeAnimationID").src = ""
    document.getElementById("DamningAnimationID").src = ""
    document.getElementById("FireBlastAnimationID").src = ""
}
// ################################ // 
// ################################ // 
// ####### Ally ONE ATTACKS ####### // 
// ################################ // 
// ################################ // 

function HeavenlyStrikeOne() {
    console.log("HeavenlyUsed")
    AllyAttackNumber += 1;
    AllyOneAttackValue = Math.floor(Math.random() * (151-40)+40) // Slightly higher max than demonic strike w/ a larger range?
    AllyOneAttackType = "AttackEnemyOne"
    EnemyOneHealth.value -= AllyOneAttackValue
    document.getElementById("AllyOneAttackLog").innerText = "AngelCat used Heavenly Strike, drawing power from the Heavens to deal " + AllyOneAttackValue + " damage to DevilCat"
    document.getElementById("HeavenlyStrikeAnimationID").src = "HeavenlyStrikeAnimation.png"

}



function JudgementOne() {
    AllyOneAttackType = "AttackEnemyOne"
    AllyAttackNumber += 1;
    AllyOneAttackValue = Math.floor((AllyOneHealth.max-AllyOneHealth.value)*.25)
    EnemyOneHealth.value -= AllyOneAttackValue
    document.getElementById("AllyOneAttackLog").innerText = "AngelCat used Judgement, dealing " + AllyOneAttackValue + " damage to DevilCat"
    document.getElementById("JudgementAnimationID").src = "JudgementAnimation.png"
}

function HealingPrayerOne() {
    AllyOneAttackType = "HealAllies"
    console.log("HealUsed")
    AllyAttackNumber += 1;
    if(AllyOneHealth.value >= 400){
    AllyOneAttackValue = Math.floor(Math.random() * (151-1)+1)
    }
    if(AllyOneHealth.value <= 399 && AllyOneHealth.value >= 200){
    AllyOneAttackValue = Math.floor(Math.random() * (151-40)+40)
    }
    if(AllyOneHealth.value <= 199){
        AllyOneAttackValue = Math.floor(Math.random() * (151-75)+75)
    }
    AllyOneHealth.value += AllyOneAttackValue
    document.getElementById("AllyOneAttackLog").innerText = "AngelCat prayed for healing, and healed " + AllyOneAttackValue + " health!"
    document.getElementById("HealingPrayerAnimationID").src = "HealingPrayerAnimation.png"
}


function AllyOneMoveEnacter() {
        if(AllyOne == "AngelCat") {
            if(AllyOneAttackSelected == "One") {
                HeavenlyStrikeOne()
                AllyOneAttackUsed = "Heavenly Strike"
            }
            if(AllyOneAttackSelected == "Two") {
                JudgementOne()
                AllyOneAttackUsed = "Judgement"
            }
            if(AllyOneAttackSelected == "Three") {
                HealingPrayerOne()
                AllyOneAttackUsed = "Healing Prayer"
            }
        }
}








// ################################### // 
// ################################### //
// ####### ALLY ATTACK BUTTONS ####### //
// ################################### //
// ################################### //

function AllyOneAttackButtonReset() {
    document.getElementById("AllyOneAttackOne").style.borderWidth = "2px"
    document.getElementById("AllyOneAttackTwo").style.borderWidth = "2px"
    document.getElementById("AllyOneAttackThree").style.borderWidth = "2px"
}
function AllyOneAttackButtonOne() {
    if(GameIsOver == "false") {
        AllyOneAttackButtonReset()
        console.log("AttackOneSelected")
        AllyOneAttackSelected = "One"
        document.getElementById("AllyOneAttackOne").style.borderWidth = "5px"
    }
    if(GameIsOver == "true") {
        ReplayButton()
    }
}
function AllyOneAttackButtonTwo() {
    if(GameIsOver == "false") {
    AllyOneAttackButtonReset()
    AllyOneAttackSelected = "Two"
    console.log("AttackTwoSelected")
    document.getElementById("AllyOneAttackTwo").style.borderWidth = "5px"}
    // Return to mode selection
    if(GameIsOver == "true") {
        ReturnModeSelectionButton()
    }
}
function AllyOneAttackButtonThree() {
    if(GameIsOver == "false") {
    AllyOneAttackButtonReset()
    AllyOneAttackSelected = "Three"
    console.log("AttackThreeSelected")
    document.getElementById("AllyOneAttackThree").style.borderWidth = "5px"}
    // Portal to campaign mode
    if(GameIsOver == "true") {
        CampaignModeButton()
    }

}
// ###################################### // 
// ###################################### //
// ####### UNIVERSAL TURN HANDLER ####### //
// ###################################### //
// ###################################### //

function TurnCaller() {
    VariableUpdater()
    setTimeout(EnemyOneAttackMeterUpdate, 1000)
    setTimeout(AllyOneAttackMeterUpdate, 1000)
}

function AllyOneAttackMeterUpdate() {
    VariableUpdater();
    if (AllyOneHealth.value <= 0 || GameIsOver == "true") {
       console.log("AllyOneMeterUpdateCancelled")
    } else {
        AllyOneAttackMeterHTML.value -= 25;
        setTimeout(AllyOneAttackMeterUpdate, 1000)
        if (AllyOneAttackMeterHTML.value <= 0) {
            AllyOneAttackMeterReset()

        }
    }
}

function AllyOneAttackMeterReset() {
    VariableUpdater();
    if (AllyOneHealth.value <= 0 || GameIsOver == "true") {
       console.log("AllyOneMeterResetCancelled")
    } else {
        AllyOneAttackMeterHTML.value = AllyOneAttackMeterHTML.max;
        AllyOneMoveEnacter()
    }
    
}


function EnemyOneAttackMeterUpdate() {
    VariableUpdater();
    if (EnemyOneHealth.value <= 0 || GameIsOver == "true") {
       console.log(AllyOneHealth.value)
       console.log(EnemyOneHealth.value)
    } else {
        EnemyOneAttackMeterHTML.value -= 25;
        setTimeout(EnemyOneAttackMeterUpdate, 1000)
        if (EnemyOneAttackMeterHTML.value <= 0) {
            EnemyOneAttackMeterReset()
        }
    }
}

function EnemyOneAttackMeterReset() {
    VariableUpdater();
    if (EnemyOneHealth.value <= 0 || GameIsOver == "true") {
       console.log(AllyOneHealth.value)
       console.log(EnemyOneHealth.value)
    } else {
        EnemyOneAttackMeterHTML.value = EnemyOneAttackMeterHTML.max;
        EnemyOneAttackSelector()
        
    }
    
}



// ################################ // 
// ################################ // 
// ####### ALLY MOVE LABELS ####### // 
// ################################ // 
// ################################ // 

function AllyOneMoveList() { // This is going to take so long oh my god what is a better way?
    
    if(AllyOne == "AngelCat") {
        AllyOneAttackOneText = "Heavenly Strike"
        AllyOneAttackTwoText = "Judgement"
        AllyOneAttackThreeText = "Healing Prayer"
        document.getElementById("AllyOneLabel").innerHTML = "AngelCat"
        document.getElementById("AllyOneAttackOne").innerHTML = "Heavenly Strike"
        document.getElementById("AllyOneAttackTwo").innerHTML = "Judgement"
        document.getElementById("AllyOneAttackThree").innerHTML = "Healing Prayer"
        
    }
}






// ###################################### //
// ###################################### //
// ####### ENEMY ONE MOVE HANDLER ####### //
// ###################################### //
// ###################################### //


function EnemyOneAttackSelector() { // I would like to mention that I think breaking up the move system into different code chunks (the attack area and the attack selector which will both be called later) is a sign I've progressed as a coder since I would've put it all in one section earlier man
    if (EnemyOne == "DevilCat") { // 10 points, biased toward demonic strike, simple system. 1-5 = demonic strike, 6-8 = damning, 9-10 = Fire Blast
        AnimationReset()
            EnemyOneAttackSelection = Math.floor(Math.random() * (11-1) + 1)
            if (EnemyOneAttackSelection <= 5) {
                EnemyOneAttack = "DemonicStrike"
                DemonicStrikeOne()
                EnemyOneAttackType = "Damage"
            }
            if (EnemyOneAttackSelection <= 8 && EnemyOneAttackSelection >= 6) {
                EnemyOneAttack = "Damning"
                DamningOne()
            }
            if (EnemyOneAttackSelection >= 9) {
                console.log("FirBlastSelected")
                EnemyOneAttack = "FireBlast"
                FireBlastOne()
            }
        }
    }


// ################################# //
// ################################# //
// ####### ENEMY ONE ATTACKS ####### //
// ################################# //
// ################################# //


function DemonicStrikeOne() {
    VariableUpdater()
    if (EnemyOneHealth.value <= 0 || AllyOneHealth.value <= 0) {

    } else {
        EnemyOneAttackNumber += 1;
        EnemyOneAttackValue = Math.floor(Math.random() * (101 - 70) + 70);
        AllyOneHealth.value -= EnemyOneAttackValue
        document.getElementById("EnemyOneAttackLog").innerText = "Devilcat strikes AngelCat with the power of Hell itself, dealing " + EnemyOneAttackValue + " damage!"
        document.getElementById("DemonicStrikeAnimationID").src = "DemonicStrikeAnimation.png"

    } 
}

function DamningOne() {
    EnemyOneAttackNumber += 1;
    EnemyOneAttackValue = Math.floor(Math.random() * (5-1)+1); // A one means failure
    if(EnemyOneAttackValue == 1) {
        document.getElementById("EnemyOneAttackLog").innerText = "Devilcat uses Damning, but it backfired! DevilCat takes 50 damage!"
        EnemyOneHealth.value -= 50
    }
    if(EnemyOneAttackValue != 1) {
        DamningCounter += 1
        EnemyOneAttackValue = Math.floor((Math.random() * (75-25)+25) * (DamningCounter))
        AllyOneHealth.value -= EnemyOneAttackValue
        document.getElementById("EnemyOneAttackLog").innerText = "Devilcat uses Damning, and deals " + EnemyOneAttackValue + " damage to Angel Cat!"
        document.getElementById("DamningAnimationID").src = "DamningAnimation.png"

    }
}

function FireBlastOne() {
    VariableUpdater()
    EnemyOneAttackNumber += 1;
    EnemyOneAttackValue = Math.floor(Math.random() * (60 - 40) + 40);
    EnemyOneFireAttackValue = Math.floor(Math.random() * (35-25) + 25);
    AllyOneHealth.value -= EnemyOneAttackValue
    document.getElementById("EnemyOneAttackLog").innerText = "Devilcat uses Fire Blast, and deals an initial " + EnemyOneAttackValue + "damage, plus fire damage!"
    FireIntervalVariable = setInterval(EnemyOneFireDamager, 1000)
    FireIntervalVariable
    document.getElementById("FireBlastAnimationID").src = "FireBlastAnimation.png"
}

// ############################ //
// ############################ //
// ####### FIRE HANDLER ####### //
// ############################ //
// ############################ //
function EnemyOneFireDamager() {
    
    if(EnemyOneFireCounter != FireIntervalThreshold) {
        EnemyOneFireCounter += 1
        document.getElementById("AllyOneFireMarker").src = "FireDamage.png"
        AllyOneHealth.value -= EnemyOneFireAttackValue
    }
    if(EnemyOneFireCounter == FireIntervalThreshold) {
        EnemyOneFireCounter = 0
        document.getElementById("AllyOneFireMarker").src = ""
        clearInterval(FireIntervalVariable)
    }
}

// ############################ //
// ############################ //
// ####### SPEED BUTTONS ###### //
// ############################ //
// ############################ //

function ButtonVisualReset() {
    document.getElementById("SnailModeButton").style.borderWidth = "1px"
    document.getElementById("SlowModeButton").style.borderWidth = "1px"
    document.getElementById("StandardModeButton").style.borderWidth = "1px"
    document.getElementById("SpeedyModeButton").style.borderWidth = "1px"
    document.getElementById("SwiftModeButton").style.borderWidth = "1px"
}

function SnailModeToggle() {
    ButtonVisualReset()
    SpeedMode = "Snail"
    document.getElementById("SnailModeButton").style.borderWidth = "3px"
}

function SlowModeToggle() {
    ButtonVisualReset()
    SpeedMode = "Slow"
    document.getElementById("SlowModeButton").style.borderWidth = "3px"
}

function StandardModeToggle() {
    ButtonVisualReset()
    SpeedMode = "Standard"
    document.getElementById("StandardModeButton").style.borderWidth = "3px"
}

function SpeedyModeToggle() {
    ButtonVisualReset()
    SpeedMode = "Speedy"
    document.getElementById("SpeedyModeButton").style.borderWidth = "3px"
}

function SwiftModeToggle() {
    ButtonVisualReset()
    SpeedMode = "Swift"
    document.getElementById("SwiftModeButton").style.borderWidth = "3px"
}