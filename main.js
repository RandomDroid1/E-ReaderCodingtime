var AllyOneAttackNumber = 0;
var EnemyOneAttackNumber = 0;
var AllyTwoAttackNumber = 0;
var EnemyTwoAttackNumber = 0;
var EnemyOneAttack = "none";
var SimpleAttackSelected = false;
var SimpleHealSelected = false;
var GameIsOver = false;
var CharacterSelected = "none";
var FactionSelected = "none";
var AllyOneSelected = false;
var EnemyOneSelected = false;
var AllyTwoSelected = false;
var EnemyTwoSelected = false;
var EnemyOneSelfDamage = 0;
var EnemyTwoSelfDamage = 0;
var FoldCounter = 0;
var EnemyOneAttackNumberText = document.getElementById("EnemyAttackLog");
var AllyOneDefense = 0;
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
        var AllyOneAttackMeter = document.getElementById("AllyOneAttackMeter");
        var EnemyOneAttackMeterHTML = document.getElementById("EnemyOneAttackMeterHTML")
        var EnemyTwoHealth = document.getElementById("EnemyTwoHealth")
        var AllyTwoHealth = document.getElementById("AllyTwoHealth")
        var AllyTwoAttackMeter = document.getElementById("AllyTwoAttackMeter");
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
    if (AllyOneHealth.value > 0 && EnemyOneHealth.value  > 0) {
        console.log("Both Alive")
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

function AllyOneAttackMeterTiming() {
    VariableUpdater()
    if (EnemyHealth.value <= 0 || AllyHealth.value <= 0) {

    } else { 
    setTimeout(AllyOneAttackMeterUpdate, 1000);
    setTimeout(AllyOneAttackMeterUpdate, 2000);
    setTimeout(AllyOneAttackMeterUpdate, 3000);
    setTimeout(AllyOneAttackMeterAct, 4000);}
}

function AllyOneAttackMeterUpdate() {
    VariableUpdater()
    AllyOneAttackMeter.value -= 25
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
// ###################################### //
// ###################################### //
// ####### UNIVERSAL TURN HANDLER ####### //
// ###################################### //
// ###################################### //

function TurnCaller() {
    setTimeout(EnemyOneAttackMeterUpdate, 1000)
    setTimeout(EnemyTwoAttackMeterUpdate, 1000)
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
        console.log(AllyOneHealth.value)
        console.log(EnemyOneAttackValue)
        if (EnemyOneAttackTarget == "AllyOne") {
            AllyOneHealth.value -= (EnemyOneAttackValue - AllyOneDefense)
        }
        if (EnemyOneAttackTarget == "AllyTwo") {
            AllyTwoHealth.value -= (EnemyOneAttackValue - AllyOneDefense)
        }
        if (EnemyOneAttackTarget == "Both") {
            AllyOneHealth.value -= (EnemyOneAttackValue - AllyOneDefense)
            AllyTwoHealth.value -= (EnemyOneAttackValue - AllyOneDefense)
        }

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
        EnemyTwoAttacker()
    }
}
function EnemyTwoAttacker() {
        if (EnemyTwoAttackTarget == "AllyOne") {
            AllyOneHealth.value -= (EnemyOneAttackValue - AllyOneDefense)
        }
        if (EnemyTwoAttackTarget == "AllyTwo") {
            AllyTwoHealth.value -= (EnemyOneAttackValue - AllyOneDefense)
        }
        if (EnemyTwoAttackTarget == "Both") {
            AllyOneHealth.value -= (EnemyOneAttackValue - AllyOneDefense)
            AllyTwoHealth.value -= (EnemyOneAttackValue - AllyOneDefense)
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
            if (EnemyOneHealth.value <= 50 || EnemyOneHealth.value <= 50) { // HEAL BIASED FOR WHEN UNDER HALF (this would trigger when an enemy is dead? bad bad bad) Heal from death? Like fnaf world refreshed??
                
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
            if (EnemyOneHealth.value <= 50 || EnemyOneHealth.value <= 50) { // Under half, 40% chance for reform, 40% chance for glob, 20% chance for randomize
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
        EnemyOneAttackValue = Math.random() * (76 - 50) + 50;
        EnemyOneAttackTarget = Math.random() * (7-1)+1 // Generates a random number 1-6
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

function FireBlastOne() {VariableUpdater()
    EnemyOneAttackNumber += 1;
    EnemyOneAttackValue = Math.floor(Math.random() * (31 - 25) + 25);
    EnemyOneFireAttackValue = Math.floor(Math.random() * (30-10) + 10);
    EnemyOneAttackTarget = "Both"
}

function RamOne() {
    VariableUpdater()
    EnemyOneAttackNumber += 1;
    EnemyOneAttackValue = Math.floor(Math.random() * (101 - 65) + 65);
    EnemyOneAttackTarget = Math.random()* (3-1)+1; // determine if attack hits, 1 = no, 2 = yes
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
    EnemyOneAttackValue = Math.random() * (76 - 50) + 50;
    EnemyOneSelfDamage = Math.random() * (51-1) + 1
}

function PitStopOne() {
    VariableUpdater()
    EnemyOneAttackNumber += 1;
    EnemyOneHealValue = Math.random() * (40-30)
}

function FoldOne() {
    VariableUpdater()
    EnemyOneAttackNumber +=1;
    if (EnemyHealth.value <= 0 || AllyHealth.value <= 0) {

    } else {
        EnemyOneAttackNumber += 1;
        FoldCounter += 1;
        EnemyOneAttackValue = FoldCounter*10
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
}

function PeckOne() {
    VariableUpdater()
    EnemyOneAttackNumber +=1;
    EnemyOneAttackValue = Math.random() * (60-40)+40
    EnemyOneAttackTarget = Math.random()* (3-1)+1 // he cares not for attacking the enemy with the lowest health, he just attacks one
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
    EnemyOneVirusValue = Math.random() * (20-10)+10 // done multiple times
    EnemyOneAttackTarget = Math.random()* (3-1)+1 // he cares not for attacking the enemy with the lowest health, he just attacks one
    if (EnemyOneAttackTarget == 1) {
        EnemyOneVirusTarget = "AllyOne"
    } else {EnemyOneVirusTarget = "AllyTwo"}
}

function ACGTOne() { // PLACEHOLDER
    VariableUpdater()
    EnemyOneAttackNumber +=1;
    EnemyOneAttackValue = Math.random() * (100-1) + 1
    EnemyOneAttackTarget = Math.random()* (3-1)+1 // One, or two
    if (EnemyOneAttackTarget == 1) {
        EnemyOneAttackTarget = "AllyOne"}
        else {EnemyOneAttackTarget = "AllyTwo"}
}

function BindOne() {
    VariableUpdater()
    EnemyOneAttackNumber +=1;
    EnemyOneAttackTarget = Math.random()* (3-1)+1 // One, or two
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
    EnemyOneAttackTarget = Math.random()* (5-1)+1 // Above 1 hits
    if (EnemyOneAttackTarget >= 1) {
        EnemyOneAttackTarget = Math.random()* (3-1)+1 // Chooses 1-2 to decide which player to target
        EnemyOneMoveLock = Math.random() * (4-1)+1 // Chooses 1-3 to decide what move to lock
    }

}

function ReduceOne() {
    VariableUpdater()
    EnemyOneAttackNumber +=1;
    EnemyOneAttackValue = Math.random() * (61-40) + 40
    EnemyOneAttackTarget = Math.random()* (3-1)+1 // One, or two
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
    EnemyOneHealValue = Math.random() * (40-30)
}

function RandomizeOne() {
    EnemyOneAttackNumber +=1;
    EnemyRandomizeSelection = Math.random() * (18-1) + 1  // 1-17
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

// ##################################### //
// ##################################### //
// ####### ENEMY ONE ATTACKMETER ####### //
// ##################################### //
// ##################################### //



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
    document.getElementById("AttackOne").innerText = "4 Corners"
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
    document.getElementById("AttackOne").innerText = "Clamp"
    document.getElementById("AttackOneText").innerText = "Deal 25% of an enemies \n remaining health"
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