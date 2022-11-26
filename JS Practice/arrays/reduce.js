let person = ["a", "b", "c", "e", "d", "b"]

let result = person.reduce((acc, currPerson) => {
    return {...acc, [currPerson]: (acc[currPerson] || 0) + 1}
}, {})

console.log(result); 


const arrayOne = [
    {
        id: 1,
        title: "this is title 1",
        person: ['david', 'hater', 'danielle', 'djenue']
    },
    {
        id: 2,
        title: "this is title 2",
        person: ['mayar', 'daniel', 'domino']
    },
    {
        id: 3,
        title: "this is title 3",
        person: ['david', 'daniel', 'cris', 'hature']
    }
]

// let result = arrayOne.reduce((acc, elem) => acc.concat(elem.person), [])
/*let result  = arrayOne.reduce((acc, elem) => [
    ...acc, ...elem.person
], [])


console.log([...new Set(result)]);*/



