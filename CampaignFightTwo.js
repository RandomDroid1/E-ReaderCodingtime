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
        EnemySlowAmount = 125
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
        EnemySlowAmount = 100
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
    AllyOne = "AtomBomb"
    EnemyOne = "CoughingBaby"
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
    document.getElementById("AllyOneAttackThree").style.visibility = "hidden"
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
    document.getElementById("AllyOneAttackThree").style.visibility = "visible"
    document.getElementById("EnemyExplanation").innerText = ""
    document.getElementById("EnemyAttackOneExplanation").innerText = ""
    document.getElementById("EnemyAttackTwoExplanation").innerText = ""
    document.getElementById("AttackOneExplanation").innerText = ""
    document.getElementById("AttackTwoExplanation").innerText = ""
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
    document.getElementById("BabyvsBomb").src = "BabyvsBomb.webp"
    
    
}

function GameOverLoss() {
    document.getElementById("TutorialBlurb").innerText = "You lost... to a coughing baby... He might just be too strong ):"
}
function GameOverWin() {
    document.getElementById("TutorialBlurb").innerText = "You WON!!!!! If you want to retry, or do anything else, those buttons down there where the attacks were will help you do that. Good job!"
}
function GameOverTie() {
    document.getElementById("TutorialBlurb").innerText = "You tied???? Truly a shakespearean tale."
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

function ExplodeOne() {
    
    AllyAttackNumber += 1;
    
    document.getElementById("AllyOneAttackLog").innerText = "Hydrogen Bomb blew up!!"
    setTimeout(ExplodeLight, 100)
}

function ExplodeLight() {
    document.getElementById("EnemyExplanation").innerText = ""
    document.getElementById("EnemyAttackOneExplanation").innerText = ""
    document.getElementById("EnemyAttackTwoExplanation").innerText = ""
    document.getElementById("AttackOneExplanation").innerText = ""
    document.getElementById("AttackTwoExplanation").innerText = ""
    document.getElementById("ScreenSize").style.backgroundColor = "white"
    document.getElementById("ColorDivHTML").style.backgroundColor = "white"
    document.getElementById("AllyOneImage").src = ""
    document.getElementById("CoreMenu").style.backgroundColor = "white"
    document.getElementById("AllyOneAttackOne").style.visibility = "hidden"
    document.getElementById("AllyOneAttackTwo").style.visibility = "hidden"
    document.getElementById('AllyOneLabel').innerHTML = ""
    setTimeout(ExplodeVisualReset, 1000)
}
function ExplodeVisualReset() {
    document.getElementById("ScreenSize").style.backgroundColor = "gray"
    document.getElementById("ColorDivHTML").style.backgroundColor = "gray"
    document.getElementById("CoreMenu").style.backgroundColor = "lightgray"
    document.getElementById("AllyOneAttackOne").style.visibility = "visible"
    document.getElementById("AllyOneAttackTwo").style.visibility = "visible"
    AllyOneHealth.value -= 500
    document.getElementById("EnemyOneAttackLog").innerText = "Coughing Baby was simply too resilient."
}
function AllyOneMoveEnacter() {
        if(AllyOneAttackSelected == "One") {
            ExplodeOne()
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
        AllyOneAttackOneText = "Explode"
        AllyOneAttackTwoText = "Wait"
    }
}






// ###################################### //
// ###################################### //
// ####### ENEMY ONE MOVE HANDLER ####### //
// ###################################### //
// ###################################### //


function EnemyOneAttackSelector() { // I would like to mention that I think breaking up the move system into different code chunks (the attack area and the attack selector which will both be called later) is a sign I've progressed as a coder since I would've put it all in one section earlier man
    EnemyOneAttackType = "Cough"
    Cough()
    }


// ################################# //
// ################################# //
// ####### ENEMY ONE ATTACKS ####### //
// ################################# //
// ################################# //


function Cough() {
    EnemyOneHealth.value -= 30
    document.getElementById("EnemyOneAttackLog").innerText = "Coughing baby coughed and took 30 damage"
    setTimeout(CoughLeft, 100)
}

function CoughLeft() {
    document.getElementById("EnemyOneImage").style.left = "10px"
    setTimeout(CoughRight, 100)
}

function CoughRight() {
    document.getElementById("EnemyOneImage").style.left = "-10px"
    setTimeout(CoughReset, 100)
}
function CoughReset() {
    document.getElementById("EnemyOneImage").style.left = "0px"
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