let arr = [1, 2, 3]
let newArr = []

for(let i = 0; i < 2; i++) {
  for(let a = 0; a < arr.length; a++) {
    newArr.push(arr[a])
  }
}
// console.log(newArr);



let arr2 = [2, 4, 5, 3]

let sum = 0;
for(let a = 0; a < arr2.length; a++) {
  sum = sum + arr2[a]
}
// console.log(sum);


/* const sum = 0;
arr2.map((el) => {
  let res = sum += el
  console.log(res);
  return res;
}) */




let people = ["Greg", "Mary", "Devon", "James"];

/* for(let a = 0; a < people.length; a++) {
  console.log(a + ":" + people[a]);
  if(people[a] == "Devon") return
} */











// return true or false when each element is even or odd
let arr3 = ['a', 'b', 'c', 'a', 'b', 'c', 'h', 'h', 'a', 'a', 'g']

let obj = {}

function main(arr3) {
    for(let i = 0; i < arr3.length; i++) {
        if(obj.hasOwnProperty(arr3[i])) {
            obj[arr3[i]] = obj[arr3[i]] + 1
        } else {
            obj[arr3[i]] = 1
        }
    }

    let temp;
    for(let el in obj) {
        if(obj[el] % 2 === 0) {
            temp = true
        } else {
            return false
        }
    }
    return temp 
}

console.log(main(arr3));






