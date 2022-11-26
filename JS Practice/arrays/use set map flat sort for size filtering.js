let array = [
    {
        name: "malcom", 
        dogType: "four-legged",
        sizes: ["7", "8", "9", "12", "13"]
    },
    {
        name: "peabody", 
        dogType: "three-legged",
        sizes: ["15", "8", "9"],
    },
    {
        name: "pablo", 
        dogType: "two-legged",
        sizes: ["5", "8", "10", "12"],
    }
];

let final = []

let result = [...new Set(array.map(item => item.sizes).flat())];

final.push(...result)

console.log(final.sort(function(a,b) {
    return a-b
}));

console.log(final.sort((a,b) => a-b))