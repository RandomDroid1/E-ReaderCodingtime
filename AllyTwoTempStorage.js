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

function ClampTwo() {
    AllyAttackNumber += 1
    if (AllyTwoAttackTarget == "EnemyOne") {
        AllyTwoAttackType = "AttackEnemyOne"
        AllyTwoAttackValue =  Math.floor((EnemyOneHealth.value / 5)) // 20%, not 15.
        EnemyOneHealth.value -= AllyTwoAttackValue
    }
    if (AllyTwoAttackTarget == "EnemyTwo") {
        AllyTwoAttackType = "AttackEnemyTwo"
        AllyTwoAttackValue =  Math.floor((EnemyTwoHealth.value / 5))
        EnemyTwoHealth.value -= AllyTwoAttackValue
    }
}

function ChompTwo() {
    AllyAttackNumber += 1
    if (AllyTwoAttackTarget == "EnemyOne") {
        AllyTwoAttackType = "AttackEnemyOne"
        AllyTwoAttackValue =  Math.floor((EnemyOneHealth.max / 10))
        EnemyOneHealth.value -= AllyTwoAttackValue
    }
    if (AllyTwoAttackTarget == "EnemyTwo") {
        AllyTwoAttackType = "AttackEnemyTwo"
        AllyTwoAttackValue = Math.floor((EnemyTwoHealth.value / 10))
        EnemyTwoHealth.value -= AllyTwoAttackValue
    }
}


function ChewTwo() {
    AllyAttackNumber += 1
    if (AllyTwoAttackTarget == "EnemyOne") {
        AllyTwoAttackType = "AttackEnemyOne"
        AllyTwoAttackValue =  Math.floor((AllyTwoHealth.value / 5))
        EnemyOneHealth.value -= AllyTwoAttackValue
    }
    if (AllyTwoAttackTarget == "EnemyTwo") {
        AllyTwoAttackType = "AttackEnemyTwo"
        AllyTwoAttackValue =  Math.floor((AllyTwoHealth.value / 5))
        EnemyTwoHealth.value -= AllyTwoAttackValue
    }
}

