var AllyAttackNumber = 0;
var EnemyOneAttackNumber = 0;
var EnemyTwoAttackNumber = 0;

var AllyOneDefense = 0;
var AllyTwoDefense = 0;
var EnemyOneDefense = 0;
var EnemyTwoDefense = 0;

var EnemyOneAttack = "none";
var EnemyTwoAttack = "none";

var GameIsOver = false;

var CharacterSelected = "none";
var FactionSelected = "none";

var AllyOneSelected = false;
var EnemyOneSelected = false;
var AllyTwoSelected = false;
var EnemyTwoSelected = false;

var EnemyOneSelfDamage = 0;
var EnemyTwoSelfDamage = 0;

var EnemyOneAttackTarget = "none"
var EnemyTwoAttackTarget = "none"
var AllyOneAttackTarget = "none"
var AllyTwoAttackTarget = "none"

var FoldCounter = 0;
var EnemyOneAttackNumberText = document.getElementById("EnemyOneAttackLog"); // what could this possbiley be for?

var PlayerOneAttackType = "none";
var PlayerTwoAttackType = "none";
var EnemyOneAttackType = "none";
var EnemyTwoAttackType = "none";

var EnemyOneVirusSlotOne = "Free";
var EnemyOneVirusSlotTwo = "Free";
var EnemyTwoVirusSlotOne = "Free";
var EnemyTwoVirusSlotTwo = "Free";

var EnemyOneVirusSlotOneCounter = 0;
var EnemyOneVirusSlotTwoCounter = 0;
var EnemyTwoVirusSlotOneCounter = 0;
var EnemyTwoVirusSlotTwoCounter = 0;

var EnemyOneVirusSlotOneTargetLock = "none";
var EnemyOneVirusSlotTwoTargetLock = "none";
var EnemyTwoVirusSlotOneTargetLock = "none";
var EnemyTwoVirusSlotTwoTargetLock = "none";

var EnemyOneAttackValue = 0
var EnemyTwoAttackValue = 0
var AllyOneAttackValue = 0
var AllyTwoAttackValue = 0

var EnemyOneFireCounter = 0
var EnemyTwoFireCounter = 0

var AllyOneAttackOneText = "none"
var AllyOneAttackOneText = "none"
var AllyOneAttackOneText = "none"
var AllyTwoAttackOneText = "none"
var AllyTwoAttackOneText = "none"
var AllyTwoAttackOneText = "none"

var AllyOneAttackMultiplier = 1
var AllyTwoAttackMultiplier = 1

var TheMarkCounterVariable = 20
var TheMarkInterval = "none"
var TheRotInterval = "none"
var MarkAlreadyActive = false
var MarkAlreadyActive = false
var HookInterval = "none"
var HookAlreadyActive = false
var HookCounterVariable = 15

var FishStatus = "Attack"

var AllyOneLocked = "false"
var AllyTwoLocked = "false"

var AllyOneAttackUsed = "none"
var AllyTwoAttackUsed = "none"

var AllyOneTarget = "none"
if (AllyOne == undefined) {
var AllyOne = "none";
var AllyTwo = "none";
var EnemyOne = "none";
var EnemyTwo = "none";
console.log("NoneRan")
}

function VariableUpdater() {
        var EnemyOneHealth = document.getElementById("EnemyOneHealth")
        var AllyOneHealth = document.getElementById("AllyOneHealth")
        var GameOver = document.getElementById("GameOver");
        var AllyOneAttackMeterHTML = document.getElementById("AllyOneAttackMeterHTML");
        var EnemyOneAttackMeterHTML = document.getElementById("EnemyOneAttackMeterHTML")
        var EnemyTwoHealth = document.getElementById("EnemyTwoHealth")
        var AllyTwoHealth = document.getElementById("AllyTwoHealth")
        var AllyTwoAttackMeterHTML = document.getElementById("AllyTwoAttackMeterHTML");
        var EnemyTwoAttackMeterHTML = document.getElementById("EnemyTwoAttackMeterHTML")
 }



document.addEventListener('DOMContentLoaded', (event) => { // Just yoink a bit of code from stack overflow and now it does what I want!
    console.log('DOM fully loaded and parsed');
});
// ####### START & consistent Checks ####### //
function StartGame() {
    if (AllyTwoSelected == true && EnemyTwoSelected == true){
    localStorage.setItem("AllyOneStorage",AllyOne);
    localStorage.setItem("AllyTwoStorage",AllyTwo);
    localStorage.setItem("EnemyOneStorage",EnemyOne);
    localStorage.setItem("EnemyTwoStorage",EnemyTwo);
    location.assign("FightScreen.html")}
}

function StartButton() { // Starts the enemies attack when clicked
    VariableUpdater()
    console.log(AllyOne, AllyTwo, EnemyOne, EnemyTwo)
    console.log("Started");
    setTimeout(CheckHealth, 10); // is this ethical to 1ms timeout?
    document.getElementById("StartButton").setAttribute('disabled','disabled'); // IT WORKS IT WORKS
    AllyOne = localStorage.getItem("AllyOneStorage")
    AllyTwo = localStorage.getItem("AllyTwoStorage")
    EnemyOne = localStorage.getItem("EnemyOneStorage")
    EnemyTwo = localStorage.getItem("EnemyTwoStorage")
    console.log(AllyOne, AllyTwo, EnemyOne, EnemyTwo)
    document.getElementById("AllyOneImage").src = AllyOne+".png"
    document.getElementById("AllyTwoImage").src = AllyTwo+".png"
    document.getElementById("EnemyOneImage").src = EnemyOne+".png"
    document.getElementById("EnemyTwoImage").src = EnemyTwo+".png"
    TurnCaller()
    AllyOneMoveList()
    AllyTwoMoveList()
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
    if (AllyOneHealth.value > 0 && EnemyOneHealth.value  > 0 && AllyTwoHealth.value > 0 && EnemyTwoHealth.value  > 0) {
        console.log("All Alive")
        setTimeout(CheckHealth,100)
    } else if (AllyOneHealth.value <= 0) {
        console.log("AllyDead")
        GameOver()
    } else if (EnemyOneHealth.value <= 0) {
        console.log("EnemyDead")
        GameOver()
    }
}



// ####### Ally ATTACKS ####### // 

function HeavenlyStrikeOne() {
    AllyAttackNumber += 1;
    AllyOneAttackValue = Math.floor(Math.random() * (81-40)+1) // Slightly higher max than demonic strike w/ a larger range?
    if (AllyOneTarget == "EnemyOne") {
        EnemyOneHealth.value -= (AllyOneAttackValue * AllyOneAttackMultiplier)
    }
    if (AllyOneTarget == "EnemyTwo") {
        EnemyTwoHealth.value -= (AllyOneAttackValue * AllyOneAttackMultiplier)
    }
}

function JudgementOne() {
    AllyAttackNumber += 1;
    AllyOneAttackValue = Math.floor(Math.random() * (51-25)+1)
    EnemyOneHealth.value -= (AllyOneAttackValue * AllyOneAttackMultiplier)
    EnemyTwoHealth.value -= (AllyOneAttackValue * AllyOneAttackMultiplier)
}

function HealingPrayerOne() {
    AllyAttackNumber += 1;
    AllyOneAttackValue = Math.floor(Math.random() * (51-25)+1)
    AllyOneHealth.value += AllyOneAttackValue
    AllyTwoHealth.value += AllyOneAttackValue
}

function BadTimeOne() {
    AllyAttackNumber += 1;
    AllyOneAttackValue = (Math.floor(Math.random()*(21-15)+15)) + (AllyAttackNumber*10)
    if (AllyOneTarget == "EnemyOne") {
        EnemyOneHealth.value -= (AllyOneAttackValue * AllyOneAttackMultiplier)
    }
    if (AllyOneTarget == "EnemyTwo") {
        EnemyTwoHealth.value -= (AllyOneAttackValue * AllyOneAttackMultiplier)
    }
}

function RewindOne() {
    AllyAttackNumber +=1;
    if (AllyOneHealth.value <= 250) {
        AllyOneHealth += Math.floor(Math.random() * (101-65)+65)
        EnemyOneHealth -= (Math.floor(Math.random() * (51-25)+25)) * AllyOneAttackMultiplier
        EnemyTwoHealth -= (Math.floor(Math.random() * (51-25)+25)) * AllyOneAttackMultiplier
    }
    if (AllyOneHealth.value >> 250) {
        AllyOneHealth += Math.floor(Math.random() * (51-10)+10)
        EnemyOneHealth -= (Math.floor(Math.random() * (51-25)+25)) * AllyOneAttackMultiplier
        EnemyTwoHealth -= (Math.floor(Math.random() * (51-25)+25)) * AllyOneAttackMultiplier
    }
}

function SpearOne() {
    AllyAttackNumber += 1
    AllyOneAttackValue = (Math.floor(Math.random()*(5-1)+1))* AllyOneAttackMultiplier
    if (AllyOneAttackValue == 4) {
        if (AllyOneTarget == "EnemyOne") {
            EnemyOneHealth.value -= 999999
        }
        if (AllyOneTarget == "EnemyTwo") {
            EnemyTwoHealth.value -= 999999
        }
    }
}

function TheMarkOne() {
    AllyAttackNumber +=1
    AllyOneAttackMultiplier = 1.5
    if(MarkAlreadyActive == false) {
    TheMarkInterval = setInterval(TheMarkOneCounter, 1000)
    MarkAlreadyActive = true
    }
    if(MarkAlreadyActive == true) {
        TheMarkCounterVariable = 20 // should it reset, or add?
    }
}
function TheMarkOneCounter() {
    TheMarkCounterVariable -= 1
    TheMarkOneCancel()
}
function TheMarkOneCancel() {
    if (TheMarkCounterVariable == 0) {
        clearInterval(TheMarkInterval)
        TheMarkCounterVariable = 20
        MarkAlreadyActive = false
        AllyOneAttackMultiplier = 1
    }
}

function TheRotOne() {
    AllyAttackNumber +=1
    AllyOneAttackValue = (Math.floor(Math.random() * (126-90)+90))*AllyOneAttackMultiplier
    if(RotAlreadyActive == false) {
    TheRotInterval = setInterval(TheRotOneCounter, 1000)
    RotAlreadyActive = true
    }
    if(RotAlreadyActive == true) {
        TheRotCounterVariable += 5
    }
}

