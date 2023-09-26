let global = {
    alpha: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
    vows: ["a", "e", "i", "o", "u", "y"],
    cons: ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "z"],
    terrain: ["flat", "coastal", "mountainous", "wooded", "desert"],
    races: ["humans", "elves", "dwarves", "dragonborn", "orcs"],
    govTypes: ["democracy", "authoritarian", "monarchy", "oligarchy", "aristocracy", "autocracy", "anarchy", "confederacy", "fascist", "theocracy", "feudalist"],
    raceNames: [
        {//human names
        },
        {//elf names
            vowels: ["y", "ae", "ai", "ia", "au"],
            cons: ["l", "nn", "nd"],
            patterns: ["VCVCVCV", "CVCVCVC", "CVCVC", "VCVCV"]
        },
        {//dwarf names
            vowels: ["ei", "o"],
            cons: ["ich", "lch", "k", "lf", "sk", "rk", "rr", "ck"],
            patterns: ["CVCVC", "VCVC"]
        },
        {//dragonborn names
            vowels: ["aa", "a", "ua", "uu", "y"],
            cons: ["ara", "dj", "th", "lik", "x", "kl", "eh"],
            patterns: ["CVCVC", "VCVCV"]
        },
        {//orc names
        }
    ],
}
function genWorld(nations, scale) {

}
let Nation = function () {
    this.terrain;//String, The predominant terrain of this nation
    this.races;//String arr, What races live in this nation
    this.populace;//String arr, The proportions of races living in this nation
    this.scale;//int 1-20, How big the nation is (area)
    this.population;//int, How big the nation is (people)
    this.mainRace;
    //this.raisonDetra;//The nations reason for existing

    this.diplomacyLevel;//int 0-4, controls how many other nations it has diplomacy with: chance /5 that it will have diplomacy with any given nation
    //Could also determine how friendly it is with those nations
    this.extPlanLevel;//int 0-4, how much of an extraplanar influence this nation has
    this.religion;//String, name of the predominant religion that this nation has
    this.exports;//String, name of the nations primary export
    this.relations;//int arr, the relation (0-4) that each nation has with each other nation
    this.govType;//String, the government type of the nation
    this.defNat = function (terrain, races, populace, scale, population, diplomacyLevel, extPlanLevel, religion, exports, relations, govType) {
        this.terrain = terrain;
        this.races = races;
        this.populace = populace;
        this.scale = scale;
        this.population = population;
        this.diplomacyLevel = diplomacyLevel;
        this.extPlanLevel = extPlanLevel;
        this.religion = religion;
        this.exports = exports;
        this.relations = relations;
        this.govType = govType;
        this.mainRace = ""

        let bigPop = populace[0]//This kids, is what we call working but probably shitty code
        //Tread carefully, and do as I say, not as I do
        let mainCt = new Map();
        for (let i = 0; i < populace.length; i++) {
            if (!mainCt.get(populace[i])) {
                mainCt.set(populace[i] + "", 1)
            } else {
                mainCt.set(populace[i] + "", mainCt.get(populace[i] + "") + 1)
            }
            if (mainCt.get(bigPop) < mainCt.get(populace[i] + "")) {
                bigPop = populace[i] + ""
            }
        }
        this.mainRace = bigPop;

    }
    this.randNat = function () {
        this.terrain = global.terrain[Math.floor(global.terrain.length * Math.random())]
        this.population = Math.ceil(20 * Math.random())
        this.races = []
        this.populace = []
        if (this.terrain == "mountainous") {
            this.races.push("dwarves")//duh
        }
        if (this.terrain == "wooded") {
            this.races.push("elves")//duh
        }
        if (this.terrain == "coastal") {
            this.races.push("humans")//idk, it makes sense right now (9/21/23, 10:02 PM)
        }
        this.races = this.races.concat(global.races)
        for (let i = 0; i < this.population; i++) {
            let newCit = this.races[Math.floor(this.races.length * Math.random())]
            this.populace.push(newCit)
            this.races.push(newCit)//makes it more likely for the same race to appear again
        }


        let bigPop = this.populace[0]//This kids, is what we call working but probably shitty code
        //Tread carefully, and do as I say, not as I do
        let mainCt = new Map();
        for (let i = 0; i < this.populace.length; i++) {
            if (!mainCt.get(this.populace[i])) {
                mainCt.set(this.populace[i] + "", 1)
            } else {
                mainCt.set(this.populace[i] + "", mainCt.get(this.populace[i] + "") + 1)
            }
            if (mainCt.get(bigPop) <= mainCt.get(this.populace[i] + "")) {
                bigPop = this.populace[i] + ""
            }
        }
        this.mainRace = bigPop;
        /*Explaining the above code to a future lost me
        This creates a Map called mainCt
        It then itereates through the populace list, 
            updating the key for each repeart populace
            and creating a new one for each new populace
        While it does so, if the key of the current biggest pop is less than the current populace,
            The bigPop is set to the current populace
        In the case of a tie, the one that comes latest in the array becomes bigPop
        Savvy?
        */

        this.populace.sort();//dumb but it works




        this.scale = Math.ceil(20 * Math.random())
        this.diplomacyLevel = Math.floor(5 * Math.random())
        this.extPlanLevel = Math.floor(5 * Math.random())
        this.religion = "";//I'll come back to you
        this.relations = [];//I'll come back to you;
        this.govType = global.govTypes.length[Math.floor(global.govTypes.length * Math.random())];

    }
    this.printNat = function () {
        console.log("This nation has " + this.population + " citizens: " + this.populace + ". The predominant race is " + this.mainRace + ". It's primary terrain is " + this.terrain + ".")
    }
}
let nethro = new Nation;
nethro.randNat()
nethro.printNat();
generateName("dwarves")
function generateName(race) {
    let newName = "";
    let raceIndex = global.races.indexOf(race)//Finds where in the race-list the given race can be found
    raceIndex = global.raceNames[raceIndex]//Sets race index to the racename object at that index
    //replace given raceNames below with 'raceIndex'

    let newPat = raceIndex.patterns[Math.floor(raceIndex.patterns.length * Math.random())]
    for (let i = 0; i < newPat.length; i++) {
        if (newPat[i] == "V") {
            if (Math.floor(2 * Math.random()) == 0) {
                newName = newName + raceIndex.vowels[Math.floor(raceIndex.vowels.length * Math.random())]
            } else {
                newName = newName + global.vows[Math.floor(global.vows.length * Math.random())]
            }
        } else {
            if (Math.floor(2 * Math.random()) == 0) {
                newName = newName + raceIndex.cons[Math.floor(raceIndex.cons.length * Math.random())]
            } else {
                newName = newName + global.cons[Math.floor(global.cons.length * Math.random())]
            }
        }
    }
    console.log(race + ": " + newName);
}