function SquareAttackTwo() { // cant do any moves that have lasting effects becasue I dont want to deal with it mannn
    AllyAttackNumber += 1
    AllyTwoAttackValue = Math.floor(Math.random() * (16-1)+1)
    if (AllyTwoAttackValue == 1) {// Heavenly Strike
        HeavenlyStrikeTwo()
    }
    else if (AllyOneAttackValue == 2) { // 
        JudgementTwo()
    }
    else if (AllyOneAttackValue == 3) { // 
        HealingPrayerTwo()
    }
    else if (AllyOneAttackValue == 4) { // 
        BadTimeTwo()
    }
    else if (AllyOneAttackValue == 5) { // 
        HourTwo()
    }
    else if (AllyOneAttackValue == 6) { // 
        RewindTwo()
    }
    else if (AllyOneAttackValue == 7) { // 
        SpearTwo()
    }
    else if (AllyOneAttackValue == 8) { // 
        BoatAttackTwo()
    }
    else if (AllyOneAttackValue == 9) { // 
        FishTwo()
    }
    else if (AllyOneAttackValue == 10) { // 
        HookTwo()
    }
    else if (AllyOneAttackValue == 11) { // 
        ClampTwo()
    }
    else if (AllyOneAttackValue == 12) { // 
        ChompTwo()
    }
    else if (AllyTwoAttackValue == 13) { //
        AllyTwoAttackType = "AttackBoth" 
        AllyTwoAttackValue = 10
        EnemyOneHealth.value -= AllyTwoAttackValue
        EnemyTwoAttack.value -= AllyTwoAttackValue
    }
    else if (AllyTwoAttackValue == 14) { // 
        AllyTwoAttackType = "AttackBoth"
        AllyTwoAttackValue = 100
        EnemyOneHealth.value -= AllyTwoAttackValue
        EnemyTwoAttack.value -= AllyTwoAttackValue
    }
    else if (AllyTwoAttackValue == 15) { //  SNOWGRAVE BABYYY
        AllyTwoAttackValue = 99999999999999
        if(AllyTwoAttackTarget == "EnemyOne") {
            AllyTwoAttackType = "AttackEnemyOne"
            EnemyOneHealth -= AllyTwoAttackValue
            document.getElementById("SnowgraveEnemyOne").src="Snowgrave.png"
        }
        if(AllyTwoAttackTarget == "EnemyOne") {
            AllyTwoAttackType = "AttackEnemyTwo"
            EnemyTwoHealth -= AllyTwoAttackValue
            document.getElementById("SnowgraveEnemyOne").src="Snowgrave.png"
        }
    };
}
// RESUME HERE RESUME HERE RESUME HERE RESUME HERE RESUME HERE RESUME HERE RESUME HERE RESUME HERE RESUME HERE RESUME HERE RESUME HERE RESUME HERE RESUME HERE RESUME HERE
function AllyTwoMoveEnacter() {
        if(AllyTwo == "AngelCat") {
            if(AllyTwoAttackSelected == "One") {
                HeavenlyStrikeTwo()
                AllyTwoAttackUsed = "Heavenly Strike"
            }
            if(AllyTwoAttackSelected == "Two") {
                JudgementTwo()
                AllyTwoAttackUsed = "Judgement"
            }
            if(AllyTwoAttackSelected == "Three") {
                HealingPrayerTwo()
                AllyTwoAttackUsed = "Healing Prayer"
            }
        }
        if(AllyTwo == "Clock") {
            if(AllyTwoAttackSelected == "One") {
                BadTimeTwo()
                AllyTwoAttackUsed = "Bad Time"
            }
            if(AllyTwoAttackSelected == "Two") {
                HourTwo()
                AllyTwoAttackUsed = "Hour"
            }
            if(AllyTwoAttackSelected == "Three") {
                RewindTwo()
                AllyTwoAttackUsed = "Rewind"
            }
        }
        if(AllyTwo == "Slugcat") {
            if(AllyTwoAttackSelected == "One") {
                SpearTwo()
                AllyTwoAttackUsed = "Spear"
            }
            if(AllyTwoAttackSelected == "Two") {
                TheMarkTwo()
                AllyTwoAttackUsed = "The Mark"
            }
            if(AllyTwoAttackSelected == "Three") {
                TheRotTwo()
                AllyTwoAttackUsed = "The Rot"
            }
        }
        if(AllyTwo == "Square") {
            if(AllyTwoAttackSelected == "One") {
                SquareAttackTwo()
                AllyTwoAttackUsed = "Square"
            }
            if(AllyTwoAttackSelected == "Two") {
                SquareAttackTwo()
                AllyTwoAttackUsed = "Square"
            }
            if(AllyTwoAttackSelected == "Three") {
                SquareAttackTwo()
                AllyTwoAttackUsed = "Square"
            }
        }
        if(AllyTwo == "Boat") {
            if(AllyTwoAttackSelected == "One") {
                BoatAttackTwo()
                AllyTwoAttackUsed = "Boat"
            }
            if(AllyTwoAttackSelected == "Two") {
                FishTwo()
                AllyTwoAttackUsed = "Fish"
            }
            if(AllyTwoAttackSelected == "Three") {
                HookTwo()
                AllyTwoAttackUsed = "Hook"
            }
        }
        if(AllyTwo == "Flibbit") {
            if(AllyTwoAttackSelected == "One") {
                ClampTwo()
                AllyTwoAttackUsed = "Clamp"
            }
            if(AllyTwoAttackSelected == "Two") {
                ChompTwo()
                AllyTwoAttackUsed = "Chomp"
            }
            if(AllyTwoAttackSelected == "Three") {
                ChewTwo()
                AllyTwoAttackUsed = "Chew"
            }
    }
    console.log("AllyTwoAttacked, used " + AllyTwoAttackUsed)
    document.getElementById("AllyTwoAttackOne").disabled = false;
    document.getElementById("AllyTwoAttackTwo").disabled = false;
    document.getElementById("AllyTwoAttackThree").disabled = false;
    document.getElementById("TargetEnemyTwoAllyTwo").disabled = false;
    document.getElementById("TargetEnemyOneAllyTwo").disabled = false;
    console.log("AllyTwoAttackValue: " + AllyTwoAttackValue)
    console.log("AllyTwoAttackTarget = " + AllyTwoAttackTarget)
    AllyTwoTextUpdater() 
}

