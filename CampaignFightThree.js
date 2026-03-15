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

var CamoTimer = 0
var Camouflaged = false
var LizardTamed = "false"
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
        EnemySlowAmount = 100
        TheMarkInitial = 35
        TheMarkIncrease = 20
        HookCounterInitial = 15
        HookCounterIncrease = 10
        VirusDamage = 10
        VirusThreshold = 16
        EnemyOneFireAttackValue = 5
        FireIntervalThreshold = 8
        ReduceInitialAmount = 25
        ReduceIncreaseAmount = 10
    }
    if(SpeedMode == "Slow") {
        console.log("Slow Speed Activated")
        AllyOneAttackMeterHTML.max = 150 // 6 seconds
        EnemyOneAttackMeterHTML.max = 150 
        EnemySlowAmount = 50
        TheMarkInitial = 30
        TheMarkIncrease = 20
        HookCounterInitial = 10
        HookCounterIncrease = 5
        VirusDamage = 10
        VirusThreshold = 12
        EnemyOneFireAttackValue = 5
        FireIntervalThreshold = 6
        ReduceInitialAmount = 20
        ReduceIncreaseAmount = 10
    }
    if(SpeedMode == "Standard") { // complete
        console.log("Standard Speed Activated")
        AllyOneAttackMeterHTML.max = 100 // 4 seconds
        EnemyOneAttackMeterHTML.max = 100 
        EnemySlowAmount = 75
        TheMarkInitial = 20 
        TheMarkIncrease = 15
        HookCounterInitial = 15
        HookCounterIncrease = 10
        VirusDamage = 15
        VirusThreshold = 8
        EnemyOneFireAttackValue = 10
        FireIntervalThreshold = 4
        ReduceInitialAmount = 15
        ReduceIncreaseAmount = 10
    }
    if(SpeedMode == "Speedy") { // complete
        console.log("Standard Speed Activated")
        AllyOneAttackMeterHTML.max = 50 // 2 seconds
        EnemyOneAttackMeterHTML.max = 50 
        EnemySlowAmount = 25
        TheMarkInitial = 10
        TheMarkIncrease = 4
        HookCounterInitial = 10
        HookCounterIncrease = 4
        VirusDamage = 25
        VirusThreshold = 4
        EnemyOneFireAttackValue = 15
        FireIntervalThreshold = 2
        ReduceInitialAmount = 10
        ReduceIncreaseAmount = 5
    }
        if(SpeedMode == "Swift") { // complete
        console.log("Standard Speed Activated")
        AllyOneAttackMeterHTML.max = 25 // 1 seconds
        EnemyOneAttackMeterHTML.max = 25
        EnemySlowAmount = 25
        TheMarkInitial = 5 
        TheMarkIncrease = 2
        HookCounterInitial = 5
        HookCounterIncrease = 2
        VirusDamage = 20 
        VirusThreshold = 4
        EnemyOneFireAttackValue = 20
        FireIntervalThreshold = 2
        ReduceInitialAmount = 10
        ReduceIncreaseAmount = 5
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
    AllyOne = "SlugCat"
    EnemyOne = "Lizard"
    SpeedSettings()
    console.log("GAME SPEED = " + SpeedMode)
    document.getElementById("AllyOneImage").src = AllyOne+".png"
    document.getElementById("EnemyOneImage").src = EnemyOne+".png"
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

// ################################ // 
// ################################ // 
// ####### Ally ONE ATTACKS ####### // 
// ################################ // 
// ################################ // 

function SpearOne() {
    if(Camouflaged == false) {
        AllyOneAttackValue = 1
    }
    if(Camouflaged == true) {
        AllyOneAttackValue = AllyOneAttackValue = Math.floor(Math.random() * (3-1)+1)
    }
    if(AllyOneAttackValue == 1) {
        AllyOneAttackValue = AllyOneAttackValue = Math.floor(Math.random() * (3-1)+1)
    
        AllyOneAttackValue = Math.floor(Math.random() * (5-1)+1)
        if(AllyOneAttackValue == 1) {
            document.getElementById("AllyOneAttackLog").innerText = "SlugCat used Spear, and missed!"
        }
        if(AllyOneAttackValue != 1) {
            AllyOneAttackValue = Math.floor(Math.random()*(3-1)+1)
            if(AllyOneAttackValue == 1) {
            AllyOneAttackValue = Math.floor(Math.random()*(101-1)+1)
            }
            else if(AllyOneAttackValue == 2) {
                AllyOneAttackValue = Math.floor(Math.random()*(201-1)+1)
            }
            EnemyOneHealth.value -= AllyOneAttackValue
            document.getElementById("AllyOneAttackLog").innerText = "SlugCat used Spear, and dealt " + AllyOneAttackValue + " damage to Lizard"
        }}
    else if(AllyOneAttackValue == 2) {
        document.getElementById("AllyOneAttackLog").innerText = "SlugCat missed due to Camouflauge!"
    }
}

function TameOne() {
    if(Camouflaged == false) {
        AllyOneAttackValue = 1
    }
    if(Camouflaged == true) {
        AllyOneAttackValue = AllyOneAttackValue = Math.floor(Math.random() * (3-1)+1)
    }
    if(AllyOneAttackValue == 1) {
    AllyOneAttackValue = Math.floor(Math.random() * (11-1)+1)
    if(AllyOneAttackValue == 1) { 
        document.getElementById("AllyOneAttackLog").innerText = "SlugCat tried to tame the Lizard. It worked??"
        EnemyOneHealth.value = 0
        LizardTamed = "true"
        EnemyOneHealth.value = 500
        AllyOneHealth.value = 500
        AllyOneAttackMeterHTML.value = AllyOneAttackMeterHTML.max
        EnemyOneAttackMeterHTML.value = EnemyOneAttackMeterHTML.max
        AltEndingTextUpdate()
    }
    if(AllyOneAttackValue != 1) { 
        document.getElementById("AllyOneAttackLog").innerText = "SlugCat tried to tame the Lizard. It did not work, and the Lizard healed 100 health!"
        EnemyOneHealth.value += 100
        document.getElementById("AttackTwoExplanation").innerText = "Tame: Attempt to tame the lizard by feeding it.\n I forgot to mention it healed the Lizard."
    }}
    else if(AllyOneAttackValue == 2) {
        document.getElementById("AllyOneAttackLog").innerText = "SlugCat missed due to Camouflauge!"
    }
}

function TheRotOne() {
    document.getElementById("AllyOneAttackLog").innerText = "SlugCat used The Rot, inflicting itself with permanent poison in order to heal itself for 300hp"
    AllyOneHealth.value += 300
    setInterval(TheRotDamager, 100)
}
function TheRotDamager() {
    if(AllyOneHealth.value != 0) {
    AllyOneHealth.value -= 1}
}
function AllyOneMoveEnacter() {
        if(AllyOne == "SlugCat") {
            if(AllyOneAttackSelected == "One") {
                SpearOne()
                AllyOneAttackUsed = "Spear"
            }
            if(AllyOneAttackSelected == "Two") {
                TameOne()
                AllyOneAttackUsed = "Tame"
            }
            if(AllyOneAttackSelected == "Three") {
                TheRotOne()
                AllyOneAttackUsed = "The Rot"
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
    if (AllyOneHealth.value <= 0 || GameIsOver == "true" || LizardTamed == "true") {
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
    if (AllyOneHealth.value <= 0 || GameIsOver == "true" || LizardTamed == "true") {
       console.log("AllyOneMeterResetCancelled")
    } else {
        AllyOneAttackMeterHTML.value = AllyOneAttackMeterHTML.max;
        AllyOneMoveEnacter()
    }
    
}


function EnemyOneAttackMeterUpdate() {
    VariableUpdater();
    if (EnemyOneHealth.value <= 0 || GameIsOver == "true" || LizardTamed == "true") {
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
    if (EnemyOneHealth.value <= 0 || GameIsOver == "true" || LizardTamed == "true") {
       console.log(AllyOneHealth.value)
       console.log(EnemyOneHealth.value)
    } else {
        EnemyOneAttackMeterHTML.value = EnemyOneAttackMeterHTML.max;
        EnemyOneAttackSelector()
    }
    
}


// ###################################### //
// ###################################### //
// ####### ENEMY ONE MOVE HANDLER ####### //
// ###################################### //
// ###################################### //


function EnemyOneAttackSelector() { // I would like to mention that I think breaking up the move system into different code chunks (the attack area and the attack selector which will both be called later) is a sign I've progressed as a coder since I would've put it all in one section earlier man
    if (EnemyOne == "Lizard") { 
            EnemyOneAttackSelection = Math.floor(Math.random()* (11-1)+1)
            if (EnemyOneAttackSelection <= 5) {
                BiteOne()
            }
            if (EnemyOneAttackSelection <= 7 && EnemyOneAttackSelection >= 6) {
                
                LungeOne()
            }
            if (EnemyOneAttackSelection >= 8) {

                CamouflageOne()
            }
        }
    }


// ################################# //
// ################################# //
// ####### ENEMY ONE ATTACKS ####### //
// ################################# //
// ################################# //


function BiteOne() {
    VariableUpdater()
        document.getElementById("EnemyOneAttackLog").innerText = "Lizard bites SlugCat, dealing 100 damage!"
        AllyOneHealth.value -= 100
}

function CamouflageOne() {
    Camouflaged = true
    CamoTimer = AllyOneAttackMeterHTML.max*2*20
    console.log(CamoTimer)
    setTimeout(Decamo, CamoTimer)
    document.getElementById("EnemyOneAttackLog").innerText = "Lizard camouflaged"
    document.getElementById("EnemyOneImage").style.opacity = ".5"
}

function Decamo() {
    console.log("Decamo ran")
    document.getElementById("EnemyOneImage").style.opacity = "1"
    Camouflaged = false
}
function LungeOne() {
    CamoTimer = AllyOneAttackMeterHTML.max*3*20*2
    EnemyOneAttackValue = Math.floor(Math.random() * (51-10)+10)
    AllyOneHealth.value -= EnemyOneAttackValue
    EnemyOneAttackMeterHTML.max -= EnemySlowAmount
    document.getElementById("EnemyOneAttackLog").innerText = "Lizard used Lunge, dealing " + EnemyOneAttackValue + " and speeding itself up!"
    setTimeout(LungeCancel, CamoTimer)
}
function LungeCancel() {
    console.log("LungeCanceled")
    EnemyOneAttackMeterHTML.max = AllyOneAttackMeterHTML.max
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

// ########################## // 
// ########################## //
// ####### ALT ENDING ####### //
// ########################## //
// ########################## //

function AltEndingTextUpdate() {
    ColorFlash()
    document.getElementById("ColorDivHTML").innerText = "If I had enough time, this would've gone to an extra boss fight where you and Lizard fight a Slightly Larger Lizard, but If you are seeing this there was not enough time, sorry lol"
    BaseGameOver()
}

function ColorFlash() {
    document.getElementById("ColorDivHTML").setAttribute("style", "background-color: rgb(252, 246, 171);")
    setTimeout(ColorFlash1, 100)
}
function ColorFlash1() {
    document.getElementById("ColorDivHTML").setAttribute("style", "background-color: rgb(255, 223, 120)171);")
    setTimeout(ColorFlash2, 100)
}
function ColorFlash2() {
    document.getElementById("ColorDivHTML").setAttribute("style", "background-color: rgb(219, 166, 123);")
    setTimeout(ColorFlash3, 100)
}
function ColorFlash3() {
    document.getElementById("ColorDivHTML").setAttribute("style", "background-color: rgb(252, 224, 146);")
    setTimeout(ColorFlash4, 100)
}
function ColorFlash4() {
    document.getElementById("ColorDivHTML").setAttribute("style", "background-color: rgb(236, 233, 184);")
}