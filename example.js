// constructor typescript
// obj = new NuCo()

const code = "233.555,,";

// [233.555, 0, 0]
const codeDecoded = code.split(",").map(e=> !!e? parseFloat(e,0) : 0);

let ob = { sugar: null, fat: null, protein: null };

// ["sugar", "fat", "protein"]
const objKeys = Object.getKeys(ob);

// { sugar: 233.555, fat: 0, protein: 0}
objKeys.forEach((key, index) => ob[key] = codeDecoded[index])


// 2,30,5,,,,,,,,,,,,,,,,,,
// -> 2,30,5c17
// find c17 and replace with ,,,,,,,,,,,,,,,,,