function AllyTwoTextUpdater() {
    if(AllyTwoAttackType == "AttackEnemyOne") {
        document.getElementById("AllyTwoAttackLog").innerText = AllyTwo + " Used " + AllyTwoAttackUsed + ", dealing " + AllyTwoAttackValue + " damage to " + EnemyOne

    }
    if(AllyTwoAttackType == "AttackEnemyTwo") {
        document.getElementById("AllyTwoAttackLog").innerText = AllyTwo + " Used " + AllyTwoAttackUsed + ", dealing " + AllyTwoAttackValue + " damage to " + EnemyTwo
    }
    if(AllyTwoAttackType == "AttackBoth") {
        document.getElementById("AllyTwoAttackLog").innerText = AllyTwo + " Used " + AllyTwoAttackUsed + ", dealing " + AllyTwoAttackValue + " damage to " + EnemyOne + " and " + EnemyTwo
    }
    if(AllyTwoAttackType == "AttackEnemyOneSlow") {
        document.getElementById("AllyTwoAttackLog").innerText = AllyTwo + " Used " + AllyTwoAttackUsed + ", dealing " + AllyTwoAttackValue + " damage to " + EnemyOne + " and slowing down both enemies for 20 seconds"
    }
    if(AllyTwoAttackType == "AttackEnemyTwoSlow") {
        document.getElementById("AllyTwoAttackLog").innerText = AllyTwo + " Used " + AllyTwoAttackUsed + ", dealing " + AllyTwoAttackValue + " damage to " + EnemyTwo + " and slowing down both enemies for 20 seconds"
    }
    if(AllyTwoAttackType == "HealEnemyOne") {
        document.getElementById("AllyTwoAttackLog").innerText = AllyTwo + " Used " + AllyTwoAttackUsed + ", healing " + AllyTwoAttackValue + " health for " + EnemyOne
    }
    if(AllyTwoAttackType == "HealEnemyTwo") {
        document.getElementById("AllyTwoAttackLog").innerText = AllyTwo + " Used " + AllyTwoAttackUsed + ", healing " + AllyTwoAttackValue + " health for " + EnemyTwo
    }
    if(AllyTwoAttackType == "AttackEnemyOneRot") {
        document.getElementById("AllyTwoAttackLog").innerText = AllyTwo + " Used " + AllyTwoAttackUsed + ", dealing " + AllyTwoAttackValue + " damage to " + EnemyOne + "and poisoning itself!"
    }
    if(AllyTwoAttackType == "AttackEnemyTwoRot") {
        document.getElementById("AllyTwoAttackLog").innerText = AllyTwo + " Used " + AllyTwoAttackUsed + ", dealing " + AllyTwoAttackValue + " damage to " + EnemyTwo + "and poisoning itself!"
    }
    if(AllyTwoAttackType == "SelfAttackBoost") {
        document.getElementById("AllyTwoAttackLog").innerText = AllyTwo + " Used " + AllyTwoAttackUsed + "increasing it's attack for 20 seconds!"
    }
    if(AllyTwoAttackType == "AttackBothHealSelf") {
        document.getElementById("AllyTwoAttackLog").innerText = AllyTwo + " Used " + AllyTwoAttackUsed + ", dealing " + AllyTwoAttackValue + " damage to " + EnemyOne + " and " + EnemyTwo + ", and healed itself for " + AllyTwoHealValue
    }
    if(AllyTwoAttackType == "HealAllies") {
        document.getElementById("AllyTwoAttackLog").innerText = AllyTwo + " Used " + AllyTwoAttackUsed + ", healing " + AllyTwoAttackValue + " health for " + AllyOne + " and " + AllyTwo
    }
}