function TheRotOneCounter() {
    TheRotCounterVariable -= 1
    AllyOneHealth -= 20
    TheRotOneCancel()
}

function TheRotOneCancel() {
    if (TheRotCounterVariable == 0) {
        clearInterval(TheRotInterval)
        TheRotCounterVariable = 20
        RotAlreadyActive = false
    }
}

function BoatAttackOne() {
    AllyAttackNumber += 1
    AllyAttackValue = (Math.floor(Math.random() * (111-50)+50)) * AllyOneAttackMultiplier
    if (AllyOneAttackTarget == "EnemyOne") {
        EnemyOneHealth.value -= AllyOneAttackValue
    }
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
        AllyOneAttackValue = 1 * AllyOneAttackMultipler
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
        if(AllyOneAttackTarget == "EnemyOne") {
            EnemyOneHealth.value -= AllyOneAttackValue
        }
        if(AllyOneAttackTarget == "EnemyTwo") {
            EnemyTwoHealth.value -= AllyOneAttackValue
        }
    }
    if(FishStatus == "Heal") {
        if(AllyOneAttackTarget == "EnemyOne") {
            EnemyOneHealth.value += AllyOneAttackValue
        }
        if(AllyOneAttackTarget == "EnemyTwo") {
            EnemyTwoHealth.value += AllyOneAttackValue
        }
    }
}

function HookOne() {
    AllyAttackNumber += 1
    AllyOneAttackValue = Math.floor(Math.random() * (2-1)+1)
    if (AllyOneAttackValue == 1) {
        if(AllyOneAttackTarget == "EnemyOne") {
            EnemyOneHealth.value += AllyOneAttackValue
        }
        if(AllyOneAttackTarget == "EnemyTwo") {
            EnemyTwoHealth.value += AllyOneAttackValue
        }
    }
    else if (AllyOneAttackTarget == 2) {
        if(AllyOneAttackTarget == "EnemyOne") {
            EnemyOneHealth.value += AllyOneAttackValue
        }
        if(AllyOneAttackTarget == "EnemyTwo") {
            EnemyTwoHealth.value += AllyOneAttackValue
        }
        if(HookAlreadyActive == false) {
            HookInterval = setInterval(HookOneCounter, 1000)
            HookAlreadyActive = true
            EnemyOneAttackMeter.max = 175
            EnemyTwoAttackMeter.max = 175
        }
        if(HookAlreadyActive == true) {
            HookCounterVariable += 5
        }
    }
}
function HookOneCounter() {
    HookCounterVariable -= 1
    HookOneCancel()
}
function HookOneCancel() {
    if (HookCounterVariable == 0) {
        clearInterval(HookInterval)
        HookCounterVariable = 15
        EnemyOneAttackMeter.max = 100
        EnemyTwoAttackMeter.max = 100
        HookAlreadyActive = false
    }
}

function ClampOne() {
    AllyAttackNumber += 1
    if (AllyOneAttackTarget == "EnemyOne") {
        AllyOneAttackValue = (EnemyOneHealth.value / 5) // 20%, not 15.
        EnemyOneHealth -= AllyOneAttackValue
    }
    if (AllyOneAttackTarget == "EnemyTwo") {
        AllyOneAttackValue = (EnemyTwoHealth.value / 5)
        EnemyTwoHealth -= AllyOneAttackValue
    }
}

function ChompOne() {
    AllyAttackNumber += 1
    if (AllyOneAttackTarget == "EnemyOne") {
        AllyOneAttackValue = (EnemyOneHealth.max / 10)
        EnemyOneHealth -= AllyOneAttackValue
    }
    if (AllyOneAttackTarget == "EnemyTwo") {
        AllyOneAttackValue = (EnemyTwoHealth.value / 10)
        EnemyTwoHealth -= AllyOneAttackValue
    }
}


function ChewOne() {
    AllyAttackNumber += 1
    if (AllyOneAttackTarget == "EnemyOne") {
        AllyOneAttackValue = (AllyOneHealth.value / 5)
        EnemyOneHealth -= AllyOneAttackValue
    }
    if (AllyOneAttackTarget == "EnemyTwo") {
        AllyOneAttackValue = (AllyOneHealth.value / 5)
        EnemyTwoHealth -= AllyOneAttackValue
    }
}

function SquareAttackOne() { // cant do any moves that have lasting effects becasue I dont want to deal with it mannn
    AllyAttackNumber += 1
    AllyOneAttackValue = Math.floor(Math.random() * (16-1)+1)
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
    else if (AllyOneAttackValue == 13) { // 
        AllyOneAttackValue = 10
        EnemyOneHealth.value -= AllyOneAttackValue
        EnemyTwoAttack.value -= AllyOneAttackValue
    }
    else if (AllyOneAttackValue == 14) { // 
        AllyOneAttackValue = 100
        EnemyOneHealth.value -= AllyOneAttackValue
        EnemyTwoAttack.value -= AllyOneAttackValue
    }
    else if (AllyOneAttackValue == 15) { //  SNOWGRAVE BABYYY
        AllyOneAttackValue = 99999999999999
        if(AllyOneTarget == "EnemyOne") {
            EnemyOneHealth -= AllyOneAttackValue
            document.getElementById("SnowgraveEnemyOne").src="Snowgrave.png"
        }
        if(AllyOneTarget == "EnemyOne") {
            EnemyTwoHealth -= AllyOnesAttackValue
            document.getElementById("SnowgraveEnemyOne").src="Snowgrave.png"
        }
    };
}

function AllyOneMoveEnacter() {
    if(AllyOneLocked = "false") {
        AllyOneAttackUsed = "none"
    }
    if(AllyOneLocked = "true") {
        if(AllyOne == "AngelCat") {
            if(AllyOneAttackSelected = "One") {
                HeavenlyStrikeOne()
                AllyOneAttackUsed = "Heavenly Strike"
            }
            if(AllyOneAttackSelected = "Two") {
                JudgementOne()
                AllyOneAttackUsed = "Judgement"
            }
            if(AllyOneAttackSelected = "Three") {
                HealingPrayerOne()
                AllyOneAttackUsed = "Healing Prayer"
            }
        }
        if(AllyOne == "Clock") {
            if(AllyOneAttackSelected = "One") {
                BadTimeOne()
                AllyOneAttackUsed = "Bad Time"
            }
            if(AllyOneAttackSelected = "Two") {
                HourOne()
                AllyOneAttackUsed = "Hour"
            }
            if(AllyOneAttackSelected = "Three") {
                RewindOne()
                AllyOneAttackUsed = "Rewind"
            }
        }
        if(AllyOne == "SlugCat") {
            if(AllyOneAttackSelected = "One") {
                SpearOne()
                AllyOneAttackUsed = "Spear"
            }
            if(AllyOneAttackSelected = "Two") {
                TheMarkOne()
                AllyOneAttackUsed = "The Mark"
            }
            if(AllyOneAttackSelected = "Three") {
                TheRotOne()
                AllyOneAttackUsed = "The Rot"
            }
        }
        if(AllyOne == "Square") {
            if(AllyOneAttackSelected = "One") {
                SquareAttackOne()
                AllyOneAttackUsed = "Square"
            }
            if(AllyOneAttackSelected = "Two") {
                SquareAttackOne()
                AllyOneAttackUsed = "Square"
            }
            if(AllyOneAttackSelected = "Three") {
                SquareAttackOne()
                AllyOneAttackUsed = "Square"
            }
        }
        if(AllyOne == "Boat") {
            if(AllyOneAttackSelected = "One") {
                BoatOne()
                AllyOneAttackUsed = "Boat"
            }
            if(AllyOneAttackSelected = "Two") {
                FishOne()
                AllyOneAttackUsed = "Fish"
            }
            if(AllyOneAttackSelected = "Three") {
                HookOne()
                AllyOneAttackUsed = "Hook"
            }
        }
        if(AllyOne == "Flibbit") {
            if(AllyOneAttackSelected = "One") {
                ClampOne()
                AllyOneAttackUsed = "Clamp"
            }
            if(AllyOneAttackSelected = "Two") {
                ChompOne()
                AllyOneAttackUsed = "Chomp"
            }
            if(AllyOneAttackSelected = "Three") {
                ChewOne()
                AllyOneAttackUsed = "Chew"
            }
        }
    }
    console.log("AllyOneAttacked, used " + AllyOneAttackUsed)
    document.getElementById("AllyOneAttackOne").disabled = false;
    document.getElementById("AllyOneAttackTwo").disabled = false;
    document.getElementById("AllyOneAttackThree").disabled = false;
    document.getElementById("TargetEnemyTwoAllyOne").disabled = false;
    document.getElementById("TargetEnemyOneAllyOne").disabled = false;
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
    AllyOneAttackSelected = "One"
    document.getElementById("AllyOneAttackOne").style.borderWidth = "5px"
}
function AllyOneAttackButtonTwo() {
    AllyOneAttackButtonReset()
    AllyOneAttackSelected = "Two"
    document.getElementById("AllyOneAttackTwo").style.borderWidth = "5px"
}
function AllyOneAttackButtonThree() {
    AllyOneAttackButtonReset()
    AllyOneAttackSelected = "Three"
    document.getElementById("AllyOneAttackThree").style.borderWidth = "5px"
}
function TargetEnemyOneAllyOneButton() {
    document.getElementById("TargetEnemyTwoAllyOne").style.borderWidth = "2px"
    document.getElementById("TargetEnemyOneAllyOne").style.borderWidth = "5px"
    AllyOneAttackTarget = "EnemyOne"
}
function TargetEnemyTwoAllyOneButton() {
    document.getElementById("TargetEnemyTwoAllyOne").style.borderWidth = "5px"
    document.getElementById("TargetEnemyOneAllyOne").style.borderWidth = "2px"
    AllyOneAttackTarget = "EnemyTwo"
}
function AllyOneLockInButton() {
    AllyOneLocked = "true"
    document.getElementById("AllyOneAttackOne").setAttribute('disabled','disabled')
    document.getElementById("AllyOneAttackTwo").setAttribute('disabled','disabled')
    document.getElementById("AllyOneAttackThree").setAttribute('disabled','disabled')
    document.getElementById("TargetEnemyTwoAllyOne").setAttribute('disabled','disabled')
    document.getElementById("TargetEnemyOneAllyOne").setAttribute('disabled','disabled')

}


