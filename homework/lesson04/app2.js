// // Tạo message
// let message = `
// 0. Đọc tất cả người (0 or a)     ////
// 1. Thêm người (c or 1)            ///
// 2. Đọc thông tin (r or 2)   
// 3. Update thông tin (u or 3)            //////////////////////////////////
// 4. Delete người (d or 4)             ////
// 5. Thoát (e or 5)
// `;

// // Cho người dùng chọn chức năng
// let input = prompt(message);

// while (true) {
//     // Kiem tra xem co thuoc chuc nang Đọc tất cả người hay không?
//     if (input == "a" || input == 0) {
//         // đọc tất cả người trong danh sách peoples bằng hàn readPeoples
//         alert(readPeoples(peoples));
//         // Gọi lại form nhập input
//         input = prompt(message);
//     }
//     // Kiem tra xem co thuoc chuc nang thêm người hay không?
//     else if (input == "c" || input == 1) {
//         // Nhập tên người mới
//         let user = prompt("Tên");
//         // Thêm người mới vào danh sách peoples
//         peoples.push(user);

//         // Gọi lại form nhập input
//         input = prompt(message);
//     }
//     // Kiem tra xem co thuoc chuc nang Đọc người hay không?
//     else if (input == "r" || input == 2) {
//         // Nhập tên người cần đọc
//         let user = prompt("Tên người cần đọc");

//         // Tìm xem ngừoi đó có trong danh sách hay không?
//         // indexOf trả về một số khác -1 nếu như tìm thấy người đó trong danh sách
//         // và trả về -1 nếu không có trong danh sách
//         let userIndex = peoples.indexOf(user);
//         if (userIndex !== -1) {
//             // Nếu có tồn tại thì biến isUser sẽ khác -1 và mình in người đó ra dựa vào vị trí index
//             alert(`Tên: ${peoples[userIndex]}`);
//         } else {
//             // Nếu không tồn tại người đó thì in ra
//             alert("Không tìm thấy người này");
//         }
//         // Gọi lại form nhập input
//         input = prompt(message);
//     }
//     // Kiem tra xem co thuoc chuc nang Update người hay không?
//     else if (input == "u" || input == 3) {
//         // Nhập tên người cần update
//         let user = prompt("Tên người cần update");
//         // Nhập tên mới để update
//         let newName = prompt("Tên mới");

//         // Tìm vị trí người đó trong danh sách ? ĐỌc thêm về indexOf
//         let userIndex = peoples.indexOf(user);

//         if (userIndex !== -1) {
//             // Update lại bằng tên mới
//             peoples[userIndex] = newName;
//         } else {
//             alert("Không có người này trong danh sách");
//         }
//         // Gọi lại form nhập input
//         input = prompt(message);
//     } else if (input == "d" ||input == 4) {
//         // Nhập tên người cần update
//         let user = prompt("Tên người cần delete");
//         // Tìm vị trí người đó trong danh sách ? ĐỌc thêm về indexOf

//         let userIndex = peoples.indexOf(user);
//         // Dùng splice để xoá phần tử trong mảng. Đọc thêm về splice method
//         peoples.splice(userIndex, 1);

//         // Hiển thị những người còn lại trong danh sách sau khi xoá
//         alert(readPeoples(peoples));
//         // Gọi lại form nhập input

//         input = prompt(message);
//         break;
//     } else if (input == "e" || input == 5) {
//         alert("Thoát");

//         // break để thoát vòng lặp while
//         break;
//     } else {
//         alert("Khong co chuc nang nay");
//         // Gọi lại form nhập input
//         input = prompt(message)
//     }
// }

// function readPeoples(peoples) {
//       let print = "Our people :"
//     for (var i = 0; i < peoples.length; i++) {
//         print += `${peoples[i]}, `;
//     }
//     return print;
// }
// else if (input.toLocaleUpperCase() === "U") {
//         // vị trí cần updaterr
//         let Updateposition = prompt("Enter Update position? ");
//         //tên muốn update 
//         let NewItem = prompt('New item?');
//         let indexUpdate = clothes[Updateposition];
//         if (indexUpdate !== -1) {
//             console.log(indexUpdate = NewItem);
//         } else {
//             console.log('ko co trong danh sach')
//         }
//         // console.log(indexUpdate);
//         input = prompt(message);
   
//    }