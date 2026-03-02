// ####### Ally ATTACKS ####### // 

function HeavenlyStrikeTwo() {
    console.log("HeavenlyUsed")
    AllyAttackNumber += 1;
    AllyTwoAttackValue = Math.floor(Math.random() * (81-40)+1) // Slightly higher max than demonic strike w/ a larger range?
    if (AllyTwoAttackTarget == "EnemyOne") {
        AllyTwoAttackType = "AttackEnemyOne"
        EnemyOneHealth.value -= (AllyOneAttackValue * AllyOneAttackMultiplier)
    }
    if (AllyTwoAttackTarget == "EnemyTwo") {
        AllyTwoAttackType = "AttackEnemyTwo"
        EnemyTwoHealth.value -= (AllyOneAttackValue * AllyOneAttackMultiplier)
    }
}

function JudgementTwo() {
    AllyTwoAttackType = "AttackBoth"
    AllyAttackNumber += 1;
    AllyTwoAttackValue = Math.floor(Math.random() * (51-25)+1)
    EnemyOneHealth.value -= (AllyOneAttackValue * AllyOneAttackMultiplier)
    EnemyTwoHealth.value -= (AllyOneAttackValue * AllyOneAttackMultiplier)
}

function HealingPrayerTwo() {
    AllyTwoAttackType = "HealAllies"
    console.log("HealUsed")
    AllyAttackNumber += 1;
    AllyTwoAttackValue = Math.floor(Math.random() * (51-25)+1)
    AllyOneHealth.value += AllyTwoAttackValue
    AllyTwoHealth.value += AllyTwoAttackValue
}

function BadTimeTwo() {
    AllyAttackNumber += 1;
    AllyTwoAttackValue = (Math.floor(Math.random()*(21-15)+15)) + (AllyAttackNumber*10)
    if (AllyTwoAttackTarget == "EnemyOne") {
        AllyTwoAttackType = "AttackEnemyOne"
        EnemyOneHealth.value -= (AllyTwoAttackValue * AllyTwoAttackMultiplier)
    }
    if (AllyTwoAttackTarget == "EnemyTwo") {
        AllyTwoAttackType = "AttackEnemyTwo"
        EnemyTwoHealth.value -= (AllyTwoAttackValue * AllyTwoAttackMultiplier)
    }
}

function HourTwo() {
    AllyAttackNumber += 1;
    if(AllyAttackNumber <= 6) { // 3 turns
        AllyTwoAttackValue = (Math.floor(Math.random()*(101-15)+15)) // expected value of like 60 or smth
    }
    if(AllyAttackNumber >= 7 && AllyAttackNumber <= 12) { // 4-6 turns
        AllyTwoAttackValue = (Math.floor(Math.random()*(151-30)+30))
    }
    if(AllyAttackNumber >= 13 && AllyAttackNumber <= 20) { // 7-10 turns
        AllyTwoAttackValue = (Math.floor(Math.random()*(250-150)+150))
    }
    if(AllyAttackNumber >= 21) {
        AllyTwoAttackValue = (Math.floor(Math.random()*(350-250)+250))
    }
    if (AllyTwoAttackTarget == "EnemyOne") {
        AllyTwoAttackType = "AttackEnemyOne"
        EnemyOneHealth.value -= (AllyTwoAttackValue * AllyTwoAttackMultiplier)
    }
    if (AllyTwoAttackTarget == "EnemyTwo") {
        AllyTwoAttackType = "AttackEnemyTwo"
        EnemyTwoHealth.value -= (AllyTwoAttackValue * AllyTwoAttackMultiplier)
    }
}

function RewindTwo() {
    AllyAttackNumber +=1;
    if (AllyTwoHealth.value <= 250) {
        AllyTwoAttackType = "AttackBothHealSelf"
        AllyTwoHealValue = Math.floor(Math.random() * (101-65)+65)
        AllyTwoAttackValue = (Math.floor(Math.random() * (51-25)+25)) * AllyTwoAttackMultiplier 
        AllyTwoHealth += AllyTwoHealValue
        EnemyOneHealth -= AllyTwoAttackValue
        EnemyTwoHealth -= AllyTwoAttackValue
    }
    if (AllyTwoHealth.value >> 250) {
        AllyTwoAttackType = "AttackBothHealSelf"
        AllyTwoHealValue = Math.floor(Math.random() * (51-10)+10)
        AllyTwoAttackValue = (Math.floor(Math.random() * (51-25)+25)) * AllyTwoAttackMultiplier 
        AllyTwoHealth += AllyTwoHealValue
        EnemyOneHealth -= AllyTwoAttackValue
        EnemyTwoHealth -= AllyTwoAttackValue
    }
}