function AllyTwoAttackButtonReset() {
    document.getElementById("AllyTwoAttackOne").style.borderWidth = "2px"
    document.getElementById("AllyTwoAttackTwo").style.borderWidth = "2px"
    document.getElementById("AllyTwoAttackThree").style.borderWidth = "2px"
}
function AllyTwoAttackButtonOne() {
    AllyTwoAttackButtonReset()
    AllyTwoAttackSelected = "One"
    document.getElementById("AllyTwoAttackOne").style.borderWidth = "5px"
}
function AllyTwoAttackButtonTwo() {
    AllyTwoAttackButtonReset()
    AllyTwoAttackSelected = "Two"
    document.getElementById("AllyTwoAttackTwo").style.borderWidth = "5px"
}
function AllyTwoAttackButtonThree() {
    AllyTwoAttackButtonReset()
    AllyTwoAttackSelected = "Three"
    document.getElementById("AllyTwoAttackThree").style.borderWidth = "5px"
}
function TargetEnemyOneAllyTwoButton() {
    document.getElementById("TargetEnemyTwoAllyTwo").style.borderWidth = "2px"
    document.getElementById("TargetEnemyOneAllyTwo").style.borderWidth = "5px"
    AllyTwoAttackTarget = "EnemyOne"
}
function TargetEnemyTwoAllyTwoButton() {
    document.getElementById("TargetEnemyTwoAllyTwo").style.borderWidth = "5px"
    document.getElementById("TargetEnemyOneAllyTwo").style.borderWidth = "2px"
    AllyTwoAttackTarget = "EnemyTwo"
}
function AllyTwoLockInButton() {
    AllyTwoLocked = "true"
    document.getElementById("AllyTwoAttackOne").setAttribute('disabled','disabled')
    document.getElementById("AllyTwoAttackTwo").setAttribute('disabled','disabled')
    document.getElementById("AllyTwoAttackThree").setAttribute('disabled','disabled')
    document.getElementById("TargetEnemyTwoAllyTwo").setAttribute('disabled','disabled')
    document.getElementById("TargetEnemyOneAllyTwo").setAttribute('disabled','disabled')

}
// ###################################### // 
// ###################################### //
// ####### UNIVERSAL TURN HANDLER ####### //
// ###################################### //
// ###################################### //

function TurnCaller() {
    setTimeout(EnemyOneAttackMeterUpdate, 1000)
    setTimeout(EnemyTwoAttackMeterUpdate, 1000)
    setTimeout(AllyOneAttackMeterUpdate, 1000)
}

function AllyOneAttackMeterUpdate() {
    VariableUpdater();
    if (AllyOneHealth.value <= 0 || EnemyOneHealth.value <= 0 || AllyTwoHealth.value <= 0 || EnemyTwoHealth.value <= 0) {
       console.log(AllyOneHealth.value)
       console.log(EnemyOneHealth.value)
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
    if (AllyOneHealth.value <= 0 || EnemyOneHealth.value <= 0 || AllyTwoHealth.value <= 0 || EnemyTwoHealth.value <= 0) {
       console.log(AllyOneHealth.value)
       console.log(EnemyOneHealth.value)
    } else {
        AllyOneAttackMeterHTML.value = AllyOneAttackMeterHTML.max;
        AllyOneMoveEnacter()
    }
    
}

function EnemyOneAttackMeterUpdate() {
    VariableUpdater();
    if (AllyOneHealth.value <= 0 || EnemyOneHealth.value <= 0 || AllyTwoHealth.value <= 0 || EnemyTwoHealth.value <= 0) {
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
    if (AllyOneHealth.value <= 0 || EnemyOneHealth.value <= 0 || AllyTwoHealth.value <= 0 || EnemyTwoHealth.value <= 0) {
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
        if (EnemyOneAttackTarget == "AllyTwo") {
            AllyTwoHealth.value -= (EnemyOneAttackValue - AllyOneDefense)
            document.getElementById("EnemyOneAttackLog").innerText = EnemyOne + " Used " + EnemyOneAttack + ",\n dealing " + EnemyOneAttackValue + " Damage to " + AllyTwo
        }
        if (EnemyOneAttackTarget == "Both") {
            AllyOneHealth.value -= (EnemyOneAttackValue - AllyOneDefense)
            AllyTwoHealth.value -= (EnemyOneAttackValue - AllyOneDefense)
            document.getElementById("EnemyOneAttackLog").innerText = EnemyOne + " Used " + EnemyOneAttack + ",\n dealing " + EnemyOneAttackValue + " Damage to " + AllyOne + " and " + AllyTwo
        }
        if (EnemyOneAttackTarget == "SelfHeal") {
            EnemyOneHealth += EnemyOneHealValue
            document.getElementById("EnemyOneAttackLog").innerText = EnemyOne + " Used " + EnemyOneAttack + ",\n healing " + EnemyOneAttackValue + " health "
        }
        if (EnemyOneAttackTarget == "TeamHeal") {
            EnemyOneHealth += EnemyOneHealValue
            EnemyTwoHealth += EnemyOneHealValue
            document.getElementById("EnemyOneAttackLog").innerText = EnemyOne + " Used " + EnemyOneAttack + ",\n healing " + EnemyOneAttackValue + " health for both enemies"
        }
        if (EnemyOneAttackTarget == "Overdrive") {
            EnemyOneHealth -= EnemyOneSelfDamage
            AllyOneHealth -= EnemyOneAttackValue
            AllyTwoHealth -= EnemyOneAttackValue
            document.getElementById("EnemyOneAttackLog").innerText = EnemyOne + " Used " + EnemyOneAttack + ",\n dealing " + EnemyOneAttackValue + "damage to enemies, and " + EnemyOneSelfDamage + " damage to self"
        }

        EnemyOneAttackValue = 0
        EnemyOneSelfDamage = 0
        EnemyOneHealValue = 0
        EnemyOneAttack = "none"

}

function EnemyTwoAttackMeterUpdate() {
    VariableUpdater();
    if (AllyOneHealth.value <= 0 || EnemyOneHealth.value <= 0 || AllyTwoHealth.value <= 0 || EnemyTwoHealth.value <= 0) {
       console.log(AllyTwoHealth.value)
       console.log(EnemyTwoHealth.value)
    } else {
        EnemyTwoAttackMeterHTML.value -= 25;
        setTimeout(EnemyTwoAttackMeterUpdate, 1000)
        if (EnemyTwoAttackMeterHTML.value <= 0) {
            EnemyTwoAttackMeterReset()
        }
    }            
}

function EnemyTwoAttackMeterReset() {
    VariableUpdater();
    if (AllyOneHealth.value <= 0 || EnemyOneHealth.value <= 0 || AllyTwoHealth.value <= 0 || EnemyTwoHealth.value <= 0) {
       console.log(AllyTwoHealth.value)
       console.log(EnemyTwoHealth.value)
    } else {
        EnemyTwoAttackMeterHTML.value = EnemyTwoAttackMeterHTML.max;
        EnemyTwoAttackSelector()
        EnemyTwoAttacker()
    }
}
function EnemyTwoAttacker() {
        console.log("EnemyTwoAttacked, Used " + EnemyTwoAttack)
        if (EnemyTwoAttackTarget == "AllyOne") {
            AllyOneHealth.value -= (EnemyTwoAttackValue - AllyOneDefense)
            document.getElementById("EnemyTwoAttackLog").innerText = EnemyTwo + " Used " + EnemyTwoAttack + ",\n dealing " + EnemyTwoAttackValue + " Damage to " + AllyOne
        }
        if (EnemyTwoAttackTarget == "AllyTwo") {
            AllyTwoHealth.value -= (EnemyTwoAttackValue - AllyOneDefense)
            document.getElementById("EnemyTwoAttackLog").innerText = EnemyTwo + " Used " + EnemyTwoAttack + ",\n dealing " + EnemyTwoAttackValue + " Damage to " + AllyTwo
        }
        if (EnemyTwoAttackTarget == "Both") {
            AllyOneHealth.value -= (EnemyTwoAttackValue - AllyOneDefense)
            AllyTwoHealth.value -= (EnemyTwoAttackValue - AllyOneDefense)
            document.getElementById("EnemyTwoAttackLog").innerText = EnemyTwo + " Used " + EnemyTwoAttack + ",\n dealing " + EnemyTwoAttackValue + " Damage to " + AllyOne + " and " + AllyTwo
        }
        if (EnemyTwoAttackTarget == "SelfHeal") {
            EnemyTwoHealth += EnemyTwoHealValue
            document.getElementById("EnemyTwoAttackLog").innerText = EnemyTwo + " Used " + EnemyTwoAttack + ",\n healing " + EnemyTwoAttackValue + " health "
        }
        if (EnemyTwoAttackTarget == "TeamHeal") {
            EnemyOneHealth += EnemyTwoHealValue
            EnemyTwoHealth += EnemyTwoHealValue
            document.getElementById("EnemyTwoAttackLog").innerText = EnemyTwo + " Used " + EnemyTwoAttack + ",\n healing " + EnemyTwoAttackValue + " health for both enemies"
        }
        if (EnemyTwoAttackTarget == "Overdrive") {
            EnemyTwoHealth -= EnemyTwoSelfDamage
            AllyOneHealth -= EnemyOneAttackValue
            AllyTwoHealth -= EnemyOneAttackValue
            document.getElementById("EnemyTwoAttackLog").innerText = EnemyTwo + " Used " + EnemyTwoAttack + ",\n dealing " + EnemyTwoAttackValue + "damage to enemies, and " + EnemyTwoSelfDamage + " damage to self"
        }
        EnemyTwoAttackValue = 0
        EnemyTwoSelfDamage = 0
        EnemyTwoHealValue = 0
        EnemyTwoAttack = "none"
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
        document.getElementById("AllyOneAttackOne").innerHTML = "Heavenly Strike"
        document.getElementById("AllyOneAttackTwo").innerHTML = "Judgement"
        document.getElementById("AllyOneAttackThree").innerHTML = "Healing Prayer"
    }
    if(AllyOne == "Clock") {
        AllyOneAttackOneText = "Bad Time"
        AllyOneAttackTwoText = "Hour"
        AllyOneAttackThreeText = "Rewind"
        document.getElementById("AllyOneAttackOne").innerHTML = "Bad Time"
        document.getElementById("AllyOneAttackTwo").innerHTML = "Hour"
        document.getElementById("AllyOneAttackThree").innerHTML = "Rewind"
    }
    if(AllyOne == "Slugcat") {
        AllyOneAttackOneText = "Spear"
        AllyOneAttackTwoText = "The Mark"
        AllyOneAttackThreeText = "The Rot"
        document.getElementById("AllyOneAttackOne").innerHTML = "Spear"
        document.getElementById("AllyOneAttackTwo").innerHTML = "The Mark"
        document.getElementById("AllyOneAttackThree").innerHTML = "The Rot"
    }
    if(AllyOne == "Square") {
        AllyOneAttackOneText = "4 Corners"
        AllyOneAttackTwoText = ""
        AllyOneAttackThreeText = ""
        document.getElementById("AllyOneAttackOne").innerHTML = "4 Corners"
        document.getElementById("AllyOneAttackTwo").innerHTML = ""
        document.getElementById("AllyOneAttackThree").innerHTML = ""
    }
    if(AllyOne == "Boat") {
        AllyOneAttackOneText = "Boat"
        AllyOneAttackTwoText = "Fish"
        AllyOneAttackThreeText = "Hook"
        document.getElementById("AllyOneAttackOne").innerHTML = "Boat"
        document.getElementById("AllyOneAttackTwo").innerHTML = "Fish"
        document.getElementById("AllyOneAttackThree").innerHTML = "Hook"
    }
    if(AllyOne == "Flibbit") {
        AllyOneAttackOneText = "Clamp"
        AllyOneAttackTwoText = "Chomp"
        AllyOneAttackThreeText = "Chew"
        document.getElementById("AllyOneAttackOne").innerHTML = "Clamp"
        document.getElementById("AllyOneAttackTwo").innerHTML = "Chomp"
        document.getElementById("AllyOneAttackThree").innerHTML = "Chew"
    }
}
function AllyTwoMoveList() {}





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
        if(EnemyOneVirusTarget == "AllyOne") {
            EnemyOneVirusSlotOneTargetLock = "AllyOne";
            setTimeout(EnemyOneVirusDamageSlotOneDamager, 1000);
            setTimeout(EnemyOneVirusDamageSlotOneDamager, 2000);
            setTimeout(EnemyOneVirusDamageSlotOneDamager, 3000);
            setTimeout(EnemyOneVirusDamageSlotOneDamager, 4000);
            setTimeout(EnemyOneVirusDamageSlotOneDamager, 5000);
            setTimeout(EnemyOneVirusDamageSlotOneDamager, 6000);
            setTimeout(EnemyOneVirusDamageSlotOneDamager, 7000);
            setTimeout(EnemyOneVirusDamageSlotOneDamager, 7500);
        }
        if(EnemyOneVirusTarget == "AllyTwo") {
            EnemyOneVirusSlotOneTargetLock = "AllyTwo"; // I HATE INTERVALS WE HATE INTERVALS (it didnt work once so now I am refusing to use it on this part even though it would work better probably)
            setTimeout(EnemyOneVirusDamageSlotOneDamager, 1000);
            setTimeout(EnemyOneVirusDamageSlotOneDamager, 2000);
            setTimeout(EnemyOneVirusDamageSlotOneDamager, 3000);
            setTimeout(EnemyOneVirusDamageSlotOneDamager, 4000);
            setTimeout(EnemyOneVirusDamageSlotOneDamager, 5000);
            setTimeout(EnemyOneVirusDamageSlotOneDamager, 6000);
            setTimeout(EnemyOneVirusDamageSlotOneDamager, 7000);
            setTimeout(EnemyOneVirusDamageSlotOneDamager, 7500);
        }
}
}

