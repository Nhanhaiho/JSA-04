// let matrix = [[1, 2, 3, 4], [5, 6, 7, 8]];
// //console.log(matrix);

// for (let i = 0; i < matrix.length; i++) {
//     for (let j = 0; j < matrix[i].length; j++) {
//         console.log(matrix[i][j]);
//     }
// }.


// OBJECT; 
var dog = {
    tails: 1,
    legs: 4,
    bark: 'yes',
    avatar: ''
};
// for (var i in dog) {
//     console.log(dog[i]);
// }
// };
// dog.avatar = "nhan";
// console.log(dog);
// dog.new = "ko co gi "
// console.log(dog);

const datas =
{
  "page": 2,
  "per_page": 6,
  "total": 12,
  "total_pages": 2,
  "data": [
    {
      "id": 7,
      "email": "michael.lawson@reqres.in",
      "first_name": "Michael",
      "last_name": "Lawson",
      "avatar": "https://reqres.in/img/faces/7-image.jpg"
    },
    {
      "id": 8,
      "email": "lindsay.ferguson@reqres.in",
      "first_name": "Lindsay",
      "last_name": "Ferguson",
      "avatar": "https://reqres.in/img/faces/8-image.jpg"
    },
    {
      "id": 9,
      "email": "tobias.funke@reqres.in",
      "first_name": "Tobias",
      "last_name": "Funke",
      "avatar": "https://reqres.in/img/faces/9-image.jpg"
    },
    {
      "id": 10,
      "email": "byron.fields@reqres.in",
      "first_name": "Byron",
      "last_name": "Fields",
      "avatar": "https://reqres.in/img/faces/10-image.jpg"
    },
    {
      "id": 11,
      "email": "george.edwards@reqres.in",
      "first_name": "George",
      "last_name": "Edwards",
      "avatar": "https://reqres.in/img/faces/11-image.jpg"
    },
    {
      "id": 12,
      "email": "rachel.howell@reqres.in",
      "first_name": "Rachel",
      "last_name": "Howell",
      "avatar": "https://reqres.in/img/faces/12-image.jpg"
    }
  ],
  "support": {
    "url": "https://reqres.in/#support-heading",
    "text": "To keep ReqRes free, contributions towards server costs are appreciated!"
  }
}

// let user = data["data"]
// console.log(user);
// console.log(data["total"]);
// console.log(data["support"]["text"]);

//  let emails = [];
// for (var i = 0; i < datas["data"].length; i++) {
//     let user = datas["data"][i];
//     let email = user["email"]
//     emails.push(email);
// }
// console.log(emails);//// cách lấy email  của datas;


let pokemon = {
    name: "Pikachu",
    stats: {
        hp: 100,
        level: 50,
        attack: 86,
        spattack: 150,
        speed: 5000000000,
        belongTo: "Red"
    },
}
let pikachuSkill = ["Bite", "Thunder Bolt", "Volt Tackle", "Thunderrrr!"];

let fix = pokemon.stats;
fix.speed = 60;
fix.skill = pikachuSkill;
delete fix.belongTo;
console.log(pokemon);