function SpearTwo() {
    AllyAttackNumber += 1
    AllyTwoAttackValue = (Math.floor(Math.random()*(5-1)+1))* AllyTwoAttackMultiplier
    if (AllyTwoAttackValue == 4) {
        if (AllyTwoAttackTarget == "EnemyOne") {
            AllyTwoAttackType = "AttackEnemyOne"
            EnemyOneHealth.value -= 999999
        }
        if (AllyTwoAttackTarget == "EnemyTwo") {
            AllyTwoAttackType = "AttackEnemyTwo"
            EnemyTwoHealth.value -= 999999
        }
    }
    else {
        AllyTwoAttackValue = 0
    }
}

function TheMarkTwo() {
    AllyTwoAttackType = "SelfAttackBoost"
    AllyAttackNumber +=1
    AllyTwoAttackMultiplier = 1.5
    if(MarkAlreadyActive == false) {
    TheMarkInterval = setInterval(TheMarkTwoCounter, 1000)
    MarkAlreadyActive = true
    }
    if(MarkAlreadyActive == true) {
        TheMarkCounterVariable = 20 // should it reset, or add?
    }
}
function TheMarkTwoCounter() {
    TheMarkCounterVariable -= 1
    TheMarkTwoCancel()
}
function TheMarkTwoCancel() {
    if (TheMarkCounterVariable == 0) {
        clearInterval(TheMarkInterval)
        TheMarkCounterVariable = 20
        MarkAlreadyActive = false
        AllyTwoAttackMultiplier = 1
    }
}

function TheRotTwo() {
    AllyAttackNumber +=1
    AllyTwoAttackValue = (Math.floor(Math.random() * (126-90)+90))*AllyTwoAttackMultiplier
    if (AllyTwoAttackTarget == "EnemyOne") {
        AllyTwoAttackType = "AttackEnemyOneRot"
        EnemyOneHealth.value -= 350
    }
    if (AllyTwoAttackTarget == "EnemyTwo") {
        AllyTwoAttackType = "AttackEnemyTwoRot"
        EnemyTwoHealth.value -= 350
    }
    if(RotAlreadyActive == false) {
    TheRotInterval = setInterval(TheRotTwoCounter, 1000)
    RotAlreadyActive = true
    }
    if(RotAlreadyActive == true) {
        TheRotCounterVariable += 5
    }
}

function TheRotTwoCounter() {
    TheRotCounterVariable -= 1
    AllyTwoHealth.value -= 50
    TheRotTwoCancel()
}

function TheRotTwoCancel() {
    if (TheRotCounterVariable == 0) {
        clearInterval(TheRotInterval)
        TheRotCounterVariable = 10
        RotAlreadyActive = false
    }
}

function BoatAttackTwo() {
    AllyAttackNumber += 1
    AllyTwoAttackValue = (Math.floor(Math.random() * (111-50)+50)) * AllyTwoAttackMultiplier
    if (AllyTwoAttackTarget == "EnemyOne") {
        AllyTwoAttackType = "AttackEnemyOne"
        EnemyOneHealth.value -= AllyOneAttackValue
        }
    if (AllyTwoAttackTarget == "EnemyTwo") {
        AllyTwoAttackType = "AttackEnemyTwo"
        EnemyTwoHealth.value -= AllyOneAttackValue
    }
}