function EnemyOneVirusDamageSlotOneDamager() {
    EnemyOneVirusSlotOneCounter += 1;
    
    if(EnemyOneVirusSlotOneTargetLock == "AllyOne") {
        AllyOneHealth.value -= 10
        console.log("VirusAttackedAllyOne")
        document.getElementById("AllyOneVirusMarker").src = "VirusDamage.png"
    }
    if(EnemyOneVirusSlotOneTargetLock == "AllyTwo") {
        AllyTwoHealth.value -= 10
        console.log("VirusAttackedAllyTwo")
        document.getElementById("AllyTwoVirusMarker").src = "VirusDamage.png"
    }
    if(EnemyOneVirusSlotOneCounter == 8) {
        EnemyOneVirusSlotOneCounter = 0
        EnemyOneVirusSlotOne = "Free"
        EnemyOneVirusSlotOneTargetLock = "none"
        document.getElementById("AllyTwoVirusMarker").src = ""
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
        if(EnemyOneVirusTarget == "AllyOne") {
            EnemyOneVirusSlotTwoTargetLock = "AllyOne";
            setTimeout(EnemyOneVirusDamageSlotTwoDamager, 1000);
            setTimeout(EnemyOneVirusDamageSlotTwoDamager, 2000);
            setTimeout(EnemyOneVirusDamageSlotTwoDamager, 3000);
            setTimeout(EnemyOneVirusDamageSlotTwoDamager, 4000);
            setTimeout(EnemyOneVirusDamageSlotTwoDamager, 5000);
            setTimeout(EnemyOneVirusDamageSlotTwoDamager, 6000);
            setTimeout(EnemyOneVirusDamageSlotTwoDamager, 7000);
            setTimeout(EnemyOneVirusDamageSlotTwoDamager, 7500);
        }
        if(EnemyOneVirusTarget == "AllyTwo") {
            EnemyOneVirusSlotTwoTargetLock = "AllyTwo";
            setTimeout(EnemyOneVirusDamageSlotTwoDamager, 1000);
            setTimeout(EnemyOneVirusDamageSlotTwoDamager, 2000);
            setTimeout(EnemyOneVirusDamageSlotTwoDamager, 3000);
            setTimeout(EnemyOneVirusDamageSlotTwoDamager, 4000);
            setTimeout(EnemyOneVirusDamageSlotTwoDamager, 5000);
            setTimeout(EnemyOneVirusDamageSlotTwoDamager, 6000);
            setTimeout(EnemyOneVirusDamageSlotTwoDamager, 7000);
            setTimeout(EnemyOneVirusDamageSlotTwoDamager, 7500);
        }
}
}

function EnemyOneVirusDamageSlotTwoDamager() {
    EnemyOneVirusSlotTwoCounter += 1;
    console.log("VIRUS SLOT 2 STARTED")
    if(EnemyOneVirusSlotTwoTargetLock == "AllyOne") {
        AllyOneHealth.value -= 10
        document.getElementById("AllyOneVirusMarker").src = "VirusDamage.png"
        console.log("VirusAttackedAllyOne")
    }
    if(EnemyOneVirusSlotTwoTargetLock == "AllyTwo") {
        AllyTwoHealth.value -= 10
        console.log("VirusAttackedAllyTwo")
        document.getElementById("AllyTwoVirusMarker").src = "VirusDamage.png"
    }
    if(EnemyOneVirusSlotTwoCounter == 8) {
        EnemyOneVirusSlotTwoCounter = 0
        EnemyOneVirusSlotTwo = "Free"
        EnemyOneVirusSlotTwoTargetLock = "none"
        console.log("VirusSlotTwoEnd")
        document.getElementById("AllyTwoVirusMarker").src = ""
        document.getElementById("AllyOneVirusMarker").src = ""
    }
}

// enemy two// 

function EnemyTwoVirusDamageSlotOne() {
    console.log("VIRUS SLOT 1 STARTED")
    if(EnemyTwoVirusSlotOne == "Taken") {
        EnemyTwoVirusDamageSlotTwo()
    }
    if(EnemyTwoVirusSlotOne == "Free") {
        if(EnemyTwoVirusTarget == "AllyOne") {
            EnemyTwoVirusSlotOneTargetLock = "AllyOne";
            setTimeout(EnemyTwoVirusDamageSlotOneDamager, 1000);
            setTimeout(EnemyTwoVirusDamageSlotOneDamager, 2000);
            setTimeout(EnemyTwoVirusDamageSlotOneDamager, 3000);
            setTimeout(EnemyTwoVirusDamageSlotOneDamager, 4000);
            setTimeout(EnemyTwoVirusDamageSlotOneDamager, 5000);
            setTimeout(EnemyTwoVirusDamageSlotOneDamager, 6000);
            setTimeout(EnemyTwoVirusDamageSlotOneDamager, 7000);
            setTimeout(EnemyTwoVirusDamageSlotOneDamager, 7500);
        }
        if(EnemyTwoVirusTarget == "AllyTwo") {
            EnemyTwoVirusSlotOneTargetLock = "AllyTwo"; // I HATE INTERVALS WE HATE INTERVALS (it didnt work once so now I am refusing to use it on this part even though it would work better probably)
            setTimeout(EnemyTwoVirusDamageSlotOneDamager, 1000);
            setTimeout(EnemyTwoVirusDamageSlotOneDamager, 2000);
            setTimeout(EnemyTwoVirusDamageSlotOneDamager, 3000);
            setTimeout(EnemyTwoVirusDamageSlotOneDamager, 4000);
            setTimeout(EnemyTwoVirusDamageSlotOneDamager, 5000);
            setTimeout(EnemyTwoVirusDamageSlotOneDamager, 6000);
            setTimeout(EnemyTwoVirusDamageSlotOneDamager, 7000);
            setTimeout(EnemyTwoVirusDamageSlotOneDamager, 7500);
        }
}
}

function EnemyTwoVirusDamageSlotOneDamager() {
    EnemyTwoVirusSlotOneCounter += 1;
    
    if(EnemyTwoVirusSlotOneTargetLock == "AllyOne") {
        AllyOneHealth.value -= 10
        console.log("VirusAttackedAllyOne")
        document.getElementById("AllyOneVirusMarker").src = "VirusDamage.png"
    }
    if(EnemyTwoVirusSlotOneTargetLock == "AllyTwo") {
        AllyTwoHealth.value -= 10
        console.log("VirusAttackedAllyTwo")
        document.getElementById("AllyTwoVirusMarker").src = "VirusDamage.png"
    }
    if(EnemyTwoVirusSlotOneCounter == 8) {
        EnemyTwoVirusSlotOneCounter = 0
        EnemyTwoVirusSlotOne = "Free"
        EnemyTwoVirusSlotOneTargetLock = "none"
        document.getElementById("AllyTwoVirusMarker").src = ""
        document.getElementById("AllyOneVirusMarker").src = ""
        console.log("VirusSlotOneEnd")
    }
}


