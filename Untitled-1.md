
UP NEXT: Ensure the ally labels work


What to do: 
Polish Game over
Make it so healing cannot heal dead enemies, easy to do by setting max to like 0 or smth smth smth
Add a way to choose a fast & slow mode, maybe defaulting to slow mode? this game feels fast and hard to process, maybe am jyust tired
Tutorial Page
Balanceeee

Stretch Goals: 
Add a small campaign/challenge mode.


TEMP REMOVED FROM TURNCALLER:

setTimeout(EnemyOneAttackMeterUpdate, 1000)
    setTimeout(AllyOneAttackMeterUpdate, 1000)
 setTimeout(AllyTwoAttackMeterUpdate, 1000)
    setTimeout(EnemyTwoAttackMeterUpdate, 1000)










Character Checklist:
    AngelCat as Ally One: FUNCTIONAL 
    AngelCat as Ally Two: FUNCTIONAL
    Clock as Ally One: FUNCTIONAL
    Clock as Ally Two: FUNCTIONAL
    SlugCat as Ally One: FUNCTIONAL
    SlugCat as Ally Two: FUNCTIONAL
    Square as Ally One: FUNCTIONAL
    Square as Ally Two: FUNCTIONAL
    Boat as Ally One: FUNCTIONAL
    Boat as Ally Two: FUNCTIONAL 
    Flibbit as Ally One: FUNCTIONAL
    Flibbit as Ally Two: FUNCTIONAL
    DevilCat as Enemy One: FUNCTIONAL
    DevilCat as Enemy Two: FUNCTIONAL
    Car as Enemy One: FUNCTIONAL
    Car as Enemy Two: FUNCTIONAL
    Origami as Enemy One: FUNCTIONAL
    Origami as Enemy Two: FUNCTIONAL
    DNA as Enemy One: FUNCTIONAL (TEST AGAIN SOON)
    DNA as Enemy Two: FUNCTIONAL (TEST AGAIN SOON)
    HandMan as Enemy One: FUNCTIONAL
    HandMan as Enemy Two: FUNCTIONAL
    Blob as Enemy One: FUNCTIONAL
    Blob as Enemy Two: FUNCTIONAL

This commit check:
Fixed a bug where handman wouldnt retarget if one ally was dead
fixed up the grab text
Dead characters should be unable to heal