function FishTwo() { // theres probably a smarter way to write this with like variables and crap and multiplication
    AllyAttackNumber += 1
    AllyTwoAttackValue = (Math.floor(Math.random() * (11-1)+1)) // decides what subsection of random to put it in
    if (AllyTwoAttackValue == 1) { // Highest one, 500-300 damage
        FishStatus = "Attack"
        AllyOneAttackValue = (Math.floor(Math.random() * (501-300)+300)) * AllyTwoAttackMultiplier
    }
    else if (AllyTwoAttackValue == 2) { //2nd best, 400-250 damage
        FishStatus = "Attack"
        AllyTwoAttackValue = (Math.floor(Math.random() * (401-250)+250)) * AllyTwoAttackMultiplier
    }
    else if (AllyTwoAttackValue == 3) { // 350-200 damage
        FishStatus = "Attack"
        AllyTwoAttackValue = (Math.floor(Math.random() * (351-200)+200)) * AllyTwoAttackMultiplier
    }
    else if (AllyTwoAttackValue == 4) { // 250-100 damage
        FishStatus = "Attack"
        AllyTwoAttackValue = (Math.floor(Math.random() * (251-100)+100)) * AllyTwoAttackMultiplier
    }
    else if (AllyTwoAttackValue == 5) { // 150-1 damage
        FishStatus = "Attack"
        AllyTwoAttackValue = (Math.floor(Math.random() * (151-1)+1)) * AllyTwoAttackMultiplier
    }
    else if (AllyTwoAttackValue == 6) { // 50-1 damage
        FishStatus = "Attack"
        AllyTwoAttackValue = (Math.floor(Math.random() * (51-1)+1)) * AllyTwoAttackMultiplier
    }
    else if (AllyTwoAttackValue == 7) { // 1 damage
        FishStatus = "Attack"
        AllyTwoAttackValue = 1 * AllyTwoAttackMultiplier
    }
    else if (AllyTwoAttackValue == 8) { // 10-50 healing
        FishStatus = "Heal"
        AllyTwoAttackValue = (Math.floor(Math.random() * (51-10)+10)) * AllyTwoAttackMultiplier // attack multiplier applies lmao
    }
    else if (AllyTwoAttackValue == 9) { // 50-200 healing
        FishStatus = "Heal"
        AllyTwoAttackValue = (Math.floor(Math.random() * (201-50)+50)) * AllyTwoAttackMultiplier
    }
    else if (AllyTwoAttackValue == 10) { // 300-500 healing
        FishStatus = "Heal"
        AllyTwoAttackValue = (Math.floor(Math.random() * (501-300)+300)) * AllyTwoAttackMultiplier
    };
    
    if(FishStatus == "Attack") {
        if(AllyTwoAttackTarget == "EnemyOne") {
            AllyTwoAttackType = "AttackEnemyOne"
            EnemyOneHealth.value -= AllyTwoAttackValue
        }
        if(AllyTwoAttackTarget == "EnemyTwo") {
            AllyTwoAttackType = "AttackEnemyTwo"
            EnemyTwoHealth.value -= AllyTwoAttackValue
        }
    }
    if(FishStatus == "Heal") {
        if(AllyTwoAttackTarget == "EnemyOne") {
            AllyTwoAttackType = "HealEnemyOne"
            EnemyOneHealth.value += AllyTwoAttackValue
        }
        if(AllyTwoAttackTarget == "EnemyTwo") {
            AllyTwoAttackType = "HealEnemyTwo"
            EnemyTwoHealth.value += AllyTwoAttackValue
        }
    }
}