function EnemyTwoVirusDamageSlotTwo() {
    console.log("Virus2Used")
    if(EnemyTwoeVirusSlotTwo == "Taken") {
        EnemyTwoVirusDamageSlotTwo()
    }
    if(EnemyTwoVirusSlotTwo == "Free") {
        if(EnemyTwoVirusTarget == "AllyOne") {
            EnemyTwoVirusSlotTwoTargetLock = "AllyOne";
            setTimeout(EnemyTwoVirusDamageSlotOneDamager, 1000);
            setTimeout(EnemyTwoVirusDamageSlotOneDamager, 2000);
            setTimeout(EnemyTwoVirusDamageSlotOneDamager, 3000);
            setTimeout(EnemyTwoVirusDamageSlotOneDamager, 4000);
            setTimeout(EnemyTwoVirusDamageSlotOneDamager, 5000);
            setTimeout(EnemyTwoVirusDamageSlotOneDamager, 6000);
            setTimeout(EnemyTwoVirusDamageSlotOneDamager, 7000);
            setTimeout(EnemyTwoVirusDamageSlotOneDamager, 7500);
        }
        if(EnemyTwoVirusTarget == "AllyTwo") {
            EnemyTwoVirusSlotTwoTargetLock = "AllyTwo";
            setTimeout(EnemyTwoVirusDamageSlotOneDamager, 1000);
            setTimeout(EnemyTwoVirusDamageSlotOneDamager, 2000);
            setTimeout(EnemyTwoVirusDamageSlotOneDamager, 3000);
            setTimeout(EnemyTwoVirusDamageSlotOneDamager, 4000);
            setTimeout(EnemyTwoVirusDamageSlotOneDamager, 5000);
            setTimeout(EnemyTwoVirusDamageSlotOneDamager, 6000);
            setTimeout(EnemyTwoVirusDamageSlotOneDamager, 7000);
            setTimeout(EnemyTwoVirusDamageSlotOneDamager, 7500);
        }
}
}

function EnemyTwoVirusDamageSlotTwoDamager() {
    EnemyTwoVirusSlotTwoCounter += 1;
    console.log("VIRUS SLOT 2 STARTED")
    if(EnemyTwoVirusSlotTwoTargetLock == "AllyOne") {
        AllyOneHealth.value -= 10
        document.getElementById("AllyOneVirusMarker").src = "VirusDamage.png"
        console.log("VirusAttackedAllyOne")
    }
    if(EnemyTwoVirusSlotTwoTargetLock == "AllyTwo") {
        AllyTwoHealth.value -= 10
        console.log("VirusAttackedAllyTwo")
        document.getElementById("AllyTwoVirusMarker").src = "VirusDamage.png"
    }
    if(EnemyTwoVirusSlotTwoCounter == 8) {
        EnemyTwoVirusSlotTwoCounter = 0
        EnemyTwoVirusSlotTwo = "Free"
        EnemyTwoVirusSlotTwoTargetLock = "none"
        console.log("VirusSlotTwoEnd")
        document.getElementById("AllyTwoVirusMarker").src = ""
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
        document.getElementById("AllyTwoFireMarker").src = "FireDamage.png"
        AllyOneHealth.value -= EnemyOneFireAttackValue
        AllyTwoHealth.value -= EnemyOneFireAttackValue
    }
    if(EnemyOneFireCounter == 4) {
        EnemyOneFireCounter = 0
        document.getElementById("AllyOneFireMarker").src = ""
        document.getElementById("AllyTwoFireMarker").src = ""
    }
}

