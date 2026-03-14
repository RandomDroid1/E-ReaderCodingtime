var AllyAttackNumber = 0;
var EnemyOneAttackNumber = 0;

var AllyOneDefense = 0;
var EnemyOneDefense = 0;

var EnemyOneAttack = "none";

var GameIsOver = false;

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
    setTimeout(CheckHealth, 10); // is this ethical to 1ms timeout?
    document.getElementById("StartButton").setAttribute('disabled','disabled'); // IT WORKS IT WORKS
    AllyOne = "AngelCat"
    EnemyOne = "DevilCat"
    SpeedMode = localStorage.getItem("SpeedModeStorage")
    SpeedSettings()
    console.log("GAME SPEED = " + SpeedMode)
    document.getElementById("AllyOneImage").src = AllyOne+".png"
    document.getElementById("EnemyOneImage").src = EnemyOne+".png"
    TurnCaller()
    AllyOneMoveList()
    document.getElementById("StartButton").innerHTML = ""
    document.getElementById("StartButton").style.width = "1px"
    document.getElementById("StartButton").style.height = "1px"
}

function InformationButton() { /// Can I just call ally move list if InfoShown is true?
    if(InformationShown == "false") {
        InformationShown = "true"
        if(AllyOne == "AngelCat") {
            document.getElementById("AllyOneAttackOne").innerHTML = "150-40 damage; one enemy"
            document.getElementById("AllyOneAttackTwo").innerHTML = "75-25 damage; both enemies"
            document.getElementById("AllyOneAttackThree").innerHTML = "75-25 healing; both allies"
            document.getElementById("AllyOneAttackOne").style.fontSize = "x-small"
            document.getElementById("AllyOneAttackTwo").style.fontSize = "x-small"
            document.getElementById("AllyOneAttackThree").style.fontSize = "small"
        }
        if(AllyOne == "Clock") {
            document.getElementById("AllyOneAttackOne").innerHTML = "Damage of 20*TurnCount; one enemy"
            document.getElementById("AllyOneAttackTwo").innerHTML = "15-350 damage, better odds based on turn; one enemy"
            document.getElementById("AllyOneAttackThree").innerHTML = "101 to 10 healing, 50-25 damage; both enemies"
            document.getElementById("AllyOneAttackOne").style.fontSize = "x-small"
            document.getElementById("AllyOneAttackTwo").style.fontSize = "x-small"
            document.getElementById("AllyOneAttackThree").style.fontSize = "x-small"
        }
        if(AllyOne == "Slugcat") {
            document.getElementById("AllyOneAttackOne").innerHTML = "25% chance to instakill; one enemy"
            document.getElementById("AllyOneAttackTwo").innerHTML = "1.5x attack for 5 turns"
            document.getElementById("AllyOneAttackThree").innerHTML = "350 dmg to self, high dmg to; one enemy"
            document.getElementById("AllyOneAttackOne").style.fontSize = "x-small"
            document.getElementById("AllyOneAttackTwo").style.fontSize = "small"
            document.getElementById("AllyOneAttackThree").style.fontSize = "x-small"
        }
        if(AllyOne=="Boat") {
            document.getElementById("AllyOneAttackOne").innerHTML = "110-50 dmg; one enemy"
            document.getElementById("AllyOneAttackTwo").innerHTML = "random damage or healing to enemy, from 0-500; one enemy"
            document.getElementById("AllyOneAttackThree").innerHTML = "100-50 damage, 50% to slow enemies; one enemy"
            document.getElementById("AllyOneAttackOne").style.fontSize = "x-small"
            document.getElementById("AllyOneAttackTwo").style.fontSize = "x-small"
            document.getElementById("AllyOneAttackThree").style.fontSize = "x-small"
        }
        if(AllyOne=="Flibbit") {
            document.getElementById("AllyOneAttackOne").innerHTML = "15% of target enemy health in dmg; one enemy"
            document.getElementById("AllyOneAttackTwo").innerHTML = "10% of an enemy's max health in damage; one enemy"
            document.getElementById("AllyOneAttackThree").innerHTML = "20% of flibbit's health in damage; one enemy"
            document.getElementById("AllyOneAttackOne").style.fontSize = "x-small"
            document.getElementById("AllyOneAttackTwo").style.fontSize = "x-small"
            document.getElementById("AllyOneAttackThree").style.fontSize = "x-small"
        }
    }
    else if(InformationShown == "true") {
        InformationShown = "false"
        AllyOneMoveList()
    }
}

