let clothes = ['T-Shirt', 'Sweater','Pants'];
let message = `Welcome to our shop, what do you want (C, R, U, D, E)?`
let input = prompt(message);

while (true) {
    if (input.toLocaleUpperCase() === "R") {
        let print = printClothes(clothes);
        console.log(print);
        // gọi lại cho người dùng nhập
         input=prompt(message);
    } else if (input.toLocaleUpperCase() === "C") {
        let Cinput = prompt(`Enter new item:`);
        clothes.push(Cinput);
        console.log(printClothes(clothes));
        // gọi lại cho người dùng nhập
        input = prompt(message);
    }else if (input.toLocaleUpperCase() === "U") {
        let Updateposition = Number(prompt("Enter Update position? "));
        let NewItem = prompt('New item?');
        let value = clothes[Updateposition];
        if (value !== undefined) {
              clothes.splice(Updateposition-1, 1, `${NewItem}`);
        console.log(printClothes(clothes));
        } else {
            console.log('nothing')
        }
      
        // gọi lại cho người dùng nhập
        input = prompt(message);
    } else if (input.toLocaleUpperCase() === "D") {
        let deleteIndex = Number(prompt("Delete position?"));
        clothes.splice(deleteIndex-1, 1);
        console.log(printClothes(clothes));
        // gọi lại cho người dùng nhập
        input = prompt(message);
    } else if (input.toLocaleUpperCase() === 'E') {
        alert('Exit'); // sau khi nhấn e sẽ exit; nếu muốn thực hiện các chức năng kia thì reload trang lại
         break; // kết thúc vòng while
    }
    else {
        console.log('ko co ki tu muon nhap vao');
         input = prompt(message);
        break;
    }
}
    

//hàm in ra array clothes

function printClothes(clothes) {
    let print = "Our items :"
    for (var i = 0; i < clothes.length; i++) {
        print += `${clothes[i]}, `;
    }
    return print;
};