function HookTwo() {
    AllyAttackNumber += 1
    AllyTwoAttackValue = Math.floor(Math.random() * (3-2)+2)
    if (AllyTwoAttackValue == 1) {
        AllyTwoAttackValue = Math.floor(Math.random() * (100-50)+50) * AllyTwoAttackMultiplier
        if(AllyTwoAttackTarget == "EnemyOne") {
            AllyTwoAttackType = "AttackEnemyOne"
            EnemyOneHealth.value -= AllyTwoAttackValue
        }
        if(AllyTwoAttackTarget == "EnemyTwo") {
            AllyTwoAttackType = "AttackEnemyTwo"
            EnemyTwoHealth.value -= AllyTwoAttackValue
        }
    }
    else if (AllyTwoAttackValue == 2) {
        AllyTwoAttackValue = Math.floor(Math.random() * (100-50)+50) * AllyTwoAttackMultiplier
        if(AllyTwoAttackTarget == "EnemyOne") {
            AllyTwoAttackType = "AttackEnemyOneSlow"
            EnemyOneHealth.value -= AllyTwoAttackValue
        }
        if(AllyTwoAttackTarget == "EnemyTwo") {
            AllyTwoAttackType = "AttackEnemyTwoSlow"
            EnemyTwoHealth.value -= AllyTwoAttackValue
        }
        console.log("Hook = " + HookAlreadyActive)
        if(HookAlreadyActive == false) {
            HookInterval = setInterval(HookTwoCounter, 1000)
            HookAlreadyActive = true
            EnemyOneAttackMeterHTML.max = 175
            EnemyTwoAttackMeterHTML.max = 175
            HookInterval
        }
        if(HookAlreadyActive == true) {
            HookCounterVariable += 5
        }
    }
}
function HookTwoCounter() {
    HookCounterVariable -= 1
    HookTwoCancel()
    console.log(HookCounterVariable)
}
function HookTwoCancel() {
    if (HookCounterVariable == 0) {
        console.log("HOOK END")
        clearInterval(HookInterval)
        HookCounterVariable = 15
        EnemyOneAttackMeter.max = 100
        EnemyTwoAttackMeter.max = 100
        HookAlreadyActive = false
    }
}
// RESUME HERE RESUME HERE RESUME HERE RESUME HERE RESUME HERE RESUME HERE RESUME HERE RESUME HERE RESUME HERE RESUME HERE RESUME HERE RESUME HERE RESUME HERE RESUME HERE
function ClampOne() {
    AllyAttackNumber += 1
    if (AllyOneAttackTarget == "EnemyOne") {
        AllyOneAttackType = "AttackEnemyOne"
        AllyOneAttackValue =  Math.floor((EnemyOneHealth.value / 5)) // 20%, not 15.
        EnemyOneHealth.value -= AllyOneAttackValue
    }
    if (AllyOneAttackTarget == "EnemyTwo") {
        AllyOneAttackType = "AttackEnemyTwo"
        AllyOneAttackValue =  Math.floor((EnemyTwoHealth.value / 5))
        EnemyTwoHealth.value -= AllyOneAttackValue
    }
}

function ChompOne() {
    AllyAttackNumber += 1
    if (AllyOneAttackTarget == "EnemyOne") {
        AllyOneAttackType = "AttackEnemyOne"
        AllyOneAttackValue =  Math.floor((EnemyOneHealth.max / 10))
        EnemyOneHealth.value -= AllyOneAttackValue
    }
    if (AllyOneAttackTarget == "EnemyTwo") {
        AllyOneAttackType = "AttackEnemyTwo"
        AllyOneAttackValue = Math.floor((EnemyTwoHealth.value / 10))
        EnemyTwoHealth.value -= AllyOneAttackValue
    }
}


function ChewOne() {
    AllyAttackNumber += 1
    if (AllyOneAttackTarget == "EnemyOne") {
        AllyOneAttackType = "AttackEnemyOne"
        AllyOneAttackValue =  Math.floor((AllyOneHealth.value / 5))
        EnemyOneHealth.value -= AllyOneAttackValue
    }
    if (AllyOneAttackTarget == "EnemyTwo") {
        AllyOneAttackType = "AttackEnemyTwo"
        AllyOneAttackValue =  Math.floor((AllyOneHealth.value / 5))
        EnemyTwoHealth.value -= AllyOneAttackValue
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
        AllyOneAttackType = "AttackBoth" 
        AllyOneAttackValue = 10
        EnemyOneHealth.value -= AllyOneAttackValue
        EnemyTwoAttack.value -= AllyOneAttackValue
    }
    else if (AllyOneAttackValue == 14) { // 
        AllyOneAttackType = "AttackBoth"
        AllyOneAttackValue = 100
        EnemyOneHealth.value -= AllyOneAttackValue
        EnemyTwoAttack.value -= AllyOneAttackValue
    }
    else if (AllyOneAttackValue == 15) { //  SNOWGRAVE BABYYY
        AllyOneAttackValue = 99999999999999
        if(AllyOneAttackTarget == "EnemyOne") {
            AllyOneAttackType = "AttackEnemyOne"
            EnemyOneHealth -= AllyOneAttackValue
            document.getElementById("SnowgraveEnemyOne").src="Snowgrave.png"
        }
        if(AllyOneAttackTarget == "EnemyOne") {
            AllyOneAttackType = "AttackEnemyTwo"
            EnemyTwoHealth -= AllyOneAttackValue
            document.getElementById("SnowgraveEnemyOne").src="Snowgrave.png"
        }
    };
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
    console.log("AllyOneAttacked, used " + AllyOneAttackUsed)
    document.getElementById("AllyOneAttackOne").disabled = false;
    document.getElementById("AllyOneAttackTwo").disabled = false;
    document.getElementById("AllyOneAttackThree").disabled = false;
    document.getElementById("TargetEnemyTwoAllyOne").disabled = false;
    document.getElementById("TargetEnemyOneAllyOne").disabled = false;
    console.log("AllyOneAttackValue: " + AllyOneAttackValue)
    console.log("AllyOneAttackTarget = " + AllyOneAttackTarget)
    AllyOneTextUpdater() 
}