function EnemyTwoFireDamager() {
    if(EnemyTwoAttackTarget == "Both") {
        EnemyTwoFireCounter += 1
        document.getElementById("AllyOneFireMarker").src = "FireDamage.png"
        document.getElementById("AllyTwoFireMarker").src = "FireDamage.png"
        AllyOneHealth.value -= EnemyTwoFireAttackValue
        AllyTwoHealth.value -= EnemyTwoFireAttackValue
    }
    if(EnemyTwoFireCounter == 4) {
        EnemyTwoFireCounter = 0
        document.getElementById("AllyOneFireMarker").src = ""
        document.getElementById("AllyTwoFireMarker").src = ""
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
            if (EnemyOneHealth.value <= 50 || EnemyTwoHealth.value <= 50) { // HEAL BIASED FOR WHEN UNDER HALF (this would trigger when an enemy is dead? bad bad bad) Heal from death? Like fnaf world refreshed??
                
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
    if (EnemyOne == "DNA") { // PLACEHOLDER BECAUSE ACGT IS STILL UNDONE
        EnemyOneAttackSelection = Math.floor(Math.random() * (11-1) + 1)
        if (EnemyOneAttackNumber <= 3) { // under 3 turns, 2/10 for virus, 7/10 for ACGT, 1/10 for bind
            console.log(EnemyOneAttackNumber)
            if (EnemyOneAttackSelection <= 2) {
                EnemyOneAttack = "Virus"
                VirusOne()
                EnemyOneVirusDamageSlotOne()
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
                EnemyOneVirusDamageSlotOne()
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
                EnemyOneVirusDamageSlotOne()
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
        EnemyOneAttackSelection = Math.floor(Math.random() * (11-1) + 1) // 2/10 chance for  Grab, 2/10 for domain, 6/10 for reduce
        if (EnemyOneAttackSelection <= 2) {
            EnemyOneAttack = "Grab"
            GrabOne()
        }
        if (EnemyOneAttackSelection >= 3 && EnemyOneAttackSelection <= 5) {
            EnemyOneAttack = "Domain"
            DomainOne()
        }
        if (EnemyOneAttackSelection >= 6) {
            EnemyOneAttack = "Reduce"
            ReduceOne()
        }
    }

    if (EnemyOne == "Blob") {
        EnemyOneAttackSelection = Math.floor(Math.random() * (11-1) + 1)
            if (EnemyOneHealth.value <= 50 || EnemyTwoHealth.value <= 50) { // Under half, 40% chance for reform, 40% chance for glob, 20% chance for randomize
                if (EnemyOneAttackSelection <= 4) {
                    EnemyOneAttack = "Glob"
                    PitStopOne()
                }
                if (EnemyOneAttackSelection <= 8 && EnemyOneAttackSelection >= 4) {
                    EnemyOneAttack = "Ram"
                    RamOne()
                }
                if (EnemyOneAttackSelection >= 9) {
                    EnemyOneAttack = "Randomize"
                    OverdriveOne()
                }
            }
            else { // Above Half , 2/10 reform, 2/10 glob, 6/10 randomize
                if (EnemyOneAttackSelection <= 2) {
                    EnemyOneAttack = "PitStop"
                    PitStopOne()
                }
                if (EnemyOneAttackSelection <= 4 && EnemyOneAttackSelection >= 3) {
                    EnemyOneAttack = "Ram"
                    RamOne()
                }
                if (EnemyOneAttackSelection >= 5) {
                    EnemyOneAttack = "Overdrive"
                    OverdriveOne()
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
        if (AllyOneHealth.value > AllyTwoHealth.value) { // If ally one has more health than ally two, 2/3rds chance to attack ally one
            if (EnemyOneAttackTarget  <= 4) { 
                EnemyOneAttackTarget = "AllyOne"
            } else {
                EnemyOneAttackTarget = "AllyTwo"
            }
        }
        if (AllyOneHealth.value < AllyTwoHealth.value) { // If ally two has more health than ally oneG, 2/3rds chance to attack ally two
            if (EnemyOneAttackTarget  <= 4) { 
                EnemyOneAttackTarget = "AllyTwo"
            } else {
                EnemyOneAttackTarget = "AllyOne"
            }
        } 
        else {
            if (EnemyOneAttackTarget  <= 3) { // neutral
                EnemyOneAttackTarget = "AllyTwo"
            } else {
                EnemyOneAttackTarget = "AllyOne"
            }
        }
    }
}

function DamningOne() {
    EnemyOneAttackNumber += 1;
    EnemyOneAttackValue = Math.floor(Math.random() * (51 - 25) + 25);
    EnemyOneAttackTarget = "Both"
}

function FireBlastOne() {
    VariableUpdater()
    EnemyOneAttackNumber += 1;
    EnemyOneAttackValue = Math.floor(Math.random() * (31 - 25) + 25);
    EnemyOneFireAttackValue = Math.floor(Math.random() * (20-10) + 10);
    EnemyOneAttackTarget = "Both"
    setTimeout(EnemyOneFireDamager, 1000)
    setTimeout(EnemyOneFireDamager, 2000)
    setTimeout(EnemyOneFireDamager, 3000)
    setTimeout(EnemyOneFireDamager, 3700)
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
        EnemyOneAttackTarget = Math.random()* (3-1)+1 // he cares not for attacking the enemy with the lowest health, he just attacks one
        if (EnemyOneAttackTarget == 1) {
            EnemyOneAttackTarget = "AllyOne"
        } else {EnemyOneAttackTarget = "AllyTwo"}
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
    EnemyOneHealValue = Math.floor(Math.random() * (40-30))
    EnemyOneAttackTarget = "TeamHeal"
}

function FoldOne() {
    VariableUpdater()
    EnemyOneAttackNumber +=1;
    if (EnemyOneHealth.value <= 0 || AllyOneHealth.value <= 0) {

    } else {
        EnemyOneAttackNumber += 1;
        FoldCounter += 1;
        EnemyOneAttackValue = FoldCounter*10
        EnemyOneAttackTarget = Math.floor(Math.random() * (7-1)+1) // Generates a random number 1-6
        if (AllyOneHealth > AllyTwoHealth) { // If ally one has more health than ally two, 2/3rds chance to attack ally one
            if (EnemyOneAttackTarget  <= 4) { 
                EnemyOneAttackTarget = "AllyOne"
            } else {
                EnemyOneAttackTarget = "AllyTwo"
            }
        }
        if (AllyOneHealth < AllyTwoHealth) { // If ally two has more health than ally oneG, 2/3rds chance to attack ally two
            if (EnemyOneAttackTarget  <= 4) { 
                EnemyOneAttackTarget = "AllyTwo"
            } else {
                EnemyOneAttackTarget = "AllyOne"
            }
        } 
        else {
            if (EnemyOneAttackTarget  <= 3) { // neutral
                EnemyOneAttackTarget = "AllyTwo"
            } else {
                EnemyOneAttackTarget = "AllyOne"
            }
        }
    }
}

function PeckOne() {
    VariableUpdater()
    EnemyOneAttackNumber +=1;
    EnemyOneAttackValue = Math.floor(Math.random() * (60-40)+40)
    EnemyOneAttackTarget = Math.floor(Math.random()* (3-1)+1) // he cares not for attacking the enemy with the lowest health, he just attacks one
        if (EnemyOneAttackTarget == 1) {
            EnemyOneAttackTarget = "AllyOne"
        } else {EnemyOneAttackTarget = "AllyTwo"}
}

function PaperAirplaneOne() {
    VariableUpdater()
    EnemyOneAttackNumber += 1;
    FoldCounter += 2;
}
function VirusOne() { // this could have issues if it stacks? Just make it not stack lmao
    VariableUpdater()
    EnemyOneAttackNumber +=1;
    EnemyOneVirusValue = Math.floor(Math.random() * (20-10)+10) // done multiple times
    EnemyOneAttackTarget = Math.floor(Math.random()* (3-1)+1) // he cares not for attacking the enemy with the lowest health, he just attacks one
    if (EnemyOneAttackTarget == 1) {
        EnemyOneVirusTarget = "AllyOne"
    } else {EnemyOneVirusTarget = "AllyTwo"}
}
// RESUME RESUME RESUME RESUME // RESUME WHAT?
function ACGTOne() { // PLACEHOLDER
    VariableUpdater()
    EnemyOneAttackNumber +=1;
    EnemyOneAttackValue = 0
    EnemyOneAttackTarget = Math.floor(Math.random()* (3-1)+1) // One, or two
    if (EnemyOneAttackTarget == 1) {
        EnemyOneAttackTarget = "AllyOne"}
        else {EnemyOneAttackTarget = "AllyTwo"}
}

function BindOne() {
    VariableUpdater()
    EnemyOneAttackNumber +=1;
    EnemyOneAttackTarget = Math.floor(Math.random()* (3-1)+1) // One, or two
    if (EnemyOneAttackTarget == 1) {
        EnemyOneAttackTarget = "AllyOne"
    } else {EnemyOneSelfDamage = 9999999999}
}

function GrabOne() {
    VariableUpdater()
    EnemyOneAttackNumber +=1;
    AllySpeed = "Reduced"
    AllyAttackDebuff += -15
}

function DomainOne() { //   Locks a move or smth
    VariableUpdater()
    EnemyOneAttackNumber +=1;
    EnemyOneAttackTarget = Math.floor(Math.random()* (5-1)+1) // Above 1 hits
    if (EnemyOneAttackTarget >= 1) {
        EnemyOneAttackTarget = Math.floor(Math.random()* (3-1)+1) // Chooses 1-2 to decide which player to target
        EnemyOneMoveLock = Math.floor(Math.random() * (4-1)+1) // Chooses 1-3 to decide what move to lock
    }

}

function ReduceOne() {
    VariableUpdater()
    EnemyOneAttackNumber +=1;
    EnemyOneAttackValue = Math.floor(Math.random() * (61-40) + 40)
    EnemyOneAttackTarget = Math.floor(Math.random()* (3-1)+1) // One, or two
    if (EnemyOneAttackTarget == 1) {
        EnemyOneAttackTarget = "AllyOne"}
        else {EnemyOneAttackTarget = "AllyTwo"}
}

function GlobOne() {
    VariableUpdater()
    EnemyOneAttackNumber +=1;
    EnemyOneDefense += 20
    EnemyTwoDefense += 20
}

function ReformOne() {
    VariableUpdater()
    EnemyOneAttackNumber += 1;
    EnemyOneHealValue = Math.floor(Math.random() * (40-30))
}

function RandomizeOne() {
    EnemyOneAttackNumber +=1;
    EnemyRandomizeSelection = Math.floor(Math.random() * (18-1) + 1)  // 1-17
    if (EnemyRandomizeSelection == 1) {
        DemonicStrikeOne()
    }
    if (EnemyRandomizeSelection == 2) {
        DamningOne()
    }
    if (EnemyRandomizeSelection == 3) {
        FireBlastOne()
    }
    if (EnemyRandomizeSelection == 4) {
        RamOne()
    }
    if (EnemyRandomizeSelection == 5) {
        OverdriveOne()
    }
    if (EnemyRandomizeSelection == 6) {
        PitStopOne()
    }
    if (EnemyRandomizeSelection == 7) {
        FoldOne()
    }
    if (EnemyRandomizeSelection == 8) {
        PeckOne()
    }
    if (EnemyRandomizeSelection == 9) {
        PaperAirplaneOne()
    }
    if (EnemyRandomizeSelection == 10) {
        VirusOne()
    }
    if (EnemyRandomizeSelection == 11) {
        ACGTOne()
    }
    if (EnemyRandomizeSelection == 12) {
        BindOne()
    }
    if (EnemyRandomizeSelection == 13) {
        GrabOne()
    }
    if (EnemyRandomizeSelection == 14) {
        DomainOne()
    }
    if (EnemyRandomizeSelection == 15) {
        ReduceOne()
    }
    if (EnemyRandomizeSelection == 16) {
        GlobOne()
    }
    if (EnemyRandomizeSelection == 17) {
        ReformOne()
    }

}

// ###################################### //
// ###################################### //
// ####### ENEMY TWO MOVE HANDLER ####### //
// ###################################### //
// ###################################### //


function EnemyTwoAttackSelector() { // I would like to mention that I think breaking up the move system into different code chunks (the attack area and the attack selector which will both be called later) is a sign I've progressed as a coder since I would've put it all in Two section earlier man
    if (EnemyTwo == "DevilCat") { // 10 points, biased toward demonic strike, simple system. 1-5 = demonic strike, 6-8 = damning, 9-10 = Fire Blast
            EnemyTwoAttackSelection = Math.floor(Math.random() * (11-1) + 1)
            if (EnemyTwoAttackSelection <= 5) {
                EnemyTwoAttack = "DemonicStrike"
                DemonicStrikeTwo()
            }
            if (EnemyTwoAttackSelection <= 8 && EnemyTwoAttackSelection >= 6) {
                EnemyTwoAttack = "Damning"
                DamningTwo()
            }
            if (EnemyTwoAttackSelection >= 9) {
                console.log("FirBlastSelected")
                EnemyTwoAttack = "FireBlast"
                FireBlastTwo()
                
            }
        }
    if (EnemyTwo == "Car") { // 10 points, if either enemy is below, biased to heal 1-5, otherwise is slightly biased to ram
            EnemyTwoAttackSelection = Math.floor(Math.random() * (11-1) + 1)
            if (EnemyOneHealth.value <= 50 || EnemyTwoHealth.value <= 50) { // HEAL BIASED FOR WHEN UNDER HALF (this would trigger when an enemy is dead? bad bad bad) Heal from death? Like fnaf world refreshed??
                
                if (EnemyTwoAttackSelection <= 5) {
                    EnemyTwoAttack = "PitStop"
                    PitStopTwo()
                }
                if (EnemyTwoAttackSelection <= 9 && EnemyTwoAttackSelection >= 6) {
                    EnemyTwoAttack = "Ram"
                    RamTwo()
                }
                if (EnemyTwoAttackSelection == 10) {
                    EnemyTwoAttack = "Overdrive"
                    OverdriveTwo()
                }
            }
            else { // BASICALLY EQUAL CHANCE FOR ALL, still biased to ram
                if (EnemyTwoAttackSelection <= 3) {
                    EnemyTwoAttack = "PitStop"
                    PitStopTwo()
                }
                if (EnemyTwoAttackSelection <= 8 && EnemyTwoAttackSelection >= 4) {
                    EnemyTwoAttack = "Ram"
                    RamTwo()
                }
                if (EnemyTwoAttackSelection >= 9) {
                    EnemyTwoAttack = "Overdrive"
                    OverdriveTwo()
                }
            }
        }
    if (EnemyTwo == "Origami") {
            EnemyTwoAttackSelection = Math.floor(Math.random() * (11-1) + 1)
            if (FoldCounter <= 5) { // 6/10 chance to do Paper Airplane, and increase fold by 2, 2/10 chance for fold, 1/10 chance for peck
                if (EnemyTwoAttackSelection <= 6) {
                    EnemyTwoAttack = "PaperAirplane"
                    PaperAirplaneTwo()
                }
                if (EnemyTwoAttackSelection <= 8 && EnemyTwoAttackSelection >= 7) {
                    EnemyTwoAttack = "Fold"
                    FoldTwo()
                }
                if (EnemyTwoAttackSelection >= 9) {
                    EnemyTwoAttack = "Peck"
                    PeckTwo() // Sounds kinda like penguin
                }
            }
            if (FoldCounter >= 6) { // 2/10 chance to do Paper Airplane, and increase fold by 2, 6/10 chance for fold, 2/10 chance for peck
                if (EnemyTwoAttackSelection <= 2) {
                    EnemyTwoAttack = "PaperAirplane"
                    PaperAirplaneTwo()
                }
                if (EnemyTwoAttackSelection <= 8 && EnemyTwoAttackSelection >= 3) {
                    EnemyTwoAttack = "Fold"
                    FoldTwo()
                }
                if (EnemyTwoAttackSelection >= 9) {
                    EnemyTwoAttack = "Peck"
                    PeckTwo()
                }
            }
        }
    if (EnemyTwo == "DNA") { // PLACEHOLDER BECAUSE ACGT IS STILL UNDTwo
        EnemyTwoAttackSelection = Math.floor(Math.random() * (11-1) + 1)
        if (EnemyTwoAttackNumber <= 3) { // under 3 turns, 2/10 for virus, 7/10 for ACGT, 1/10 for bind
            console.log(EnemyTwoAttackNumber)
            if (EnemyTwoAttackSelection <= 2) {
                EnemyTwoAttack = "Virus"
                VirusTwo()
                EnemyTwoVirusDamageSlotOne()
            }
            if (EnemyTwoAttackSelection >= 3 && EnemyTwoAttackSelection <= 9) {
                EnemyTwoAttack = "ACGT"
                ACGTTwo()
            }
            if (EnemyTwoAttackSelection == 10) {
                EnemyTwoAttack = "Bind"
                BindTwo()
            }
        }
        if (EnemyTwoAttackNumber >= 4 && EnemyTwoAttackNumber <= 6) { // 4-6 turns, 2/10 for virus, 5/10 for ACGT, 3/10 for bind
            if (EnemyTwoAttackSelection <= 2) {
                EnemyTwoAttack = "Virus"
                VirusTwo()
                EnemyTwoVirusDamageSlotOne()
            }
            if (EnemyTwoAttackSelection >= 3 && EnemyTwoAttackSelection <= 7) {
                EnemyTwoAttack = "ACGT"
                ACGTTwo()
            }
            if (EnemyTwoAttackSelection >= 8) {
                EnemyTwoAttack = "Bind"
                BindTwo()
            }
        } 
        if (EnemyTwoAttackNumber >= 7) { // above 7 turns, 1/10 for virus, 3/10 for ACGT, 6/10 for bind
            if (EnemyTwoAttackSelection == 1) {
                EnemyTwoAttack = "Virus"
                VirusTwo()
                EnemyTwoVirusDamageSlotOne()
            }
            if (EnemyTwoAttackSelection >= 2 && EnemyTwoAttackSelection <= 4) {
                EnemyTwoAttack = "ACGT"
                ACGTTwo()
            }
            if (EnemyTwoAttackSelection >= 4) {
                EnemyTwoAttack = "Bind"
                BindTwo()
            }
        }
    }
    if (EnemyTwo == "HandMan") {
        EnemyTwoAttackSelection = Math.floor(Math.random() * (11-1) + 1) // 2/10 chance for  Grab, 2/10 for domain, 6/10 for reduce
        if (EnemyTwoAttackSelection <= 2) {
            EnemyTwoAttack = "Grab"
            GrabTwo()
        }
        if (EnemyTwoAttackSelection >= 3 && EnemyTwoAttackSelection <= 5) {
            EnemyTwoAttack = "Domain"
            DomainTwo()
        }
        if (EnemyTwoAttackSelection >= 6) {
            EnemyTwoAttack = "Reduce"
            ReduceTwo()
        }
    }

    if (EnemyTwo == "Blob") {
        EnemyTwoAttackSelection = Math.floor(Math.random() * (11-1) + 1)
            if (EnemyOneHealth.value <= 50 || EnemyTwoHealth.value <= 50) { // Under half, 40% chance for reform, 40% chance for glob, 20% chance for randomize
                if (EnemyTwoAttackSelection <= 4) {
                    EnemyTwoAttack = "Glob"
                    PitStopTwo()
                }
                if (EnemyTwoAttackSelection <= 8 && EnemyTwoAttackSelection >= 4) {
                    EnemyTwoAttack = "Ram"
                    RamTwo()
                }
                if (EnemyTwoAttackSelection >= 9) {
                    EnemyTwoAttack = "Randomize"
                    OverdriveTwo()
                }
            }
            else { // Above Half , 2/10 reform, 2/10 glob, 6/10 randomize
                if (EnemyTwoAttackSelection <= 2) {
                    EnemyTwoAttack = "PitStop"
                    PitStopTwo()
                }
                if (EnemyTwoAttackSelection <= 4 && EnemyTwoAttackSelection >= 3) {
                    EnemyTwoAttack = "Ram"
                    RamTwo()
                }
                if (EnemyTwoAttackSelection >= 5) {
                    EnemyTwoAttack = "Overdrive"
                    OverdriveTwo()
                }
            }
    }
    }


// ################################# //
// ################################# //
// ####### ENEMY TWO ATTACKS ####### //
// ################################# //
// ################################# //


function DemonicStrikeTwo() {
    VariableUpdater()
    if (EnemyTwoHealth.value <= 0 || AllyTwoHealth.value <= 0) {

    } else {
        EnemyTwoAttackNumber += 1;
        EnemyTwoAttackValue = Math.floor(Math.random() * (76 - 50) + 50);
        EnemyTwoAttackTarget = Math.floor(Math.random() * (7-1)+1) // Generates a random number 1-6
        if (AllyOneHealth.value > AllyTwoHealth.value) { // If ally One has more health than ally two, 2/3rds chance to attack ally One
            if (EnemyTwoAttackTarget  <= 4) { 
                EnemyTwoAttackTarget = "AllyOne"
            } else {
                EnemyTwoAttackTarget = "AllyTwo"
            }
        }
        if (AllyOneHealth.value < AllyTwoHealth.value) { // If ally two has more health than ally One, 2/3rds chance to attack ally two
            if (EnemyTwoAttackTarget  <= 4) { 
                EnemyTwoAttackTarget = "AllyOne"
            } else {
                EnemyTwoAttackTarget = "AllyTwo"
            }
        } 
        else {
            if (EnemyTwoAttackTarget  <= 3) { // neutral
                EnemyTwoAttackTarget = "AllyOne"
            } else {
                EnemyTwoAttackTarget = "AllyTwo"
            }
        }
    }
}

function DamningTwo() {
    EnemyTwoAttackNumber += 1;
    EnemyTwoAttackValue = Math.floor(Math.random() * (51 - 25) + 25);
    EnemyTwoAttackTarget = "Both"
}

function FireBlastTwo() {
    VariableUpdater()
    EnemyTwoAttackNumber += 1;
    EnemyTwoAttackValue = Math.floor(Math.random() * (31 - 25) + 25);
    EnemyTwoFireAttackValue = Math.floor(Math.random() * (20-10) + 10);
    EnemyTwoAttackTarget = "Both"
    setTimeout(EnemyOneFireDamager, 1000)
    setTimeout(EnemyOneFireDamager, 2000)
    setTimeout(EnemyOneFireDamager, 3000)
    setTimeout(EnemyOneFireDamager, 3700)
}

function RamTwo() {
    VariableUpdater()
    EnemyTwoAttackNumber += 1;
    EnemyTwoAttackValue = Math.floor(Math.random() * (101 - 65) + 65);
    EnemyTwoAttackTarget = Math.floor(Math.random()* (3-1)+1); // determine if attack hits, 1 = no, 2 = yes
    if (EnemyTwoAttackTarget == 1) {
        EnemyTwoAttackTarget = "Missed"
    }
    if (EnemyTwoAttackTarget == 2) {
        EnemyTwoAttackTarget = Math.floor(Math.random()* (3-1)+1) // he cares not for attacking the enemy with the lowest health, he just attacks Two
        if (EnemyTwoAttackTarget == 1) {
            EnemyTwoAttackTarget = "AllyOne"
        } else {EnemyTwoAttackTarget = "AllyTwo"}
    }
}

function OverdriveTwo() {
    VariableUpdater()
    EnemyTwoAttackNumber += 1;
    EnemyTwoAttackValue = Math.floor(Math.random() * (76 - 50) + 50);
    EnemyTwoSelfDamage = Math.floor(Math.random() * (51-1) + 1);
}

function PitStopTwo() {
    VariableUpdater()
    EnemyTwoAttackNumber += 1;
    EnemyTwoHealValue = Math.floor(Math.random() * (40-30))
}

function FoldTwo() {
    VariableUpdater()
    EnemyTwoAttackNumber +=1;
    if (EnemyOneHealth.value <= 0 || AllyOneHealth.value <= 0) {

    } else {
        EnemyTwoAttackNumber += 1;
        FoldCounter += 1;
        EnemyTwoAttackValue = FoldCounter*10
        EnemyTwoAttackTarget = Math.floor(Math.random() * (7-1)+1) // Generates a random number 1-6
        if (AllyTwoHealth > AllyTwoHealth) { // If ally Two has more health than ally two, 2/3rds chance to attack ally Two
            if (EnemyTwoAttackTarget  <= 4) { 
                EnemyTwoAttackTarget = "AllyOne"
            } else {
                EnemyTwoAttackTarget = "AllyTwo"
            }
        }
        if (AllyTwoHealth < AllyTwoHealth) { // If ally two has more health than ally TwoG, 2/3rds chance to attack ally two
            if (EnemyTwoAttackTarget  <= 4) { 
                EnemyTwoAttackTarget = "AllyOne"
            } else {
                EnemyTwoAttackTarget = "AllyTwo"
            }
        } 
        else {
            if (EnemyTwoAttackTarget  <= 3) { // neutral
                EnemyTwoAttackTarget = "AllyOne"
            } else {
                EnemyTwoAttackTarget = "AllyTwo"
            }
        }
    }
}

function PeckTwo() {
    VariableUpdater()
    EnemyTwoAttackNumber +=1;
    EnemyTwoAttackValue = Math.floor(Math.random() * (60-40)+40)
    EnemyTwoAttackTarget = Math.floor(Math.random()* (3-1)+1)
        if (EnemyTwoAttackTarget == 1) {
            EnemyTwoAttackTarget = "AllyOne"
        } else {EnemyTwoAttackTarget = "AllyTwo"}
}

function PaperAirplaneTwo() {
    VariableUpdater()
    EnemyTwoAttackNumber += 1;
    FoldCounter += 2;
}
function VirusTwo() { // this could have issues if it stacks? Just make it not stack lmao
    VariableUpdater()
    EnemyTwoAttackNumber +=1;
    EnemyTwoVirusValue = Math.floor(Math.random() * (20-10)+10) //  multiple times
    EnemyTwoAttackTarget = Math.floor(Math.random()* (3-1)+1) // he cares not for attacking the enemy with the lowest health, he just attacks Two
    if (EnemyTwoAttackTarget == 1) {
        EnemyTwoVirusTarget = "AllyOne"
    } else {EnemyTwoVirusTarget = "AllyTwo"}
}

function ACGTTwo() { // PLACEHOLDER
    VariableUpdater()
    EnemyTwoAttackNumber +=1;
    EnemyTwoAttackValue = Math.floor(Math.random() * (100-1) + 1)
    EnemyTwoAttackTarget = Math.floor(Math.random()* (3-1)+1) // Two, or two
    if (EnemyTwoAttackTarget == 1) {
        EnemyTwoAttackTarget = "AllyOne"}
        else {EnemyTwoAttackTarget = "AllyTwo"}
}

function BindTwo() {
    VariableUpdater()
    EnemyTwoAttackNumber +=1;
    EnemyTwoAttackTarget = Math.floor(Math.random()* (3-1)+1) // Two, or two
    if (EnemyTwoAttackTarget == 1) {
        EnemyTwoAttackTarget = "AllyTwo"
    } else {EnemyTwoSelfDamage = 9999999999}
}

function GrabTwo() {
    VariableUpdater()
    EnemyTwoAttackNumber +=1;
    AllySpeed = "Reduced"
    AllyAttackDebuff += -15
}

function DomainTwo() { //   Locks a move or smth
    VariableUpdater()
    EnemyTwoAttackNumber +=1;
    EnemyTwoAttackTarget = Math.floor(Math.random()* (5-1)+1) // Above 1 hits
    if (EnemyTwoAttackTarget >= 1) {
        EnemyTwoAttackTarget = Math.floor(Math.random()* (3-1)+1) // Chooses 1-2 to decide which player to target
        EnemyTwoMoveLock = Math.floor(Math.random() * (4-1)+1) // Chooses 1-3 to decide what move to lock
    }

}

function ReduceTwo() {
    VariableUpdater()
    EnemyTwoAttackNumber +=1;
    EnemyTwoAttackValue = Math.floor(Math.random() * (61-40) + 40)
    EnemyTwoAttackTarget = Math.floor(Math.random()* (3-1)+1) // Two, or two
    if (EnemyTwoAttackTarget == 1) {
        EnemyTwoAttackTarget = "AllyTwo"}
        else {EnemyTwoAttackTarget = "AllyTwo"}
}

function GlobTwo() {
    VariableUpdater()
    EnemyTwoAttackNumber +=1;
    EnemyTwoDefense += 20
    EnemyTwoDefense += 20
}

function ReformTwo() {
    VariableUpdater()
    EnemyTwoAttackNumber += 1;
    EnemyTwoHealValue = Math.floor(Math.random() * (40-30))
}

function RandomizeTwo() {
    EnemyTwoAttackNumber +=1;
    EnemyRandomizeSelection = Math.floor(Math.random() * (18-1) + 1)  // 1-17
    if (EnemyRandomizeSelection == 1) {
        DemonicStrikeTwo()
    }
    if (EnemyRandomizeSelection == 2) {
        DamningTwo()
    }
    if (EnemyRandomizeSelection == 3) {
        FireBlastTwo()
    }
    if (EnemyRandomizeSelection == 4) {
        RamTwo()
    }
    if (EnemyRandomizeSelection == 5) {
        OverdriveTwo()
    }
    if (EnemyRandomizeSelection == 6) {
        PitStopTwo()
    }
    if (EnemyRandomizeSelection == 7) {
        FoldTwo()
    }
    if (EnemyRandomizeSelection == 8) {
        PeckTwo()
    }
    if (EnemyRandomizeSelection == 9) {
        PaperAirplaneTwo()
    }
    if (EnemyRandomizeSelection == 10) {
        VirusTwo()
    }
    if (EnemyRandomizeSelection == 11) {
        ACGTTwo()
    }
    if (EnemyRandomizeSelection == 12) {
        BindTwo()
    }
    if (EnemyRandomizeSelection == 13) {
        GrabTwo()
    }
    if (EnemyRandomizeSelection == 14) {
        DomainTwo()
    }
    if (EnemyRandomizeSelection == 15) {
        ReduceTwo()
    }
    if (EnemyRandomizeSelection == 16) {
        GlobTwo()
    }
    if (EnemyRandomizeSelection == 17) {
        ReformTwo()
    }

}


// ########################### //
// ########################### //
// ####### AllyAttacks ####### //
// ########################### //
// ########################### //


function HeavenlyStrike() {
    VariableUpdater()
        EnemyOneAttackNumber += 1;
        EnemyOneAttackValue = Math.random() * (76 - 50) + 50;
        EnemyOneAttackTarget = Math.random() * (7-1)+1 // Generates a random number 1-6
        if (AllyOneHealth > AllyTwoHealth) { // If ally one has more health than ally two, 2/3rds chance to attack ally one
            if (EnemyOneAttackTarget  <= 4) { 
                EnemyOneAttackTarget = "AllyOne"
            } else {
                EnemyOneAttackTarget = "AllyTwo"
            }
        }
        if (AllyOneHealth < AllyTwoHealth) { // If ally two has more health than ally oneG, 2/3rds chance to attack ally two
            if (EnemyOneAttackTarget  <= 4) { 
                EnemyOneAttackTarget = "AllyTwo"
            } else {
                EnemyOneAttackTarget = "AllyOne"
            }
        } 
        else {
            if (EnemyOneAttackTarget  <= 3) { // neutral
                EnemyOneAttackTarget = "AllyTwo"
            } else {
                EnemyOneAttackTarget = "AllyOne"
            }
        }
}

// ############################# //
// ############################# //
// ####### SelectionMenu ####### // I do not love this system but I do not know the alternative
// ############################# //
// ############################# //




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
    document.getElementById("AttackOne").innerText = "Heavenly Strike"
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
    document.getElementById("AttackOneText").innerText = "Damage that increases\n based on the length of fight"
    document.getElementById("AttackTwo").innerText = "Hour"
    document.getElementById("AttackTwoText").innerText="Low-high damage, with better \nodds based on time in fight"
    document.getElementById("AttackThree").innerText="Rewind"
    document.getElementById("AttackThreeText").innerText="Low healing and Low damage\n if Tover is under 50% health,\n medium healing!"
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
    document.getElementById("AttackTwoText").innerText="Increased attack for 20 \nseconds"
    document.getElementById("AttackThree").innerText="The rot"
    document.getElementById("AttackThreeText").innerText="Inflict poison on self in \n return for high damage"
}    

function SquareHeadshot() {
    UnselectAll()
    CharacterSelected = "Square";
    FactionSelected = "Ally";
    document.getElementById("SquareHeadshotImage").src = "SquareHeadshotSelected.png";
    document.getElementById("CharacterName").innerText = "Square"
    document.getElementById("Tagline").innerText = "They said be there or be square, \nhe wasn't there"
    document.getElementById("Tagline").style.fontSize = "medium"
    document.getElementById("AttackOne").innerText = "Square"
    document.getElementById("AttackOneText").innerText = "Pulls from a random list of \nmoves, with exclusive moves"
    document.getElementById("AttackTwo").innerText = "Square"
    document.getElementById("AttackTwoText").innerText="Pulls from a random list of \nmoves, with exclusive moves"
    document.getElementById("AttackThree").innerText="Square"
    document.getElementById("AttackThreeText").innerText="Pulls from a random list of \nmoves, with exclusive moves"
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
    document.getElementById("AttackTwoText").innerText="Chance to deal extreme damage, \n or heal the enemy"
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
    document.getElementById("AttackOne").innerText = "Clamp"
    document.getElementById("AttackOneText").innerText = "Deal 15% of an enemies \n remaining health"
    document.getElementById("AttackTwo").innerText = "Chomp"
    document.getElementById("AttackTwoText").innerText="Deal 10% of an enemies \n max health"
    document.getElementById("AttackThree").innerText="Chew"
    document.getElementById("AttackThreeText").innerText="Deal 20% of Flibbit's \n remaining health to an enemy"
}    

function DevilCatHeadshot() {
    UnselectAll()
    CharacterSelected = "DevilCat";
    FactionSelected = "Enemy";
    document.getElementById("DevilCatHeadshotImage").src = "DevilCatHeadshotSelected.png";
    document.getElementById("CharacterName").innerText = "DevilCat"
    document.getElementById("Tagline").innerText = "The devil to your angle (180 degrees)"
    document.getElementById("Tagline").style.fontSize = "medium"
    document.getElementById("AttackOne").innerText = "Demonic Strike"
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
    document.getElementById("AttackOne").innerText = "Ram"
    document.getElementById("AttackOneText").innerText = "Deal potentially very high \n damage, but you might miss!"
    document.getElementById("AttackTwo").innerText = "Overdrive"
    document.getElementById("AttackTwoText").innerText="Deal damage to self and \n allies"
    document.getElementById("AttackThree").innerText="Pit stop"
    document.getElementById("AttackThreeText").innerText="Heals both enemies"
}    

function OrigamiHeadshot() {
    UnselectAll()
    CharacterSelected = "Origami";
    FactionSelected = "Enemy";
    document.getElementById("OrigamiHeadshotImage").src = "OrigamiHeadshotSelected.png";
    document.getElementById("CharacterName").innerText = "Crane"
    document.getElementById("Tagline").innerText = "Still can't fold one IRL"
    document.getElementById("AttackOne").innerText = "Fold"
    document.getElementById("AttackOneText").innerText = "Does 10 damage,\n increases each use"
    document.getElementById("AttackTwo").innerText = "Peck"
    document.getElementById("AttackTwoText").innerText="Does medium damage to a \nrandom Ally"
    document.getElementById("AttackThree").innerText="Paper Airplane"
    document.getElementById("AttackThreeText").innerText="Adds 20 damage to Fold"
}    

function DNAHeadshot() {
    UnselectAll()
    CharacterSelected = "DNA";
    FactionSelected = "Enemy";
    document.getElementById("DNAHeadshotImage").src = "DNAHeadshotSelected.png";
    document.getElementById("CharacterName").innerText = "Helix" 
    document.getElementById("Tagline").innerText = "Hopefully prion free"
    document.getElementById("AttackOne").innerText = "Virus"
    document.getElementById("AttackOneText").innerText = "Sustained low damage to one \nAlly."
    document.getElementById("AttackTwo").innerText = "A-C-G-T"
    document.getElementById("AttackTwoText").innerText="Incredibly high or low damage \n to one ally."
    document.getElementById("AttackThree").innerText="Bind"
    document.getElementById("AttackThreeText").innerText="Coin flip, 50% chance to kill \n self, 50% chance to kill Ally"
}    

function HandManHeadshot() {
    UnselectAll()
    CharacterSelected = "HandMan";
    FactionSelected = "Enemy";
    document.getElementById("HandManHeadshotImage").src = "HandManHeadshotSelected.png";
    document.getElementById("CharacterName").innerText = "Evil"
    document.getElementById("Tagline").innerText = "I don't even know man"
    document.getElementById("AttackOne").innerText = "Grab"
    document.getElementById("AttackOneText").innerText = "Reduces Ally speed and \n attack for 20 seconds"
    document.getElementById("AttackTwo").innerText = "Domain"
    document.getElementById("AttackTwoText").innerText="Locks a random move for \na random ally"
    document.getElementById("AttackThree").innerText="Reduce"
    document.getElementById("AttackThreeText").innerText="Medium damage that bypasses \ndefense"
}    