// //1 Gaming

inventory = {
    'gold': 500,
    'pouch': ['flint', 'twine', 'gemstone'],
    'backpack': ['xylophone', 'danger', 'bedroll', 'bread loaf']
};

// thêm pocket
inventory["pocket"] = ["seashell", "strange berry", "lint"];
// console.log(inventory);

//delete danger
delete inventory['backpack'][1];
// console.log(inventory);
 
//add 50 gold;
inventory["gold"] += 50;
// console.log(inventory);

//delete all infomation about pouch.
inventory['pouch'] = []
console.log(inventory);

//2 Get Sum of People's Budget

function getBudgets(arr) {
  var sum = 0;
  for (var i of arr) {
    // console.log(i.budget);
    sum += i.budget;
  }
  return sum;
    
}
console.log(getBudgets([
  { name: "John",  age: 21, budget: 29000 },
  { name: "Steve",  age: 32, budget: 32000 },
  { name: "Martin",  age: 16, budget: 1600 }
])
);


// 3. International Greetings

const GUEST_LIST = {
  Randy: "Germany",
  Karla: "France",
  Wendy: "Japan",
  Norman: "England",
  Sam: "Argentina"
}

function greeting(name) {
    return GUEST_LIST[name] ? console.log(`Hi! I'm ${name}, and I'm from ${GUEST_LIST[name]}.`) : console.log("hi i am a guest")
}
greeting("Karla");

// console.log(`Hi! I'm ${name}, and I'm from ${GUEST_LIST[name]}.`);

// 4. Return the Objects Keys and Values
function keysAndValues(obj) {
    var Arr = []; 
    var ArrA = [];
    var ArrB=[];
    for (var i in obj) {
        ArrA.push(i)
        ArrB.push(obj[i]);
    }
    Arr.push(ArrA,ArrB)
    return Arr;
}
console.log(keysAndValues({ key1: true, key2: false, key3: undefined }))


//5 Printer Levels
function inkLevels(obj) {
  var newArr = [];
  // var min = 1;
  // var n = newArr.length;
  for (var i in obj) {
    newArr.push(obj[i]);
  };
  return Math.min(...newArr);
}

console.log(inkLevels({
  "cyan": 432,
  "magenta": 543,
  "yellow": 777
}))


