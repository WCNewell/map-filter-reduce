const spells = require('./spells').spells


// MAP

// Clean up the data so it's more readable
// Let's map through the array, and pull out each spell's name, desc, and duration

// CODE TOGETHER HERE

// function simpleSpells(spells) {
//     let cleanSpells = spells.map((spell) => {
//         let cleanSpell = {
//             name: spell.name,
//             description: spell.disc[0],
//             duration: spell.duration
//         }
//         return cleanSpell
//     })
//     return cleanSpells
// }

// console.log(simpleSpells(spells));

// Write a function called cleanSpells
// Takes an array of spells as an input
// Returns a new array of spells that only includes:
// Spell name
// Spell material
// Name of the first class that can use the spell

// function cleanSpells(spells) {
//     let newSpells = spells.map((spell) => {
//         let newSpell = {
//             Name: spell.name,
//             Material: spell.material,
//             Class: spell.classes[0].name
//         }
//         return newSpell
//     })
//     return newSpells
// }

// console.log(cleanSpells(spells));

// FILTER

// Write a function called filterSpellsLevel that returns a new array of spells
// Spell's level is no higher than 1
// Keep spells that are level 1 or below
// Remove spells that are level 2 or above

// function filterSpellsLevel(spells) {
//     let lowSpells = spells.filter((spell) => {
//         if (...)
//             return spell.level < 2;
//     });
//     return lowSpells;
// }

// console.log(filterSpellsLevel(spells))
//^^not totally finished

// REDUCE

// Write a function called reduceSpellNames that returns an array of the spells' names
// Function takes an array of spell objects as an input
// Function returns an array of spell names as an output

// const numberArray = [1, 2, 3, 4, 5]

// function sumArrayNums(array) {
//     let sum = array.reduce((accumulator, currentValue) => {

//         return accumulator + currentValue

//     }, 0)

//     return sum
// }

// console.log(sumArrayNums(numberArray))

function reduceSpellNames(spells) {
    let name = spells.reduce((spellArray, spell) => {
        return spellArray.push(spell.name)
    }, [])
}

console.log(reduceSpellNames(spells))