function GameOver() {
    VariableUpdater()
    if (EnemyOneHealth.value <= 0) {
        document.getElementById("GameOver").innerHTML = "Game over! You Won";
        GameIsOver = "true"
    } 
    if (AllyOneHealth.value <= 0) {
        document.getElementById("GameOver").innerHTML = "Game over! You Lost ):<";
        GameIsOver = "true"
    } 
    if (EnemyOneHealth.value <= 0 && AllyOneHealth.value <= 0) {
        document.getElementById("GameOver").innerHTML = "Game over! You ALL LOSE";
        GameIsOver = "true"
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

function BadTimeOne() {
    AllyAttackNumber += 1;
    AllyOneAttackValue = (Math.floor(Math.random()*(21-15)+15)) + (AllyAttackNumber*10)
    AllyOneAttackType = "AttackEnemyOne"
    EnemyOneHealth.value -= (AllyOneAttackValue * AllyOneAttackMultiplier) - EnemyOneDefense
}

function HourOne() {
    AllyAttackNumber += 1;
    if(AllyAttackNumber <= 6) { // 3 turns
        AllyOneAttackValue = (Math.floor(Math.random()*(101-15)+15)) // expected value of like 60 or smth
    }
    if(AllyAttackNumber >= 7 && AllyAttackNumber <= 12) { // 4-6 turns
        AllyOneAttackValue = (Math.floor(Math.random()*(151-30)+30))
    }
    if(AllyAttackNumber >= 13 && AllyAttackNumber <= 20) { // 7-10 turns
        AllyOneAttackValue = (Math.floor(Math.random()*(251-150)+150))
    }
    if(AllyAttackNumber >= 21) {
        AllyOneAttackValue = (Math.floor(Math.random()*(351-250)+250))
    }
    AllyOneAttackType = "AttackEnemyOne"
    EnemyOneHealth.value -= (AllyOneAttackValue * AllyOneAttackMultiplier) - EnemyOneDefense
}

function RewindOne() {
    AllyAttackNumber +=1;
    if (AllyOneHealth.value <= 250) {
        AllyOneAttackType = "AttackBothHealSelf"
        AllyOneHealValue = Math.floor(Math.random() * (101-65)+65)
        AllyOneAttackValue = (Math.floor(Math.random() * (51-25)+25)) * AllyOneAttackMultiplier 
        AllyOneHealth.value += AllyOneHealValue
        EnemyOneHealth.value -= AllyOneAttackValue - EnemyOneDefense
    }
    if (AllyOneHealth.value >= 250) {
        AllyOneAttackType = "AttackBothHealSelf"
        AllyOneHealValue = Math.floor(Math.random() * (51-10)+10)
        AllyOneAttackValue = (Math.floor(Math.random() * (51-25)+25)) * AllyOneAttackMultiplier 
        AllyOneHealth.value += AllyOneHealValue
        EnemyOneHealth.value -= AllyOneAttackValue - EnemyOneDefense
    }
}

function SpearOne() {
    AllyAttackNumber += 1
    AllyOneAttackValue = (Math.floor(Math.random()*(5-1)+1))* AllyOneAttackMultiplier
    if (AllyOneAttackValue == 4) {
        AllyOneAttackType = "AttackEnemyOne"
        AllyOneAttackValue = 9999999
        document.getElementById("AllyOneAttackLog").innerText = AllyOne + " Used " + AllyOneAttackUsed + ", dealing " + AllyOneAttackValue + " damage to " + EnemyOne
    }
    else {
        AllyOneAttackType = "Missed"
        AllyOneAttackValue = 0
        document.getElementById("AllyOneAttackLog").innerText = AllyOne + " missed!"
    }
}

function TheMarkOne() {
    AllyOneAttackType = "SelfAttackBoost"
    AllyAttackNumber +=1
    AllyOneAttackMultiplier += .5
    if(MarkAlreadyActive == false) {
    TheMarkInterval = setInterval(TheMarkOneCounter, 1000)
    MarkAlreadyActive = true
    }
    if(MarkAlreadyActive == true) {
        TheMarkCounterVariable += TheMarkIncrease
    }
}
function TheMarkOneCounter() {
    TheMarkCounterVariable -= 1
    TheMarkOneCancel()
}
function TheMarkOneCancel() {
    if (TheMarkCounterVariable == 0) {
        clearInterval(TheMarkInterval)
        TheMarkCounterVariable = TheMarkInitial
        MarkAlreadyActive = false
        AllyOneAttackMultiplier -= .5
    }
}

function TheRotOne() {
    AllyAttackNumber +=1
    AllyOneAttackValue = Math.floor(350*AllyOneAttackMultiplier)
    AllyOneAttackType = "AttackEnemyOneRot"
    EnemyOneHealth.value -= 350 - EnemyOneDefense
    if(RotAlreadyActive == false) {
    TheRotInterval = setInterval(TheRotOneCounter, 1000)
    RotAlreadyActive = true
    }
    if(RotAlreadyActive == true) {
        TheRotCounterVariable += 4
    }
}

function TheRotOneCounter() {
    TheRotCounterVariable -= 1
    AllyOneHealth.value -= 75 - EnemyOneDefense
    TheRotOneCancel()
}

function TheRotOneCancel() {
    if (TheRotCounterVariable == 0) {
        clearInterval(TheRotInterval)
        TheRotCounterVariable = 5
        RotAlreadyActive = false
    }
}

function BoatAttackOne() {
    AllyAttackNumber += 1
    AllyOneAttackValue = (Math.floor(Math.random() * (111-50)+50)) * AllyOneAttackMultiplier
    AllyOneAttackType = "AttackEnemyOne"
    EnemyOneHealth.value -= AllyOneAttackValue - EnemyOneDefense
}

function FishOne() { // theres probably a smarter way to write this with like variables and crap and multiplication
    AllyAttackNumber += 1
    AllyOneAttackValue = (Math.floor(Math.random() * (11-1)+1)) // decides what subsection of random to put it in
    if (AllyOneAttackValue == 1) { // Highest one, 500-300 damage
        FishStatus = "Attack"
        AllyOneAttackValue = (Math.floor(Math.random() * (501-300)+300)) * AllyOneAttackMultiplier
    }
    else if (AllyOneAttackValue == 2) { //2nd best, 400-250 damage
        FishStatus = "Attack"
        AllyOneAttackValue = (Math.floor(Math.random() * (401-250)+250)) * AllyOneAttackMultiplier
    }
    else if (AllyOneAttackValue == 3) { // 350-200 damage
        FishStatus = "Attack"
        AllyOneAttackValue = (Math.floor(Math.random() * (351-200)+200)) * AllyOneAttackMultiplier
    }
    else if (AllyOneAttackValue == 4) { // 250-100 damage
        FishStatus = "Attack"
        AllyOneAttackValue = (Math.floor(Math.random() * (251-100)+100)) * AllyOneAttackMultiplier
    }
    else if (AllyOneAttackValue == 5) { // 150-1 damage
        FishStatus = "Attack"
        AllyOneAttackValue = (Math.floor(Math.random() * (151-1)+1)) * AllyOneAttackMultiplier
    }
    else if (AllyOneAttackValue == 6) { // 50-1 damage
        FishStatus = "Attack"
        AllyOneAttackValue = (Math.floor(Math.random() * (51-1)+1)) * AllyOneAttackMultiplier
    }
    else if (AllyOneAttackValue == 7) { // 1 damage
        FishStatus = "Attack"
        AllyOneAttackValue = 1 * AllyOneAttackMultiplier
    }
    else if (AllyOneAttackValue == 8) { // 10-50 healing
        FishStatus = "Heal"
        AllyOneAttackValue = (Math.floor(Math.random() * (51-10)+10)) * AllyOneAttackMultiplier // attack multiplier applies lmao
    }
    else if (AllyOneAttackValue == 9) { // 50-200 healing
        FishStatus = "Heal"
        AllyOneAttackValue = (Math.floor(Math.random() * (201-50)+50)) * AllyOneAttackMultiplier
    }
    else if (AllyOneAttackValue == 10) { // 300-500 healing
        FishStatus = "Heal"
        AllyOneAttackValue = (Math.floor(Math.random() * (501-300)+300)) * AllyOneAttackMultiplier
    };
    
    if(FishStatus == "Attack") {
        AllyOneAttackType = "AttackEnemyOne"
        EnemyOneHealth.value -= AllyOneAttackValue - EnemyOneDefense
        }
    if(FishStatus == "Heal") {
        AllyOneAttackType = "HealEnemyOne"
        EnemyOneHealth.value += AllyOneAttackValue - EnemyOneDefense
    }
}

function HookOne() {
    AllyAttackNumber += 1
    AllyOneAttackValue = Math.floor(Math.random() * (3-2)+2)
    console.log("HookAttackSelector = " + AllyOneAttackValue)
    if (AllyOneAttackValue == 1) {
        console.log("HookCheck1")
        AllyOneAttackValue = Math.floor(Math.random() * (100-50)+50) * AllyOneAttackMultiplier
        AllyOneAttackType = "AttackEnemyOne"
        EnemyOneHealth.value -= AllyOneAttackValue - EnemyOneDefense
    }
    else if (AllyOneAttackValue == 2) {
        console.log("HookCheck2")
        AllyOneAttackValue = Math.floor(Math.random() * (100-50)+50) * AllyOneAttackMultiplier
        AllyOneAttackType = "AttackEnemyOneSlow"
        EnemyOneHealth.value -= AllyOneAttackValue - EnemyOneDefense
        console.log("Hook = " + HookAlreadyActive)
        if(HookAlreadyActive == false) {
            HookInterval = setInterval(HookOneCounter, 1000)
            HookAlreadyActive = true
            EnemyOneAttackMeterHTML.max += EnemySlowAmount
            HookInterval
        }
        if(HookAlreadyActive == true) {
            HookCounterVariable += HookCounterIncrease
        }
    }
}
function HookOneCounter() {
    HookCounterVariable -= 1
    HookOneCancel()
    console.log(HookCounterVariable)
}
function HookOneCancel() {
    if (HookCounterVariable == 0) {
        console.log("HOOK END")
        clearInterval(HookInterval)
        HookCounterVariable = HookCounterInitial
        EnemyOneAttackMeterHTML.max -= EnemySlowAmount
        HookAlreadyActive = false
    }
}

function ClampOne() {
    AllyAttackNumber += 1
    AllyOneAttackType = "AttackEnemyOne"
    AllyOneAttackValue =  Math.floor((EnemyOneHealth.value / 5)) // 20%, not 15.
    EnemyOneHealth.value -= AllyOneAttackValue - EnemyOneDefense
}

function ChompOne() {
    AllyAttackNumber += 1
    AllyOneAttackType = "AttackEnemyOne"
    AllyOneAttackValue =  Math.floor((EnemyOneHealth.max / 10))
    EnemyOneHealth.value -= AllyOneAttackValue - EnemyOneDefense
}


function ChewOne() {
    AllyAttackNumber += 1
    AllyOneAttackType = "AttackEnemyOne"
    AllyOneAttackValue =  Math.floor((AllyOneHealth.value / 5))
    EnemyOneHealth.value -= AllyOneAttackValue - EnemyOneDefense
}

function SquareAttackOne() { // cant do any moves that have lasting effects becasue I dont want to deal with it mannn
    AllyAttackNumber += 1
    AllyOneAttackValue = Math.floor(Math.random() * (13-1)+1)
    console.log("Square Attack Selecton = " + AllyOneAttackValue)
    if (AllyOneAttackValue == 1) {// Heavenly Strike
        HeavenlyStrikeOne()
    }
    else if (AllyOneAttackValue == 2) { // 
        JudgementOne()
    }
    else if (AllyOneAttackValue == 3) { // 
        HealingPrayerOne()
    }
    else if (AllyOneAttackValue == 4) { // 
        BadTimeOne()
    }
    else if (AllyOneAttackValue == 5) { // 
        HourOne()
    }
    else if (AllyOneAttackValue == 6) { // 
        RewindOne()
    }
    else if (AllyOneAttackValue == 7) { // 
        SpearOne()
    }
    else if (AllyOneAttackValue == 8) { // 
        BoatAttackOne()
    }
    else if (AllyOneAttackValue == 9) { // 
        FishOne()
    }
    else if (AllyOneAttackValue == 10) { // 
        HookOne()
    }
    else if (AllyOneAttackValue == 11) { // 
        ClampOne()
    }
    else if (AllyOneAttackValue == 12) { // 
        ChompOne()
    }
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
        if(AllyOne == "Clock") {
            if(AllyOneAttackSelected == "One") {
                BadTimeOne()
                AllyOneAttackUsed = "Bad Time"
            }
            if(AllyOneAttackSelected == "Two") {
                HourOne()
                AllyOneAttackUsed = "Hour"
            }
            if(AllyOneAttackSelected == "Three") {
                RewindOne()
                AllyOneAttackUsed = "Rewind"
            }
        }
        if(AllyOne == "Slugcat") {
            if(AllyOneAttackSelected == "One") {
                SpearOne()
                AllyOneAttackUsed = "Spear"
            }
            if(AllyOneAttackSelected == "Two") {
                TheMarkOne()
                AllyOneAttackUsed = "The Mark"
            }
            if(AllyOneAttackSelected == "Three") {
                TheRotOne()
                AllyOneAttackUsed = "The Rot"
            }
        }
        if(AllyOne == "Square") {
            if(AllyOneAttackSelected == "One") {
                SquareAttackOne()
                AllyOneAttackUsed = "Square"
            }
            if(AllyOneAttackSelected == "Two") {
                SquareAttackOne()
                AllyOneAttackUsed = "Square"
            }
            if(AllyOneAttackSelected == "Three") {
                SquareAttackOne()
                AllyOneAttackUsed = "Square"
            }
        }
        if(AllyOne == "Boat") {
            if(AllyOneAttackSelected == "One") {
                BoatAttackOne()
                AllyOneAttackUsed = "Boat"
                console.log("A1 Attack mult = " + AllyOneAttackMultiplier)
            }
            if(AllyOneAttackSelected == "Two") {
                FishOne()
                AllyOneAttackUsed = "Fish"
            }
            if(AllyOneAttackSelected == "Three") {
                HookOne()
                AllyOneAttackUsed = "Hook"
            }
        }
        if(AllyOne == "Flibbit") {
            if(AllyOneAttackSelected == "One") {
                ClampOne()
                AllyOneAttackUsed = "Clamp"
            }
            if(AllyOneAttackSelected == "Two") {
                ChompOne()
                AllyOneAttackUsed = "Chomp"
            }
            if(AllyOneAttackSelected == "Three") {
                ChewOne()
                AllyOneAttackUsed = "Chew"
            }
    }
    console.log("TEST TEST TEST")
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
    AllyOneAttackButtonReset()
    console.log("AttackOneSelected")
    AllyOneAttackSelected = "One"
    document.getElementById("AllyOneAttackOne").style.borderWidth = "5px"
}
function AllyOneAttackButtonTwo() {
    AllyOneAttackButtonReset()
    AllyOneAttackSelected = "Two"
    console.log("AttackTwoSelected")
    document.getElementById("AllyOneAttackTwo").style.borderWidth = "5px"
}
function AllyOneAttackButtonThree() {
    AllyOneAttackButtonReset()
    AllyOneAttackSelected = "Three"
    console.log("AttackThreeSelected")
    document.getElementById("AllyOneAttackThree").style.borderWidth = "5px"
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
        if (EnemyOneAttackTarget == "Snowgrave") {
            document.getElementById("EnemyOneAttackLog").innerText = EnemyOne + " Proceeded."
        }
        if (EnemyOneAttackTarget == "Reduce") {
            document.getElementById("EnemyOneAttackLog").innerText = EnemyOne + " used Reduce, reducing the allies speed and attack!"
        }
        if (EnemyOneAttackTarget == "Domain") {
            document.getElementById("EnemyOneAttackLog").innerText = EnemyOne + " used Domain, sacrificing 50 health to permanently increase the enemies defense by 15"
        }
        if (EnemyOneAttackTarget == "GrabOne") {
            document.getElementById("EnemyOneAttackLog").innerText = EnemyOne + " used Grab, dealing " + EnemyOneAttackValue + " damage, and erasing " + Math.floor(EnemyOneAttackValue - 30) + " of " + AllyOne + "'s max health"
        }
        if (EnemyOneAttackTarget == "PaperAirplane") {
             document.getElementById("EnemyOneAttackLog").innerText = EnemyOne + " used Paper Airplane, increasing Fold's damage!"
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






// ############################# //
// ############################# //
// ####### VIRUS HANDLER ####### //
// ############################# //
// ############################# //
function EnemyOneVirusDamageSlotOne() {
    console.log("VIRUS SLOT 1 STARTED")
    if(EnemyOneVirusSlotOne == "Taken") {
        EnemyOneVirusDamageSlotTwo()
    }
    if(EnemyOneVirusSlotOne == "Free") {
        EnemyOneVirusSlotOneTargetLock = "AllyOne";
        VirusIntervalVariable = setInterval(EnemyOneVirusDamageSlotOneDamager, 1000)
}
}

function EnemyOneVirusDamageSlotOneDamager() {
    EnemyOneVirusSlotOneCounter += 1;
    AllyOneHealth.value -= VirusDamage
    console.log("VirusAttackedAllyOne")
    document.getElementById("AllyOneVirusMarker").src = "VirusDamage.png"
    if(EnemyOneVirusSlotOneCounter == VirusThreshold) {
        clearInterval("VirusIntervalVariable")
        EnemyOneVirusSlotOneCounter = 0
        EnemyOneVirusSlotOne = "Free"
        EnemyOneVirusSlotOneTargetLock = "none"
        document.getElementById("AllyOneVirusMarker").src = ""
        console.log("VirusSlotOneEnd")
    }
}


function EnemyOneVirusDamageSlotTwo() {
    console.log("Virus2Used")
    if(EnemyOneVirusSlotTwo == "Taken") {
        EnemyOneVirusDamageSlotTwo()
    }
    if(EnemyOneVirusSlotTwo == "Free") {
        EnemyOneVirusSlotTwoTargetLock = "AllyOne";
        VirusIntervalVariable = setInterval(EnemyOneVirusDamageSlotTwoDamager, 1000)
}
}

function EnemyOneVirusDamageSlotTwoDamager() {
    EnemyOneVirusSlotTwoCounter += 1;
    console.log("VIRUS SLOT 2 STARTED")
    AllyOneHealth.value -= VirusDamage
    document.getElementById("AllyOneVirusMarker").src = "VirusDamage.png"
    console.log("VirusAttackedAllyOne")
    if(EnemyOneVirusSlotTwoCounter == VirusThreshold) {
        clearInterval("VirusIntervalVariable")
        EnemyOneVirusSlotTwoCounter = 0
        EnemyOneVirusSlotTwo = "Free"
        EnemyOneVirusSlotTwoTargetLock = "none"
        console.log("VirusSlotTwoEnd")
        document.getElementById("AllyOneVirusMarker").src = ""
    }
}


// ############################ //
// ############################ //
// ####### FIRE HANDLER ####### //
// ############################ //
// ############################ //
function EnemyOneFireDamager() {
    if(EnemyOneAttackTarget == "Both") {
        EnemyOneFireCounter += 1
        document.getElementById("AllyOneFireMarker").src = "FireDamage.png"
        AllyOneHealth.value -= EnemyOneFireAttackValue
    }
    if(EnemyOneFireCounter == FireThreshold) {
        EnemyOneFireCounter = 0
        document.getElementById("AllyOneFireMarker").src = ""
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
                console.log("FirBlastSelected")
                EnemyOneAttack = "FireBlast"
                FireBlastOne()
            }
        }
    if (EnemyOne == "Car") { // 10 points, if either enemy is below, biased to heal 1-5, otherwise is slightly biased to ram
            EnemyOneAttackSelection = Math.floor(Math.random() * (11-1) + 1)
            if (EnemyOneHealth.value <= 50) { // HEAL BIASED FOR WHEN UNDER HALF (this would trigger when an enemy is dead? bad bad bad) Heal from death? Like fnaf world refreshed??
                
                if (EnemyOneAttackSelection <= 5) {
                    EnemyOneAttack = "PitStop"
                    PitStopOne()
                }
                if (EnemyOneAttackSelection <= 9 && EnemyOneAttackSelection >= 6) {
                    EnemyOneAttack = "Ram"
                    RamOne()
                }
                if (EnemyOneAttackSelection == 10) {
                    EnemyOneAttack = "Overdrive"
                    OverdriveOne()
                }
            }
            else { // BASICALLY EQUAL CHANCE FOR ALL, still biased to ram
                if (EnemyOneAttackSelection <= 3) {
                    EnemyOneAttack = "PitStop"
                    PitStopOne()
                }
                if (EnemyOneAttackSelection <= 8 && EnemyOneAttackSelection >= 4) {
                    EnemyOneAttack = "Ram"
                    RamOne()
                }
                if (EnemyOneAttackSelection >= 9) {
                    EnemyOneAttack = "Overdrive"
                    OverdriveOne()
                }
            }
        }
    if (EnemyOne == "Origami") {
            EnemyOneAttackSelection = Math.floor(Math.random() * (11-1) + 1)
            if (FoldCounter <= 5) { // 6/10 chance to do Paper Airplane, and increase fold by 2, 2/10 chance for fold, 1/10 chance for peck
                if (EnemyOneAttackSelection <= 6) {
                    EnemyOneAttack = "PaperAirplane"
                    PaperAirplaneOne()
                }
                if (EnemyOneAttackSelection <= 8 && EnemyOneAttackSelection >= 7) {
                    EnemyOneAttack = "Fold"
                    FoldOne()
                }
                if (EnemyOneAttackSelection >= 9) {
                    EnemyOneAttack = "Peck"
                    PeckOne() // Sounds kinda like penguin
                }
            }
            if (FoldCounter >= 6) { // 2/10 chance to do Paper Airplane, and increase fold by 2, 6/10 chance for fold, 2/10 chance for peck
                if (EnemyOneAttackSelection <= 2) {
                    EnemyOneAttack = "PaperAirplane"
                    PaperAirplaneOne()
                }
                if (EnemyOneAttackSelection <= 8 && EnemyOneAttackSelection >= 3) {
                    EnemyOneAttack = "Fold"
                    FoldOne()
                }
                if (EnemyOneAttackSelection >= 9) {
                    EnemyOneAttack = "Peck"
                    PeckOne()
                }
            }
        }
    if (EnemyOne == "DNA") { 
        EnemyOneAttackSelection = Math.floor(Math.random() * (11-1) + 1)
        if (EnemyOneAttackNumber <= 3) { // under 3 turns, 2/10 for virus, 7/10 for ACGT, 1/10 for bind
            console.log(EnemyOneAttackNumber)
            if (EnemyOneAttackSelection <= 2) {
                EnemyOneAttack = "Virus"
                VirusOne()
            }
            if (EnemyOneAttackSelection >= 3 && EnemyOneAttackSelection <= 9) {
                EnemyOneAttack = "ACGT"
                ACGTOne()
            }
            if (EnemyOneAttackSelection == 10) {
                EnemyOneAttack = "Bind"
                BindOne()
            }
        }
        if (EnemyOneAttackNumber >= 4 && EnemyOneAttackNumber <= 6) { // 4-6 turns, 2/10 for virus, 5/10 for ACGT, 3/10 for bind
            if (EnemyOneAttackSelection <= 2) {
                EnemyOneAttack = "Virus"
                VirusOne()
            }
            if (EnemyOneAttackSelection >= 3 && EnemyOneAttackSelection <= 7) {
                EnemyOneAttack = "ACGT"
                ACGTOne()
            }
            if (EnemyOneAttackSelection >= 8) {
                EnemyOneAttack = "Bind"
                BindOne()
            }
        } 
        if (EnemyOneAttackNumber >= 7) { // above 7 turns, 1/10 for virus, 3/10 for ACGT, 6/10 for bind
            if (EnemyOneAttackSelection == 1) {
                EnemyOneAttack = "Virus"
                VirusOne()
            }
            if (EnemyOneAttackSelection >= 2 && EnemyOneAttackSelection <= 4) {
                EnemyOneAttack = "ACGT"
                ACGTOne()
            }
            if (EnemyOneAttackSelection >= 4) {
                EnemyOneAttack = "Bind"
                BindOne()
            }
        }
    }
    if (EnemyOne == "HandMan") {
        EnemyOneAttackSelection = Math.floor(Math.random() * (11-1) + 1)
        if (EnemyOneAttackSelection <= 2) {
            EnemyOneAttack = "Reduce"
            ReduceOne()
        }
        if (EnemyOneAttackSelection >= 3 && EnemyOneAttackSelection <= 4) {
            EnemyOneAttack = "Domain"
            DomainOne()
        }
        if (EnemyOneAttackSelection >= 5) {
            EnemyOneAttack = "Grab"
            GrabOne()
        }
    }

    if (EnemyOne == "Blob") {
        EnemyOneAttackSelection = Math.floor(Math.random() * (11-1) + 1)
            if (EnemyOneHealth.value <= 50) { // Under half, 40% chance for reform, 40% chance for glob, 20% chance for randomize
                if (EnemyOneAttackSelection <= 4) {
                    EnemyOneAttack = "Reform"
                    ReformOne()
                }
                if (EnemyOneAttackSelection <= 8 && EnemyOneAttackSelection >= 4) {
                    EnemyOneAttack = "Glob"
                    GlobOne()
                }
                if (EnemyOneAttackSelection >= 9) {
                    EnemyOneAttack = "Randomize"
                    RandomizeOne()
                }
            }
            else { // Above Half , 2/10 reform, 2/10 glob, 6/10 randomize
                if (EnemyOneAttackSelection <= 2) {
                    EnemyOneAttack = "Reform"
                    ReformOne()
                }
                if (EnemyOneAttackSelection <= 4 && EnemyOneAttackSelection >= 3) {
                    EnemyOneAttack = "Glob"
                    GlobOne()
                }
                if (EnemyOneAttackSelection >= 5) {
                    EnemyOneAttack = "Randomize"
                    RandomizeOne()
                }
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
        EnemyOneAttackValue = Math.floor(Math.random() * (76 - 50) + 50);
        EnemyOneAttackTarget = Math.floor(Math.random() * (7-1)+1) // Generates a random number 1-6
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
    EnemyOneAttackTarget = "AllyOne"
    FireIntervalVariable = setInterval(EnemyOneFireDamager, 1000)
    FireIntervalVariable
}

function RamOne() {
    VariableUpdater()
    EnemyOneAttackNumber += 1;
    EnemyOneAttackValue = Math.floor(Math.random() * (101 - 65) + 65);
    EnemyOneAttackTarget = Math.floor(Math.random()* (3-1)+1); // determine if attack hits, 1 = no, 2 = yes
    if (EnemyOneAttackTarget == 1) {
        EnemyOneAttackTarget = "Missed"
    }
    if (EnemyOneAttackTarget == 2) {
        EnemyOneAttackTarget = "AllyOne"
    }
}
function OverdriveOne() {
    VariableUpdater()
    EnemyOneAttackNumber += 1;
    EnemyOneAttackValue = Math.floor(Math.random() * (76 - 50) + 50);
    EnemyOneSelfDamage = Math.floor(Math.random() * (51-1) + 1)
    EnemyOneAttackTarget = "Overdrive"
}

function PitStopOne() {
    VariableUpdater()
    EnemyOneAttackNumber += 1;
    EnemyOneHealValue = Math.floor(Math.random() * (156-30)+30)
    EnemyOneAttackTarget = "SelfHeal"
}

function FoldOne() {
    VariableUpdater()
    EnemyOneAttackNumber +=1;
    if (EnemyOneHealth.value <= 0 || AllyOneHealth.value <= 0) {

    } else {
        EnemyOneAttackNumber += 1;
        FoldCounter += 1;
        EnemyOneAttackValue = FoldCounter*10
        EnemyOneAttackTarget = "AllyOne"
    }
}

function PeckOne() {
    VariableUpdater()
    EnemyOneAttackNumber +=1;
    EnemyOneAttackValue = Math.floor(Math.random() * (60-40)+40)
    EnemyOneAttackTarget = "AllyOne"

}

function PaperAirplaneOne() {
    VariableUpdater()
    EnemyOneAttackTarget = "PaperAirplane"
    EnemyOneAttackNumber += 1;
    FoldCounter += 2;
}
function VirusOne() { // this could have issues if it stacks? Just make it not stack lmao
    VariableUpdater()
    EnemyOneAttackType = "Virus"
    EnemyOneAttackNumber +=1;
    EnemyOneVirusValue = Math.floor(Math.random() * (20-10)+10) // done multiple times
    EnemyOneAttackTarget = Math.floor(Math.random()* (3-1)+1)
    EnemyOneAttackTarget = "AllyOne"
    EnemyOneVirusDamageSlotOne()
}
function ACGTOne() { // PLACEHOLDER
    VariableUpdater()
    EnemyOneAttackNumber +=1;
    EnemyOneAttackTarget = "AllyOne"
    EnemyOneAttackValue = Math.floor(Math.random()* (3-1)+1) // One, or two
    if (EnemyOneAttackValue == 1) {
        EnemyOneAttackValue = Math.floor(Math.random()* (21-5)+5)
    }
    else {
        EnemyOneAttackValue = Math.floor(Math.random()* (251-150)+5)
    }
}

function BindOne() {
    VariableUpdater()
    EnemyOneAttackNumber +=1;
    EnemyOneAttackTarget = Math.floor(Math.random()* (3-1)+1) // selects target
    if (EnemyOneAttackTarget == 1) {
        EnemyOneAttackTarget = Math.floor(Math.random()* (3-1)+1)
        EnemyOneAttackValue = 999999999
        EnemyOneAttackTarget = "AllyOne"
    }
    else {
        EnemyOneSelfDamage = 9999999999
        EnemyOneAttackTarget = "AttackSelf"
    }
}

function GrabOne() {
    VariableUpdater()
    EnemyOneAttackNumber +=1;
    EnemyOneAttackValue = Math.floor(Math.random() * (61-40) + 40)
    EnemyOneAttackTarget = "GrabOne"
    AllyOneHealth.value -= EnemyOneAttackValue
    AllyOneHealth.max -= Math.floor(EnemyOneAttackValue - 30)

}

function DomainOne() {
    VariableUpdater()
    EnemyOneAttackNumber +=1;
    EnemyOneHealth.value -= 50;
    EnemyOneDefense += 15
    EnemyOneAttackTarget = "Domain"
}

function ReduceOne() {
    VariableUpdater()
    EnemyOneAttackNumber +=1;
    EnemyOneAttackTarget = "Reduce"
    AllyOneAttackMeterHTML.max += EnemySlowAmount
    AllyOneAttackMultiplier -= -.5
    ReduceIntervalVariable = setInterval(ReduceOneCounter, 1000)
    if (ReduceCounterVariable != 10) {
        ReduceCounterVariable += ReduceIncreaseAmount
    }
    else {
        ReduceOneCounter()
        ReduceIntervalVariable
    }
}
function ReduceOneCounter() {
    if (ReduceCounterVariable != 0) {
        ReduceCounterVariable -= 1
    }
    ReduceOneCounterVariableCancel()
}
function ReduceOneCounterVariableCancel() {
    if (ReduceCounterVariable == 0) {
        ReduceCounterVariable = ReduceInitialAmount
        clearInterval(ReduceIntervalVariable)
        AllyOneAttackMultiplier += -.5
        AllyOneAttackMeterHTML.max -= EnemySlowAmount
    }
}



function GlobOne() {
    VariableUpdater()
    EnemyOneAttackNumber +=1;
    EnemyOneDefense += 5
    EnemyOneAttackTarget = "Defense"
}

function ReformOne() {
    VariableUpdater()
    EnemyOneAttackTarget = "Heal"
    EnemyOneAttackNumber += 1;
    EnemyOneHealValue = Math.floor(Math.random() * (80-30)+30)
}

function RandomizeOne() {
    EnemyOneAttackNumber +=1;
    EnemyRandomizeSelection = Math.floor(Math.random() * (9-1)+1)
    if(EnemyRandomizeSelection == 1) {
        EnemyOneAttackValue = 11
        EnemyOneAttackTarget = "AllyOne"
    }
    if(EnemyRandomizeSelection == 2) {
        AllyOneAttackMultiplier += 1
        document.getElementById("EnemyOneAttackLog").innerText = "Blob permanently increased Ally One's attack greatly!"
        EnemyOneAttackTarget = ""
    }
    if(EnemyRandomizeSelection == 3) {
        AllyOneAttackMultiplier -= .5
        document.getElementById("EnemyOneAttackLog").innerText = "Blob permanently decreased Ally One's attack!"
        EnemyOneAttackTarget = ""
    }
    if(EnemyRandomizeSelection == 4) {
        EnemyOneAttackTarget = "AllyOne"
        EnemyOneAttackValue = Math.floor(Math.random() * 10+((EnemyOneAttackNumber+1)*6))
        
    }
    if(EnemyRandomizeSelection == 5) {
        EnemyOneAttackValue = 57
        EnemyOneAttackTarget = "AllyOne"
    }
    if(EnemyRandomizeSelection == 6) {
        EnemyOneSelfDamage = 57
        EnemyOneAttackTarget = "AttackSelf"
    }
    if(EnemyRandomizeSelection == 7) {
        EnemyOneAttackTarget = "Missed"
    }
    if(EnemyRandomizeSelection == 8) {
        EnemyOneAttackTarget = "AllyOne"
        EnemyOneAttackValue = Math.floor(Math.random() * 5*(EnemyOneAttackNumber*10))
    }


}
