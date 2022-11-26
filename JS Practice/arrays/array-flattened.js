const arrOfArrs = [
    ['aaron', 'ake', 'anna', 'aje'],
    ['becky', 'ben', 'bright', 'ake'],
    ['cara', 'chris'],
    ['david', 'daniel', 'danielle', 'djenue'],
]
 
const flattened = arrOfArrs.reduce((acc, array) => acc.concat(array))
 
console.log(flattened)
