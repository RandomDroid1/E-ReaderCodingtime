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

var AllyOneAttackOneText = "none"
var AllyOneAttackOneText = "none"
var AllyOneAttackOneText = "none"

var AllyOneAttackMultiplier = 1

var TheMarkCounterVariable = 20
var TheRotCounterVariable = 5
var TheMarkInterval = "none"
var TheRotInterval = "none"
var MarkAlreadyActive = false
var RotAlreadyActive = false
var HookInterval = "none"
var HookAlreadyActive = false
var HookCounterVariable = 15

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

var ReduceInitialAmount = 0
var ReduceIncreaseAmount = 0

var ClockMultiplier = 0
if (AllyOne == undefined) {
var AllyOne = "none";
var EnemyOne = "none";
var SpeedMode = "Slow"
console.log("NoneRan")
}

// ############################## // 
// ############################## // 
// ####### SPEED SETTINGS ####### // 
// ############################## // 
// ############################## // 

function SpeedSettings() {// I could probably do this with math but i dont wanna
    console.log(SpeedMode + AllyOneAttackMeterHTML.max)
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


function StartButton() { // Starts the enemies attack when clicked
    SpeedMode = "Snail"
    VariableUpdater()
    console.log(AllyOne, EnemyOne)
    console.log("Started");
    console.log("EnemyOneHealth = " + EnemyOneHealth.value)
    console.log("AllyOneHealth = " + AllyOneHealth.value)
    setTimeout(CheckHealth, 10); // is this ethical to 1ms timeout?
    document.getElementById("StartButton").setAttribute('disabled','disabled'); // IT WORKS IT WORKS
    AllyOne = "AngelCat"
    EnemyOne = "DevilCat"
    SpeedSettings()
    console.log("GAME SPEED = " + SpeedMode)
    document.getElementById("AllyOneImage").src = AllyOne+".png"
    document.getElementById("EnemyOneImage").src = EnemyOne+".png"
    
    AllyOneMoveList()
    document.getElementById("StartButton").innerHTML = ""
    document.getElementById("StartButton").style.width = "1px"
    document.getElementById("StartButton").style.height = "1px"
    ExtraTextFufiller()
    TutorialTextOne()
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
    document.getElementById("AllyOneAttackOne").innerText = "REPLAY"
    document.getElementById("AllyOneAttackTwo").innerText = "RETURN TO MODE SELECTION SCREEN"
    document.getElementById("AllyOneAttackThree").innerText = "JUMP TO CAMPAIGN MODE"
}

function GameOverLoss() {
    ColorFlash()
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
// ############################# // 
// ############################# // 
// ####### TUTORIAL TEXT ####### // 
// ############################# // 
// ############################# // 
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

function TurnCallerDelay() {
    TurnCaller()
}
function TutorialTextOne() {
    ColorFlash()
    document.getElementById("TutorialBlurb").innerText = "Hello!! The game will fully start in 30 seconds, while you are here, make sure to take a look at the buttons down there, and what attacks they do. If you have time, the text above explains the moves your enemy has! "
    setTimeout(TutorialTextTwo, 15000)
}
function TutorialTextTwo() {
    ColorFlash()
    document.getElementById("TutorialBlurb").innerText = "That flash happens when the text here updates, because no sound cues on an e-reader ): Also you can select an attack while you are waiting if you want. You still have 15 seconds"
    setTimeout(TutorialTextThree, 15000)
    setTimeout(TurnCallerDelay, 10000)
    }

function TutorialTextThree() {
    ColorFlash()
    if(AllyAttackNumber == 1) {
        document.getElementById("TutorialBlurb").innerText = "Nice hit! He hit you back, but like you don't feel it so who cares." // is this game even fun it's just click buttons simulator
        setTimeout(TutorialTextFinalMain, 10000)
    }
    if(AllyAttackNumber == 0) {
        document.getElementById("TutorialBlurb").innerText = "): Click the button ):"
        setTimeout(TutorialTextFinalMain, 10000)
    }
}    

function TutorialTextFinalMain() {
    ColorFlash()
    document.getElementById("TutorialBlurb").innerText = "Looks like you got this fiend handled! I'm going to kick up the speed in 10 seconds, good luck?"
    setTimeout(SpeedIncrease, 10000)
}

function SpeedIncrease() {
    ColorFlash()
    document.getElementById("TutorialBlurb").innerText = ""
    SpeedMode = "Slow"
    console.log("SpeedChanged")
    SpeedSettings()
}
function ExtraTextFufiller() {
    document.getElementById("AttackOneExplanation").innerText = "Heavenly Strike: Deals 150-40 damage. It hits one enemy, which you would select here if there were two"
    document.getElementById("AttackTwoExplanation").innerText = "Judgement: Damages Enemy(ies) for 75-30 damage. Not super good with only one enemy..."
    document.getElementById("AttackThreeExplanation").innerText = "Healing prayer: Heals ally(ies) for 75-25 Hp. Fairly simple, good in a pinch."
    document.getElementById("EnemyExplanation").innerText = "YOU ARE FIGHTING: Producer of chaos, deity of doom, DEVIL CAT!"
    document.getElementById("EnemyAttackOneExplanation").innerText = "DevilCat Attack One: Demonic Strike; Deals 100-50 damage to an enemy"
    document.getElementById("EnemyAttackTwoExplanation").innerText = "DevilCat Attack Two: Damning; Deal 50-25 damage to all Ally(ies)"
    document.getElementById("EnemyAttackThreeExplanation").innerText = "DevilCat Attack Three: Fire Blast; Hits allies for ~30 damage once, and ~20 damage over a period of time"
}



// ################################ // 
// ################################ // 
// ####### Ally ONE ATTACKS ####### // 
// ################################ // 
// ################################ // 

function HeavenlyStrikeOne() {
    console.log("HeavenlyUsed")
    AllyAttackNumber += 1;
    AllyOneAttackValue = AllyOneAttackValue = Math.floor(Math.random() * (151-40)+40) // Slightly higher max than demonic strike w/ a larger range?
    AllyOneAttackType = "AttackEnemyOne"
    EnemyOneHealth.value -= (AllyOneAttackValue * AllyOneAttackMultiplier) - EnemyOneDefense
    console.log((AllyOneAttackValue * AllyOneAttackMultiplier) - EnemyOneDefense)
}

function JudgementOne() {
    AllyOneAttackType = "AttackEnemyOne"
    AllyAttackNumber += 1;
    AllyOneAttackValue = Math.floor(Math.random() * (76-30)+30)
    EnemyOneHealth.value -= (AllyOneAttackValue * AllyOneAttackMultiplier) - EnemyOneDefense
}

function HealingPrayerOne() {
    AllyOneAttackType = "HealAllies"
    console.log("HealUsed")
    AllyAttackNumber += 1;
    AllyOneAttackValue = Math.floor(Math.random() * (76-25)+25)
    AllyOneHealth.value += AllyOneAttackValue - EnemyOneDefense
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
    AllyOneTextUpdater()
}

function AllyOneTextUpdater() {
    console.log("AllyOneTextUpdateRan" + AllyOneAttackType)
    if(AllyOneAttackType == "AttackEnemyOne") {
        document.getElementById("AllyOneAttackLog").innerText = AllyOne + " Used " + AllyOneAttackUsed + ", dealing " + AllyOneAttackValue + " damage to " + EnemyOne
        console.log("AllyOneAttackedEnemyOne")
    }
    if(AllyOneAttackType == "AttackEnemyOneSlow") {
        document.getElementById("AllyOneAttackLog").innerText = AllyOne + " Used " + AllyOneAttackUsed + ", dealing " + AllyOneAttackValue + " damage to " + EnemyOne + " and slowing down both enemies for 20 seconds"
    }
    if(AllyOneAttackType == "HealEnemyOne") {
        document.getElementById("AllyOneAttackLog").innerText = AllyOne + " Used " + AllyOneAttackUsed + ", healing " + AllyOneAttackValue + " health for " + EnemyOne
    }
    if(AllyOneAttackType == "AttackEnemyOneRot") {
        document.getElementById("AllyOneAttackLog").innerText = AllyOne + " Used " + AllyOneAttackUsed + ", dealing " + AllyOneAttackValue + " damage to " + EnemyOne + "and poisoning itself!"
    }
    if(AllyOneAttackType == "SelfAttackBoost") {
        document.getElementById("AllyOneAttackLog").innerText = AllyOne + " Used " + AllyOneAttackUsed + "increasing it's attack for 20 seconds!"
    }
    if(AllyOneAttackType == "AttackBothHealSelf") {
        document.getElementById("AllyOneAttackLog").innerText = AllyOne + " Used " + AllyOneAttackUsed + ", dealing " + AllyOneAttackValue + " damage to " + EnemyOne + ", and healing itself for " + AllyOneHealValue
    }
    if(AllyOneAttackType == "HealAllies") {
        document.getElementById("AllyOneAttackLog").innerText = AllyOne + " Used " + AllyOneAttackUsed + ", healing " + AllyOneAttackValue + " health for " + AllyOne
    }
    if(AllyOneAttackType == "Missed") {
        document.getElementById("AllyOneAttackLog").innerText = AllyOne + " missed!"
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
        EnemyOneAttacker()
    }
    
}

function EnemyOneAttacker() {
        console.log("EnemyOneAttacked, Used " + EnemyOneAttack)
        if (EnemyOneAttackTarget == "AllyOne") {
            AllyOneHealth.value -= (EnemyOneAttackValue - AllyOneDefense)
            document.getElementById("EnemyOneAttackLog").innerText = EnemyOne + " Used " + EnemyOneAttack + ",\n dealing " + EnemyOneAttackValue + " Damage to " + AllyOne
        }
        if (EnemyOneAttackTarget == "SelfHeal") {
            EnemyOneHealth.value += EnemyOneHealValue
            document.getElementById("EnemyOneAttackLog").innerText = EnemyOne + " Used " + EnemyOneAttack + ",\n healing " + EnemyOneHealValue + " health "
        }
        if (EnemyOneAttackTarget == "Overdrive") {
            EnemyOneHealth.value -= EnemyOneSelfDamage
            AllyOneHealth.value -= EnemyOneAttackValue
            document.getElementById("EnemyOneAttackLog").innerText = EnemyOne + " Used " + EnemyOneAttack + ",\n dealing " + EnemyOneAttackValue + "damage to" + AllyOne + " and " + EnemyOneSelfDamage + " damage to self"
        }
        if (EnemyOneAttackTarget == "Defense") {
            document.getElementById("EnemyOneAttackLog").innerText = EnemyOne + " defended itself"
        }
        if (EnemyOneAttackTarget == "AttackSelf") {
            EnemyOneHealth.value -= EnemyOneSelfDamage
            document.getElementById("EnemyOneAttackLog").innerText = EnemyOne + " Used " + EnemyOneAttack + ",\n dealing " + EnemyOneSelfDamage + " damage to itself "
        }
        if (EnemyOneAttackTarget == "VirusAllyOne") {
            document.getElementById("EnemyOneAttackLog").innerText = EnemyOne + " Used " + EnemyOneAttack + ",\n dealing sustained damage to " + AllyOne
        }
        if (EnemyOneAttackTarget == "Missed") {
            document.getElementById("EnemyOneAttackLog").innerText = EnemyOne + " Used " + EnemyOneAttack + " and missed!"
        }
        if (EnemyOneAttackTarget == "Both"){ // Only fireblast uses this lmao
            document.getElementById("EnemyOneAttackLog").innerText =  EnemyOne + " Used " + EnemyOneAttack + ",\n dealing sustained damage to " + AllyOne
        }

        EnemyOneAttackValue = 0
        EnemyOneSelfDamage = 0
        EnemyOneHealValue = 0
        EnemyOneAttack = "none"

}


// ################################ // 
// ################################ // 
// ####### ALLY MOVE LABELS ####### // 
// ################################ // 
// ################################ // 

function AllyOneMoveList() { // This is going to take so long oh my god what is a better way?
    document.getElementById("AllyOneAttackOne").style.fontSize = "medium"
    document.getElementById("AllyOneAttackTwo").style.fontSize = "medium"
    document.getElementById("AllyOneAttackThree").style.fontSize = "medium"
    if(AllyOne == "AngelCat") {
        AllyOneAttackOneText = "Heavenly Strike"
        AllyOneAttackTwoText = "Judgement"
        AllyOneAttackThreeText = "Healing Prayer"
        document.getElementById("AllyOneLabel").innerHTML = "AngelCat"
        document.getElementById("AllyOneAttackOne").innerHTML = "Heavenly Strike"
        document.getElementById("AllyOneAttackTwo").innerHTML = "Judgement"
        document.getElementById("AllyOneAttackThree").innerHTML = "Healing Prayer"
        
    }
    if(AllyOne == "Clock") {
        AllyOneAttackOneText = "Bad Time"
        AllyOneAttackTwoText = "Hour"
        AllyOneAttackThreeText = "Rewind"
        document.getElementById("AllyOneLabel").innerHTML = "Clock"
        document.getElementById("AllyOneAttackOne").innerHTML = "Bad Time"
        document.getElementById("AllyOneAttackTwo").innerHTML = "Hour"
        document.getElementById("AllyOneAttackThree").innerHTML = "Rewind"
    }
    if(AllyOne == "Slugcat") {
        AllyOneAttackOneText = "Spear"
        AllyOneAttackTwoText = "The Mark"
        AllyOneAttackThreeText = "The Rot"
        document.getElementById("AllyOneLabel").innerHTML = "SlugCat"
        document.getElementById("AllyOneAttackOne").innerHTML = "Spear"
        document.getElementById("AllyOneAttackTwo").innerHTML = "The Mark"
        document.getElementById("AllyOneAttackThree").innerHTML = "The Rot"
    }
    if(AllyOne == "Square") {
        AllyOneAttackOneText = "Square"
        AllyOneAttackTwoText = "Square"
        AllyOneAttackThreeText = "Square"
        document.getElementById("AllyOneLabel").innerHTML = "Square"
        document.getElementById("AllyOneAttackOne").innerHTML = "Square"
        document.getElementById("AllyOneAttackTwo").innerHTML = "Square"
        document.getElementById("AllyOneAttackThree").innerHTML = "Square"
    }
    if(AllyOne == "Boat") {
        AllyOneAttackOneText = "Boat"
        AllyOneAttackTwoText = "Fish"
        AllyOneAttackThreeText = "Hook"
        document.getElementById("AllyOneLabel").innerHTML = "Boat"
        document.getElementById("AllyOneAttackOne").innerHTML = "Boat"
        document.getElementById("AllyOneAttackTwo").innerHTML = "Fish"
        document.getElementById("AllyOneAttackThree").innerHTML = "Hook"
    }
    if(AllyOne == "Flibbit") {
        AllyOneAttackOneText = "Clamp"
        AllyOneAttackTwoText = "Chomp"
        AllyOneAttackThreeText = "Chew"
        document.getElementById("AllyOneLabel").innerHTML = "Flibbit"
        document.getElementById("AllyOneAttackOne").innerHTML = "Clamp"
        document.getElementById("AllyOneAttackTwo").innerHTML = "Chomp"
        document.getElementById("AllyOneAttackThree").innerHTML = "Chew"
    }
}










// ###################################### //
// ###################################### //
// ####### ENEMY ONE MOVE HANDLER ####### //
// ###################################### //
// ###################################### //


function EnemyOneAttackSelector() { // I would like to mention that I think breaking up the move system into different code chunks (the attack area and the attack selector which will both be called later) is a sign I've progressed as a coder since I would've put it all in one section earlier man
    if (EnemyOne == "DevilCat") { // 10 points, biased toward demonic strike, simple system. 1-5 = demonic strike, 6-8 = damning, 9-10 = Fire Blast
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
        EnemyOneAttackValue = Math.floor(Math.random() * (101 - 50) + 50);
        EnemyOneAttackTarget = "AllyOne"}
}

function DamningOne() {
    EnemyOneAttackNumber += 1;
    EnemyOneAttackValue = Math.floor(Math.random() * (51 - 25) + 25);
    EnemyOneAttackTarget = "AllyOne"
}

function FireBlastOne() {
    VariableUpdater()
    EnemyOneAttackNumber += 1;
    EnemyOneAttackValue = Math.floor(Math.random() * (31 - 25) + 25);
    EnemyOneFireAttackValue = Math.floor(Math.random() * (20-10) + 10);
    EnemyOneAttackTarget = "Both"
    FireIntervalVariable = setInterval(EnemyOneFireDamager, 1000)
}

// ############################ //
// ############################ //
// ####### FIRE HANDLER ####### //
// ############################ //
// ############################ //
function EnemyOneFireDamager() {
    if(EnemyOneAttackTarget == "Both") {
        console.log("FireBlastUsed")
        console.log("Threshold = " + FireThreshold + " Value = " + EnemyOneFireCounter)
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