function AllyOneTextUpdater() {
    if(AllyOneAttackType == "AttackEnemyOne") {
        document.getElementById("AllyOneAttackLog").innerText = AllyOne + " Used " + AllyOneAttackUsed + ", dealing " + AllyOneAttackValue + " damage to " + EnemyOne

    }
    if(AllyOneAttackType == "AttackEnemyTwo") {
        document.getElementById("AllyOneAttackLog").innerText = AllyOne + " Used " + AllyOneAttackUsed + ", dealing " + AllyOneAttackValue + " damage to " + EnemyTwo
    }
    if(AllyOneAttackType == "AttackBoth") {
        document.getElementById("AllyOneAttackLog").innerText = AllyOne + " Used " + AllyOneAttackUsed + ", dealing " + AllyOneAttackValue + " damage to " + EnemyOne + " and " + EnemyTwo
    }
    if(AllyOneAttackType == "AttackEnemyOneSlow") {
        document.getElementById("AllyOneAttackLog").innerText = AllyOne + " Used " + AllyOneAttackUsed + ", dealing " + AllyOneAttackValue + " damage to " + EnemyOne + " and slowing down both enemies for 20 seconds"
    }
    if(AllyOneAttackType == "AttackEnemyTwoSlow") {
        document.getElementById("AllyOneAttackLog").innerText = AllyOne + " Used " + AllyOneAttackUsed + ", dealing " + AllyOneAttackValue + " damage to " + EnemyTwo + " and slowing down both enemies for 20 seconds"
    }
    if(AllyOneAttackType == "HealEnemyOne") {
        document.getElementById("AllyOneAttackLog").innerText = AllyOne + " Used " + AllyOneAttackUsed + ", healing " + AllyOneAttackValue + " health for " + EnemyOne
    }
    if(AllyOneAttackType == "HealEnemyTwo") {
        document.getElementById("AllyOneAttackLog").innerText = AllyOne + " Used " + AllyOneAttackUsed + ", healing " + AllyOneAttackValue + " health for " + EnemyTwo
    }
    if(AllyOneAttackType == "AttackEnemyOneRot") {
        document.getElementById("AllyOneAttackLog").innerText = AllyOne + " Used " + AllyOneAttackUsed + ", dealing " + AllyOneAttackValue + " damage to " + EnemyOne + "and poisoning itself!"
    }
    if(AllyOneAttackType == "AttackEnemyTwoRot") {
        document.getElementById("AllyOneAttackLog").innerText = AllyOne + " Used " + AllyOneAttackUsed + ", dealing " + AllyOneAttackValue + " damage to " + EnemyTwo + "and poisoning itself!"
    }
    if(AllyOneAttackType == "SelfAttackBoost") {
        document.getElementById("AllyOneAttackLog").innerText = AllyOne + " Used " + AllyOneAttackUsed + "increasing it's attack for 20 seconds!"
    }
    if(AllyOneAttackType == "AttackBothHealSelf") {
        document.getElementById("AllyOneAttackLog").innerText = AllyOne + " Used " + AllyOneAttackUsed + ", dealing " + AllyOneAttackValue + " damage to " + EnemyOne + " and " + EnemyTwo + ", and healed itself for " + AllyOneHealValue
    }
    if(AllyOneAttackType == "HealAllies") {
        document.getElementById("AllyOneAttackLog").innerText = AllyOne + " Used " + AllyOneAttackUsed + ", healing " + AllyOneAttackValue + " health for " + AllyOne + " and " + AllyTwo
    }
}